import React from "react";

import { SearchResult, LeftSide, RightSide, CreatioName } from "./styles";

export default () => (
  <SearchResult>
    <LeftSide>
      <CreatioName>name</CreatioName>
      <div>repo</div>
    </LeftSide>
    <RightSide>
      <div>stars</div>
      <div>tags</div>
    </RightSide>
  </SearchResult>
);
