import styled from 'styled-components'

interface Props {
Items: any
}
export default function FooterLI({Items}: Props) {

  return ( 
    <>
    { Items.map((e:any, index:number) => {
      return <Li key={index}>{e.ItemName}</Li>
    })}
    </>
  )
}

const Li = styled.li`
  
`