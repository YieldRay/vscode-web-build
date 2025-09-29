#!/usr/bin/env node

/**
 * Port from <https://github.com/conwnet/github1s/blob/master/vscode-web/scripts/build/nls.js>
 * MIT License
 *
 * Before running this script, make sure you have already built VS Code (generate `vscode/out-build` folder)
 * and cloned https://github.com/microsoft/vscode-loc
 */

import { fileURLToPath } from "node:url";
import process from "node:process";
import path from "node:path";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
process.chdir(__dirname);

const deepMerge = (target, source) => {
  for (const key of Object.keys(source)) {
    if (typeof source[key] === "object" && target[key]) {
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
};

const readJSON = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

const outputBuildPath = path.join(__dirname, "vscode/out-build");
const nlsKeys = readJSON(path.join(outputBuildPath, "nls.keys.json"));
const nlsMessages = readJSON(path.join(outputBuildPath, "nls.messages.json"));

const languageContentsMap = {};
const i18nPath = path.join(__dirname, "vscode-loc/i18n");

for (const languageDir of fs.readdirSync(i18nPath)) {
  const languagePath = path.join(i18nPath, languageDir);
  const packageJson = readJSON(path.join(languagePath, "package.json"));

  for (const localization of packageJson.contributes.localizations) {
    if (!languageContentsMap[localization.languageId]) {
      languageContentsMap[localization.languageId] = {};
    }

    const contents = languageContentsMap[localization.languageId];
    for (const translation of localization.translations) {
      const translationPath = path.join(languagePath, translation.path);
      deepMerge(contents, readJSON(translationPath).contents);
    }
  }
}

for (const languageId of Object.keys(languageContentsMap)) {
  const langMessages = [];
  const contents = languageContentsMap[languageId];

  for (const [file, keys] of nlsKeys) {
    for (const key of keys) {
      langMessages.push(
        contents[file]?.[key] ?? nlsMessages[langMessages.length]
      );
    }
  }
  if (langMessages.length !== nlsMessages.length) {
    throw new Error(`Invalid nls messages for ${languageId}`);
  }

  const nslDirPath = path.join(__dirname, `vscode-web-build/nls/${languageId}`);
  fs.mkdirSync(nslDirPath, { recursive: true });
  fs.writeFileSync(
    path.join(nslDirPath, "nls.messages.js"),
    `globalThis._VSCODE_NLS_MESSAGES=${JSON.stringify(langMessages)};` +
      `globalThis._VSCODE_NLS_LANGUAGE=${JSON.stringify(languageId)};`
  );
}
