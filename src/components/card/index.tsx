import * as React from 'react'
import classNames from 'classnames'
import Meta from './Meta'

interface CardProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
	title?: React.ReactNode
	extra?: React.ReactNode
	children?: React.ReactNode
	className?: string
	bordered?: boolean
	actions?: React.ReactNode[]
}

function getAction(actions: React.ReactNode[]) {
	const actionList = actions.map((action, index) => (
		// eslint-disable-next-line react/no-array-index-key
		<li style={{width: `${100 / actions.length}%`}} key={`action-${index}`}>
			<span>{action}</span>
		</li>
	))
	return actionList
}

export {CardMetaProps} from './Meta'

export interface CardInterface extends React.FC<CardProps> {
	Meta: typeof Meta
}

const Card: CardInterface = props => {
	const {
		title,
		extra,
		children,
		className,
		bordered = true,
		actions,
		...rest
	} = props
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

	const actionDom =
		actions && actions.length ? (
			<ul className={`${prefixCls}-actions`}>{getAction(actions)}</ul>
		) : null

	return (
		<div className={classes} {...rest}>
			{head}
			{body}
			{actionDom}
		</div>
	)
}

Card.Meta = Meta

export default Card
