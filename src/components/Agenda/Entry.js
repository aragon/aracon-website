import React from 'react'
import styled from 'styled-components'
import { theme, breakpoint } from '@aragon/ui'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const EntryBox = styled.div`
  clear: both;
  text-align: left;
  position: relative;
  .time {
    margin-bottom: .5em;
    float: left;
    width: 33%;
    padding-right: 30px;
    text-align: right;
    position: relative;
  }
  .time:after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    top: 6px;
    right: -6px;
    background-image: linear-gradient(71deg,#6aacf4,#18ebd6);
  }
  .time:before {
    content: '';
    width: 26px;
    height: 26px;
    border-radius: 30px;
    opacity: 0.22;
    background-image: linear-gradient(to right,#6aacf4,#18ebd6);
    position: absolute;
    right: -13px;
    top: -1px;
  }
  .description {
    margin: 0 0 3em;
    float: right;
    width: 66%;
    padding-left: 30px;
    position: relative;
  }
  .description p {
    line-height: 1;
    font-size: 18px;
    ${medium('line-height: 1; font-size: 22px;')};
    margin-bottom: 5px;
    font-weight: 700;
    color: #000000;
  }
  .description h6 {
    line-height: 1;
    margin-top: 8px;
    color: #808080;
    font-weight: 600;
    ${medium('line-height: 1.5; margin-top: 10px;')};
  }
  .time h3 {
    font-size: 15px;
    ${medium('font-size: 17px; font-weight: 700;')};
    color: #000000;
  }
  .badge-time {
    color: #5a5f68;
  }
  .badge-panel {
    color: #ba7b06;
  }
  .emoji {
    margin-right: 3px;
  }
`;

const Entry = ({ ...props }) => (
  <EntryBox>
    <div className="time">
      <h3>{props.time}</h3>
    </div>
    <div className="description">
      <p>{props.title}</p>
      {props.badge && <p>{props.badge}</p>}
      <h6>{props.subtitle}</h6>
    </div>
  </EntryBox>
);

export default Entry
