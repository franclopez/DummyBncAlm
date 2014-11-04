cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    },
    {
        "file": "plugins/com.tcs.cordova.plugins.encryptedstorage/www/encryptedstorage.js",
        "id": "com.tcs.cordova.plugins.encryptedstorage.Encrypted",
        "clobbers": [
            "tcs.EncryptedStorage"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/console-via-logger.js",
        "id": "org.apache.cordova.console.console",
        "clobbers": [
            "console"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/logger.js",
        "id": "org.apache.cordova.console.logger",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/com.shazron.cordova.plugin.keychainutil/www/keychain.js",
        "id": "com.shazron.cordova.plugin.keychainutil.Keychain",
        "clobbers": [
            "window.Keychain"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.socialsharing/www/SocialSharing.js",
        "id": "nl.x-services.plugins.socialsharing.SocialSharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.ionic.keyboard": "1.0.2",
    "com.tcs.cordova.plugins.encryptedstorage": "0.0.1-SNAPSHOT",
    "org.apache.cordova.console": "0.2.10",
    "org.apache.cordova.device": "0.2.11",
    "com.shazron.cordova.plugin.keychainutil": "1.0.0",
    "nl.x-services.plugins.socialsharing": "4.3.6",
    "org.apache.cordova.inappbrowser": "0.5.3-dev"
}
// BOTTOM OF METADATA
});