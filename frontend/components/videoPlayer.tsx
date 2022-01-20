import { Stream } from '@cloudflare/stream-react';
import React from 'react';

interface IVideoPlayerProps {
  videoId: string
}

export default function VideoPlayer(props: IVideoPlayerProps) {

  return (
    <div className="player-wrapper">
      <Stream
        className="cloudflare-player"
        src={props.videoId}
        controls
      />
    </div>
  )
}
