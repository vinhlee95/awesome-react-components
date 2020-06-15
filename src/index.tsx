import * as React from 'react'
import * as ReactDOM from 'react-dom'

export const App: React.FunctionComponent = () => {
	return (
		<>
			<div> Welcome</div>
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
