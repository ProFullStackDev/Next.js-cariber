import React, { ChangeEvent, useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import Popup from 'reactjs-popup';
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
  controllerVisibility: string;
}

function VideoPlayer(props: VideoPlayerProps) {
  const player = useRef<ReactPlayer>(null);
  const playerContainerRef = useRef(null);
  const [videoState, setVideoState] = useState<ReactVideoPlayerState>({
    url: `https://videodelivery.net/${props.videoId}/manifest/video.m3u8`,
    pip: false,
    playing: false,
    controls: false,
    light: `https://s.isanook.com/ca/0/ui/279/1396205/download20190701165129_1562561119.jpg`,
    volume: 1,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    seeking: false,
    resolutions: [],
    fullscreen: false,
    controllerVisibility: "hidden",
  });

  const handleReady = () => {
    const hlsPlayer = player.current?.getInternalPlayer('hls');
    if (!hlsPlayer) return;
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

  const handleVolumeChange = (e: number | ChangeEvent<HTMLInputElement>) => {
    typeof e === "number" && setVideoState({ ...videoState, volume: e })
    typeof e === "object" && setVideoState({ ...videoState, volume: parseFloat(e.target.value) })
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

  const handleMouseMove = () => {
    setVideoState({ ...videoState, controllerVisibility: "visible" })
  };

  const handleMouseLeave = () => {
    setVideoState({ ...videoState, controllerVisibility: "hidden" })
  };

  const handleClickFullscreen = () => {
    playerContainerRef.current && screenfull.toggle(playerContainerRef.current);
  }

  return (
    <div className="player-wrapper video-player"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={playerContainerRef}
      style={{ ...props.style }}>
      <ReactPlayer
        width="100%"
        height="100%"
        ref={player}
        url={videoState.url}
        pip={videoState.pip}
        playing={videoState.playing}
        controls={false}
        loop={videoState.loop}
        playbackRate={videoState.playbackRate}
        volume={videoState.volume}
        muted={videoState.muted}
        onReady={handleReady}
        onPlay={handlePlay}
        onEnablePIP={handleEnablePIP}
        onDisablePIP={handleDisablePIP}
        onPause={handlePause}
        onEnded={handleEnded}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
      <div className="controls-wrapper">
        <div className={`video-controller`}>
          <button className="player-button" onClick={handlePlayPause}>
            {videoState.playing ? (<Img src="/videoPlayer/pause-solid.svg"
              width={20}
              height={20} />) : (<Img src="/videoPlayer/play-solid.svg"
                width={20}
                height={20} />)}
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
          <Popup className="popup-player-volume"
            trigger={
              <div className="video-volume">
                {videoState.volume ? (
                  <Img onClick={() => { handleVolumeChange(0) }} src="/videoPlayer/volume-solid.svg"
                    width={20}
                    height={20} />
                ) : (
                  <Img onClick={() => { handleVolumeChange(1) }} src="/videoPlayer/volume-xmark-solid.svg"
                    width={20}
                    height={20} />
                )}
              </div>
            }
            position="top center"
            contentStyle={{ padding: "0px", border: "none" }}
            mouseLeaveDelay={300}
            arrow={false}
            on="hover"
          >
            <div className="volume-progress">
              <input className="h-100 input-progress" type='range' min={0} max={1} step='any' value={videoState.volume} orient="vertical" onChange={handleVolumeChange} />
            </div>
          </Popup>
          <Popup className="popup-player-options"
            trigger={
              <div className="video-options">
                <Img src="/videoPlayer/gear-solid.svg"
                  width={20}
                  height={20} />
              </div>
            }
            position="top center"
            contentStyle={{ padding: "0px", border: "none" }}
            mouseLeaveDelay={300}
            arrow={false}
            on="hover"
          >
            <div className="options-item">
            </div>
          </Popup>
          <div className="video-full-screen" onClick={handleClickFullscreen}>
            <Img src="/videoPlayer/expand-wide-solid.svg"
              width={20}
              height={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer;