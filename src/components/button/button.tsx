import * as React from 'react'

const Button: React.FunctionComponent = (props) => {

	const {children} = props

	return (
		<button>{children}</button>
	)

}

export default Button
