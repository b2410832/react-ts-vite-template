#!/usr/bin/env node

"use strict";
const c = require("ansi-colors");
const path = require("path");
const util = require("util");
const fs = require("fs");
const exec = util.promisify(require("child_process").exec);

const createApp = async (appName) => {
  const gitRepo = "https://github.com/b2410832/react-ts-vite-template.git";
  const projectRootPath = path.resolve(appName);

  // 1. Create new directory
  try {
    fs.mkdirSync(projectRootPath);
  } catch (err) {
    if (err.code === "EEXIST") {
      console.log(c.red.bold(`The name "${appName}" already exist in the current directory, please choose a different project name.`));
    } else {
      console.log(c.red.bold(`Error happened when creating new directory: ${err}`));
    }
    process.exit(1);
  }

  try {
    console.log(
      c.green("-------------------------------------------------------")
    );
    console.log();
    console.log(`🚀  Creating a new React app in ${c.blue.bold(projectRootPath)}`);
    console.log();
    console.log(c.cyan(`📁  Project directory name: ${appName}`));
    console.log();

    // 2. Clone template from remote repo
    console.log(c.blue.bold("📥  Downloading template..."));
    console.log();
    await runCmd(`git clone --depth 1 ${gitRepo} ${appName}`); // clones only the latest commit of the repository's history
    console.log();

    process.chdir(projectRootPath);

    // 3. Install dependencies
    console.log(c.blue.bold("📦  Installing dependencies..."));
    console.log('This might take a couple of minutes.')
    console.log();
    fs.rmSync(path.join(projectRootPath, '.git'), { recursive: true, force: true });
    await runCmd('git init');
    await runCmd("npm install");

    const packageJsonPath = path.join(projectRootPath, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
    const newPackageJson = {
      name: appName,
      private: true,
      version: '0.0.0',
      type: packageJson.type,
      scripts: packageJson.scripts,
      dependencies: packageJson.dependencies,
      devDependencies: packageJson.devDependencies,
      "lint-staged": packageJson['lint-staged'],
      bin: undefined,
    }
    fs.writeFileSync(packageJsonPath, JSON.stringify(newPackageJson, null, 2), 'utf8');


    // 4. Cleaning up
    console.log(c.blue.bold("🧹  Cleaning up..."));
    console.log();

    fs.rmSync(path.join(projectRootPath, 'bin'), { recursive: true, force: true });

    await runCmd("npm uninstall ansi-colors");

    // 5. Done
    console.log("🎉  You had successfully set up an React app");
    console.log(`       ${appName}`);
    console.log();
    console.log('Now you can run the app:');
    console.log(c.cyan(`       cd ${appName}`));
    console.log(c.cyan(`       npm run dev`));
    console.log();
  } catch(err){
    console.log(c.red.bold(err))
  }
};

const runCmd = async (command) => {
  const { stdout, stderr } = await exec(command);
  console.log(stdout);
  console.log(stderr);
};

module.exports = { createApp };
