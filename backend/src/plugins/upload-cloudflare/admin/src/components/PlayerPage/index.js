import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
// import { HttpRequest, HttpResponse, PreviousUpload, Upload, UploadOptions } from 'tus-js-client';

import { Stream } from '@cloudflare/stream-react';

const PlayerPage = (props) => {
    const [videolink, setVideoLink] = useState("3b7eeb9a034909fa3a5efc39d434a6fe")
    const testFunc = ($event) => {
      console.log("test test", $event);
      const account = '05c1fb4f378588a2c03f1d5db10d3123';
      const token = '7UwW6lh1a95WzpIRXun1ZV-b_fRzi1CopJbQ4P_3'
      axios({
        method: 'POST',
        url: `https://api.cloudflare.com/client/v4/accounts/${account}/stream/copy`,
        data: {
          "url":"https://storage.googleapis.com/zaid-test/Watermarks%20Demo/cf-ad-original.mp4",
          "requireSignedURLs":true,
          "meta": { "name":`${$event.target.value}` } 
        },
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(res=>{
        console.log(res);
        setVideoLink(res.data.result.uid)
      })
    }

  return (
    <div>
        <main>
        <div>
            <input type="file" id="myFile" name="filename" onChange={testFunc}/>
            <button onClick={testFunc}>Click to upload</button>
            {videolink}
            <div>
                <Stream
                height="728"
                width="1024"
                key={"1linkstream"}
                src={props.link}
                controls
                />
            </div>
        </div>

        </main>
      </div>
  );
};

export default PlayerPage;
