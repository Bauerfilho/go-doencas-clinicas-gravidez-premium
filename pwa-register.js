/* =========================================================================
   GO PREMIUM · DOENÇAS CLÍNICAS NA GRAVIDEZ — PWA REGISTER
   -------------------------------------------------------------------------
   Registro discreto do service worker. Não cria UI, não exibe alertas,
   não recarrega a página, não interfere na lógica didática.
   Apenas registra `./sw.js` quando o ambiente é seguro
   (https: ou localhost) e o navegador suporta serviceWorker.
   ========================================================================= */

(function () {
  "use strict";

  if (!("serviceWorker" in navigator)) {
    console.info("[GO PWA] navigator.serviceWorker indisponível · registro pulado");
    return;
  }

  // Ambiente seguro · evita registrar via file:// ou http: em hosts não-locais
  var isLocalhost =
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" ||
    location.hostname === "[::1]" ||
    /^localhost(:|$)/.test(location.host);
  var isSecure = location.protocol === "https:" || isLocalhost;

  if (!isSecure) {
    console.info("[GO PWA] ambiente não seguro (" + location.protocol + ") · registro pulado");
    return;
  }

  function ensureTrailingSlash(path) {
    return path.endsWith("/") ? path : (path + "/");
  }

  function resolveSWRegistrationPaths() {
    var fallbackBaseRaw = location.pathname.endsWith("/")
      ? location.pathname
      : location.pathname.replace(/[^/]*$/, "");
    var fallbackBase = ensureTrailingSlash(fallbackBaseRaw || "/");
    var scriptSrc = document.currentScript && document.currentScript.src;
    var baseURL = scriptSrc
      ? new URL("./", scriptSrc)
      : new URL(fallbackBase, location.origin);
    var swURL = new URL("sw.js", baseURL);
    var scopeURL = new URL(ensureTrailingSlash(baseURL.pathname), location.origin);
    return { swURL: swURL, scopeURL: scopeURL };
  }

  function register() {
    var paths = resolveSWRegistrationPaths();
    navigator.serviceWorker
      .register(paths.swURL.href, { scope: paths.scopeURL.href })
      .then(function (reg) {
        console.info("[GO PWA] service worker registrado · escopo:", reg.scope, "· SW:", paths.swURL.href);

        // Detecta atualização disponível (apenas log · não força reload)
        if (reg.waiting) {
          console.info("[GO PWA] nova versão aguardando ativação (próxima visita)");
        }
        reg.addEventListener("updatefound", function () {
          var newSW = reg.installing;
          if (!newSW) return;
          newSW.addEventListener("statechange", function () {
            if (newSW.state === "installed" && navigator.serviceWorker.controller) {
              console.info("[GO PWA] nova versão pronta · será ativada na próxima visita");
            }
          });
        });
      })
      .catch(function (err) {
        console.warn("[GO PWA] falha ao registrar service worker:", err && err.message);
      });
  }

  // Aguarda window load para não competir com carregamento inicial dos scripts da plataforma
  if (document.readyState === "complete") {
    register();
  } else {
    window.addEventListener("load", register, { once: true });
  }
})();
