import { useStore } from './useStore';

export const useSelectedModpack = () => {
    const {selectedModpack, modpacks} = useStore();
    const modpack = modpacks.filter(mp => mp.id === selectedModpack)[0];
    return modpack;
}