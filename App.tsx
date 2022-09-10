import React, {useEffect, useState} from 'react';
import VideoPlayer from 'react-native-media-console';
import {OnProgressData, OnSeekData} from 'react-native-video';

const App = () => {
  const [currentTime, setCurrentTime] = useState<number>();
  const [paused, setPaused] = useState<boolean>();
  const [isVideoReady, setIsVideoReady] = useState<boolean>();

  const onLoad = () => setIsVideoReady(true);
  const onProgress = (data: OnProgressData) => setCurrentTime(data.currentTime);
  const onSeek = (data: OnSeekData) => setCurrentTime(data.seekTime);
  const onEnd = () => setPaused(true);

  useEffect(() => {
    if (paused) {
      // onPause logic here
    } else {
      // onPlay logic here
    }
    // dependency array: each time any of these values changes,
    // the logic in the function provided to useEffect runs
    // again with the updated values
  }, [paused]);

  return (
    <VideoPlayer
      controlTimeoutDelay={3000}
      onLoad={onLoad}
      onProgress={onProgress}
      onSeek={onSeek}
      onEnd={onEnd}
      paused={paused}
      source={{
        uri: 'https://cdn.videvo.net/videvo_files/video/premium/2021-04/large_watermarked/210329_09_Bali_4k_005_preview.mp4',
      }}
    />
  );
};

export default App;
