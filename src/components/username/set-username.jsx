import React, {useState} from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useStorage } from '../../hooks/useStorage';

export default function SetUsername() {

    const [username, setUsername] = useState('');
    const history = useHistory();
    const storage = useStorage();

    const handleFieldChange = e => {
        setUsername(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        storage.set('username', username);
        history.push('/');
    }

    return (
        <div>
            <p>Please enter a username</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: &nbsp;
                    <input name='username' onChange={handleFieldChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}