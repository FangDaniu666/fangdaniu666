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
    "revision": "945412f698d9400732f5543ba7f4940c"
  },
  {
    "url": "assets/css/0.styles.3ad43d16.css",
    "revision": "d23c0c4ab9bd66b7abd3952044ddb11a"
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
    "url": "assets/js/1.ae4ff1f8.js",
    "revision": "76b9308755cd28737cba9f7e0bda12e7"
  },
  {
    "url": "assets/js/10.8f245f89.js",
    "revision": "0f40b52cab1e5ca1f7876247f286ac98"
  },
  {
    "url": "assets/js/11.a829bc59.js",
    "revision": "61ec647e31d7d34264ff3a5957b0cf0d"
  },
  {
    "url": "assets/js/12.6a379487.js",
    "revision": "d5f8d080062982c14cf195528e15fa0b"
  },
  {
    "url": "assets/js/13.4a9e47d5.js",
    "revision": "d55c20d1379322802a71e9d269eec5eb"
  },
  {
    "url": "assets/js/14.fb6770b7.js",
    "revision": "8559f646a2ba16792454eed06a7fee77"
  },
  {
    "url": "assets/js/15.de120bb7.js",
    "revision": "14583c1e75ccc05eb911badee3d7742a"
  },
  {
    "url": "assets/js/16.54f3f5cc.js",
    "revision": "c2001287b72bb43eef92d13f90ed0a97"
  },
  {
    "url": "assets/js/17.fe5823c0.js",
    "revision": "570db13538b516e12dba6133c40aafbe"
  },
  {
    "url": "assets/js/18.c5d7046f.js",
    "revision": "23415a35742f1419d1c51d6aa8e30238"
  },
  {
    "url": "assets/js/19.c517c492.js",
    "revision": "975c343e18de561700af1e89f4603ac4"
  },
  {
    "url": "assets/js/20.d3af2790.js",
    "revision": "5a684624a52640f824aee287188c6225"
  },
  {
    "url": "assets/js/21.4a575e0f.js",
    "revision": "048d32cc4645a0c47bb47a16efc1ddce"
  },
  {
    "url": "assets/js/22.5c7c49c3.js",
    "revision": "e82770ba0a86a16a9d919fb7dc88ea09"
  },
  {
    "url": "assets/js/23.76cdafb3.js",
    "revision": "76a6fece17aaf07b1fcefb06b68ff9ac"
  },
  {
    "url": "assets/js/24.60cdf114.js",
    "revision": "035b2ceec7f7b7d88d7db7eb0801c7b0"
  },
  {
    "url": "assets/js/25.d5ad73f6.js",
    "revision": "cfdbaa0370c12e8d35bca83e74a3f1fb"
  },
  {
    "url": "assets/js/26.a69e6877.js",
    "revision": "e3b00252174630059c1775c71dd39604"
  },
  {
    "url": "assets/js/27.4ce1514b.js",
    "revision": "e6936d858c1ab1d56eabf463ecfab327"
  },
  {
    "url": "assets/js/28.95b5640a.js",
    "revision": "e287ca934432aedccedc3ba4e6a6bd43"
  },
  {
    "url": "assets/js/29.033ca15a.js",
    "revision": "5f3d9883306f863fe58291c44d414641"
  },
  {
    "url": "assets/js/30.c0148500.js",
    "revision": "574ce8dfaf3b0188f0898f77b3d71902"
  },
  {
    "url": "assets/js/31.95c33cf9.js",
    "revision": "a37df80edfb935b60dd73745ba011ce8"
  },
  {
    "url": "assets/js/32.64de9577.js",
    "revision": "0cee8b11f20ce57e2176fe9c702b58af"
  },
  {
    "url": "assets/js/33.29324a08.js",
    "revision": "0bc0098a281144206a44d7e2ca855e24"
  },
  {
    "url": "assets/js/34.38874da4.js",
    "revision": "1b259698267575189693130af4db8146"
  },
  {
    "url": "assets/js/35.8621f994.js",
    "revision": "2a884aff3d75654109df16646aecc105"
  },
  {
    "url": "assets/js/36.da177a9f.js",
    "revision": "7aee3021c68a44a32890c891567bec90"
  },
  {
    "url": "assets/js/37.e6395716.js",
    "revision": "28992e9649eba5d56d019838a32ae247"
  },
  {
    "url": "assets/js/38.338c9526.js",
    "revision": "8c6ab03b73b332b9121a49643ccab205"
  },
  {
    "url": "assets/js/39.c83f5018.js",
    "revision": "bb71aceb9fd8a5c92b4b0241a0ef1560"
  },
  {
    "url": "assets/js/4.69f24b3a.js",
    "revision": "72b139841b7a51b0fba1f3f40ae04041"
  },
  {
    "url": "assets/js/40.7ca04283.js",
    "revision": "eadb20314a2171fd81d7cfc0c13ba385"
  },
  {
    "url": "assets/js/41.69d1d806.js",
    "revision": "67419ac512732b54f48148fc021a78a3"
  },
  {
    "url": "assets/js/42.19f92fe6.js",
    "revision": "b1c52db4e0a00c1d3b7e243685440e26"
  },
  {
    "url": "assets/js/5.687d2f01.js",
    "revision": "18d8970aa4195095bc23930fc6edcc3a"
  },
  {
    "url": "assets/js/6.b3ae9ed7.js",
    "revision": "9ed4743abcf7a0b065db3a8d093717a7"
  },
  {
    "url": "assets/js/7.66cf5b31.js",
    "revision": "7635d7382ad2eac3b064211f469a53b0"
  },
  {
    "url": "assets/js/8.6f09cd83.js",
    "revision": "3a7c4da498f31e0e928336f2fb513b7c"
  },
  {
    "url": "assets/js/9.c14f5b22.js",
    "revision": "7f5456659d3a0c29486f2cd77822ea06"
  },
  {
    "url": "assets/js/app.dbc24f5d.js",
    "revision": "70104dd0d37431db79fc3754b332784a"
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
    "revision": "cc62dc3d837e6b4f94af055b713256e8"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b421cc103460c2f45d10399e054eead7"
  },
  {
    "url": "categories/java/page/2/index.html",
    "revision": "9beff181e56979b2dfa3f70af4c8f090"
  },
  {
    "url": "categories/java/page/3/index.html",
    "revision": "23728bdc0aa8cc944b15966903f81d97"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e80d382c9fa4bccf7653a8de607450c2"
  },
  {
    "url": "components/Frontendframe.html",
    "revision": "bae64e3aa097e110f721dbdc6e84ebf6"
  },
  {
    "url": "components/LinkBox.html",
    "revision": "366ddc40fe9361e7b3158d82a000e1ad"
  },
  {
    "url": "components/MyComponent.html",
    "revision": "52764c39ef04d1bd7f73b1f4bb1b36a6"
  },
  {
    "url": "components/Tools.html",
    "revision": "67ca8546dd3887cd63bf454683899a6d"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "0704cee39081d5cd05c2305e68f92601"
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
    "revision": "15e137771433cf121e1fe1bb19bbf0b5"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "42c26bf9a83a6cae2332420afe54b47d"
  },
  {
    "url": "tags/java/index.html",
    "revision": "91e98818ac025e78ad170afaa349c1f3"
  },
  {
    "url": "tags/java/page/2/index.html",
    "revision": "38e789dc37b57ef9b2bb7490d0a3b63d"
  },
  {
    "url": "tags/java/page/3/index.html",
    "revision": "6d6359831a8765bea108151c9cdf09d8"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "8e1189ed1b27c15b647e60ea6aeed1bd"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "ccf8050b3c9c78d72ce1b20972d34f54"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "df78f1e4539de353617b8a11a97755c5"
  },
  {
    "url": "tags/设计模式/page/2/index.html",
    "revision": "24d2c6e6dff24e6edbdaba940a364375"
  },
  {
    "url": "tags/设计模式/page/3/index.html",
    "revision": "d9bfaf852c1694702cfe65a66354282b"
  },
  {
    "url": "timeline/index.html",
    "revision": "33cd133b8cd660f0800b002ca2120f0a"
  },
  {
    "url": "tools/index.html",
    "revision": "c16311773b7d2fc3c246b49514a7a458"
  },
  {
    "url": "技术文章/设计模式/0.designpatterns.html",
    "revision": "a355af02c98b079790f2681ac716432a"
  },
  {
    "url": "技术文章/设计模式/1.Singleton.html",
    "revision": "f1372b8178f22bbe9ee7e622237aa66d"
  },
  {
    "url": "技术文章/设计模式/10.Filter.html",
    "revision": "ad05f087804de903927eb2a5b573d439"
  },
  {
    "url": "技术文章/设计模式/11.Flyweight.html",
    "revision": "bb281ced708d17cd548101ec17d29c53"
  },
  {
    "url": "技术文章/设计模式/12.Proxy.html",
    "revision": "c53ef8abc6c0fdc256d0a9643650d176"
  },
  {
    "url": "技术文章/设计模式/13.ResponsibilityChain.html",
    "revision": "3c916498db621e4fc59661a6a9bf7935"
  },
  {
    "url": "技术文章/设计模式/14.Command.html",
    "revision": "841d88d433ca2cb811838776558405b9"
  },
  {
    "url": "技术文章/设计模式/15.Interpreter.html",
    "revision": "a0ce691f2609adeebaa9aee34877eef5"
  },
  {
    "url": "技术文章/设计模式/16.Iterator.html",
    "revision": "e7cd8b00ec8be83fad4c5c5180acdd6f"
  },
  {
    "url": "技术文章/设计模式/17.Visitor.html",
    "revision": "b7e000e99a2e77f42402a730d22e62e1"
  },
  {
    "url": "技术文章/设计模式/18.Mediator.html",
    "revision": "4fe201350c4c5b55880ce92244512810"
  },
  {
    "url": "技术文章/设计模式/19.Strategy.html",
    "revision": "de3db389d24b0aaf8fe98cb5a4d68266"
  },
  {
    "url": "技术文章/设计模式/2.Factory.html",
    "revision": "74e430b5bc267e1bcf1b5510f6c6aa9f"
  },
  {
    "url": "技术文章/设计模式/20.TemplateMethod.html",
    "revision": "3d6dd6bb50bc7dad48871f6b5c7ffe05"
  },
  {
    "url": "技术文章/设计模式/21.Observer.html",
    "revision": "4d826585206804e6ee0b243dbee2d12d"
  },
  {
    "url": "技术文章/设计模式/22.Memento.html",
    "revision": "b808f22acce2a6b6ac1dc43eb5961dbc"
  },
  {
    "url": "技术文章/设计模式/3.Builder.html",
    "revision": "ee498b91d713d92c9f42d54adc0a69b7"
  },
  {
    "url": "技术文章/设计模式/4.Prototype.html",
    "revision": "61a78a3975c6f3afe9f984d6a6759e3a"
  },
  {
    "url": "技术文章/设计模式/5.Adapter.html",
    "revision": "e49313cbcc329c1c4a725586737fdc73"
  },
  {
    "url": "技术文章/设计模式/6.Bridging.html",
    "revision": "304492f637fb2f60796445f22e165aa6"
  },
  {
    "url": "技术文章/设计模式/7.Facade.html",
    "revision": "5816de6f4ba939ec387413d3bdfded6d"
  },
  {
    "url": "技术文章/设计模式/8.Decorator.html",
    "revision": "94ee82bbbe8298d92238ef5e1f717ef6"
  },
  {
    "url": "技术文章/设计模式/9.Combination.html",
    "revision": "aefb369128a4af9ae3c445dcd86cde4f"
  },
  {
    "url": "生活分享/life.html",
    "revision": "fe4106e1cdddc0fc6b40e3ba53299aa8"
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
