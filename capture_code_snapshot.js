// capture_code_snapshot.js (v3.3)

import fs from 'fs';
import path from 'path';
import { encode } from 'gpt-tokenizer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = __dirname;
const distilledOutputFile = path.join(projectRoot, 'all_markdown_and_code_snapshot_llm_distilled.txt');

// --- CONFIGURATION ---
const excludeDirNames = new Set([
    'node_modules', '.next', '.git', '.cache', '.turbo', '.vscode', 'dist', 'build', 'coverage', 'out', 'tmp', 'temp', 'logs', '.idea', '.parcel-cache', '.storybook', '.husky', '.pnpm', '.yarn', '.svelte-kit', '.vercel', '.firebase', '.expo', '.expo-shared',
    '__pycache__', '.ipynb_checkpoints', '.tox', '.eggs', 'eggs', '.venv', 'venv', 'env',
    '.svn', '.hg', '.bzr', 'agents/feedback', 'agents/screenshots'
]);

const excludeRelativePaths = [
    '.github'
    // REMOVED: '.env' - This was too broad and was incorrectly excluding .env.example
];

const alwaysExcludeFiles = new Set([
    'all_markdown_and_code_snapshot_llm_distilled.txt',
    '.gitignore',
    '.DS_Store',
    // REMOVED: '.env' - This is now handled by the more specific logic below
    'capture_code_snapshot.js'
]);

const allowedExtensions = ['.md', '.js', '.ts', '.tsx', '.py', '.sql', '.json', '.yaml', '.yml', '.sh', '.jsx', '.css', '.scss', '.html'];
const allowedFilesWithoutExtension = new Set(['LICENSE']);
// --- END CONFIGURATION ---

const fileSeparatorStart = '--- START OF FILE';
const fileSeparatorEnd = '--- END OF FILE';

function distillChronicle(chronicleContent) {
    console.log('[INFO] AI compression logic would run here.');
    const placeholder = `
This content represents an LLM-distilled code summary
(Original Token Count: ~${encode(chronicleContent).length.toLocaleString()})
`;
    return placeholder;
}

function appendFileContent(filePath, basePath, shouldDistill = false) {
    const relativePath = path.relative(basePath, filePath).replace(/\\/g, '/');
    let fileContent = '';
    try {
        fileContent = fs.readFileSync(filePath, 'utf8');
    } catch (readError) {
        fileContent = `[Content not captured due to read error: ${readError.message}.]`;
    }

    let output = `${fileSeparatorStart} ${relativePath} ---\n\n`;
    output += fileContent;
    output += `\n${fileSeparatorEnd} ${relativePath} ---\n\n`;
    return output;
}

console.log(`[INFO] Starting scan from project root: ${projectRoot}`);

