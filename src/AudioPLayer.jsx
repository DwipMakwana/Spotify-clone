import { useEffect, useRef } from 'react';

const AudioPlayer = ({ track, isPlaying, volume }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  return (
    <audio ref={audioRef} src={track?.preview_url} />
  );
};

export default AudioPlayer;