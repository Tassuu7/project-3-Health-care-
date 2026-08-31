#!/usr/bin/env python3
"""
=============================================================================
PulseCare Enterprise Healthcare Platform - Production Metric & LOC Analyzer
=============================================================================
Audits codebase files, calculates production lines of code (LOC), excludes
binary artifacts, dependency caches, and provides comprehensive metrics breakdown.
"""

import os
import sys
import json
import time

SUPPORTED_EXTENSIONS = {
    '.js': 'JavaScript',
    '.mjs': 'JavaScript ES Module',
    '.json': 'JSON Clinical Dataset/Config',
    '.html': 'HTML5 Clinical UI',
    '.css': 'CSS3 Theme & Component Styles',
    '.py': 'Python Analytics & Tooling',
    '.sql': 'SQL Schema & Migration',
    '.md': 'Markdown Technical Documentation',
    '.txt': 'Plain Text / Manifest'
}

EXCLUDED_DIRECTORIES = {
    'node_modules', '.git', '.gemini', 'coverage', '.nyc_output',
    'dist', 'build', '__pycache__', '.pytest_cache', 'scratch', 'tmp'
}

EXCLUDED_FILES = {
    'package-lock.json'  # Standard practice: exclude generated dependency tree from pure LOC
}

def analyze_file(file_path):
    """Counts total, code, blank, and comment lines in a source file."""
    ext = os.path.splitext(file_path)[1].lower()
    if ext not in SUPPORTED_EXTENSIONS:
        return None

    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            lines = f.readlines()
    except Exception as e:
        return None

    total_lines = len(lines)
    blank_lines = 0
    comment_lines = 0
    code_lines = 0

    in_multiline_comment = False

    for line in lines:
        stripped = line.strip()
        if not stripped:
            blank_lines += 1
            continue

        if ext in ['.js', '.mjs', '.css']:
            if in_multiline_comment:
                comment_lines += 1
                if '*/' in stripped:
                    in_multiline_comment = False
                continue
            if stripped.startswith('/*'):
                comment_lines += 1
                if '*/' not in stripped:
                    in_multiline_comment = True
                continue
            if stripped.startswith('//'):
                comment_lines += 1
                continue

        elif ext in ['.py']:
            if in_multiline_comment:
                comment_lines += 1
                if stripped.endswith('"""') or stripped.endswith("'''"):
                    in_multiline_comment = False
                continue
            if stripped.startswith('"""') or stripped.startswith("'''"):
                comment_lines += 1
                if not (stripped.endswith('"""') and len(stripped) > 3) and not (stripped.endswith("'''") and len(stripped) > 3):
                    in_multiline_comment = True
                continue
            if stripped.startswith('#'):
                comment_lines += 1
                continue

        elif ext in ['.html']:
            if in_multiline_comment:
                comment_lines += 1
                if '-->' in stripped:
                    in_multiline_comment = False
                continue
            if stripped.startswith('<!--'):
                comment_lines += 1
                if '-->' not in stripped:
                    in_multiline_comment = True
                continue

        code_lines += 1

    return {
        'total': total_lines,
        'code': code_lines,
        'blank': blank_lines,
        'comments': comment_lines,
        'ext': ext
    }

