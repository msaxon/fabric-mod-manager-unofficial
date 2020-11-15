import React from 'react';
import { useHistory } from "react-router-dom";
import { useStorage } from '../../hooks/useStorage';
import {useStore} from '../../hooks/useStore';
import ModpackTile from './modpack-tile';

export default function HomePage() {
    const {modpacks} = useStore();
    const storage = useStorage();
    const history = useHistory();

    if(!storage.get('username')) {
        history.push('/setUsername');
    }

    return (
        <div>
            <h1>Fabric Mod Loader - Unofficial</h1>
            <div>
                <h2>{storage.get('username')} Modpacks</h2>
                {modpacks.map(mp => {
                    return <ModpackTile key={mp.displayName} modpack={mp}/>
                })}
                <button>New Modpack</button>
            </div>
        </div>
    );
}