import * as React from 'react'
import classNames from 'classnames'

export type ButtonHTMLType = 'submit' | 'button' | 'reset'

export type SizeType = 'small' | 'middle' | 'large'

export interface BaseButtonProps {
	children?: React.ReactNode
	size?: SizeType
	className?: string
}

export type NativeButtonProps = {
	onClick?: React.MouseEventHandler<HTMLElement>
	htmlType?: ButtonHTMLType
} & BaseButtonProps &
	Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>

export type ButtonProps = NativeButtonProps

const Button: React.FunctionComponent<ButtonProps> = props => {
	const {children, htmlType, size, className, ...rest} = props

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

	let sizeCls = ''
	switch (size) {
		case 'large':
			sizeCls = 'lg'
			break
		case 'small':
			sizeCls = 'sm'
			break
		default:
			break
	}

	const prefixCls = 'awesome-btn'

	const classes = classNames(prefixCls, className, {
		[`${prefixCls}-${sizeCls}`]: sizeCls,
	})

	return (
		<button type={htmlType} className={classes} onClick={handleClick} {...rest}>
			{children}
		</button>
	)
}

export default Button
