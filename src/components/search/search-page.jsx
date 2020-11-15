import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { minecraftVersions } from '../../data/versions';
import { useSelectedModpack } from '../../hooks/useSelectedModpack';
import { useStorage } from '../../hooks/useStorage';
import { createSearchConfig, searchMods } from '../../services/twitch-services';

export default function SearchPage() {
    const [search, setSearch] = useState('');
    const [version, setVersion] = useState('');
    const [foundMods, setFoundMods] = useState([]);
    const history = useHistory();
    const selectedModpack = useSelectedModpack();
    const storage = useStorage();

    console.log('searchMods', search);
    console.log('foundMods', foundMods);

    const searchForMods = async () => {
        const config = createSearchConfig(search, version);
        const response = await searchMods(config);
        setFoundMods(response);
    }

    const addModToModpack = () => {

    }

    if(!selectedModpack) {
        history.push('/');
    }

    return (
        <div>
            <h2>Editing Modpack</h2>
            <input onChange={(e) => setSearch(e.target.value)}/>
            <select onChange={(e) => setVersion(e.target.value)}>
                {minecraftVersions.map(v => {
                    return <option value={v}>{v}</option>
                })}
            </select>
            <button onClick={searchForMods}>Search</button>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Add</th>
                </tr>
                {foundMods.map(mod => {
                    let button = <button>Add</button>;
                    if(selectedModpack.mods.filter(m => m.id === mod.id).length > 0) {
                        button = <button>Remove</button>;
                    }
                    return (
                        <tr>
                            <td>{mod.name}</td>
                            <td>{mod.summary}</td>
                            <td>
                                {button}
                            </td>
                        </tr>
                        
                    );
                })}
            </table>
        </div>
    );
}