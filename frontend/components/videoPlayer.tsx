import React, { useRef, useState } from 'react';
import { findDOMNode } from 'react-dom';
import ReactPlayer from 'react-player/lazy';
import screenfull from 'screenfull';
import Img from './image';

type VideoPlayerProps = {
  videoId: string;
  style?: React.CSSProperties;
}

type ReactVideoPlayerState = {
  url: string;
  pip: boolean,
  playing: boolean;
  controls: boolean;
  light: boolean | string;
  volume: number;
  muted: boolean;
  played: number;
  loaded: number;
  duration: number;
  playbackRate: number;
  loop: boolean;
  seeking: boolean;
  resolutions: any;
  fullscreen: boolean;
}

function VideoPlayer(props: VideoPlayerProps) {
  const player = useRef<ReactPlayer>(null);
  const [videoState, setVideoState] = useState<ReactVideoPlayerState>({
    url: `https://videodelivery.net/${props.videoId}/manifest/video.m3u8`,
    pip: false,
    playing: true,
    controls: false,
    light: `https://videodelivery.net/${props.videoId}/thumbnails/thumbnail.jpg?time=3s`, // can set the default time in cloudflare
    volume: 1,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    seeking: false,
    resolutions: [],
    fullscreen: false
  });

  const handleReady = () => {
    const hlsPlayer = player.current?.getInternalPlayer('hls');
    if (!hlsPlayer) return;
    // https://github.com/video-dev/hls.js/blob/master/docs/API.md
    setVideoState({ ...videoState, resolutions: hlsPlayer.levels });
  }

  const setVideoResolution = (value: number) => {
    const hlsPlayer = player.current?.getInternalPlayer('hls');
    if (!hlsPlayer) return;
    hlsPlayer.nextLevel = value;
  }

  const load = (url: string) => {
    setVideoState({
      ...videoState,
      played: 0,
      loaded: 0,
      pip: false
    })
  }

  const handlePlayPause = () => {
    setVideoState({ ...videoState, playing: !videoState?.playing })
  }

  const handleToggleLight = () => {
    setVideoState({ ...videoState, light: !videoState.light })
  }

  const handleToggleLoop = () => {
    setVideoState({ ...videoState, loop: !videoState.loop })
  }

  const handleVolumeChange = (e: any) => {
    setVideoState({ ...videoState, volume: parseFloat(e.target.value) })
  }

  const handleToggleMuted = () => {
    setVideoState({ ...videoState, muted: !videoState.muted })
  }

  const handleSetPlaybackRate = (e: any) => {
    setVideoState({ ...videoState, playbackRate: parseFloat(e.target.value) })
  }

  const handleOnPlaybackRateChange = (speed: string) => {
    console.log(speed);

    setVideoState({ ...videoState, playbackRate: parseFloat(speed) })
  }

  const handleTogglePIP = () => {
    setVideoState({ ...videoState, pip: !videoState.pip })
  }

  const handlePlay = () => {
    setVideoState({ ...videoState, playing: true })
  }

  const handleEnablePIP = () => {
    setVideoState({ ...videoState, pip: true })
  }

  const handleDisablePIP = () => {
    setVideoState({ ...videoState, pip: false })
  }

  const handlePause = () => {
    setVideoState({ ...videoState, playing: false })
  }

  const handleSeekMouseDown = (e: any) => {
    setVideoState({ ...videoState, seeking: true })
  }

  const handleSeekChange = (e: any) => {
    setVideoState({ ...videoState, played: parseFloat(e.target.value) })
  }

  const handleSeekMouseUp = (e: any) => {
    setVideoState({ ...videoState, seeking: false })
    player.current?.seekTo(parseFloat(e.target.value))
  }

  const handleProgress = (state: any) => {
    if (!videoState.seeking) {
      setVideoState({ ...videoState, ...state });
    }
  }

  const handleEnded = () => {
    setVideoState({ ...videoState, playing: videoState.loop })
  }

  const handleDuration = (duration: number) => {
    setVideoState({ ...videoState, duration })
  }

  const handleClickFullscreen = () => {
    if (!screenfull.isEnabled) return;
    if (!videoState.fullscreen) {

      const video = findDOMNode(player.current) as Element & {
        mozRequestFullScreen(): Promise<void>;
        webkitRequestFullscreen(): Promise<void>;
        msRequestFullscreen(): Promise<void>;
      };
      screenfull.request(video);
    } else {
      screenfull.exit();
    }
    setVideoState({ ...videoState, fullscreen: !videoState.fullscreen });
  }

  return (
    <div className="player-wrapper video-player" style={{ ...props.style }}>
      <ReactPlayer
        width='100%'
        height='100%'
        ref={player}
        url={videoState.url}
        pip={videoState.pip}
        playing={videoState.playing}
        controls={false}
        light={videoState.light}
        loop={videoState.loop}
        playbackRate={videoState.playbackRate}
        volume={videoState.volume}
        muted={videoState.muted}
        onReady={handleReady}
        // onStart={() => console.log('onStart')}
        onPlay={handlePlay}
        onEnablePIP={handleEnablePIP}
        onDisablePIP={handleDisablePIP}
        onPause={handlePause}
        // onBuffer={() => console.log('onBuffer')}
        // onPlaybackRateChange={handleOnPlaybackRateChange}
        // onSeek={e => console.log('onSeek', e)}
        onEnded={handleEnded}
        // onError={e => console.log('onError', e)}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
      <div className="video-controller">
        <button className="player-button" onClick={handlePlayPause}>
          {videoState.playing ? (<Img src="/videoPlayer/pause-solid.svg"
          width={15}
          height={15}/>) : (<Img src="/videoPlayer/play-solid.svg"
          width={15}
          height={15}/>)}
        </button>
        <div className="video-progress">
          <input
            className="input-progress"
            type='range' min={0} max={0.999999} step='any'
            value={videoState.played}
            onMouseDown={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
          />
        </div>
        <div className="video-volume">
          <input type='range' min={0} max={1} step='any' value={videoState.volume} onChange={handleVolumeChange} />
        </div>
      </div>
      {/* <div>
        <table>
          <tbody>
            <tr>
              <th>Controls</th>
              <td>
                <button onClick={handlePlayPause}>{videoState.playing ? 'Pause' : 'Play'}</button>
                <button onClick={handleClickFullscreen}>Toggle Fullscreen</button>
                <button onClick={handleTogglePIP}>{videoState.pip ? 'Disable PiP' : 'Enable PiP'}</button>
              </td>
            </tr>
            <tr>
              <th>Speed</th>
              <td>
                <button onClick={handleSetPlaybackRate} value={1}>1x</button>
                <button onClick={handleSetPlaybackRate} value={1.5}>1.5x</button>
                <button onClick={handleSetPlaybackRate} value={2}>2x</button>
              </td>
            </tr>
            <tr>
              <th>Seek</th>
              <td>
                <input
                  type='range' min={0} max={0.999999} step='any'
                  value={videoState.played}
                  onMouseDown={handleSeekMouseDown}
                  onChange={handleSeekChange}
                  onMouseUp={handleSeekMouseUp}
                />
              </td>
            </tr>
            <tr>
              <th>Volume</th>
              <td>
                <input type='range' min={0} max={1} step='any' value={videoState.volume} onChange={handleVolumeChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor='muted'>Muted</label>
              </th>
              <td>
                <input id='muted' type='checkbox' checked={videoState.muted} onChange={handleToggleMuted} />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor='loop'>Loop</label>
              </th>
              <td>
                <input id='loop' type='checkbox' checked={videoState.loop} onChange={handleToggleLoop} />
              </td>
            </tr>
            <tr>
              <th>Played</th>
              <td><progress max={1} value={videoState.played} /></td>
            </tr>
            <tr>
              <th>Loaded</th>
              <td><progress max={1} value={videoState.loaded} /></td>
            </tr>
            <tr>
              <th>Resolution</th>
              <td>
                {videoState.resolutions.map((item: any, index: number) => {
                  return <button key={index} onClick={() => setVideoResolution(index)}>{item.height}</button>
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  )
}

export default VideoPlayer;