import React from 'react'
import styled from 'styled-components'




export default function Web3Identity() {

  
  return (
    <Container>
      <SectionTitle>web3 Identity</SectionTitle>
      <Web3Info>
        <TopSection>
          <ProfilePicture></ProfilePicture>
          <PersonalInfoContainer>
            <Name>Sean</Name>
            <Handle>@seanb.lens</Handle>
          </PersonalInfoContainer>
        </TopSection>
        <BottomSection>
          <List>
            <ListItem>3 followers</ListItem>
            <ListItem>3 following</ListItem>
            <ListItem>0 posts</ListItem>
            <ListItem>0 comments</ListItem>
          </List>
        </BottomSection>
      </Web3Info>
    </Container>
  );
}

const Name = styled.h3`
  font-weight: 500;
  font-size: 14px;

`
const Handle = styled.h3`
  font-weight: 500;
  font-size: 14px;
`;

const PersonalInfoContainer = styled.div`
  width: 1;
`

const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  color: #1d1d1d;
  margin-bottom: 20px;
`
const TopSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  padding-bottom: 10px;
`

const Container = styled.div`
`;

const Web3Info = styled.div`
  padding: 16px;
  background-color: #f8f7ff;
  border: 1px solid black;
  border-radius: 16px;
  width: 254px;
`;

const ProfilePicture = styled.div`
  border-radius: 50%;
  background-color: green;
  height: 40px;
  width: 40px;
`

const BottomSection = styled.div`
  padding-top: 14px;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
`

const ListItem = styled.li`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #4E4773;
`;