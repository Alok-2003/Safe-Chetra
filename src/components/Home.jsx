import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Home = () => {
    return (
        <div className='flex h-screen justify-center items-centre bg-red-100' >
            <div>
                <h1 className='text-4xl font-semibold uppercase mb-20' >Safe Shetra</h1>
                <Link className='block text-xl text-center ' to={'/W'} >
                    Weather page
                </Link>
                <Link className='block text-xl text-center ' to={'/login'} >
                    Login
                </Link>
                <Link className='block text-xl text-center ' to={'/dashboard'} >
                    Dashboard
                </Link>
            </div>
        </div>
    )
}

export default Home