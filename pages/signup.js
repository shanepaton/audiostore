import { useRef, useState } from "react"
import { useAuth, AuthProvider } from "../contexts/AuthContext"
import Image from 'next/image'
import Head from 'next/head'

export default function Signup() {
	const emailRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
	const { signup, updateName } = useAuth()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	async function handleSubmit(e) {
		e.preventDefault()

		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!re.test(emailRef.current.value)) {
			return setError('Please enter a valid email address')
		}

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match')
		}

		if (passwordRef.current.value.length < 6 || passwordConfirmRef.current.value.length < 6) {
			return setError('Passwords must be at least 6 characters')
		}

		try {
			setError('')
			setLoading(true)

			await signup(emailRef.current.value, passwordRef.current.value)
		} catch {
			setError('Failed to create and account')
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
				<h1 className="text-2xl text-center mb-4">Sign Up</h1>

				<input type="text" ref={emailRef} placeholder="Email" className="px-3 py-3 mb-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
				<input type="password" ref={passwordRef} placeholder="Password" className="px-3 py-3 mb-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
				<input type="password" ref={passwordConfirmRef} placeholder="Confirm Password" className="px-3 py-3 mb-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
				<input disabled={loading} type="submit" className=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"></input>
			</form>
		</div>
	)
}
