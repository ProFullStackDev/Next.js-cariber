import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useTus, TusClientProvider } from 'use-tus'
import { Button } from '@strapi/design-system/Button';
import axios from 'axios';
import { Stream } from '@cloudflare/stream-react';
const HomePage = () => {

  const [videolink, setVideoLink] = useState()
  const [signedtoken, setSignedToken] = useState()
  const [fileupload, setFileUpload] = useState()
  const [readyToStream, setReadyToSteam] = useState(false)
  const [intervalID, setIntervalID] = useState()
  const [percentage, setPercentage] = useState(0)

  const { upload, setUpload, isSuccess, error, remove } = useTus();
  const account = '05c1fb4f378588a2c03f1d5db10d3123';
  const token = '7UwW6lh1a95WzpIRXun1ZV-b_fRzi1CopJbQ4P_3';
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


  const handleSetUpload = useCallback((event) => {
    const file = event.target.files.item(0);

    if (!file) {
      return;
    }
    setReadyToSteam(false);
    setPercentage(0);
    setVideoLink("");
    setUpload(file, {
        endpoint: `https://api.cloudflare.com/client/v4/accounts/${account}/stream`,
        metadata: {
          name: file.name,
          filetype: file.type,
          requiresignedurls: true,
        },
        headers: {
          "Authorization": `Bearer ${token}`
        },
        onProgress: function (bytesUploaded, bytesTotal) {
          var percentage = (bytesUploaded / bytesTotal * 100).toFixed(2);
          setPercentage(percentage);
        },
        onSuccess: function () {
          console.log("Upload finished",upload);
        },
        onAfterResponse : (req, res) => {
          console.log(res.getHeader("stream-media-id"));
          setVideoLink(res.getHeader("stream-media-id"));
        },
      });
    console.log(upload);
    },
    [setUpload]
  );

  const handleStart = useCallback(() => {
    if (!upload) {
      return;
    }
    upload.start();
  }, [upload]);


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
        console.log("not ready to steam !!");
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
      <input type="file" id="myFile" name="filename" accept="video/*" onChange={handleSetUpload}/> <br></br>
      <Button variant='default' onClick={handleStart} >Click to upload</Button><br/>
      { percentage > 0 ? (<div><progress id="file" value={percentage} max="100"></progress> {percentage}%</div>):""}
      Link Video : {videolink}<br></br>
      <div style={{width: '600px', height: '400px'}}>
        { (!readyToStream && videolink && percentage == 100)? "Waiting video to ready for stream ...":""}
        { (readyToStream && videolink) ? <Stream key={signedtoken} controls src={signedtoken}/>:"" }
      </div>
    </div>
  );
};

export default HomePage;
