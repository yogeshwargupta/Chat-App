import React from 'react'
import { TransformImage } from '../../lib/featues';
import { FileOpen as FileOpenIcon } from '@mui/icons-material';

function RenderAttachment(file, url) {
  switch (file){
    case "video":
        return <video src={url} preload='none' width={"200px"} controls/>
        

    case "image":
        return (<image src={TransformImage(url, 200)} alt="Attachments" width={"200px"} height={"150px"} style={{objectFit: "contain"}}/>)
    
    case "audio":
        return <audio src={url}preload='none' controls/>

    default:
        return <FileOpenIcon/>
  }
}

export default RenderAttachment
