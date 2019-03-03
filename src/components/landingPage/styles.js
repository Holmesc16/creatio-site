import s from "styled-components";

import colors from "app/constants/colors";

export const LandingPage = s.div`
	display: flex;
	align-items: center;
	height: 100vh;
`;

export const StyledContent = s.div`
	display: flex;
	flex-direction: column;
	padding: 50px;
	background-color: white;
	border-radius: 5px;
	box-shadow: 4px 2px ${colors.secondary[0]};
`;

export const StyledH1 = s.h1`
	font-size: 4em;
	font-weight: bold;
	color: ${colors.primary[0]};
	margin-bottom: 50px;
`;

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
`;

export const StyledSearchBar = s.input`
	width: 100%;
	height: 50px;
	border-width: 2px;
	border-radius: 8px 0 0 8px;
	border-color: ${colors.primary[0]};
	border-right: none;
	font-size: 1.5em;
	padding-left: 20px;

	&::placeholder {
		color: lightgrey;
	}
`;

export const StyledSearchButton = s.button`
	background-color: ${colors.primary[0]};
	border-color: ${colors.primary[0]};
	border-radius: 0 8px 8px 0;
	height: 50px;
	border-width: 2px;
`;
