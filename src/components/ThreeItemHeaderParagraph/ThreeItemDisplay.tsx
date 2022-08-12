import React from 'react'
import styled from 'styled-components';
import SingleItem from './SingleItem'

export default function ThreeItemDisplay() {
  return (
    <Container>
      <SingleItem />
      <SingleItem />
      <SingleItem />
    </Container>
  );
}

const Container = styled.div`
  
`