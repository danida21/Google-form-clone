import { GiteSharp, Menu, Settings, HelpOutline } from '@mui/icons-material'
import { Drawer, IconButton, List, ListItem, ListItemText, Divider } from '@mui/material'
import React, { useState } from 'react'
import './TemporaryDrawer.css'
import Gdo from '../../assets/Gdo.png'
import Gdr from '../../assets/Gdr.png'
import Gsh from '../../assets/Gsh.png'
import Gsl from '../../assets/Gsl.png'
import logo from '../../assets/logo.png'



const TemporaryDrawer = () => {
    const [state, setState] = useState({
        left: false
    })

    const onToggleDrawer = (anchor, open) => (e) =>  {
        setState({...state, [anchor]: open})
    }

    const list = (anchor) => (
        <div style={{width: "250px" }} role='presentation'>
            <List>
                <ListItem>
                    <ListItemText style={{fontSize:'48px', marginLeft:'5px'}}>
                        <span style={{ color: "#122ea6", fontWeight: "700", fontSize: "22px", fontFamily: "'Product Sans', Arial, Sans-serif" }}>G</span>
                        <span style={{ color: "red", fontWeight: "500", fontSize: "22px", fontFamily: "'Product Sans', Arial, Sans-serif" }}>o</span>
                        <span style={{ color: "yellow", fontWeight: "500", fontSize: "22px", fontFamily: "'Product Sans', Arial, Sans-serif" }}>o</span>
                        <span style={{ color: "#122ea6", fontWeight: "500", fontSize: "22px", fontFamily: "'Product Sans', Arial, Sans-serif" }}>g</span>
                        <span style={{ color: "green", fontWeight: "500", fontSize: "22px", fontFamily: "'Product Sans', Arial, Sans-serif" }}>l</span>
                        <span style={{ color: "red", fontWeight: "500", fontSize: "22px", fontFamily: "'Product Sans', Arial, Sans-serif" }}>e</span>
                        <span style={{color: "#5f6368", fontWeight: "500", fontSize: "22px", fontFamily: "'Product Sans', Arial, Sans-serif"}}>        Forms</span>
                    </ListItemText>
                </ListItem>
            </List>

            <Divider />

            <List className='listDrawer'>
                <ListItem className='listItem'>
                    <img src={Gdo} alt='' className='ListItemImg' />
                    <div className="ListItemText">Docs</div>
                </ListItem>
                <ListItem className='listItem'>
                    <img src={Gsh} alt='' className='ListItemImg' />
                    <div className="ListItemText">Sheets</div>
                </ListItem>
                <ListItem className='listItem'>
                    <img src={Gsl} alt='' className='ListItemImg' />
                    <div className="ListItemText">Slides</div>
                </ListItem>

                <ListItem className='listItem'>
                    <img src={logo} alt='' className='ListItemImg' />
                    <div className="ListItemText">Forms</div>
                </ListItem>

            </List>

            <Divider />

            <List>
                <ListItem className='listItem'>
                    <Settings />
                    <div  style={{marginLeft: "20px",fontSize: "14px",fontWeight: "600",color: "gray"}}>Settings</div>            
                </ListItem>
                <ListItem className='listItem'>
                    <HelpOutline />
                    <div  style={{ marginLeft: "20px", fontSize: "14px", fontWeight: "600", color: "gray" }}>Help And Feedback</div>                   
                </ListItem>
            </List>

            <Divider />

            <List className='listDrawer'>
                <ListItem className='listItem'>
                    <img src={Gdr} alt=''  style={{width:"23px", height:"20"}} />
                    <div className="ListItemText">
                        Drive
                    </div>
                </ListItem>
            </List>
        </div>
    )
  return (
      <React.Fragment>
           <IconButton onClick={onToggleDrawer("left", true)}>
              <Menu />

              <Drawer open={state['left']} onClose={onToggleDrawer('left', false)} anchor={'left'}>
                 {list('left')}
              </Drawer>
          </IconButton>
      </React.Fragment>
  )
}

export default TemporaryDrawer