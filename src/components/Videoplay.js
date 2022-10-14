import React from 'react'
import vid from '../media/vid.mp4'
const Videoplay = () => {
var vid2='https://vod-progressive.akamaized.net/exp=1665675442~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4085%2F20%2F520427372%2F2427861002.mp4~hmac=8f13a41cae946a6c5675e766fd44f12139eb88cf05de228dd8aacc9da6328b9a/vimeo-prod-skyfire-std-us/01/4085/20/520427372/2427861002.mp4'
var videoUrl='https://www.gettyimages.com/detail/video/series-lights-on-a-patio-on-a-patio-stock-footage/1078398814'
  return (
    <div className='w-full h-screen relative'>
         <video 
            className='w-full h-full object-cover' 
            src={vid2} 
            autoPlay 
            loop
            muted 
        />
    </div>
  )
}

export default Videoplay