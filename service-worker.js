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
    "revision": "0b947f9ec80f526dccdf9079c14cdbf8"
  },
  {
    "url": "assets/css/0.styles.095f72f1.css",
    "revision": "b069b588a1fb04a5ef525a5ea35d8bc5"
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
    "url": "assets/js/1.0875c445.js",
    "revision": "4fc3dcb2d21cd3764290e59a0382c6c0"
  },
  {
    "url": "assets/js/10.ab0e6332.js",
    "revision": "5725a829c25fa74ffa95443d4f760082"
  },
  {
    "url": "assets/js/11.f18c889a.js",
    "revision": "040089e56034edcff8019dc2a3c1876b"
  },
  {
    "url": "assets/js/12.b649769b.js",
    "revision": "d802c8359cf3c96c361892e9e2341752"
  },
  {
    "url": "assets/js/13.06524ab5.js",
    "revision": "058d1660f9ec92c36f4ee5bd1f708d61"
  },
  {
    "url": "assets/js/14.dde6fd6f.js",
    "revision": "0cc4f9468ed83d1c2439c9a3915d417c"
  },
  {
    "url": "assets/js/15.cbfdb6e5.js",
    "revision": "0b3bb379bf03a9a2853a5adcc9bcc23d"
  },
  {
    "url": "assets/js/16.e5f63484.js",
    "revision": "16b9adb3e6cb42bf935a3feaf122dee5"
  },
  {
    "url": "assets/js/17.a62c26ef.js",
    "revision": "75e52dfa19f4428c9784e0386f55ab82"
  },
  {
    "url": "assets/js/18.9e692df3.js",
    "revision": "473c3832aa4d91e81b9aa9294b311ba5"
  },
  {
    "url": "assets/js/19.d3be0373.js",
    "revision": "4166709af3c9fc33fcfcd1018ec1d4e5"
  },
  {
    "url": "assets/js/20.3de32307.js",
    "revision": "1b5c020ee530e79ce37fc159a6a23439"
  },
  {
    "url": "assets/js/21.4f49ec0a.js",
    "revision": "c90a70134c222585adb86b8b1c884ace"
  },
  {
    "url": "assets/js/22.65e2e793.js",
    "revision": "4d688cbc414fc36c80a4a38fc51775e2"
  },
  {
    "url": "assets/js/23.33d32f48.js",
    "revision": "5c42d7800055aab7a539226097318633"
  },
  {
    "url": "assets/js/4.bccf22db.js",
    "revision": "68a8031f6cc98ca6d40de8e37cb308cb"
  },
  {
    "url": "assets/js/5.bfe7b2e7.js",
    "revision": "674b7dcf1b90050766565c9d8485aa26"
  },
  {
    "url": "assets/js/6.b91397fb.js",
    "revision": "de8466b12d72404b1a47c8a925201a2b"
  },
  {
    "url": "assets/js/7.0b12647d.js",
    "revision": "b8a0c7101fd95959c0c6c7a9a7ea5d99"
  },
  {
    "url": "assets/js/8.d14e6302.js",
    "revision": "c8f4fbf59f55ad0ee9464be3da458807"
  },
  {
    "url": "assets/js/9.00a0037a.js",
    "revision": "a485ae5c83ab4b40545f8ce14c486137"
  },
  {
    "url": "assets/js/app.9c30907b.js",
    "revision": "52bef23bccfd8446b26922fcfd35df0d"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.9fe6d4d3.js",
    "revision": "cf42d38915e35de1828dffa9e5da56e5"
  },
  {
    "url": "avatar.png",
    "revision": "8edcc83b35850ec2c34884a313960c46"
  },
  {
    "url": "categories/index.html",
    "revision": "af2d1ac7d94ceea194da641e39385bce"
  },
  {
    "url": "categories/java/index.html",
    "revision": "3a8d8db732c815f014372dcb7577b00c"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "3025d23e4cbc9869526a65c51b3fce4b"
  },
  {
    "url": "components/Frontendframe.html",
    "revision": "b0c9e2f4b2f8ba85d19cf52f61f75d15"
  },
  {
    "url": "components/LinkBox.html",
    "revision": "8e0da33a87bf9b3a871887968a65e8f8"
  },
  {
    "url": "components/MyComponent.html",
    "revision": "f93eada3c076e42e31852d2cec629c20"
  },
  {
    "url": "components/Tools.html",
    "revision": "a54e31f923eab72dcb454486a0358cbd"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "1987945280fdcf4ca239f7078ec93dc6"
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
    "revision": "73c62681a9e9d925dd6d3e84150f2fb5"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "f58391dcef808e28eb20e4d21244e502"
  },
  {
    "url": "tags/java/index.html",
    "revision": "fb831885622549bc30a6e080b2d8592f"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "b0f0fea3833aa00896c26a6ab6e468db"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "7bd9a0b50e50bf8256a807f6f55bdf1b"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "8bb0f1d22dbf0884a224073067aab280"
  },
  {
    "url": "timeline/index.html",
    "revision": "931293f61e4910dbebfbe8970be4b7e2"
  },
  {
    "url": "tools/index.html",
    "revision": "b7840c7989405766ff10c189e2fa7d84"
  },
  {
    "url": "技术文章/设计模式/0.designpatterns.html",
    "revision": "07c77a46caaa5e0a0ef7e8a9fc1a36f3"
  },
  {
    "url": "技术文章/设计模式/1.Singleton.html",
    "revision": "b979d9f481df289470513d57dbc37b7e"
  },
  {
    "url": "技术文章/设计模式/2.Factory.html",
    "revision": "f304a5cc292fe3fe180931d15ceeeb5c"
  },
  {
    "url": "技术文章/设计模式/3.Builder.html",
    "revision": "4bf8e8f9c256508741a95f2fb6d1b648"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f96c408770944258c97a8a15d0eea2c4"
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
