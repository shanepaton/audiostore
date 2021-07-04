import Head from 'next/head'
import Image from 'next/image'
import router from 'next/router'

export default function Home() {

	function redirectToSignup() {
		router.push('/signup')
	}

	function redirectToLogin() {
		router.push('/login')
	}

	return (
		<div className="bg-gray-900 h-screen flex justify-center items-center">
			<Head>
				<title>audiostore</title>
			</Head>
			<div className="bg-gray-100 md:w-72 lg:w-2/5 flex justify-center items-center rounded-md flex-col h-96 p-4 ">
				<Image src="/logo.svg" width={"128px"} height={"128px"} alt={"audiostore"} />
				<h1 className="pl-4 pr-4 font-mono align-center text-5xl mb-4">audiostore</h1>
				<input value="Login" onClick={redirectToLogin} className="text-2xl w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded h-16" type="button"></input>
				<input value="Sign up" onClick={redirectToSignup} className="text-2xl w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded h-16" type="button"></input>
			</div>
		</div>
	)
}
