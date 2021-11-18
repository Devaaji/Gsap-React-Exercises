import React from 'react'
import './home.css'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import Project from '../components/project/Project'

function Home() {
    return (
        <>
        <div className="bg-color">
        <Navbar/>
        <Header/>
        </div>
        <Project/>
        </>
    )
}

export default Home
