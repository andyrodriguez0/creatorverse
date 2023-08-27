import React from 'react';
import Card from '../components/Card';
import { useParams } from 'react-router-dom';
import supabase from '../client.js';

export default function ViewCreator() {
    const { id } = useParams();
    const [creator, setCreator] = React.useState(null);

    React.useEffect(() => {
        async function getCreator() {
        const { data, error } = await supabase
            .from('creators')
            .select()
            .eq('id', id)
        setCreator(data);
        }
        getCreator();
        }, [])

    if (creator === null) {return}

    return (
        <>
            {creator.length > 0 ? <Card props={creator[0]}/> : <div>There is no creator with that ID!</div>}
        </>
    )
}