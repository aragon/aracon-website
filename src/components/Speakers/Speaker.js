import React from 'react'
import { Card, Text, theme } from '@aragon/ui'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextBox = styled.div`
  height: 244px;
  width: calc(100% - 245px);
  padding: 0 6%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 20px;
    color: #4bc5e8;
    font-size: 23px;
    color: #4bc5e8;
    font-weight: bold;
  }
  h6 {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 600;
    color: #45494d;
    margin-bottom: 15px;
  }
  h5 {
    opacity: 0.5;
    font-size: 17px;
    font-weight: 300;
    color: #000000;
  }
`;

const PhotoBox = styled.div`
  height: 244px;
  width: 244px;
`;

const Photo = styled.img`
  height: 100%;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
`;

const SpeakerBox = styled.div`
  margin-bottom: 40px;
  border-radius: 6px; 
  border-radius: 6.4px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 244px;
  .speaker-card {
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

class Speaker extends React.Component {

  render() {
    const { name, position, company, photo, bio } = this.props;

    return (
      <SpeakerBox>
        <Card width="100%" height="100%" className="speaker-card">
          <PhotoBox>
            <Photo src={require(`./assets/${photo}.png`)}/>
          </PhotoBox>
          <TextBox>
            <Text><p>{name}</p></Text>
            <Text><h6>{position}, {company}</h6></Text>
            <Text><h5>{bio}</h5></Text>
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
