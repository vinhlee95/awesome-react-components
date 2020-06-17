import * as React from 'react'

export interface BaseButtonProps {
	onClick?: React.MouseEventHandler<HTMLElement>;
	children?: React.ReactNode;
}

const Button: React.FunctionComponent = (props: BaseButtonProps) => {

	const {children} = props

	const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
		const {onClick} = props;

		if (onClick) {
			(onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
		}
	}

	return (
		<button onClick={handleClick}>{children}</button>
	)

}

export default Button
