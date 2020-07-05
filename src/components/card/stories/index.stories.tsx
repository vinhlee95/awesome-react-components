import * as React from 'react'
import Card, {CardSize} from '../index'
import Button from '../../button/button'
import '../../../styles/index.scss'
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from '@ant-design/icons/lib'
const {Meta} = Card

const Wrapper = ({children, style = {}}) => (
	<div style={{width: 400, height: 'auto', ...style}}>{children}</div>
)

export const basicCard = () => (
	<>
		<Wrapper style={{marginBottom: 16}}>
			<Card title="Default card" extra={<Button type="link">More</Button>}>
				<div>Card content</div>
			</Card>
		</Wrapper>
		<Wrapper>
			<Card
				title="Small card"
				size={CardSize.Small}
				extra={<Button type="link">More</Button>}
			>
				<div>Card content</div>
			</Card>
		</Wrapper>
	</>
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

export const coverCard = () => (
	<Wrapper>
		<Card
			cover={
				<img
					alt="card cover"
					src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
				/>
			}
		>
			<Meta title="Card title" description="This is the description" />
		</Card>
	</Wrapper>
)

export default {title: 'Card'}
