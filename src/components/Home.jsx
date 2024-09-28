import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex h-screen justify-center items-centre bg-red-100' >
            <h1 className='text-4xl font-semibold uppercase' >Safe Shetra</h1>
            <Link to={'/W'} >
            Weather page
            </Link>
        </div>
    )
}

export default Home