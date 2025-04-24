import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

function SentiCheMusicaYoutube() {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    className : 'youtubeVideoProps',
    playerVars: {
      autoplay: 1,
      controls: 1
    },
  };

  return <YouTube className="youtubeVideo" videoId="1QBYwRxQTA8" opts={opts} onReady={onPlayerReady} />;
}

export default SentiCheMusicaYoutube;