import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

function SentiCheMusicaYoutube() {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      controls: 1
    },
  };

  return <YouTube videoId="1QBYwRxQTA8" opts={opts} onReady={onPlayerReady} style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}/>;
}

export default SentiCheMusicaYoutube;