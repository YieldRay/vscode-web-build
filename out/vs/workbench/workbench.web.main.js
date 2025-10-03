// out-build/vs/workbench/workbench.web.main.js
(function() {
  const define = globalThis.define;
  const require2 = globalThis.require;
  if (!define || !require2 || typeof require2.getConfig !== "function") {
    throw new Error("Expected global define() and require() functions. Please only load this module in an AMD context!");
  }
  let baseUrl = require2?.getConfig().baseUrl;
  if (!baseUrl) {
    throw new Error("Failed to determine baseUrl for loading AMD modules (tried require.getConfig().baseUrl)");
  }
  if (!baseUrl.endsWith("/")) {
    baseUrl = baseUrl + "/";
  }
  globalThis._VSCODE_FILE_ROOT = baseUrl;
  const trustedTypesPolicy = require2.getConfig().trustedTypesPolicy;
  if (trustedTypesPolicy) {
    globalThis._VSCODE_WEB_PACKAGE_TTP = trustedTypesPolicy;
  }
  const promise = new Promise((resolve) => {
    globalThis.__VSCODE_WEB_ESM_PROMISE = resolve;
  });
  define("vs/web-api", [], () => {
    return {
      load: (_name, _req, _load, _config) => {
        const script = document.createElement("script");
        script.type = "module";
        script.src = trustedTypesPolicy ? trustedTypesPolicy.createScriptURL(`${baseUrl}vs/workbench/workbench.web.main.internal.js`) : `${baseUrl}vs/workbench/workbench.web.main.internal.js`;
        document.head.appendChild(script);
        return promise.then((mod) => _load(mod));
      }
    };
  });
  define("vs/workbench/workbench.web.main", ["require", "exports", "vs/web-api!"], function(_require, exports, webApi) {
    Object.assign(exports, webApi);
  });
})();

//# sourceMappingURL=workbench.web.main.js.map
