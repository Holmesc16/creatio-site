import React from "react";

import {
  LandingPage,
  StyledH1,
  StyledValueProposition,
  StyledSearchBar,
  StyledSearchButton
} from "./styles";
import StyledContent from "app/components/ui/Container";
import FactoryIcon from "app/components/icons/icon-factory";
import PackageIcon from "app/components/icons/icon-package";
import UserGroupIcon from "app/components/icons/icon-user-group";
import SearchIcon from "app/components/icons/icon-search";
import colors from "app/constants/colors";
import Row from "app/components/ui/Row";

const valuePropositionIconOptions = {
  primary: colors.secondary[3],
  secondary: colors.secondary[6],
  width: "2.5rem"
};

export default () => (
  <LandingPage>
    <StyledContent>
      <StyledH1>Creatio</StyledH1>
      <StyledValueProposition>
        <li>
          <FactoryIcon {...valuePropositionIconOptions} />
          Quickly generate boilerplate for your Javascript projects
        </li>
        <li>
          <UserGroupIcon {...valuePropositionIconOptions} />
          Discover templates made by developers all around the world
        </li>
        <li>
          <PackageIcon {...valuePropositionIconOptions} />
          Create your own templates to quickly scaffold future projects
        </li>
      </StyledValueProposition>
      <Row>
        <StyledSearchBar placeholder="Discover templates now!" />
        <StyledSearchButton>
          <SearchIcon width="2.5rem" primary={"white"} secondary={"none"} />
        </StyledSearchButton>
      </Row>
    </StyledContent>
  </LandingPage>
);
