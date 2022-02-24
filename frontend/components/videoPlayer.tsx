import React, { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import screenfull from 'screenfull';
import Img from './image';

type VideoPlayerProps = {
  videoId: string;
  thumbnailImage?: string;
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
  currentResolution: number;
  fullscreen: boolean;
}

function VideoPlayer(props: VideoPlayerProps) {
  const [progressCount, setProgressCount] = useState(0);
  const player = useRef<ReactPlayer>(null);
  const playerContainerRef = useRef(null);
  const [controllerVisible, setControllerVisible] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [volumeVisible, setVolumeVisible] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoState, setVideoState] = useState<ReactVideoPlayerState>({
    url: `https://videodelivery.net/${props.videoId}/manifest/video.m3u8`,
    pip: false,
    playing: true,
    controls: false,
    light: props.thumbnailImage || true,
    volume: 1,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    seeking: false,
    resolutions: [],
    currentResolution: -1,
    fullscreen: false,
  });

  const handleReady = () => {
    const hlsPlayer = player.current?.getInternalPlayer('hls');
    if (!hlsPlayer) return;
    setVideoState({ ...videoState, resolutions: hlsPlayer.levels });
  }

  const setVideoResolution = (value: number) => {
    const hlsPlayer = player.current?.getInternalPlayer('hls');
    if (!hlsPlayer) return;
    setVideoState({ ...videoState, currentResolution: value });
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
    setVideoState({ ...videoState, playing: !videoState?.playing });
  }

  const handleToggleLight = () => {
    setVideoState({ ...videoState, light: !videoState.light });
  }

  const handleToggleLoop = () => {
    setVideoState({ ...videoState, loop: !videoState.loop });
  }

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVideoState({ ...videoState, volume: parseFloat(e.target.value) })
  }

  const handleToggleMuted = () => {
    setVideoState({ ...videoState, muted: !videoState.muted });
  }

  const handleSetPlaybackRate = (e: any) => {
    setVideoState({ ...videoState, playbackRate: parseFloat(e.target.value) })
  }

  const handleOnPlaybackRateChange = (speed: string) => {
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
    if (progressCount > 3) {
      setControllerVisible(false);
      setProgressCount(0);
    }
    if (controllerVisible) {
      setProgressCount(progressCount + 1);
    }
  }

  const handleEnded = () => {
    setVideoState({ ...videoState, playing: videoState.loop })
  }

  const handleDuration = (duration: number) => {
    setVideoState({ ...videoState, duration })
  }

  const handleClickFullscreen = () => {
    playerContainerRef.current && screenfull.toggle(playerContainerRef.current);
  }

  const handleVisible = (setState: Dispatch<SetStateAction<boolean>>) => {
    setState(true);
    setProgressCount(0);
  }

  const handleHidden = (setState: Dispatch<SetStateAction<boolean>>) => {
    setState(false)
  }

  const handleSwitchVisible = (visible: boolean, setState: Dispatch<SetStateAction<boolean>>) => {
    setState(!visible)
  }

  const handleStart = () => {
    setVideoStarted(true);
  }

  return (
    <div className="player-wrapper video-player"
      onMouseMove={() => { handleVisible(setControllerVisible) }}
      onMouseLeave={() => { handleHidden(setControllerVisible) }}
      ref={playerContainerRef}
      style={{ ...props.style }}>
      <ReactPlayer
        className="react-player"
        width="100%"
        height="100%"
        ref={player}
        url={videoState.url}
        pip={videoState.pip}
        light={videoState.light}
        playing={videoState.playing}
        controls={false}
        loop={videoState.loop}
        playbackRate={videoState.playbackRate}
        volume={videoState.volume}
        muted={videoState.muted}
        onReady={handleReady}
        onStart={handleStart}
        onPlay={handlePlay}
        onEnablePIP={handleEnablePIP}
        onDisablePIP={handleDisablePIP}
        onPause={handlePause}
        onEnded={handleEnded}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
      <div className={`controls-wrapper ${controllerVisible ? "visible" : "hidden"} ${!videoStarted && "hidden"}`}>
        <div className="video-controller">
          <button className="control-button" onClick={handlePlayPause}>
            {videoState.playing ? (<Img src="/videoPlayer/pause-solid.svg"
              width={20}
              height={20}
              className="filter-white" />) : (<Img src="/videoPlayer/play-solid.svg"
                width={20}
                height={20}
                className="filter-white" />)}
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
          <div className="control-right-group">
            <div className="flex-column-center"
              onMouseEnter={() => { handleVisible(setVolumeVisible) }}
              onMouseLeave={() => { handleHidden(setVolumeVisible) }}>
              <div className={`volume-progress flex-column-center ${volumeVisible ? "visible" : "hidden"}`}>
                <input className="input-progress" type='range' min={0} max={1} step='any' value={videoState.volume} onChange={handleVolumeChange} />
              </div>
              <div className="flex-column-center control-button" onClick={handleToggleMuted}>
                {!videoState.muted ? (
                  <Img src="/videoPlayer/volume-solid.svg"
                    width={20}
                    height={20}
                    className="filter-white" />
                ) : (
                  <Img src="/videoPlayer/volume-xmark-solid.svg"
                    width={20}
                    height={20}
                    className="filter-white" />
                )}
              </div>
            </div>
            <div className="flex-column-center"
              onClick={() => { handleSwitchVisible(optionsVisible, setOptionsVisible) }}>
              <div className={`options-item ${optionsVisible ? "visible" : "hidden"}`}>
                <div className="option-resolutions">
                  <button className={`option-resolutions ${-1 === videoState.currentResolution && "resolutions-active"}`}
                    onClick={() => setVideoResolution(-1)}>Auto</button>
                  {videoState.resolutions.map((item: any, index: number) => {
                    return <button className={`option-resolutions f-s-14 ${index === videoState.currentResolution && "resolutions-active"}`}
                      key={index}
                      onClick={() => setVideoResolution(index)}>{item.height}</button>
                  })}
                </div>
              </div>
              <div className="control-button flex-column-center">
                <Img src="/videoPlayer/gear-solid.svg"
                  width={20}
                  height={20}
                  className="filter-white" />
              </div>
            </div>
            <div className="video-full-screen control-button" onClick={handleClickFullscreen}>
              <Img src="/videoPlayer/expand-wide-solid.svg"
                width={20}
                height={20}
                className="filter-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer;