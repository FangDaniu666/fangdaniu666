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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "799b312c8993dccb47dee02879ef50dc"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.ac327604.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.864032d8.js",
    "revision": "14ddcdf8988854ee32c3243d6156a982"
  },
  {
    "url": "assets/js/11.21fb550f.js",
    "revision": "080d1e1a934ded70c1a37a9dbdec7eb3"
  },
  {
    "url": "assets/js/12.e8d347d7.js",
    "revision": "4677c372b05e570589dd0ff49a4f9013"
  },
  {
    "url": "assets/js/13.7ca6337a.js",
    "revision": "407beab733af7a79e7e06d9f9605f986"
  },
  {
    "url": "assets/js/14.b1fc4a58.js",
    "revision": "ac98e7ab2f9080c68e32d067bc0b143a"
  },
  {
    "url": "assets/js/15.35b5597b.js",
    "revision": "47b229a8bac2a653712dbc9603291bc1"
  },
  {
    "url": "assets/js/16.8975f485.js",
    "revision": "4e949ddc7384a4a714fc7e2b5732b1cd"
  },
  {
    "url": "assets/js/17.7e2e091a.js",
    "revision": "02173fa412518f959d779d3ee325acb3"
  },
  {
    "url": "assets/js/18.f882aa41.js",
    "revision": "3991e4e7301d0d8a70cb9ecba9ab36c8"
  },
  {
    "url": "assets/js/4.1ef757d0.js",
    "revision": "0cd782a39c2cc04b114883182718ae95"
  },
  {
    "url": "assets/js/5.190b80f5.js",
    "revision": "258c45f563c75a070464fc4de3d84c04"
  },
  {
    "url": "assets/js/6.9da0541f.js",
    "revision": "8873a48f1cde6e64b974552614de3380"
  },
  {
    "url": "assets/js/7.c59d9949.js",
    "revision": "df552cd6564b0f9a5969529f6d5fe445"
  },
  {
    "url": "assets/js/8.d8b87a3c.js",
    "revision": "4bd6723c068a61f753459deb3c2c39ed"
  },
  {
    "url": "assets/js/9.4baef992.js",
    "revision": "4f1788b56f47c6b80450b59d1aaf74d3"
  },
  {
    "url": "assets/js/app.7cb60f3a.js",
    "revision": "f904992ac40f61e723762d9ac885ca3d"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.af4d3f11.js",
    "revision": "edca85aa74e4c030cffb56b25b077d94"
  },
  {
    "url": "avatar.png",
    "revision": "8edcc83b35850ec2c34884a313960c46"
  },
  {
    "url": "categories/index.html",
    "revision": "6062e6f5dbe3aaaea6893dd6dc987fbd"
  },
  {
    "url": "categories/java/index.html",
    "revision": "74cacd4362412d32c9589605bad6555d"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "bb0a18554c7911ebc479175313ddabe0"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "12e76535604cced9122df65eece85e84"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "405cc4e7f93991a65d1bda14f7a2be2f"
  },
  {
    "url": "img/6.jpg",
    "revision": "e32be773e38b5a6488218f4eaea3b865"
  },
  {
    "url": "img/logo.png",
    "revision": "dd1efc6c581d1bc0cc84ff5ca99e0a3a"
  },
  {
    "url": "index.html",
    "revision": "16fab8790dec7b69ddb77af6b762a7e1"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "92f7d9b44e9a958822e2676f57c96210"
  },
  {
    "url": "tags/java/index.html",
    "revision": "585ec3fc2b58fb782c745c674543e43d"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "98305afe73a24f909eb9a77b29d1fe54"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "274db0c28c8d66e78b21d6c26354bc1d"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "20d7380fd0b4b56eb651a83c8e8928d0"
  },
  {
    "url": "timeline/index.html",
    "revision": "9eab9b0d9ee259bf1a859052a8cdbf1e"
  },
  {
    "url": "技术文章/设计模式/0.designpatterns.html",
    "revision": "7ede627fde241a2595078acb7f77ddf1"
  },
  {
    "url": "技术文章/设计模式/1.Singleton.html",
    "revision": "cbe05c7528b4fa6db8932dd579f0485e"
  },
  {
    "url": "技术文章/设计模式/2.Factory.html",
    "revision": "1ceaf9bf821ec2c49f12afa502da2d59"
  },
  {
    "url": "技术文章/设计模式/3.Builder.html",
    "revision": "bbef47864c445e1623db441cf5248f08"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f23269ea086bfb728c62f6c56efef687"
  }
].concat(self.__precacheManifest || []);
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
