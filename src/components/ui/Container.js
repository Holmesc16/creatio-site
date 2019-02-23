import s from 'styled-components'

import colors from 'app/constants/colors'

export default s.div`
	display: flex;
	flex-direction: column;
	padding: 50px;
	background-color: white;
	border-radius: 5px;
	box-shadow: 4px 2px ${colors.secondary[0]};
`
