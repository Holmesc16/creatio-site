import React from 'react'
import { withStateHandlers } from 'recompose'

import {
  LandingPage,
  StyledH1,
  StyledValueProposition,
  StyledSearchBar,
  StyledSearchButton,
  StyledSearchHelper,
} from './styles'

import StyledContent from 'app/components/ui/Container'
import FactoryIcon from 'app/components/icons/icon-factory'
import PackageIcon from 'app/components/icons/icon-package'
import UserGroupIcon from 'app/components/icons/icon-user-group'
import SearchIcon from 'app/components/icons/icon-search'
import colors from 'app/constants/colors'
import Row from 'app/components/ui/Row'
import Logo from 'app/assets/logo.svg'

const valuePropositionIconOptions = {}

const LandingPageComponent = ({ isActive, setIsActive }) => {
  return (
    <LandingPage>
      <StyledContent>
        <img src={Logo} style={{ marginBottom: '40px', marginTop: '-20px' }} />
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
        <Row style={{ position: 'relative' }}>
          <StyledSearchBar
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
            placeholder="Discover templates now!"
          />
          <StyledSearchButton>
            <SearchIcon width="2.5rem" primary={'white'} secondary={'none'} />
          </StyledSearchButton>
          <StyledSearchHelper isActive={isActive}>
            search examples: "react, vue, _lodash" "progressive web app"
            "username01-react"
          </StyledSearchHelper>
        </Row>
      </StyledContent>
    </LandingPage>
  )
}

export default withStateHandlers(
  { isActive: false },
  {
    setIsActive: () => isActive => ({
      isActive,
    }),
  }
)(LandingPageComponent)
