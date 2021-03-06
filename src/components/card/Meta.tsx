import * as React from 'react'
import classNames from 'classnames'

export interface CardMetaProps {
	style?: React.CSSProperties
	className?: string
	avatar?: React.ReactNode
	title?: React.ReactNode
	description?: React.ReactNode
}

const Meta: React.FC<CardMetaProps> = props => {
	const {className, avatar, title, description, ...others} = props
	const prefixCls = 'awesome-card'
	const classString = classNames(`${prefixCls}-meta`, className)

	const avatarDom = avatar ? (
		<div className={`${prefixCls}-meta-avatar`}>{avatar}</div>
	) : null
	const titleDom = title ? (
		<div className={`${prefixCls}-meta-title`}>{title}</div>
	) : null
	const descriptionDom = description ? (
		<div className={`${prefixCls}-meta-description`}>{description}</div>
	) : null

	const MetaDetail =
		titleDom || descriptionDom ? (
			<div className={`${prefixCls}-meta-detail`}>
				{titleDom}
				{descriptionDom}
			</div>
		) : null
	return (
		<div {...others} className={classString}>
			{avatarDom}
			{MetaDetail}
		</div>
	)
}

export default Meta
