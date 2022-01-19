import ReactPlayer from "react-player";

interface VideoPlayerProps {
  src: string,
}

export default function VideoPlayer({ src }: VideoPlayerProps) {
  return (
    <div className="player-wrapper">
      <ReactPlayer controls
        className="react-player"
        url={src}
        width="100%"
        height="100%"
      />
    </div>

  )
}

