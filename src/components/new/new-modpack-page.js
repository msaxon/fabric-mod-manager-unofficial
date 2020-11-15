import React, {useState} from 'react';
import { useStorage } from '../../hooks/useStorage';
import { v4 as uuidv4 } from 'uuid';
import ModPack from '../../data/modpack';
import { useHistory } from 'react-router-dom';

export default function NewModpackPage() {
    const [name, setName] = useState('');
    const history = useHistory();
    const storage = useStorage();

    const saveModpack = () => {
        const modpack = new ModPack(uuidv4(), name);
        storage.set({
            modpacks: {
                [modpack.id]: modpack
            }
        })
        // storage.set('modpacks.' + modpack.id, modpack);
        console.log(storage.get('modpacks'));
        history.push('/');
    }

    return (
        <div>
            <h2>Enter Modpack Name</h2>
            <input onChange={(e) => setName(e.target.value)} />
            <button onClick={saveModpack}>Save</button>
        </div>
    );
}