try {
    // --- VARIABLE DECLARATIONS  ---
    const fileTreeLines = [];
    let distilledMarkdownContent = '';
    let filesCaptured = 0;
    let itemsSkipped = 0;

    function traverseAndCapture(currentPath) {
        const relativePath = path.relative(projectRoot, currentPath).replace(/\\/g, '/');
        const baseName = path.basename(currentPath);

        if (relativePath) {
            if (fs.statSync(currentPath).isDirectory() && excludeDirNames.has(baseName)) {
                console.log(`[SKIP-DIR] Skipping excluded directory name: '${baseName}' at path: ./${relativePath}`);
                itemsSkipped++;
                return;
            }
            for (const excludedPath of excludeRelativePaths) {
                if (relativePath.startsWith(excludedPath)) {
                    console.log(`[SKIP-PATH] Skipping excluded path: ./${relativePath}`);
                    itemsSkipped++;
                    return;
                }
            }
        }
        
        const stats = fs.statSync(currentPath);
        if (relativePath) {
            fileTreeLines.push(relativePath + (stats.isDirectory() ? '/' : ''));
        }

        if (stats.isDirectory()) {
            const items = fs.readdirSync(currentPath).sort();
            for (const item of items) {
                traverseAndCapture(path.join(currentPath, item));
            }
        } else if (stats.isFile()) {
            // *** NEW LOGIC: Specifically handle .env files ***
            // This mirrors the behavior of the corrected .gitignore file.
            // It ignores any file starting with '.env' unless it is exactly '.env.example'.
            if (baseName.startsWith('.env') && baseName !== '.env.example') {
                itemsSkipped++;
                return;
            }

            if (alwaysExcludeFiles.has(baseName) || (!allowedExtensions.includes(path.extname(baseName).toLowerCase()) && !allowedFilesWithoutExtension.has(baseName))) {
                itemsSkipped++;
                return;
            }
            distilledMarkdownContent += appendFileContent(currentPath, projectRoot, true);
            filesCaptured++;
        }
    }

    traverseAndCapture(projectRoot);
    
    const fileTreeContent = '# Directory Structure (relative to project root)\n' + fileTreeLines.map(line => '  ./' + line).join('\n') + '\n\n';


    // --- FORGE LLM-DISTILLED GENOME ---
    let distilledHeader = `# All Markdown Files Snapshot (LLM-Distilled)\n\nGenerated On: ${new Date().toISOString()}\n\n{TOKEN_COUNT_PLACEHOLDER}\n\n`;
    const distilledFinalContent = distilledHeader + fileTreeContent + distilledMarkdownContent;
    const distilledTokenCount = encode(distilledFinalContent).length;
    const finalDistilledContentWithToken = distilledFinalContent.replace('{TOKEN_COUNT_PLACEHOLDER}', `# Mnemonic Weight (Token Count): ~${distilledTokenCount.toLocaleString()} tokens`);
    fs.writeFileSync(distilledOutputFile, finalDistilledContentWithToken, 'utf8');
    console.log(`[SUCCESS] LLM-Distilled packaged to: ${distilledOutputFile}`);
    console.log(`[METRIC] LLM-Distilled Token Count: ~${distilledTokenCount.toLocaleString()} tokens`);
    
    console.log(`\n[STATS] Markdown Files Captured: ${filesCaptured} | Items Skipped/Excluded: ${itemsSkipped}`);

    // --- RUN HYGIENE INSPECTORS ---
    console.log(`\n[INFO] Running Agent Hygiene Inspectors...`);
    
    // Filter out documentation sections to avoid false positives
    let filteredSnapshot = finalDistilledContentWithToken
        .replace(/```[\s\S]*?```/g, '') // Remove code blocks
        .replace(/# .*?\n[\s\S]*?(?=\n# |\n---|$)/g, '') // Remove markdown sections
        .replace(/<!--[\s\S]*?-->/g, '') // Remove HTML comments
        .replace(/^\s*#.*$/gm, '') // Remove comment lines
        .replace(/\*\*.*?\*\*/g, '') // Remove bold text
        .replace(/\*.*?\*/g, ''); // Remove italic text
    
    runHygieneInspectors(filteredSnapshot);

} catch (err) {
    console.error(`[FATAL] An error occurred during snapshot generation: ${err.message}`);
}

// --- HYGIENE INSPECTION FUNCTIONS ---
function runHygieneInspectors(snapshotContent) {
    const reportPath = path.join(projectRoot, 'docs', 'agent_hygiene_report.md');

    try {
        const allFindings = [];
        const inspectorResults = {};

        // Run each inspector
        inspectorResults.controlFlow = inspectControlFlow(snapshotContent);
        inspectorResults.dataPlane = inspectDataPlane(snapshotContent);
        inspectorResults.privacy = inspectPrivacy(snapshotContent);
        inspectorResults.toolRegistry = inspectToolRegistry(snapshotContent);
        inspectorResults.controlPlane = inspectControlPlane(snapshotContent);

        // Collect all findings
        for (const findings of Object.values(inspectorResults)) {
            allFindings.push(...findings);
        }

        // Generate report
        const report = generateHygieneReport(allFindings, inspectorResults);
        fs.writeFileSync(reportPath, report, 'utf8');
        console.log(`[SUCCESS] Agent Hygiene Report generated: ${reportPath}`);

        // Summary stats
        const errors = allFindings.filter(f => f.severity === 'error').length;
        const warnings = allFindings.filter(f => f.severity === 'warn').length;
        console.log(`[HYGIENE] Total Findings: ${allFindings.length} | Errors: ${errors} | Warnings: ${warnings}`);

    } catch (error) {
        console.error(`[ERROR] Failed to run hygiene inspectors: ${error.message}`);
    }
}

function generateHygieneReport(allFindings, inspectorResults) {
    const timestamp = new Date().toISOString();
    const errors = allFindings.filter(f => f.severity === 'error').length;
    const warnings = allFindings.filter(f => f.severity === 'warn').length;

    let report = `# Agent Hygiene Report
Generated: ${timestamp}

## Findings Overview
- Total Findings: ${allFindings.length}
- Errors: ${errors}
- Warnings: ${warnings}

## Inspectors Run
- controlFlow
- dataPlane
- privacy
- toolRegistry
- controlPlane

## Detailed Findings
`;

    for (const [inspectorName, findings] of Object.entries(inspectorResults)) {
        if (findings.length > 0) {
            report += `\n### ${inspectorName}\n`;
            findings.forEach(finding => {
                report += `- [${finding.severity.toUpperCase()}] ${finding.message}\n`;
            });
        } else {
            report += `\n### ${inspectorName}\n- ✅ No issues found\n`;
        }
    }

    return report;
}

function inspectControlFlow(content) {
    const findings = [];
    // Check for control flow anti-patterns in actual code (not documentation)
    if ((content.includes('while (true)') || content.includes('for (;;)')) &&
        !content.includes('example') && !content.includes('documentation')) {
        findings.push({ severity: 'error', message: 'Infinite loop detected in control flow' });
    }
    return findings;
}

function inspectDataPlane(content) {
    const findings = [];
    // Check for data plane anti-patterns
    if (content.includes('large data') && content.includes('model')) {
        findings.push({ severity: 'warn', message: 'Large data being passed to model' });
    }
    return findings;
}

function inspectPrivacy(content) {
    const findings = [];
    // Check for privacy anti-patterns in actual code (not documentation)
    if ((content.includes('password') || content.includes('secret') || content.includes('token')) &&
        (content.includes('console.log') || content.includes('print') || content.includes('log')) &&
        !content.includes('example') && !content.includes('documentation')) {
        findings.push({ severity: 'error', message: 'Potential privacy violation detected' });
    }
    return findings;
}

function inspectToolRegistry(content) {
    const findings = [];
    // Check for tool registry anti-patterns
    if (content.includes('duplicate tool') || content.includes('tool conflict')) {
        findings.push({ severity: 'warn', message: 'Tool registry issue detected' });
    }
    return findings;
}

function inspectControlPlane(content) {
    const findings = [];

    // Anti-pattern: embedding entire schemas in prompts (look for actual code patterns)
    if (content.match(/\{[\s\S]*?schema[\s\S]*?\}/) &&
        (content.includes("prompt") || content.includes("instruction")) &&
        !content.includes('example') && !content.includes('documentation')) {
        findings.push({
            severity: "error",
            message: "Anti-pattern: Embedding entire schemas in prompts. Schemas should be referenced, not embedded."
        });
    }

    // Anti-pattern: mutation of the LLM's "internal mental model" (look for actual code)
    if (content.match(/mental.*model|internal.*state|llm.*state/i) &&
        content.includes("mutate") &&
        (content.includes("function") || content.includes("class") || content.includes("const")) &&
        !content.includes('example') && !content.includes('documentation')) {
        findings.push({
            severity: "error",
            message: "Anti-pattern: Attempting to mutate LLM's internal mental model. Use external state management."
        });
    }

    // Detect attempts to load tools directly into prompts (look for actual code)
    if (content.match(/load.*tool|tool.*load|embed.*tool/i) &&
        (content.includes("prompt") || content.includes("instruction")) &&
        (content.includes("function") || content.includes("class") || content.includes("const")) &&
        !content.includes('example') && !content.includes('documentation')) {
        findings.push({
            severity: "error",
            message: "Anti-pattern: Loading tools directly into prompts. Use tool registry pattern instead."
        });
    }

    // Enforce structured object returns instead of narrative prose (look for actual code)
    if (content.match(/return.*narrative|return.*story|return.*prose/i) &&
        (content.includes("function") || content.includes("class") || content.includes("const")) &&
        !content.includes('example') && !content.includes('documentation')) {
        findings.push({
            severity: "error",
            message: "Handoff pattern violation: Agents must return structured objects, not narrative prose."
        });
    }

    return findings;
}

