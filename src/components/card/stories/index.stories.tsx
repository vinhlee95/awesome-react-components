import * as React from 'react'
import Card from '../index'
import Button from '../../button/button'
import '../../../styles/index.scss'
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from '@ant-design/icons/lib'
const {Meta} = Card

const Wrapper = ({children}) => (
	<div style={{width: 400, height: 400}}>{children}</div>
)

export const basicCard = () => (
	<Wrapper>
		<Card title="Card title" extra={<Button type="link">More</Button>}>
			<div>Card content</div>
		</Card>
	</Wrapper>
)

export const actionsCard = () => (
	<Wrapper>
		<Card
			actions={[
				<SettingOutlined key="setting" />,
				<EditOutlined key="edit" />,
				<EllipsisOutlined key="ellipsis" />,
			]}
			title="Card title"
			extra={<Button type="link">More</Button>}
		>
			<div>Card content</div>
		</Card>
	</Wrapper>
)

export const metaCard = () => (
	<Wrapper>
		<Card
			actions={[
				<SettingOutlined key="setting" />,
				<EditOutlined key="edit" />,
				<EllipsisOutlined key="ellipsis" />,
			]}
			title="Card title"
			extra={<Button type="link">More</Button>}
		>
			<Meta title="Europe Street beat" description="www.instagram.com" />
			<div>Card content</div>
		</Card>
	</Wrapper>
)

export default {title: 'Card'}
