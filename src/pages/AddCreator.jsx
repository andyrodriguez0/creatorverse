import React from 'react';
import supabase from '../client.js';
import { Link } from 'react-router-dom';

export default function AddCreator() {
    const [name, setName] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [imageUrl, setImageUrl] = React.useState('');

    async function createCreator() {
        const { error } = await supabase
            .from('creators')
            .insert({ name: name, url: url, description: description, imageURL: imageUrl })
    }

    return (
        <form>
            <div className='grid'>
                <label htmlFor='name'>Name: <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} /></label>
                <label htmlFor='url'>URL: <input type="text" id='url' value={url} onChange={(e) => setUrl(e.target.value)} /></label>
            </div>
            <div className='grid'>
                <label htmlFor='description'>Description: <input type="text" id='description' value={description} onChange={(e) => setDescription(e.target.value)} /></label>
                <label htmlFor='imageUrl'>Image URL: <input type="text" id='imageUrl' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} /></label>
            </div>
            <Link to='/'><button onClick={() => createCreator()} type='submit'>Submit</button></Link>
        </form>
    )
}