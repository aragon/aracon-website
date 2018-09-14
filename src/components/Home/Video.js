import React from 'react'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'

const medium = css => breakpoint('medium', css)

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  min-height: 344px;
  max-width: 950px;
  transition: all 0.5s ease;
  margin-left: 50%;
  transform: translateX(-50%);
  flex-shrink: 0;
  margin-top: 40px;
  ${medium('margin-top: 75px')};

  #player {
    position: absolute;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
	  height: 100%;
  }
`

class Video extends React.Component {
  constructor(props) {
    super(props)
    this.playVideo = this.playVideo.bind(this)

    // react-static doesn't like referencing document directly
    if (typeof document === 'undefined') return
    const tag = document.createElement('script')

    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = this.initPlayer.bind(this)
  }

  initPlayer() {
    this.player = new YT.Player('player', {
      videoId: 'AqjIWmiAidw',
      playerVars: {
        rel: 0
      }
    })
  }

  playVideo() {
    this.player.playVideo()
  }

  render() {
    return (
      <StyledDiv onClick={this.playVideo} {...this.props}>
        <div>
          <div id="player"></div>
        </div>
      </StyledDiv> 
    )
  }
}

export default Video
