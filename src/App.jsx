import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

export default function App() {
  return (
    <>
      <div className='grid'>
        <Link to='/'><button>Show All Creators</button></Link>
        <Link to='/add'><button>Add Creator</button></Link>
      </div>
      <Routes>
        <Route exact path="/" element={<ShowCreators />} />
        <Route exact path="/:id" element={<ViewCreator />} />
        <Route exact path="/edit/:id" element={<EditCreator />} />
        <Route exact path="/add" element={<AddCreator />} />
      </Routes>
    </>
  )
}