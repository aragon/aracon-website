
import React, { PropTypes, Component } from 'react';
import styled from 'styled-components'
import {breakpoint} from '@aragon/ui'
const medium = css => breakpoint('medium', css);

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <Container>
        <div>
          <h4>{this.addLeadingZeros(countDown.days)}</h4>
          <p>{countDown.days === 1 ? 'Day' : 'Days'}</p>
        </div>
        <div>
          <h4>{this.addLeadingZeros(countDown.hours)}</h4>
          <p>Hours</p>
        </div>
        <div>
          <h4>{this.addLeadingZeros(countDown.min)}</h4>
          <p>Min</p>
        </div>
        <div>
          <h4>{this.addLeadingZeros(countDown.sec)}</h4>
          <p>Sec</p>
        </div>
      </Container>
    );
  }
}

const Container = styled.div `
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  div {
    padding: 0 15px;
    ${medium('min-width: 95px;')}
  }
  h4 {
    font-size: 35px;
    ${medium('font-size: 50px;')}
    font-weight: 800;
    line-height: 0.6;
    text-align: center;
    color: #ffffff;
  }
  p {
    font-size: 19.5px;
    font-weight: 300;
    line-height: 1;
    margin-top: 15px;
    letter-spacing: 3.5px;
    text-align: center;
    color: #ffffff;
    text-transform: uppercase;
    margin-bottom: 25px;
  }
`

Countdown.defaultProps = {
  date: new Date()
};

export default Countdown;
