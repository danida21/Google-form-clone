import React from 'react'
import { Avatar, Box, IconButton,Button } from '@mui/material'
import { FolderOpenOutlined, RemoveRedEyeOutlined, StarBorderOutlined, Settings, MoreVert, ColorLensOutlined  } from '@mui/icons-material'
import logo from '../../assets/logo.png'
import './FormHeader.css'
const FormHeader= () => {
  return (
      <Box sx={{display:'flex', justifyContent: 'space-between', margin:"5px 15px 5px 15px", backgroundColor:"#fff"}}>
          <Box sx={{display:'flex', alignItems: 'center',justifyContent:'space-between'}}>
              <img src={logo} alt='' style={{ width: "35px", height: '40Px', marginRight:'10px' }} /> 
              <input type='text' placeholder='untitled form' className='form_name'  />
              <FolderOpenOutlined className='form_header_icon' style={{ marginRight: "10px" }} />
              <StarBorderOutlined className='form_header_icon' style={{ marginRight: '10px' }} />
              <span style={{fontSize:'12px', fontWeight:'600'}}>All Changes saved in Drive</span>
          </Box>
          <Box sx={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
              <IconButton>
                <ColorLensOutlined size='small' className='form_header_icon' />
              </IconButton>
              <IconButton>
                  <RemoveRedEyeOutlined className='form_header_icon' />
              </IconButton>
              <IconButton>
                  <Settings className='form_header_icon' />
              </IconButton>
              <Button variant="contained" color="primary" href="#contained-buttons">Send</Button>
              <IconButton>
                  <MoreVert className='form_header_icon' />
              </IconButton>
              <IconButton>
                  <Avatar style={{height:'30px',width:'30px'}}/>
              </IconButton>
          </Box>
    </Box>
  )
}

export default FormHeader