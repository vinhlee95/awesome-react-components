import * as React from 'react'
import Button from '../button'

const handleClicked = () => console.log('Button Clicked')

export const defaultButton = () => <Button onClick={handleClicked}>Default Button</Button>

export const disabledButton = () => <Button disabled>Disabled Button</Button>

export const htmlTypeButton = () => <Button htmlType='reset'>Reset Button</Button>

export default {title: 'Button'}
