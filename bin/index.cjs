#!/usr/bin/env node

"use strict";
const c = require("ansi-colors");

const { createApp } = require("./createApp.cjs");

// ========= Check Node version =========
const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split('.');
const major = semver[0];

if (major < 20) {
  console.error(
    `You are running Node ${currentNodeVersion}.\nThis template requires Node 20 or higher.\nPlease update your version of Node.`
  );
  process.exit(1);
}

// ========= Check input app name ==========
const appName = process.argv[2];

if (typeof appName === 'undefined') {
  console.log(c.red.bold('Please provide a directory name to your project.'));
  console.log('   npx react-ts-vite-template <project_directory>');
  console.log();
  console.log('For example:');
  console.log('   npx react-ts-vite-template my-app');
  console.log();
  process.exit(1);
}

createApp(appName);
