cordova.define("com.tcs.cordova.plugins.encryptedstorage.Encrypted", function(require, exports, module) { // 0.0.1-SNAPSHOT
var argscheck = require('cordova/argscheck'),
    exec = require("cordova/exec");

/**
 * The EncryptedStorage class is used as a secure local store.  The EncryptedStorage API is based on the
 * W3C web storage API, but has two major differences: it is asynchronous, and it has a constructor with
 * a password.<br/>
 * <br/>
 * Note: There is a security flaw on some versions of Android with the Pseudo Random Number Generation.
 * The first time the native code of this plugin runs it applies the fix for this issue.  However, the
 * fix needs to be applied before any use of Java Cryptography Architecture primitives.  Therefore, it
 * is a good idea to run this plugin (call a function that has a native component: length, key, getItem,
 * setItem, removeItem, clear) before using any other security-related plugin, to protect yourself
 * against the possibility that the other plugin does not apply this fix. No other plugins are
 * affected, so you need not do this on their behalf.  For more details about the security flaw, see
 * <a href="http://android-developers.blogspot.com/2013/08/some-securerandom-thoughts.html">
 * http://android-developers.blogspot.com/2013/08/some-securerandom-thoughts.html</a><br/>
 * <br/>
 * <b>Adding and Removing the EncryptedStorage Plugin</b><br/>
 * The EncryptedStorage plugin is added and removed using the
 * <a href="http://cordova.apache.org/docs/en/edge/guide_cli_index.md.html#The%20Command-line%20Interface">Cordova CLI</a>.<br/>
 * <br/>
 * To add the EncryptedStorage plugin to your project, use the following command:<br/>
 * cordova plugin add <path to directory containing plugin>\encryptedstorage<br/>
 * <br/>
 * To remove the EncryptedStorage plugin from your project, use the following command:<br/>
 * cordova plugin rm com.tcs.cordova.plugins.encryptedstorage
 * @namespace
 * @alias EncryptedStorage
 * @memberof tcs
 * @param {String} storeName The name of the store to create.  All stores with different names
 * act independently, while stores with the same name (and same password) act as the same store.
 * If null or undefined is passed, an empty string is used.
 * @param {String} password The password of the store to create.  If null or undefined is passed,
 * an empty string is used.
 */
EncryptedStorage = function (storeName, password) {
    // private variables
    var that = this;
    var storagePassword = password ? password : "";
    var storageName = storeName ? storeName : "";

    // privileged functions

    /**
     * This function gets the length of the store.  The length of a store
     * is the number of key/value pairs that are in the store.
     * @param {tcs.EncryptedStorage~lengthSuccessCallback} successCallback If successful,
     * the successCallback is invoked with the length of the store as
     * the parameter.
     * @param {tcs.EncryptedStorage~errorCallback} errorCallback If there is an error,
     * the errorCallback is invoked with an ErrorInfo object as the parameter.
	 * @memberof tcs.EncryptedStorage
	 * @function length
	 * @instance
     * @example
     * var store = new tcs.EncryptedStorage("storeName", "storePassword");
     * var successCallback = function(length) {
     *    alert("Length is " + length);
     * }
     * var errorCallback = function(error) {
     *    alert("An error occurred: " + JSON.stringify(error));
     * }
     * store.length(successCallback, errorCallback);
     */
    this.length = function (successCallback, errorCallback) {
		try{
			argscheck.checkArgs('FF', 'EncryptedStorage.length', arguments);
		}catch(ex){
			errorCallback(this.ERROR_INVALID_PARAMETER);
			return;
		}

        cordova.exec(successCallback, errorCallback, "EncryptedStorage",
            "length", [storageName, storagePassword]);
    }

    /**
     * This function gets the key corresponding to the given index.
     * @param {number} index The index of the store for which to get the key.
     * Valid indices are integers from zero (the first index), up to, but not including,
     * the length of the store.  If the index is out of bounds, then the success
     * callback is invoked with null as the parameter.
     * @param {tcs.EncryptedStorage~keySuccessCallback} successCallback If successful,
     * the successCallback is invoked with the key as the parameter.
     * @param {tcs.EncryptedStorage~errorCallback} errorCallback If there is an error,
     * the errorCallback is invoked with an ErrorInfo object as the parameter.
	 * @memberof tcs.EncryptedStorage
	 * @function key
	 * @instance
     * @example
     * // This example shows how to get the key for the last item.
     * var store = new tcs.EncryptedStorage("storeName", "storePassword");
     * var errorCallback = function( error ){
     *    alert("An error occurred: " + JSON.stringify(error));
     * }
     * var keySuccessCallback = function(key) {
     *    alert("Last key is " + key);
     * }
     * var lengthSuccessCallback = function(length) {
     *    store.key(length - 1, keySuccessCallback, errorCallback);
     * }
     * store.length(lengthSuccessCallback, errorCallback);
     */
    this.key = function (index, successCallback, errorCallback) {
		try{
			argscheck.checkArgs('NFF', 'EncryptedStorage.key', arguments);
		}catch(ex){
			errorCallback(this.ERROR_INVALID_PARAMETER);
			return;
		}

        cordova.exec(successCallback, errorCallback, "EncryptedStorage",
            "key", [storageName, storagePassword, index]);
    }

    /**
     * This function gets the value corresponding to the given key.  If there is no
     * item with the given key, then the success callback is invoked with null as
     * the parameter.
     * @param {String} key The key of the item for which to get the value.  If null or undefined is
     * passed, "null" is used.
     * @param {tcs.EncryptedStorage~getItemSuccessCallback} successCallback If successful,
     * the successCallback is invoked with the value as the parameter (or null if the key
     * did not exist).
     * @param {tcs.EncryptedStorage~errorCallback} errorCallback If there is an error,
     * the errorCallback is invoked with an ErrorInfo object as the parameter.
	 * @memberof tcs.EncryptedStorage
	 * @function getItem
	 * @instance
     * @example
     * var store = new tcs.EncryptedStorage("storeName", "storePassword");
	 * var successCallback = function(value) {
	 *    alert("Value is " + value);
	 * }
	 * var errorCallback = function(error) {
	 *    alert("An error occurred: " + JSON.stringify(error));
	 * }
     * store.getItem("theKey", successCallback, errorCallback);
     */
    this.getItem = function (key, successCallback, errorCallback) {
		try{
			argscheck.checkArgs('SFF', 'EncryptedStorage.getItem', arguments);
		}catch(ex){
			errorCallback(this.ERROR_INVALID_PARAMETER);
			return;
		}
		
        cordova.exec(successCallback, errorCallback, "EncryptedStorage",
            "getItem", [storageName, storagePassword, key]);
    }

    /**
     * This function sets an item with the given key and value.  If no item exists with
     * the given key, then a new item is created.  If an item does exist with the
     * the given key, then its value is overwritten with the given value.<br/>
	 * <br/>
	 * Note: On Android there is a size limit on the string to be stored.  See
	 * {@link tcs.EncryptedStorage#SIMPLE_STRING_MAXIMUM_LENGTH} and {@link tcs.EncryptedStorage#COMPLEX_STRING_MAXIMUM_LENGTH}
	 * for more details.
     * @param {String} key The key of the item to set.  If null or undefined is passed,
     * "null" is used.
     * @param {String} value The value of the item to set.  If null or undefined is passed,
     * "null" is used.
     * @param {tcs.EncryptedStorage~successCallback} successCallback If successful,
     * the successCallback is invoked with no parameters.
     * @param {tcs.EncryptedStorage~errorCallback} errorCallback If there is an error,
     * the errorCallback is invoked with an ErrorInfo object as the parameter.
	 * @memberof tcs.EncryptedStorage
	 * @function setItem
	 * @instance
     * @example
     * var store = new tcs.EncryptedStorage("storeName", "storePassword");
	 * var successCallback = function() {
	 *    alert("Item has been set.");
	 * }
	 * var errorCallback = function(error) {
	 *    alert("An error occurred: " + JSON.stringify(error));
	 * }
     * store.setItem("somekey", "somevalue", successCallback, errorCallback);
     */
    this.setItem = function (key, value, successCallback, errorCallback) {
		try{
			argscheck.checkArgs('SSFF', 'EncryptedStorage.setItem', arguments);
		}catch(ex){
			errorCallback(this.ERROR_INVALID_PARAMETER);
			return;
		}
		
        cordova.exec(successCallback, errorCallback, "EncryptedStorage",
            "setItem", [storageName, storagePassword, key, value]);
    }

    /**
     * This function removes the item corresponding to the given key.  If there is no
     * item with the given key in the first place, that is still counted as a success.
     * @param {String} key The key of the item to remove.  If null or undefined is
     * passed, "null" is used.
     * @param {tcs.EncryptedStorage~successCallback} successCallback If successful,
     * the successCallback is invoked with no parameters.
     * @param {tcs.EncryptedStorage~errorCallback} errorCallback If there is an error,
     * the errorCallback is invoked with an ErrorInfo object as the parameter.
	 * @memberof tcs.EncryptedStorage
	 * @function removeItem
	 * @instance
     * @example
     * var store = new tcs.EncryptedStorage("storeName", "storePassword");
     * var successCallback = function() {
     *    alert("Value removed");
     * }
     * var errorCallback = function(error) {
     *    alert("An error occurred: " + JSON.stringify(error));
     * }
     * store.removeItem("somekey", successCallback, errorCallback);
     */
    this.removeItem = function (key, successCallback, errorCallback) {
		try{
			argscheck.checkArgs('SFF', 'EncryptedStorage.removeItem', arguments);
		}catch(ex){
			errorCallback(this.ERROR_INVALID_PARAMETER);
			return;
		}
		
        cordova.exec(successCallback, errorCallback, "EncryptedStorage",
            "removeItem", [storageName, storagePassword, key]);
    }

    /**
     * This function removes all items from the store.  If there are no
     * items in the store in the first place, that is still counted as a success.
     * @param {tcs.EncryptedStorage~successCallback} successCallback If successful,
     * the successCallback is invoked with no parameters.
     * @param {tcs.EncryptedStorage~errorCallback} errorCallback If there is an error,
     * the errorCallback is invoked with an ErrorInfo object as the parameter.
	 * @memberof tcs.EncryptedStorage
	 * @function clear
	 * @instance
     * @example
     * var store = new tcs.EncryptedStorage("storeName", "storePassword");
     * var successCallback = function() {
     *    alert("Store cleared!");
     * }
     * var errorCallback = function(error) {
     *    alert("An error occurred: " + JSON.stringify();
     * }
     * store.clear(successCallback, errorCallback);
     */
    this.clear = function (successCallback, errorCallback) {
		try{
			argscheck.checkArgs('FF', 'EncryptedStorage.clear', arguments);
		}catch(ex){
			errorCallback(this.ERROR_INVALID_PARAMETER);
			return;
		}
		
        cordova.exec(successCallback, errorCallback, "EncryptedStorage",
            "clear", [storageName, storagePassword]);
    }
};

// Error codes
/**
 * This error code indicates an unknown error occurred.
 * @memberof tcs.EncryptedStorage
 * @name tcs.EncryptedStorage#ERROR_UNKNOWN
 * @constant
 */
EncryptedStorage.prototype.ERROR_UNKNOWN = 0;
/**
 * This error code indicates an invalid parameter was provided.
 * (eg: a string given where a number was required).
 * @memberof tcs.EncryptedStorage
 * @name tcs.EncryptedStorage#ERROR_INVALID_PARAMETER
 * @constant
 */
EncryptedStorage.prototype.ERROR_INVALID_PARAMETER = 1;
/**
 * This error code indicates that the operation failed due to an incorrect password.  The password is
 * set by the constructor of {@link EncryptedStorage}.
 * @memberof tcs.EncryptedStorage
 * @name tcs.EncryptedStorage#ERROR_BAD_PASSWORD
 * @constant
 */
EncryptedStorage.prototype.ERROR_BAD_PASSWORD = 2;
/**
 * This error indicates that the string was too large to store. Only applies to Android.  
 * For iOS, no hard limit is imposed, but be aware of device memory constraints.
 * @memberof tcs.EncryptedStorage
 * @name tcs.EncryptedStorage#ERROR_GREATER_THAN_MAXIMUM_SIZE
 * @constant
 */
EncryptedStorage.prototype.ERROR_GREATER_THAN_MAXIMUM_SIZE = 3;
/**
 * This constant is the length of the largest string that can successfully be stored on Android.  Only if all the
 * characters in the string are encoded in 1 byte in UTF-8 can a string actually be this big.  Since
 * characters in UTF-8 can take up to 4 bytes, if you do not know the contents of a string, the maximum
 * length that is guaranteed to be successful is {@link EncryptedStorage.COMPLEX_STRING_MAXIMUM_LENGTH}, which is
 * {@link EncryptedStorage.SIMPLE_STRING_MAXIMUM_LENGTH}/4.  Note that this size restriction is present only on
 * Android and not iOS.
 * @memberof tcs.EncryptedStorage
 * @name tcs.EncryptedStorage#SIMPLE_STRING_MAXIMUM_LENGTH
 * @constant
 */
EncryptedStorage.prototype.SIMPLE_STRING_MAXIMUM_LENGTH = 1048542;
/**
 * This constant is the length of the largest string that is guaranteed to be successfully stored on Android.  The
 * limit depends on how many bytes the string takes up when encoded with UTF-8 (under which encoding
 * characters can take up to 4 bytes).  This is the maximum length of a string for which every character
 * takes all 4 bytes.  Note that this size restriction is present only on Android and not iOS.
 * @memberof tcs.EncryptedStorage
 * @name tcs.EncryptedStorage#COMPLEX_STRING_MAXIMUM_LENGTH
 * @constant
 */
EncryptedStorage.prototype.COMPLEX_STRING_MAXIMUM_LENGTH = 262135;

module.exports = EncryptedStorage;


/**
 * Callback function that is invoked on a successful call to a function that does
 * not need to return anything.
 *
 * @callback tcs.EncryptedStorage~successCallback
 */

/**
 * Callback function that is invoked on a successful call to {@link EncryptedStorage.length}.
 *
 * @callback tcs.EncryptedStorage~lengthSuccessCallback
 *
 * @param {number} length The number of key/value pairs in the store.
 */

/**
 * Callback function that is invoked on a successful call to {@link EncryptedStorage.key}.
 * If the key returned is null that means the index passed to {@link EncryptedStorage.key} was out of bounds.
 *
 * @callback tcs.EncryptedStorage~keySuccessCallback
 *
 * @param {String} key The key corresponding to the given index.  Will be null if the index passed to
 * {@link EncryptedStorage.key} was out of bounds.
 */

/**
 * Callback function that is invoked on a successful call to {@link EncryptedStorage.getItem}.
 * If the returned value is null, that means the key passed to {@link EncryptedStorage.getItem} did not exist.
 *
 * @callback tcs.EncryptedStorage~getItemSuccessCallback
 *
 * @param {String} value The value of the item with the given key.  Will be null if the key passed to
 * {@link EncryptedStorage.getItem} did not exist.
 */

/**
 * Callback function that is invoked in case of an error.
 *
 * @callback tcs.EncryptedStorage~errorCallback
 *
 * @param {number} errorCode An error code indicating what went wrong.  Will be one of {@link tcs.EncryptedStorage#ERROR_UNKNOWN},
 * {@link tcs.EncryptedStorage#ERROR_INVALID_PARAMETER}, {@link tcs.EncryptedStorage#ERROR_BAD_PASSWORD}, or
 * {@link tcs.EncryptedStorage#ERROR_GREATER_THAN_MAXIMUM_SIZE}.
 *
 * @example
 * function errorCallback(errCode) {
 *    //Set the default error message. Used if an invalid code is passed to the
 *    //function (just in case) but also to cover the
 *    //tcs.EncryptedStorage.ERROR_UNKNOWN case as well.
 *    var msg = "Unkown Error";
 *    switch (errCode) {
 *       case tcs.EncryptedStorage.ERROR_INVALID_PARAMETER:
 *          msg = "Invalid parameter passed to method";
 *          break;
 *       case tcs.EncryptedStorage.ERROR_BAD_PASSWORD :
 *          msg = "Incorrect password";
 *          break;
 *       case tcs.EncryptedStorage.ERROR_GREATER_THAN_MAXIMUM_SIZE:
 *          msg = "Item (string) value too large to write to store";
 *          break;
 *    };
 *    //Write the error to the log
 *    console.error(msg);
 *    //Let the user know what happened
 *    navigator.notification.alert(msg, null, "EncryptedStorage Error", "OK");
 * };
 */
});
