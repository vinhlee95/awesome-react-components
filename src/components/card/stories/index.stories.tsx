import * as React from 'react'
import Card from '../index'
import Button from '../../button/button'
import '../../../styles/index.scss'

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

export default {title: 'Card'}
