import styled from 'styled-components'
import colors from 'app/constants/colors'

export const SearchResultsPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 4px 4px ${colors.secondary[0]};
  justify-content: flex-start;
  max-width: 800px;
  width: 100%;
  margin-top: 16px;
`

export const StyledH1 = styled.h1`
  font-size: 2em;
  font-weight: bold;
  color: ${colors.primary[0]};
  margin-bottom: 16px;
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
  font-size: 1em;
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
  padding: 8px;
  border-width: 2px;
  & svg {
    height: 100%;
  }
`

export const Divider = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.15);
  margin: 16px 0;
`

export const NoResultsText = styled.p`
  font-size: 1.25em;
  color: grey;
`
