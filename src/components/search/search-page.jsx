import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useSelectedModpack } from '../../hooks/useSelectedModpack';
import { createSearchConfig, searchMods } from '../../services/twitch-services';

export default function SearchPage() {
    const [search, setSearch] = useState('');
    const [foundMods, setFoundMods] = useState([]);
    const history = useHistory();
    const selectedModpack = useSelectedModpack();

    console.log('searchMods', search);
    console.log('foundMods', foundMods);

    const searchForMods = async () => {
        const config = createSearchConfig(search, '1.16.3');
        const response = await searchMods(config);
        setFoundMods(response);
    }

    if(!selectedModpack) {
        history.push('/');
    }

    return (
        <div>
            <h2>Editing Modpack</h2>
            <input onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={searchForMods}>Search</button>
            <ul>
                {foundMods.map(mod => {
                    return <li>{mod.name}</li>
                })}
            </ul>
        </div>
    );
}