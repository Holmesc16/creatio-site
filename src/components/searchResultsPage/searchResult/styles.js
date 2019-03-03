import styled from 'styled-components'

export const SearchResult = styled.div`
  display: flex;
  border: 1px solid grey;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-end;
`

export const CreatioName = styled.div``
