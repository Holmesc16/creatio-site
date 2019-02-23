import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Router } from 'app/components/router/'
import { StyledContainer } from './appStyles'

export default () => (
	<>
		<StyledContainer>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</StyledContainer>
	</>
)
