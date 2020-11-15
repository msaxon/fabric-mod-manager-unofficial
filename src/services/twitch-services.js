import axios from 'axios';
//https://addons-ecs.forgesvc.net/api/v2/addon/search?categoryId=0&gameId=432&gameVersion=1.16.3&index=0&pageSize=10&searchFilter=leaf&sectionId=6&sort=0


const baseUrl = 'https://addons-ecs.forgesvc.net/api/v2/addon/search';
const gameId = '432';
const sectionId = '6';
const categoryId = '0';
const sort = '0';

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
    try {
        const resp = await axios.get(baseUrl, {params: config});
        console.log('resp', resp);
        return resp.data;
    } catch (err) {
        console.log('err', err);
        return [];
    }
    
    // const {body} = await got.get(baseUrl, {searchParams: config});
    // return body;
}