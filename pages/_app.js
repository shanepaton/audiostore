import '../styles/globals.css'
import { useEffect } from "react"
import AuthContext from '../contexts/AuthContext.js'

function MyApp({ Component, pageProps }) {

	return (
		<AuthContext>
			<Component {...pageProps} />
		</AuthContext>
	)
}

export default MyApp
