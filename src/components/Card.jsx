import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ props }) {
    return (
        <article>
            <header><a href={props['url']}>{props['name']}</a></header>
            <Link to={'/' + props['id']}><img src={props['imageURL']}></img></Link>
            <div>{props['description']}</div>
            <footer><Link to={'/edit/' + props['id']}><button className='contrast'>Edit Creator</button></Link></footer>
        </article>
    )
}