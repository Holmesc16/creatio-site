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

export const CreatioName = styled.div`
  font-size: 1rem;
  margin-bottom: 4px;
`

export const RepoName = styled.div`
  color: grey;
  font-size: 0.75rem;
`

export const Stars = styled.div`
  margin-bottom: 4px;
`

export const Tags = styled.div`
  display: flex;

  & span {
    color: white;
    background-color: grey;
    padding: 4px;
    border-radius: 4px;
    font-size: 0.75rem;
  }

  & span:not(:last-child) {
    margin-right: 4px;
  }
`
