import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from '../../hooks/useStore';
import { setSelectedModpack } from '../../state/actions';

export default function ModpackTile({modpack}) {

    const history = useHistory();
    const dispatch = useDispatch();
    

    return (
        <div key={modpack.id}>
            <h3>{modpack.displayName}</h3>
            <button 
                onClick={() => {
                    console.log('setting id', modpack.id);
                    dispatch(setSelectedModpack(modpack.id))
                    history.push('/view')
                }}
            >
                View/Edit
            </button>
            <button>Delete</button>
        </div>
    );
}