import { MoreVert, UnfoldMore } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import tem1 from '../../assets/tem1.png'
import tem2 from '../../assets/tem2.png'
import tem3 from '../../assets/tem3.png'

import './Template.css'
import uuid from 'react-uuid'
import {useNavigate} from 'react-router-dom'

const Template = () => {
  const navigate = useNavigate()
  
  const createForm = () => {
    const id_ = uuid();

    navigate('/form/'+id_)
  }
  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f9",
        paddingBottom: "40px",
        paddingTop: "7px",
      }}
    >
      <Box
        sx={{
          marginLeft: "180px",
          marginRight: "180px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <span style={{ fontSize: "20px", color: "#202124" }}>
            Start a New form
          </span>
        </Box>
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Box sx={{display:'flex', justifyContent: 'space-between', alignItems:'center' }}>
            <span>Template Gallery</span>
            <UnfoldMore fontSize="small" />
          </Box>
          <IconButton>
            <MoreVert fontSize="small" />
          </IconButton>
        </Box>
      </Box>
        <Box sx={{marginLeft: '160px', marginRight:'160px', display:'flex', alignItems:'center',justifyContent:'space-between'}}>
              <Box onClick={createForm} sx={{ display: 'flex', flexDirection: 'column', alignItems:'flex-start', marginLeft:'20px', marginTop: '15px'}}>
                  <img src={tem1} alt='' className="imgs" />
                  <span>Blank</span>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'flex-start', marginLeft:'20px', marginTop: '15px'}}>
                  <img src={tem2} alt='' className="imgs" />
                  <span>Contact Information</span>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'flex-start', marginLeft:'20px', marginTop: '15px'}}>
                  <img src={tem3} alt='' className="imgs" />
                  <span>Party Invite</span>
              </Box>
             
        </Box>
    </Box>
  );
};

export default Template;
