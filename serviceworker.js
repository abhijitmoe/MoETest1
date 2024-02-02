importScripts("https://cdn.moengage.com/webpush/releases/serviceworker_cdn.min.latest.js");
importScripts('https://cdn.ampproject.org/sw/amp-sw.js');

AMP_SW.init({
  assetCachingOptions: [
    {
      regexp: /\.(png|jpg|woff2|woff|css|js)/,
      cachingStrategy: 'CACHE_FIRST' // options are NETWORK_FIRST | CACHE_FIRST | STALE_WHILE_REVALIDATE
    }
  ],
  offlinePageOptions: {
    url: '/offline',
    assets: []
  }
});
