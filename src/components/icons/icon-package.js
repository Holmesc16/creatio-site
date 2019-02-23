import React from 'react'

export default ({ height, width, primary, secondary }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		height={height}
		width={width}
	>
		<g>
			<polygon
				fill={secondary}
				points="15 3.333 15 4.67 18.008 4.67 21 6 14 12 12 22 3 18 3 6 12 2"
			/>
			<path
				fill={primary}
				d="M21 6v12l-9 4V10l9-4zM9 8.67v3l-3-1.34v-3l9-4 3 1.34-9 4z"
			/>
		</g>
	</svg>
)
