import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './styles/index.scss'
import Button from './components/button/button'

export const App: React.FunctionComponent = () => {
	return (
		<>
			<div> Welcome</div>
			<Button size='small'>Small</Button>
			<Button size='middle'>Normal</Button>
			<Button size='large'>Large</Button>
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
