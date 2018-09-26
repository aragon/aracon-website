import React from 'react'
import { Text, theme, breakpoint } from '@aragon/ui'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const TextBox = styled.div`
  min-height: 244px;
  height: auto;
  width: 100%
  padding: 10px 6%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
  ${medium('text-align: left; margin-top: 0; width: calc(100% - 245px);')};

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
    max-height: auto;
    height: auto;
    ${large('max-height: auto;')};
  }
`;

const PhotoBox = styled.div`
  width: 100%;
  ${medium('width: 244px;')};
`;

const Photo = styled.img`
  height: 100%;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
`;

const SpeakerBox = styled.div`
  border-radius: 6.4px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
  margin: auto;
  ${medium('max-width: 100%; margin: inherit')};
  text-align: left;
  display: flex;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  ${large('flex-direction: row;')};
  align-items: stretch;
  justify-content: stretch;
`;
const Container = styled.div`
  padding-top: 65px;
  width: 100%;
  height: auto;
`;


class Speaker extends React.Component {

  render() {
    const { name, position, company, photo, bio, linkTo } = this.props;

    return (
      <Container id={linkTo ? linkTo : ''}>
        <SpeakerBox>
          <PhotoBox>
            <Photo src={require(`./assets/${photo}.png`)}/>
          </PhotoBox>
          <TextBox>
            <Text><p>{name}</p></Text>
            <Text><h6>{position}, {company}</h6></Text>
            <Text><h5>{bio}</h5></Text>
          </TextBox>
      </SpeakerBox>
    </Container>
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
