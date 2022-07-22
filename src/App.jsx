import React from 'react'
import Header from './components/Header/header'
import ActivityButtons from './components/ActivityButtons/activityButtons'
import Table1 from './components/Table1/Table1'
import Footer from './components/Footer/footer'



const App = () => {
  return (
    <>
      <Header />
      <Table1 />
      <ActivityButtons/>
      <Footer/>
    </>
  )
}

export default App;