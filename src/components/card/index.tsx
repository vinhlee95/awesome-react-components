import * as React from 'react'
import classNames from 'classnames'
import Meta from './Meta'

export enum CardSize {
	Default = 'default',
	Small = 'small',
}

interface CardProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
	title?: React.ReactNode
	extra?: React.ReactNode
	loading?: boolean
	children?: React.ReactNode
	className?: string
	size?: CardSize
	cover?: React.ReactNode
	bordered?: boolean
	actions?: React.ReactNode[]
	headStyle?: React.CSSProperties
	bodyStyle?: React.CSSProperties
	style?: React.CSSProperties
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
		size = CardSize.Default,
		bordered = true,
		loading,
		cover,
		actions,
		headStyle = {},
		bodyStyle = {},
		...rest
	} = props
	const prefixCls = 'awesome-card'
	const classes = classNames(prefixCls, className, {
		[`${prefixCls}-bordered`]: bordered,
		[`${prefixCls}-sm`]: size === CardSize.Small,
	})

	let head: React.ReactNode
	if (title) {
		head = (
			<div className={`${prefixCls}-head`} style={headStyle}>
				<div className={`${prefixCls}-head-wrapper`}>
					{title && <div className={`${prefixCls}-head-title`}>{title}</div>}
					{extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
				</div>
			</div>
		)
	}

	const loadingBlockStyle =
		bodyStyle.padding === 0 || bodyStyle.padding === '0px'
			? {padding: 24}
			: undefined

	const block = <div className={`${prefixCls}-loading-block`} />

	const loadingBlock = (
		<div className={`${prefixCls}-loading-content`} style={loadingBlockStyle}>
			<div>{block}</div>
		</div>
	)

	const body = (
		<div className={`${prefixCls}-body`} style={bodyStyle}>
			{loading ? loadingBlock : children}
		</div>
	)

	const actionDom =
		actions && actions.length ? (
			<ul className={`${prefixCls}-actions`}>{getAction(actions)}</ul>
		) : null
	const coverDom = cover ? (
		<div className={`${prefixCls}-cover`}>{cover}</div>
	) : null

	return (
		<div className={classes} {...rest}>
			{head}
			{coverDom}
			{body}
			{actionDom}
		</div>
	)
}

Card.Meta = Meta

export default Card
