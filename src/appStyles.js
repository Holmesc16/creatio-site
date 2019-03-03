import styled from 'styled-components'

import colors from 'app/constants/colors'
import spaceBackground from 'app/assets/space-bkgrnd.jpg'

export const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  flex-direction: column;
  background-image: url(${spaceBackground});
  background-size: cover;
  font-family: 'Nanum Gothic', sans-serif;
`

// width: 60%;
// min-width: 1100px;
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 4px 2px ${colors.secondary[0]};
`

export const StyledH1 = styled.h1`
  font-size: 4em;
  font-weight: bold;
  color: ${colors.primary[0]};
  margin-bottom: 50px;
`

export const StyledValueProposition = styled.ul`
  font-size: 2em;
  color: ${colors.primary[2]};
  list-style-type: none;
  padding-bottom: 0;
  margin-bottom: 20px;

  & > li {
    display: flex;
    align-items: center;
    margin-bottom: 35px;
  }

  & > li > svg {
    margin-right: 10px;
  }
`

export const StyledSearchBar = styled.input`
  width: 100%;
  height: 50px;
  border-width: 2px;
  border-radius: 8px 0 0 8px;
  border-color: ${colors.primary[0]};
  border-right: none;
  font-size: 1.5em;
  padding-left: 20px;

  &::placeholder {
    color: lightgrey;
  }
`

export const StyledSearchButton = styled.button`
  background-color: ${colors.primary[0]};
  border-color: ${colors.primary[0]};
  border-radius: 0 8px 8px 0;
  height: 50px;
  border-width: 2px;
`
