module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
      name: 'To-Do',
      themeColor: '#FFFFFF',
      msTileColor: '#FFFFFF',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'white',
      iconPaths: {
          favicon32: 'img/icons/favicon.png',
          favicon16: 'img/icons/favicon.png',
          appleTouchIcon: 'img/icons/favicon.png',
          maskIcon: 'img/icons/favicon.png',
          msTileImage: 'img/icons/favicon.png'
      },
      manifestOptions: {
          icons: [
            {
                "src": "./img/icons/favicon.png",
                "sizes": "192x192",
                "type": "image/png"
              },
              {
                "src": "./img/icons/favicon.png",
                "sizes": "512x512",
                "type": "image/png"
              },
              {
                "src": "./img/icons/favicon.png",
                "sizes": "192x192",
                "type": "image/png",
                "purpose": "maskable"
              },
              {
                "src": "./img/icons/favicon.png",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "maskable"
              }
          ]
      },
  
      // configure the workbox plugin
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'src/registerServiceWorker.js',
        // ...other Workbox options...
      }
    }
  }