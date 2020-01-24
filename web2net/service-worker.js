var PreCacheName = "web2net-v2";
var CacheUrl = [
    'index.html'
];

self.addEventListener('install', function (event)
{
    event.waitUntil(caches.open(PreCacheName).then(function (cache)
    {
        cache.addAll(CacheUrl).then(self.skipWaiting());
    }))
});

self.addEventListener('activate', function (event)
{
    event.waitUntil(caches.keys().then(function (cacheNames)
    {
        return Promise.all(cacheNames.map(function (key)
        {
            if (PreCacheName.indexOf(key) === -1)
            {
                return caches.delete(key);
            }
        }));
    }));

});

self.addEventListener('fetch', function (event)
{
    //if (event.request.method !== 'GET')
    //{
    //    console.log('WORKER: fetch event ignored.', event.request.method, event.request.url);
    //}

    //event.respondWith(caches.match(event.request).then(function (response)
    //    {
    //        if (response)
    //        {
    //            return response;
    //        }
    //        return fetch(event.request).then(function (response)
    //        {
    //            if (response.status === 404)
    //            {
    //                return caches.match('pages/404.html');
    //            }
    //            return response
    //        });
    //    }).catch(function ()
    //    {
    //        return caches.match('/offline.html');
    //    })
    //);

    //event.respondWith(
    //     Try the cache
    //    caches.match(event.request).then(function (response)
    //    {
    //        if (response)
    //        {
    //            return response;
    //        }
    //        return fetch(event.request).then(function (response)
    //        {
    //            if (response.status === 404)
    //            {
    //                return caches.match('pages/404.html');
    //            }
    //            return response
    //        });
    //    }).catch(function ()
    //    {
    //         If both fail, show a generic fallback:
    //        return caches.match('/offline.html');
    //    })
    //);



    event.respondWith(caches.open(PreCacheName).then(function (cache)
    {
        return cache.match(event.request).then(function (response)
        {
            return response || fetch(event.request).then(function (response)
            {
                cache.put(event.request, response.clone());
                return response;
            });
        });
    })
    );
});