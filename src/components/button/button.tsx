import * as React from 'react'

export interface BaseButtonProps {
	children?: React.ReactNode;
}

export type NativeButtonProps = {
	onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
	Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = NativeButtonProps

const Button: React.FunctionComponent = (props: ButtonProps) => {

	const {children, ...rest} = props

	const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
		const {onClick} = props;

		if (onClick) {
			(onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
		}
	}

	return (
		<button onClick={handleClick} {...rest}>{children}</button>
	)

}

export default Button
