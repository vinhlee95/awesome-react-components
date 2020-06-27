import * as React from 'react'
import {SearchOutlined, DeleteOutlined, CloseOutlined} from '@ant-design/icons'
import Button from '../button'
import '../../../styles/index.scss'

const handleClicked = () => console.log('Button Clicked')

export const defaultButton = () => (
	<Button onClick={handleClicked}>Default Button</Button>
)

export const disabledButton = () => <Button disabled>Disabled Button</Button>

export const htmlTypeButton = () => (
	<>
		<Button htmlType="reset">Reset Button</Button>
		<Button htmlType="submit">Submit Button</Button>
		<Button htmlType="button">Button</Button>
	</>
)

export const sizeButton = () => (
	<>
		<Button size="small">Small</Button>
		<Button size="middle">Default</Button>
		<Button size="large">Large</Button>
	</>
)

export const typeButton = () => (
	<>
		<Button type="default">Default</Button>
		<Button type="primary">Primary</Button>
		<Button type="ghost">Ghost</Button>
		<Button type="dashed">Dashed</Button>
		<Button type="link">Link</Button>
		<Button type="text">Text</Button>
	</>
)

export const loadingButton = () => (
	<>
		<Button loading={true}>Default</Button>
	</>
)

export const iconButton = () => (
	<>
		<Button icon={<SearchOutlined />}>Search</Button>
		<Button icon={<DeleteOutlined />}>Delete</Button>
		<Button icon={<CloseOutlined />}>Close</Button>
	</>
)

export default {title: 'Button'}
