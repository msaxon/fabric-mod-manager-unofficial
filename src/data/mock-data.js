import Mod from '../data/mod';
import ModPack from './modpack';

const mod1 = new Mod('a', 'Fast Leaf Decay', 'fast_leaf-decay.jar', 'www.dowload.com', true, '1.16.4');
const mod2 = new Mod('a', 'WAILA', 'WAILA.jar', 'www.dowload.com', true, '1.16.4');
const mod3 = new Mod('a', 'Mekanism', 'mekanism.jar', 'www.dowload.com', true, '1.16.4');

const modpack1 = new ModPack('1', 'Modpack 1', [mod1, mod2, mod3]);
const modpack2 = new ModPack('2', 'RL Craft', [mod2, mod3]);

export const modpackArr = [modpack1, modpack2];