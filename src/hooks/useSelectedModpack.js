import { modpackArr } from '../data/mock-data';
import { useStorage } from './useStorage';
import { useStore } from './useStore';

export const useSelectedModpack = () => {
    const {selectedModpack} = useStore();
    const storage = useStorage();
    const modpack = storage.get('modpacks')[selectedModpack];
    return modpack;
}