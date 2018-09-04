import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, SidePanel } from '@aragon/ui'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  a {
    padding: 10px 30px;
    text-decoration: none;
  }
`

class Panel extends React.Component {
  state = {
    opened: false,
  }
  render() {
    const { items } = this.props
    const { opened } = this.state
    return (
      <div>
        <Button onClick={() => this.setState({ opened: true })}>Menu</Button>
        <SidePanel title="" opened={opened} onClose={() => this.setState({ opened: false })}>
          <Container>
          {items.map((item, i) => (
            <a key={i} href={item[0]}>{item[1]}</a>
          ))}
          </Container>
        </SidePanel>
      </div>
    )
  }
}

Panel.propTypes = {
  items: PropTypes.array,
}

export default Panel