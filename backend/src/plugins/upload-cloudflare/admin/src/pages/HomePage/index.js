import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@strapi/design-system/Button';
import axios from 'axios';
import { Stream } from '@cloudflare/stream-react';
const HomePage = () => {
  const [videolink, setVideoLink] = useState()
  const [signedtoken, setSignedToken] = useState()
  const [fileupload, setFileUpload] = useState()
  const [readyToStream, setReadyToSteam] = useState(false)
  const [intervalID,setIntervalID] = useState()
  const account = '05c1fb4f378588a2c03f1d5db10d3123';
  const token = '7UwW6lh1a95WzpIRXun1ZV-b_fRzi1CopJbQ4P_3'
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
  });

  useEffect(() => {
    
    if (!firstUpdate.current){
      const interval = videolink ? setInterval(getVideoStatus, 3000): ""
      setIntervalID(interval)
      if (readyToStream && videolink) {
        clearInterval(intervalID);
        getSignedToken()
      }
    }
  }, [videolink, readyToStream]); 
  
  const handleUpload = ($event) => {
    setFileUpload($event.target.files[0])
  }
  const testFunc = () => {
    setReadyToSteam(false)
    const fd = new FormData()
    fd.append("file",fileupload)
    fd.append('requireSignedURLs', true)
    axios({
      method: 'POST',
      url: `https://api.cloudflare.com/client/v4/accounts/${account}/stream`,
      data: fd,
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(res=>{
      setVideoLink(res.data.result.uid)
    })
    // todo: upload with tus for > 200 mb
  }
  
  const getVideoStatus = () => {
    if ( !readyToStream ) {
      axios({
        method: 'GET',
        url: `https://api.cloudflare.com/client/v4/accounts/${account}/stream/${videolink}`,
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(res=>{
        setReadyToSteam(res.data.result.readyToStream)
      }).catch(res => {
      })
    }
  }
  const getSignedToken = () => {
    axios({
      method: 'POST',
      url: `https://api.cloudflare.com/client/v4/accounts/${account}/stream/${videolink}/token`,
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(res=>{
      console.log(res.data.result.token);
      setSignedToken(res.data.result.token)
    })
  }
  return (
    <div>
      <label for="myFile">Upload Video</label>
      <input type="file" id="myFile" name="filename" accept="video/*" onChange={handleUpload}/> <br></br>
      <Button variant='default' onClick={testFunc} >Click to upload</Button><br/>
      Link Video : {videolink}<br></br>
      <div style={{width: '600px', height: '400px'}}>
        { (readyToStream && videolink) ? <Stream key={signedtoken} controls src={signedtoken}/> : "Waiting video to ready for stream ..." }
      </div>
    </div>
  );
};

export default HomePage;
