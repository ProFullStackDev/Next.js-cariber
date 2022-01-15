import { Stream, StreamPlayerApi } from '@cloudflare/stream-react';
import React, { useRef, useState } from 'react';
import * as gtag from '../lib/gtag';
import { GTagEvent } from '../lib/gtag';

interface IVideoPlayerProps {
  videoId: string
}

interface VideoEvent {
  current_time: number | undefined;
  duration: number | undefined;
}

export const VideoPlayer = (props: IVideoPlayerProps) => {
  const startTime = 0;

  const ref = useRef<StreamPlayerApi & { duration: number }>();
  const [canPlayVideo, setCanPlayVideo] = useState<boolean>(false);

  const [timePlayed, setTimePlayed] = useState<number>(0);
  const [lastUpdateTimePlayed, setLastUpdateTimePlayed] = useState<number>(startTime);
  const [watchedSecond, setWatchedSecond] = useState<number[]>(Array(0));
  const [totalSecondWatched, setTotalSecondWatched] = useState<number>(0);

  const sendGTagVideoEvent = (gtagEvent: GTagEvent) => {
    // seeking actions are multiple called when loading video,
    // so need to prevent sending seeking action when video is downloading.
    if (!canPlayVideo && gtagEvent.action === 'video_seeking') {
      return;
    }
    // gtag.event<VideoEvent>(gtagEvent, {...getVideoDetail()});
  }

  const getVideoDetail = () => {
    return {
      current_time: ref.current?.currentTime,
      duration: ref.current?.duration
    } as VideoEvent
  }
  const playVideo = () => {
    sendGTagVideoEvent(
      {
        action: 'video_play',
        category: 'Video',
        label: props.videoId,
      }
    )
  }

  const pauseVideo = () => {
    sendGTagVideoEvent(
      {
        action: 'video_pause',
        category: 'Video',
        label: props.videoId,
      }
    );
  }

  const seekingVideo = () => {
    sendGTagVideoEvent(
      {
        action: 'video_seeking',
        category: 'Video',
        label: props.videoId,
      }
    );
  }

  const seekedVideo = () => {
    sendGTagVideoEvent(
      {
        action: 'video_seeked',
        category: 'Video',
        label: props.videoId,
      }
    );
  }

  const completeVideo = () => {
    sendGTagVideoEvent(
      {
        action: 'video_complete',
        category: 'Video',
        label: props.videoId,
      }
    );
  }

  const canPlay = () => {
    setCanPlayVideo(true);
  }

  const roundUp = (num: number, precision: number = 1) => {
    return Math.ceil(num * precision) / precision
  }

  const onProgress = () => {
    if (!canPlayVideo) return;
    const currentTime = ref.current?.currentTime || 0;
    if (currentTime > lastUpdateTimePlayed) {
      setTimePlayed(timePlayed + (currentTime - lastUpdateTimePlayed));
    }

    setLastUpdateTimePlayed(currentTime);

    let oldWatchedSecond = [...watchedSecond];
    oldWatchedSecond[roundUp(currentTime)] = 1;
    setWatchedSecond(oldWatchedSecond)
    setTotalSecondWatched(oldWatchedSecond.reduce((acc, val) => {
      return (acc || 0) + (val || 0);
    }, 0));
    if (ref.current?.duration) {
      const watchedPercentage = (currentTime / ref.current?.duration) * 100;
      if (watchedPercentage % 10 === 0) {
        console.log(`${watchedPercentage}%`);
      }
    }

  }

  return (
    <>
      {/* Total seconds viewed = {totalSecondWatched || 0}<br/> */}
      <div style={{width: '600px', height: '400px'}}>
        <Stream
          controls
          streamRef={ref}
          startTime={startTime}
          muted={true}
          src={props.videoId}
          onPlay={playVideo}
          onPause={pauseVideo}
          onSeeked={seekedVideo}
          onSeeking={seekingVideo}
          onEnded={completeVideo}
          onCanPlay={canPlay}
          onTimeUpdate={onProgress}
        />
      </div>
    </>
  )
}
