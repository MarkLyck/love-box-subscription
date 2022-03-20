import * as ReactDOMClient from 'react-dom/client'
import App from './App'

import 'uno.css'

const container: any = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)
root.render(<App />)
