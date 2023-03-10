import React from 'react'
import './Tabs.css'
import {Paper, Tabs, Tab } from '@mui/material'



const Tabss = () => {
 
  return (
    <Paper className='root'>
      <Tabs
        className='tabs'
        textColor='primary'
        indicateColor='primary'
        centered
      >
        <Tab label='Questions' className='tab'></Tab>
        <Tab label='Responses' className='tab'></Tab>
      </Tabs>
    </Paper>
  )
}

export default Tabss