def run_measurement(base_dir='.'):
    start_time = time.time()
    print("=" * 80)
    print(" PULSECARE ENTERPRISE HEALTHCARE PLATFORM - CODEBASE LOC AUDIT")
    print("=" * 80)
    print(f" Scanning Directory: {os.path.abspath(base_dir)}")
    print(f" Timestamp: {time.strftime('%Y-%m-%d %H:%M:%S')}")
    print("-" * 80)

    category_stats = {}
    lang_stats = {}
    file_list = []

    total_files = 0
    total_total_lines = 0
    total_code_lines = 0
    total_blank_lines = 0
    total_comment_lines = 0

    for root, dirs, files in os.walk(base_dir):
        # Filter excluded dirs
        dirs[:] = [d for d in dirs if d not in EXCLUDED_DIRECTORIES]

        for file in files:
            if file in EXCLUDED_FILES:
                continue

            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, base_dir)

            stats = analyze_file(full_path)
            if not stats:
                continue

            total_files += 1
            total_total_lines += stats['total']
            total_code_lines += stats['code']
            total_blank_lines += stats['blank']
            total_comment_lines += stats['comments']

            ext = stats['ext']
            lang = SUPPORTED_EXTENSIONS.get(ext, 'Other')
            if lang not in lang_stats:
                lang_stats[lang] = {'files': 0, 'total': 0, 'code': 0, 'blank': 0, 'comments': 0}
            lang_stats[lang]['files'] += 1
            lang_stats[lang]['total'] += stats['total']
            lang_stats[lang]['code'] += stats['code']
            lang_stats[lang]['blank'] += stats['blank']
            lang_stats[lang]['comments'] += stats['comments']

            # Categorize component
            parts = rel_path.replace('\\', '/').split('/')
            if parts[0] == 'server':
                if len(parts) > 1:
                    category = f"Backend - {parts[1].capitalize()}"
                else:
                    category = "Backend - Core"
            elif parts[0] == 'public':
                if len(parts) > 1:
                    category = f"Frontend - {parts[1].upper()}"
                else:
                    category = "Frontend - UI Root"
            elif parts[0] == 'tests':
                category = "Test Suites & Specs"
            else:
                category = "Root & Configuration"

            if category not in category_stats:
                category_stats[category] = {'files': 0, 'total': 0, 'code': 0, 'blank': 0, 'comments': 0}
            category_stats[category]['files'] += 1
            category_stats[category]['total'] += stats['total']
            category_stats[category]['code'] += stats['code']
            category_stats[category]['blank'] += stats['blank']
            category_stats[category]['comments'] += stats['comments']

            file_list.append((rel_path, stats))

    # Print Language Breakdown Table
    print(f"{'Language / File Type':<35} | {'Files':>7} | {'Code LOC':>10} | {'Comments':>10} | {'Total Lines':>12}")
    print("-" * 80)
    for lang, s in sorted(lang_stats.items(), key=lambda x: x[1]['total'], reverse=True):
        print(f"{lang:<35} | {s['files']:>7} | {s['code']:>10,d} | {s['comments']:>10,d} | {s['total']:>12,d}")
    print("-" * 80)

    # Print Component Breakdown Table
    print("\n--- COMPONENT ARCHITECTURE BREAKDOWN ---")
    print(f"{'Architecture Subsystem':<35} | {'Files':>7} | {'Code LOC':>10} | {'Comments':>10} | {'Total Lines':>12}")
    print("-" * 80)
    for cat, s in sorted(category_stats.items(), key=lambda x: x[1]['total'], reverse=True):
        print(f"{cat:<35} | {s['files']:>7} | {s['code']:>10,d} | {s['comments']:>10,d} | {s['total']:>12,d}")
    print("-" * 80)

    # Summary Totals
    print("\n" + "=" * 80)
    print(" EXECUTIVE METRIC SUMMARY")
    print("=" * 80)
    print(f" Total Source Files Audited    : {total_files:,d}")
    print(f" Total Production Code LOC     : {total_code_lines:,d}")
    print(f" Total Comment & Doc Lines     : {total_comment_lines:,d}")
    print(f" Total Blank Spacing Lines     : {total_blank_lines:,d}")
    print(f" Total Codebase Lines (All)    : {total_total_lines:,d}")
    print("-" * 80)

    target_loc = 50000
    if total_total_lines >= target_loc:
        print(f" [PASS] Minimum LOC Requirement (>={target_loc:,d}) MET: {total_total_lines:,d} Lines")
    else:
        print(f" [FAIL] Minimum LOC Requirement (>={target_loc:,d}) NOT MET: {total_total_lines:,d} Lines")

    duration = time.time() - start_time
    print(f" Analysis completed in {duration:.3f} seconds.")
    print("=" * 80)

    return {
        'total_files': total_files,
        'code_loc': total_code_lines,
        'comment_lines': total_comment_lines,
        'blank_lines': total_blank_lines,
        'total_lines': total_total_lines,
        'passed': total_total_lines >= target_loc
    }

if __name__ == '__main__':
    target_dir = sys.argv[1] if len(sys.argv) > 1 else '.'
    result = run_measurement(target_dir)
    sys.exit(0 if result['passed'] else 1)
