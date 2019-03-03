import React from 'react'
import map from 'lodash/map'

import {
  SearchResult,
  LeftSide,
  RightSide,
  CreatioName,
  RepoName,
  Tags,
  Stars,
} from './styles'

export default () => (
  <SearchResult>
    <LeftSide>
      <CreatioName>Creatio Name</CreatioName>
      <RepoName>some-repo-name</RepoName>
    </LeftSide>
    <RightSide>
      <Stars>Stars</Stars>
      <Tags>
        {map([1, 2, 3], num => (
          <span>{`tag${num}`}</span>
        ))}
      </Tags>
    </RightSide>
  </SearchResult>
)
