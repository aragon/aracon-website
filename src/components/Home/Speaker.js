import React from 'react'
import { Link } from 'react-static'
import { Card, Text, theme, breakpoint } from '@aragon/ui'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const medium = css => breakpoint('medium', css);
import includee from '../Speakers/assets/GriffGreen.png';

const TextBox = styled.div`
  margin-top: 12px;
  p {
    text-transform: uppercase;
    color: #4BC5E8;
    font-size: 15px;
    ${medium('font-size: 16px; font-weight: bold;')};
    font-weight: 400;
    line-height: 25px;
  }
  h6 {
    text-transform: uppercase;
    color: #45494D;
    font-size: 12px;
    font-weight: 300;
    ${medium('font-size: 13px; font-weight: 600;')};
    line-height: 22px;
  }
`;

const Photo = styled.div`
  width: 100%;
  overflow: hidden;
  height: 238px;
  background-image: linear-gradient(0deg, #233145, #233145),  url(${props => props.src});
  background-blend-mode: color;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  &:before {
    width: 100%;
    overflow: hidden;
    height: 238px;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${props => props.src});
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    border-radius: inherit; 
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  &:hover:before {
   opacity: 1
  }
`;

const SpeakerBox = styled.div`
  margin-bottom: 40px;
  border-radius: 6px;
  background: linear-gradient(184.81deg, #F5F6FB 0%, #FFFFFF 100%);
  box-shadow: 8px 16px 16px 0 rgba(0,0,0,0.13);
  position: relative;
`;

class Speaker extends React.Component {
  state = { picture: this.props.photo + '_.png' };

  render() {
    const { name, position, company, photo, linkTo } = this.props;
    const { picture } = this.state;

    return (
      <SpeakerBox>
      <Card onMouseEnter={() => this.setState({ picture: photo + '.png' })}
          onMouseLeave={() => this.setState({ picture: photo + '_.png' })}>
        <Link to={'/speakers#' + linkTo}>
          <Photo src={require('../Speakers/assets/' + photo + '.png')}/>
        </Link>
        <TextBox>
          <Text><p>{name}</p></Text>
          <Text><h6>{position}, {company}</h6></Text>
        </TextBox>
      </Card>
    </SpeakerBox>
    )
  }
}

Speaker.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  company: PropTypes.string,
};

Speaker.defaultProps = {
  name: 'Name',
  position: 'Position',
  company: 'Company',
};

export default Speaker
