import React from 'react'
import { Link } from 'react-static'
import { Card, Text, theme } from '@aragon/ui'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextBox = styled.div`
  margin-top: 12px;
  p {
    text-transform: uppercase;
    color: #4BC5E8;
    font-size: 16px;
    font-weight: bold;
    line-height: 25px;
  }
  h6 {
    text-transform: uppercase;
    color: #45494D; 
    font-size: 14px;  
    font-weight: 600; 
    line-height: 22px;
  }
`;

const Photo = styled.img`
  width: 100%;
  overflow: hidden;
`;

const SpeakerBox = styled.div`
  margin-bottom: 40px;
  border-radius: 6px; 
  background: linear-gradient(184.81deg, #F5F6FB 0%, #FFFFFF 100%); 
  box-shadow: 8px 16px 16px 0 rgba(0,0,0,0.13);
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
        <Link to={'/speakers#' + linkTo}><Photo src={require(`../Speakers/assets/${picture}`)}/></Link>
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
