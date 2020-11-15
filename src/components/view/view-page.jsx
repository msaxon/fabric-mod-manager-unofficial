import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelectedModpack } from '../../hooks/useSelectedModpack';
import { useStore } from '../../hooks/useStore';

export default function ViewPage() {
    const history = useHistory();
    const modpack = useSelectedModpack();

    const goToSearchPage = () => {
        history.push('/search');
    }

    if(!modpack) {
        history.push('/');
    }
    return (
        <div>
            <h1>View Modpack</h1>
            <p>Name: {modpack.displayName}</p>
            <div>
                <p>Mods</p>
                <ul>
                    {modpack.mods.map(mod => {
                        return <li>{mod.displayName}</li>
                    })}
                </ul>
            </div>
            <button onClick={goToSearchPage}>Add More Mods</button>
        </div>
    );
}