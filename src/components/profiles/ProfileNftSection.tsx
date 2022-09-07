import React from 'react'
import styled from 'styled-components'
import ProfileNft from './ProfileNft'

export default function ProfileNftSection() {
  return (
    <Container>
      <SectionTitle>NFTs</SectionTitle>
      <ProfileNft />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  color: #1d1d1d;
`