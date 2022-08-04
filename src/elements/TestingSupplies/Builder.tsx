import styled from 'styled-components'
import { DAOCard } from '../cards/DAOCard'
import Prof from './emptyprofile.png'

export const Builder = () => {
  return (
    <div>
      <DAOCard daoLogo={Prof} daoWebsite='https://gnc.com' title={'Dao Name'} />
    </div>
  )
}

