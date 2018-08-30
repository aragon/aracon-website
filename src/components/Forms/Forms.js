import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  display: flex!important;
  text-align: center;
  justify-content: center;
`

export default class Forms extends React.Component {
  
  componentDidMount() {
    var Script;
    window.SMCX = window.SMCX || [], 
    Script = document.createElement("script"), 
    Script.type = "text/javascript", Script.async = !0, 
    Script.id = "smcx-sdk", 
    Script.src = this.props.src, 
    document.getElementById(this.props.type + "Script").appendChild(Script);
  }


  render() {
    return (
      <Content id={this.props.type + "Script"}></Content>
    );
  }
}