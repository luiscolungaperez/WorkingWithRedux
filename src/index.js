import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './routes'
import { Styles } from './global-styles'

ReactDOM.render(
	<>
		<Styles />
		<App />
	</>,
	document.getElementById('app')
)