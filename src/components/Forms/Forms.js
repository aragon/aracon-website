import React from 'react'
import styled from 'styled-components'
import { breakpoint } from '@aragon/ui'

const large = css => breakpoint('large', css);

const Content = styled.div`
  display: flex!important;
  text-align: center;
  justify-content: center;
  ${large('justify-content: flex-end; max-width: 1440px !important; margin: auto;')};
  padding-top: 40px;
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