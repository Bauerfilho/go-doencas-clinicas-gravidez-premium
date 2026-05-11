"use strict";

const CACHE_VERSION = "v6";
const PROJECT_PREFIX = "go-doencas-clinicas-gravidez-premium-";
const CACHE_NAME = PROJECT_PREFIX + CACHE_VERSION;
const REPO_BASE_PATH = "/Doenc-as-intercorrentes-na-gestac-ao/";
const SCOPE_PATH = new URL(self.registration.scope).pathname;
const BASE_PATH = SCOPE_PATH.startsWith(REPO_BASE_PATH) ? REPO_BASE_PATH : SCOPE_PATH;

const SHELL_FILES = [
  "",
  "index.html",
  "styles.css",
  "scripts.js",
  "content-data.js",
  "sections-1.js",
  "sections-2.js",
  "sections-3.js",
  "manifest.webmanifest",
  "pwa-register.js",
  "assets/icons/apple-touch-icon-180.png",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png",
  "assets/icons/maskable-192.png",
  "assets/icons/maskable-512.png",
  "assets/icons/favicon.svg"
];

const SHELL_ASSETS = SHELL_FILES.map((file) => BASE_PATH + file);
const INDEX_FALLBACK = BASE_PATH + "index.html";

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    const results = await Promise.allSettled(
      SHELL_ASSETS.map(async (assetUrl) => {
        const response = await fetch(assetUrl, { cache: "reload" });
        if (!response.ok) {
          throw new Error("HTTP " + response.status + " · " + assetUrl);
        }
        await cache.put(assetUrl, response.clone());
      })
    );
    results.forEach((result, index) => {
      if (result.status === "rejected") {
        console.warn("[GO SW] falha no pré-cache:", SHELL_ASSETS[index], result.reason);
      }
    });
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.map((key) => {
        if (key.startsWith(PROJECT_PREFIX) && key !== CACHE_NAME) {
          return caches.delete(key);
        }
        return null;
      })
    );
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  const accept = request.headers.get("accept") || "";
  const isNavigation = request.mode === "navigate" || accept.includes("text/html");

  if (isNavigation) {
    event.respondWith(networkFirstWithFallback(request));
    return;
  }

  event.respondWith(cacheFirstWithUpdate(request));
});

async function networkFirstWithFallback(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const fresh = await fetch(request);
    if (fresh && fresh.ok) {
      cache.put(request, fresh.clone()).catch(() => {});
    }
    return fresh;
  } catch (_) {
    const cached = await cache.match(request);
    if (cached) return cached;

    const fallback = await cache.match(INDEX_FALLBACK);
    if (fallback) return fallback;

    return Response.error();
  }
}

async function cacheFirstWithUpdate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  const networkPromise = fetch(request).then((response) => {
    if (response && response.ok) {
      cache.put(request, response.clone()).catch(() => {});
    }
    return response;
  }).catch(() => null);

  if (cached) {
    networkPromise.catch(() => {});
    return cached;
  }

  const fresh = await networkPromise;
  if (fresh) return fresh;
  return Response.error();
}

self.addEventListener("message", (event) => {
  if (!event.data || typeof event.data !== "object") return;

  if (event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
    return;
  }

  if (event.data.type === "CLEAR_CACHE") {
    event.waitUntil(
      caches.keys().then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith(PROJECT_PREFIX))
            .map((key) => caches.delete(key))
        )
      )
    );
  }
});
