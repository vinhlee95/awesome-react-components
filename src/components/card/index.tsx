import * as React from 'react'
import classNames from 'classnames'

interface CardProps {
	title?: React.ReactNode
	extra?: React.ReactNode
	children?: React.ReactNode
	className?: string
	bordered?: boolean
}

const Card: React.FunctionComponent<CardProps> = props => {
	const {title, extra, children, className, bordered = true, ...rest} = props
	const prefixCls = 'awesome-card'
	const classes = classNames(prefixCls, className, {
		[`${prefixCls}-bordered`]: bordered,
	})

	let head: React.ReactNode
	if (title) {
		head = (
			<div className={`${prefixCls}-head`}>
				<div className={`${prefixCls}-head-wrapper`}>
					{title && <div className={`${prefixCls}-head-title`}>{title}</div>}
					{extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
				</div>
			</div>
		)
	}

	const body = <div className={`${prefixCls}-body`}>{children}</div>

	return (
		<div className={classes} {...rest}>
			{head}
			{body}
		</div>
	)
}

export default Card
