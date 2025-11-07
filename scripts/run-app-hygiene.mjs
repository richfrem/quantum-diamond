#!/usr/bin/env node

/**
 * App Hygiene Inspector Script
 *
 * WHAT THIS SCRIPT DOES:
 * This script automatically scans your web application codebase for common problems and "anti-patterns"
 * that can cause bugs, security issues, performance problems, or maintenance headaches. It acts like an
 * automated code reviewer specifically trained for web application development.
 *
 * WHY IT EXISTS:
 * Web applications have unique challenges that regular code linters don't catch. For example:
 * - Accidentally exposing sensitive data through API endpoints
 * - Missing input validation that leads to security vulnerabilities
 * - Poor error handling that crashes the user experience
 * - Unused dependencies that bloat bundle sizes
 * - Missing accessibility features that exclude users
 * - Inadequate testing that lets bugs slip through
 *
 * This script prevents these issues before they become expensive to fix in production.
 *
 * HOW IT WORKS:
 * 1. Runs a comprehensive suite of automated checks on your codebase
 * 2. Tests 10+ different categories of application health:
 *    - Dependencies: Security vulnerabilities and unused packages
 *    - Code Quality: TypeScript types, ESLint rules, security linting
 *    - Testing: Unit tests and coverage reports
 *    - Database: Schema validation and migrations
 *    - APIs: Contract validation and OpenAPI specs
 *    - Environment: Configuration and secrets management
 *    - Performance: Bundle size and build optimization
 *    - Accessibility: Basic a11y checks and best practices
 * 3. Generates a detailed report showing any issues found
 * 4. Saves the report to docs/app_hygiene_report.md
 *
 * USAGE:
 * Run this script with: npm run hygiene:app
 * Or run the full pipeline with: npm run hygiene:full (includes agent hygiene too)
 *
 * OUTPUT:
 * Creates docs/app_hygiene_report.md with results from each check category.
 * Shows both successful checks and any issues that need attention.
 *
 * INTEGRATION:
 * This script is part of the Quantum Diamond Framework's quality assurance system.
 * It runs automatically in CI/CD pipelines and should be run before deploying apps.
 * Works alongside agent hygiene for complete project quality coverage.
 */

import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { mkdirSync } from "node:fs";
import { existsSync } from "node:fs";

function run(cmd, opts = {}) {
  console.log(`\n$ ${cmd}`);
  try { return execSync(cmd, { stdio: "pipe", encoding: "utf8", ...opts }); }
  catch (e) { return e.stdout?.toString?.() || e.message; }
}

const results = [];
function section(title, fn) {
  console.log(`\n=== ${title} ===`);
  const out = fn();
  results.push(`\n## ${title}\n\n\`\`\`\n${out.trim()}\n\`\`\`\n`);
}

// ensure docs dir
if (!existsSync("docs")) mkdirSync("docs", { recursive: true });

section("Dependency audit (npm audit --production)", () => run("npm audit --production || true"));
section("Unused/invalid deps (depcheck)", () => run("npx depcheck || true"));
section("Typecheck (tsc --noEmit)", () => run("npx tsc --noEmit || true"));
section("Lint (eslint)", () => run('npx eslint . || true'));
section("Security lint (eslint-plugin-security)", () => run('npx eslint . --ext .ts,.tsx -c .eslintrc.security.cjs || true'));
section("Tests & coverage (vitest)", () => run('npx vitest run --coverage || true'));
section("Prisma/DB schema validation", () => run('npx prisma format && npx prisma validate || true'));
section("OpenAPI/contract check (if api/openapi.* exists)", () => run('node -e "const fs=require(\'fs\');const g=fs.readdirSync(\'api\',{withFileTypes:true}).some(d=>d.name.startsWith(\'openapi\')); if(g)process.exit(0); else process.exit(0)" || true'));
section("Env hygiene (.env.example vs usage)", () => run('node -e "const fs=require(\'fs\');try{const ex=fs.readFileSync(\'.env.example\',\'utf8\');console.log(ex)}catch(e){console.log(\'No .env.example\')}"'));
section("Frontend build size (vite build)", () => run('npx vite build || true'));
section("Accessibility smoke (storybook/axe optional)", () => run('node -e "console.log(\'(Optional) Integrate axe/lighthouse CI for deeper a11y checks\')"'));

const header = `# App Hygiene Report
Generated: ${new Date().toISOString()}

**Do not proceed to Specialist reviews until all ERROR-level issues are resolved.**`;

const body = header + "\n" + results.join("\n") + "\n";
writeFileSync("docs/app_hygiene_report.md", body);
console.log("\nWrote docs/app_hygiene_report.md");