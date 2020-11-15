import axios from 'axios';
const {storage} = window;
//https://addons-ecs.forgesvc.net/api/v2/addon/search?categoryId=0&gameId=432&gameVersion=1.16.3&index=0&pageSize=10&searchFilter=leaf&sectionId=6&sort=0

const baseUrl = 'https://addons-ecs.forgesvc.net/api/v2/addon/search';
const gameId = '432';
const sectionId = '6';
const categoryId = '0';
const sort = '0';

const storageConfigToString = (config) => {
    return config.gameId + '-' 
        + config.sectionId + '-' 
        + config.categoryId + '-'
        + config.gameVersion + '-'
        + config.pageSize + '-'
        + config.index + '-'
        + config.searchFilter + '-',
        + config.sort;
}

const checkCache = (config) => {
    const key = storageConfigToString(config);
    const cache = storage.get('cachedSearches')
    return cache[key];
}

export const createSearchConfig = (searchFilter, gameVersion, pageSize = 20, index = 0) => {
    return {
        gameId,
        sectionId,
        categoryId,
        gameVersion,
        pageSize,
        index,
        searchFilter,
        sort
    }
}

export const searchMods = async (config) => {
    const cachedValue = checkCache(config);
    if(cachedValue) {
        console.log('found in cache, using that');
        return cachedValue;
    }

    try {
        const resp = await axios.get(baseUrl, {params: config});
        console.log('caching result');
        storage.set('cachedSearches.' + storageConfigToString(config), resp.data);
        return resp.data;
    } catch (err) {
        console.log('err', err);
        return [];
    }
}