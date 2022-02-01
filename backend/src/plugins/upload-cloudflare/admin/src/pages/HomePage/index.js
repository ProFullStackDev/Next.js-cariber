/*
 *
 * HomePage
 *
 */

import React, { useRef, useState } from 'react';
// import PropTypes from 'prop-types';

import pluginId from '../../pluginId';
import axios from 'axios';
import PlayerPage from "../../components/PlayerPage";
import { Stream } from '@cloudflare/stream-react';
const HomePage = () => {
  const [videolink, setVideoLink] = useState("e8cc1cede48c8f076352121fd48f5e69")
  const [signedtoken, setSignedToken] = useState()
  const account = '05c1fb4f378588a2c03f1d5db10d3123';
  const token = '7UwW6lh1a95WzpIRXun1ZV-b_fRzi1CopJbQ4P_3'
  const testFunc = ($event) => {
    console.log("test test", $event);
    const fd = new FormData()
    fd.append("file",$event.target.files[0])
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
      getSignedToken()
    })
    // todo: upload with tus for > 200 mb
    // Bug : after upload always get older (-1) videolink
    // setVideoLink($event.target.value)
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
      <label for="myFile">{name}</label>
      <input type="file" id="myFile" name="filename" onChange={testFunc}/>
      {signedtoken}
        <Stream key={signedtoken} controls src={signedtoken}/>
    </div>
  );
};

export default HomePage;
