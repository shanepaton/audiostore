import { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import router from 'next/router'
import Image from 'next/image'
import Head from 'next/head'

export default function Login() {
	const emailRef = useRef()
	const passwordRef = useRef()
	const { login } = useAuth()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			setError('')
			setLoading(true)

			await login(emailRef.current.value, passwordRef.current.value)
			router.push('/dashboard')
		} catch {
			setError('Failed to sign in')
		}
		setLoading(false)


	}
	return (
		<div className="h-screen flex flex-col justify-center items-center dark:bg-gray-900">
			<Head>
				<title>audiostore</title>
			</Head>
			{error && <h1 className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">{error}</h1>}
			<form onSubmit={handleSubmit} className="w-72 bg-gray-50 p-4 rounded-lg flex flex-col">
				<Image className="h-16 mb-4 w-auto" src="/logo.svg" width={"64px"} height={"64px"} alt="audiostore" />
				<h1 className="text-2xl text-center mb-4">Login</h1>
				<input type="text" ref={emailRef} placeholder="Email" className="px-3 py-3 mb-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
				<input type="password" ref={passwordRef} placeholder="Password" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
				<input disabled={loading} className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit"></input>
			</form>
		</div>
	)
}
