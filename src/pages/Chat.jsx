import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material'
import { grayColor, orange } from '../constants/color';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputBox } from '../components/Styles/StyledComponents';
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessage } from '../constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';
const user = {
  _id: "dona",
  name: "Yogeshwar Gupta" 
}

const Chat = () => {

  const containerRef = useRef(null);
  return (
    <>
    <Stack ref={containerRef}
      boxSizing={"border-box"}
      padding={"1rem"}
      spacing={'1rem'}
      bgcolor={grayColor}
      height={"90%"}
      sx={{
        overflowX: "hidden",
        overflowX: "auto"
      }}
    >
       {sampleMessage.map((i) => (
        <MessageComponent key={i._id} message={i} user={user}/>
       ))}
    </Stack>
    <form style={{
      height: "10%"
    }}>

      <Stack direction={"row"} height={"100%"} padding={"1rem"} alignItems={"center"} position={"relative"}>
        <IconButton
          sx={{
            position: "absolute",
            left: "1.5rem",
            rotate: "30deg"
          }}
        >
          <AttachFileIcon/>
        </IconButton>
        <InputBox placeholder='Type Message Here...'/>

        <IconButton type='submit' sx={{
          backgroundColor: orange,
          color: "white",
          marginLeft: "1rem",
          padding: "0.5rem",
          "&:hover": {
            rotate: "-10deg",
            bgcolor: "error.dark"
          }
        }}>
          <SendIcon/>
        </IconButton>
      </Stack>

    </form>

    <FileMenu/>
    </>
  )
}

export default AppLayout()(Chat)
