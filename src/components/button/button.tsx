import * as React from 'react'
import classNames from 'classnames'
import {LoadingOutlined} from '@ant-design/icons'

export type ButtonHTMLType = 'submit' | 'button' | 'reset'

export type SizeType = 'small' | 'middle' | 'large'
export type ButtonType =
	| 'default'
	| 'primary'
	| 'ghost'
	| 'dashed'
	| 'link'
	| 'text'
export type ButtonShape = 'circle' | 'round'

export interface BaseButtonProps {
	children?: React.ReactNode
	size?: SizeType
	shape?: ButtonShape
	type?: ButtonType
	className?: string
	loading?: boolean
	icon?: React.ReactNode
}

export type AnchorButtonProps = {
	href: string
	target?: string
	onClick?: React.MouseEventHandler<HTMLElement>
} & BaseButtonProps &
	Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>

export type NativeButtonProps = {
	onClick?: React.MouseEventHandler<HTMLElement>
	htmlType?: ButtonHTMLType
} & BaseButtonProps &
	Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>

const Button: React.FunctionComponent<ButtonProps> = props => {
	const {
		children,
		htmlType,
		size,
		shape,
		loading,
		type,
		className,
		icon,
		href,
		target,
		...rest
	} = props

	const handleClick = (
		e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
	) => {
		const {onClick} = props

		if (loading) {
			return
		}

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

	const iconType = loading ? 'loading' : icon
	const prefixCls = 'awesome-btn'

	const classes = classNames(prefixCls, className, {
		[`${prefixCls}-${sizeCls}`]: sizeCls,
		[`${prefixCls}-${type}`]: type,
		[`${prefixCls}-${shape}`]: shape,
		[`${prefixCls}-loading`]: loading,
		[`${prefixCls}-icon-only`]: !children && children !== 0 && iconType,
	})

	const iconNode =
		icon && !loading ? icon : loading ? <LoadingOutlined /> : null

	if (href) {
		return (
			<a className={classes} href={href} target={target} {...rest}>
				{iconNode && <span className={`${prefixCls}-icon`}>{iconNode}</span>}
				{children}
			</a>
		)
	}

	return (
		<button type={htmlType} className={classes} onClick={handleClick} {...rest}>
			{iconNode && <span className={`${prefixCls}-icon`}>{iconNode}</span>}
			{children}
		</button>
	)
}

export default Button
