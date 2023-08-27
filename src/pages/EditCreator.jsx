import React from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../client.js';
import { Link } from 'react-router-dom';

export default function EditCreator() {
    const { id } = useParams();
    const [name, setName] = React.useState(null);
    const [url, setUrl] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const [imageUrl, setImageUrl] = React.useState(null);

    async function updateCreator() {
        const { error } = await supabase
            .from('creators')
            .update({ name: name, url: url, description: description, imageURL: imageUrl })
            .eq('id', id)
    }

    async function deleteCreator() {
        const { error } = await supabase
            .from('creators')
            .delete()
            .eq('id', id)
    }

    React.useEffect(() => {
        async function getCreator() {
        const { data, error } = await supabase
            .from('creators')
            .select()
            .eq('id', id)
        setName(data[0]['name']);
        setUrl(data[0]['url']);
        setDescription(data[0]['description']);
        setImageUrl(data[0]['imageURL']);
        }
        getCreator();
        }, [])

    if (name === null) {return}

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
            <Link to='/'><button onClick={() => updateCreator()}>Submit</button></Link>
            <Link to='/'><button onClick={() => deleteCreator()}>Delete</button></Link>
        </form>
    )
}