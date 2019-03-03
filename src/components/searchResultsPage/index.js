import React from "react";
import { withProps } from "recompose";
import map from "lodash/map";

import {
  SearchResultsPage,
  StyledH1,
  StyledSearchBar,
  StyledSearchButton,
  Divider,
  NoResultsText
} from "./styles";
import SearchIcon from "app/components/icons/icon-search";
import Row from "app/components/ui/Row";

const SearchResultsComponent = ({ searchResults }) => (
  <SearchResultsPage>
    <StyledH1>Creatio</StyledH1>
    <Row>
      <StyledSearchBar placeholder="Discover templates now!" />
      <StyledSearchButton>
        <SearchIcon width="2.5rem" primary={"white"} secondary={"none"} />
      </StyledSearchButton>
    </Row>
    <Divider />
    <div>
      {searchResults.length > 0 ? (
        map(searchResults, () => <Row>results</Row>)
      ) : (
        <NoResultsText>No results found.</NoResultsText>
      )}
    </div>
  </SearchResultsPage>
);

export default withProps(() => {
  return {
    searchResults: [1, 2, 3]
  };
})(SearchResultsComponent);
