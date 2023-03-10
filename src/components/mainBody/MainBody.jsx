import { Box, IconButton } from '@mui/material'
import { ArrowDropDown, FolderOpen, MoreVert, Storage } from '@mui/icons-material'
import tem4 from '../../assets/tem4.png'
import './MainBody.css'
import React from 'react'

const MainBody = () => {
  return (
      <Box sx={{ backgroundColor: 'white', marginLeft: '160px', marginRight:'160px'}}>
          <Box sx={{ display: 'flex', marginTop: '15px', justifyContent: 'space-between', alignItems:'center'}}>
              <div className='main_top_left' style={{fontSize:'16px', fontWeight:'500'}}>Recent forms</div>
          
              <Box sx={{ display: 'flex', alignItems: 'center' }} >
                <Box sx={{fontSize:'14px',marginRight:'125px', display: 'flex', boxSizing: 'content-box', alignItems: 'center', padding: '3px 5px', borderRadius: '6px', fontSize: '16px'}}>
                    Owned by anyone<ArrowDropDown />
                  </Box>
                  <IconButton>
                    <Storage style={{ fontSize:'16px', color:'black'}}/>
                  </IconButton>
                  <IconButton>
                    <FolderOpen style={{fontSize:'16px', color:'black'}} />
                  </IconButton>
              </Box>
      </Box>
      <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', marginTop: '20px'}}>
        <Box className='card' sx={{display:'flex', flexDirection:'column', boxSizing: 'border-box', width:'200px', marginRight:'20px' }}>
          <img src={tem4} className='doc_img' style={{boxSizing: 'border-box', height: '150px', width:'198px'}} />
          <Box sx={{display:'flex', flexDirection: 'column', justifyContent:'space-between', padding:'18px'}}>
            <h5></h5>
            <Box  sx={{display:'flex',flexDirection:'row', justifyItems:'space-between',marginTop:'5px', fontSize: '12px', color:'grey'}} >
              <Box sx={{display:'flex', flexDirection:'row', alignItems: 'center'}}  >
                <Storage style={{color:'white', fontSize:'12px', backgroundColor:"#6e2594", padding:"3px", marginRight:"3px", borderRadius:"5px"}} />
              </Box>
              <MoreVert style={{fontSize: '16px', color:'grey'}} />
            </Box>
          </Box>
        </Box>
      </Box>
      
    </Box>
  )
}

export default MainBody