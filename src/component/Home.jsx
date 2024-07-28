import React from 'react'
import NavBar from './NavBar'
import Head from './Head'
import Header from './Header'
import Contents from './Contents'
import Footer from './Footer'


const Home = () => {
  return (
    <div  className='App'>
         <NavBar />
            <Head />
            <Header />
            <Contents />
            <Footer />
    </div>
  )
}

export default Home