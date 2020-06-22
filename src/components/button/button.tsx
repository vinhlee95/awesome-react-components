import * as React from 'react'

export interface BaseButtonProps {
	children?: React.ReactNode
}

export type ButtonHTMLType = 'submit' | 'button' | 'reset'

export type NativeButtonProps = {
	onClick?: React.MouseEventHandler<HTMLElement>
	htmlType?: ButtonHTMLType
} & BaseButtonProps &
	Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>

export type ButtonProps = NativeButtonProps

const Button: React.FunctionComponent<ButtonProps> = props => {
	const {children, htmlType, ...rest} = props

	const handleClick = (
		e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
	) => {
		const {onClick} = props

		if (onClick) {
			;(onClick as React.MouseEventHandler<
				HTMLButtonElement | HTMLAnchorElement
			>)(e)
		}
	}

	return (
		<button type={htmlType} onClick={handleClick} {...rest}>
			{children}
		</button>
	)
}

export default Button
