const Store = require('electron-store');

const schema = {
    username: {
        type: 'string'
    },
    modpack: {
        type: 'array'
    }
}
const store = new Store({schema});

export default store;