import React from 'react';
import Card from '../components/Card';
import supabase from '../client.js';

export default function ShowCreators() {
    const [creators, setCreators] = React.useState(null);

    React.useEffect(() => {
      async function getCreators() {
        const { data, error } = await supabase
          .from('creators')
          .select()
        setCreators(data);
      }
      getCreators();
      }, [])
  
    if (creators === null) {return}
    
    let cards = [];
    for (let i = 0; i < creators.length; i++) {
        cards.push(
            <Card props={creators[i]} key={i}/>
        )
    }

    return (
        <div className='container'>
            {cards.length > 0 ? cards : 'No Creators Added Yet!'}
        </div>
    )
}