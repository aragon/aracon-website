import React from 'react'
import { Page } from '../components'
import { Text } from '@aragon/ui'
import styled from 'styled-components'
import Section from '../components/Section/Section'

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 8.5%;
  background: white;
  text-align: left;
`;

const NotFound = () => (
  <Page>
  	<Section className="white all-page">
  		<Container>
		    <Text>
		    	<div className="h1box">
		    		<h1>Page not found</h1>
		    	</div>
		    </Text>
		    <br/>
		    <p>The page you are trying to access could not be found.</p>
		  </Container>
    </Section>
  </Page>
);

export default NotFound
