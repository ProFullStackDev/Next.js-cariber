import React, { useState } from 'react';
import { Stream } from '@cloudflare/stream-react';
import axios from 'axios';

const VideoPlayer = (props) => {
    console.log("props isnt it?",props);
    const { name, attribute, onChange } = props;
    const [videolink, setVideoLink] = useState(props.value ? props.value : "")
    const testFunc = ($event) => {
      $event.preventDefault();
      console.log("test test", $event);
      const account = '05c1fb4f378588a2c03f1d5db10d3123';
      const token = '7UwW6lh1a95WzpIRXun1ZV-b_fRzi1CopJbQ4P_3'
      // console.log(window.location.pathname.split('/'));
      axios({
        method: 'POST',
        url: `https://api.cloudflare.com/client/v4/accounts/${account}/stream/copy`,
        data: {
          "url":"https://storage.googleapis.com/zaid-test/Watermarks%20Demo/cf-ad-original.mp4",
          "requireSignedURLs": true,
          "meta": { "name":`${$event.target.value}` } 
        },
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(res=>{
        setVideoLink(res.data.result.uid)
        const arg = {
          target: {
            name: name,
            value: res.data.result.uid
          },
        }
        
        onChange(arg);
        props.value = res.data.result.uid
      })
    }
    return (
      <div>
        <label for="myFile">{name}</label>
        <input type="file" id="myFile" name="filename" onChange={testFunc}/>
        <button onClick={testFunc}>Click to upload</button><br></br>
        value : {props.value}<br></br>
        link after upload(uid) : {videolink}<br></br>
        <Stream
          controls
          muted={true}
          src={"3b7eeb9a034909fa3a5efc39d434a6fe"}
        />
      </div>
    );
}

export default VideoPlayer;