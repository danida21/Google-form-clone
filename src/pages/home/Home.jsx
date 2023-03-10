import React from 'react'
import Header from '../../components/header/Header'
import MainBody from '../../components/mainBody/MainBody'
import Template from '../../components/template/Template'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Template />
      <MainBody />
    </div> 
  )
}

export default Home