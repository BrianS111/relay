import styled from 'styled-components'
import FooterLI from './FooterLI'

interface Props {
  Title: string;
  Items: any
}
export default function FooterUL({Title, Items}: Props) {
  return (
    <Ul>
      <H3>{Title}</H3>
      <FooterLI Items={Items}/>
    </Ul>
  )
}
const Ul = styled.ul`
  
`
const H3 = styled.h3`
  
`