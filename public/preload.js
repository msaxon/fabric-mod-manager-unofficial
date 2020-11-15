const Store = require('electron-store');
const storage = new Store();
console.log('storage', storage);

if(storage.get('cachedSearches') === undefined) {
    storage.set('cachedSearches', {});
}

if(storage.get('modpacks') === undefined) {
    storage.set('modpacks', []);
}

window.storage = storage