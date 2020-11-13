import React from 'react';
import {useStore} from '../../hooks/useStore';

export default function HomePage() {
    console.log('rendering');

    const store = useStore();
    const text = store.username ? store.username : 'IDK ur name. Pls tell';

    return (
        <div>
            <h2>Fabric Mod Loader - Unofficial</h2>
            <p>{text}</p>
        </div>
    );
}