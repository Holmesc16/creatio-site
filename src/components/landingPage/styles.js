import s from 'styled-components'

import colors from 'app/constants/colors'

export const StyledH1 = s.h1`
	font-size: 4em;
	font-weight: bold;
	color: ${colors.primary[0]};
	margin-bottom: 50px;
`

export const StyledValueProposition = s.ul`
	font-size: 2em;
	color: ${colors.primary[2]};
	list-style-type: none;
	padding-bottom: 0;
	margin-bottom: 20px;

	& > li {
		display: flex;
		align-items: center;
		margin-bottom:35px;
	}

	& > li > svg {
		margin-right: 10px;
	}
`

export const StyledSearchBar = s.input`
	width: 100%;
	height: 50px;
	border-width: 2px;
	border-radius: 8px 0 0 8px;
	border-color: ${colors.primary[0]};
	border-right: none;
	font-size: 1.5em;
	padding-left: 20px;
	z-index:1;

	&::placeholder {
		color: lightgrey;
	}
`

export const StyledSearchButton = s.button`
	background-color: ${colors.primary[0]};
	border-color: ${colors.primary[0]};
	border-radius: 0 8px 8px 0;
	height: 50px;
	border-width: 2px;
`
export const StyledSearchHelper = s.div`
width: 100%;
height: 35px;
line-height: 33px;
border-width: 2px;
border-radius: 8px 0 0 8px;
border-color: #0A6C74;
border-right: none;
font-size: 1.1em;
border-radius: 0 0 25px 25px;
padding-left: 20px;
background-color: #eee;
position: absolute;
width: 92%;
font-style: italic;
color: #999;
max-height: ${props => props.isActive ? '35px' : '0'};
transition: max-height .5s;
overflow-y: hidden;
top: 55px;
left: 0;
margin-top: -2px;
`