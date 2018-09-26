import React from 'react'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'

const large = css => breakpoint('large', css);

const Content = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  ${large('width: 50%; justify-content: flex-end;')};
`;

export default class Forms extends React.Component {
  
  componentDidMount() {
    let Script;
    window.SMCX = window.SMCX || [];
    Script = document.createElement("script");
    Script.type = "text/javascript", Script.async = !0;
    Script.id = "smcx-sdk";
    Script.src = this.props.src;
    document.getElementById(this.props.type + "Script").appendChild(Script);
  }

  render() {
    return (
      <Content id={this.props.type + "Script"}/>
    );
  }
}