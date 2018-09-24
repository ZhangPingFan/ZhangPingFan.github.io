/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "edfe64d95d4753c88a304e04d2eb3032"
  },
  {
    "url": "assets/css/0.styles.fa17f532.css",
    "revision": "eef596b89ffed893be28cbd039720055"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.4428a2b6.js",
    "revision": "695a1275d50a1c971d4135fcf35c2a52"
  },
  {
    "url": "assets/js/4.c52fb4da.js",
    "revision": "956e0209e19596fb692b2ba3e85fb9c9"
  },
  {
    "url": "assets/js/5.13d2192c.js",
    "revision": "2fbd56f948334e41b641a3a3ff54178c"
  },
  {
    "url": "assets/js/6.1f2ce167.js",
    "revision": "0a35358482ecc59cbce12dd2fb081638"
  },
  {
    "url": "assets/js/7.079854df.js",
    "revision": "99aeebc480c66f5b26944a6d118c3fb3"
  },
  {
    "url": "assets/js/8.e359d3ab.js",
    "revision": "3b116bdf430dfea9142edcfd1c2ee24f"
  },
  {
    "url": "assets/js/app.ca416125.js",
    "revision": "7aaa93419a8821b423ea43d3bc340dc3"
  },
  {
    "url": "hero.png",
    "revision": "a6101fe07409c0d6f39910a6af7123a4"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "c2426bf98579a671be1dbfd3b1ef19f3"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "2ed5a28269282afc069701dba794c9de"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "58cb749cebf45d0c9d02a18de904aacb"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "index.html",
    "revision": "bf63143d354d0899e3b1df6734c602df"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "cfc4d73c85f33516d785177444ee8c98"
  },
  {
    "url": "zh/guide/threejs.html",
    "revision": "b26ce0dc2923e382ab47777ccbdc77fa"
  },
  {
    "url": "zh/guide/vuepress.html",
    "revision": "7a15a2d61b2d71603e51de9bb7b6da13"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
