import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import router from 'next/router'
import AudioPlayerWithText from "../components/AudioPlayerWithText"
import Image from 'next/image'
import Head from 'next/head'

export default function dashboard() {
	const [error, setError] = useState("")
	const { currentUser, logout } = useAuth()

	if (!currentUser) {
		router.push('/login')
	}

	async function handleLogout() {
		setError('')

		try {
			await logout()
			router.push('/login')
		} catch {
			setError('Failed to logout')
		}
	}

	return (
		<div className="bg-gray-900 h-screen">
			<Head>
				<title>audiostore</title>
			</Head>
			<nav className="relative bg-gray-800 w-full">
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-16">
						<div className="flex-1 flex items-center ">
							<div className="flex-shrink-0 flex items-center text-center">
								<div className="block lg:hidden h-10 w-auto">
									<Image src="/logo.svg" width={"48px"} height={"48px"} alt="audiostore" />
								</div>
								<div className="hidden lg:block h-10 w-auto">
									<Image src="/logo.svg" width={"48px"} height={"48px"} alt="audiostore" />
								</div>


								<span className="hidden text-2xl  justify-items-center mt-2 ml-4 font-mono align-center text-white lg:block h-8 w-auto">audiostore</span>
							</div>
						</div>
						<div className="absolute  inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<button onClick={handleLogout} className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white ">
								<span>Logout</span>
							</button>
						</div>
					</div>
				</div>
			</nav>
			<h1 className="pt-3 justify-items-center text-center text-3xl font-mono align-center mt-4 text-white lg:block h-8 w-auto">Audio Library</h1>
			<div className="pt-12 flex justify-center items-center bg-gray-900">

				<div className=" grid 2xl:grid-cols-5 xl:grid-cols-3 md:grid-cols-2 gap-12 sm:grid-cols-1">
					<AudioPlayerWithText album={"Good & Evil"} cover="/images/GAE/Good_AE.png" source="/music/And.flac" name="&" band="Tally Hall" />
					<AudioPlayerWithText album={"Good & Evil"} cover="/images/GAE/Good_AE.png" source="/music/Turn_The_Lights_Off.flac" name="Turn The Lights Off" band="Tally Hall" />
					<AudioPlayerWithText album={"Marvin's Marvelous Mechanical Museum"} cover="/images/MMMM/MMMM.png" source="/music/Ruler_of_Everything.flac" name="Ruler of Everything" band="Tally Hall" />
					<AudioPlayerWithText album={"Marvin's Marvelous Mechanical Museum"} cover="/images/MMMM/MMMM.png" source="/music/The_Bidding.flac" name="The Bidding" band="Tally Hall" />
					<AudioPlayerWithText album={"Marvin's Marvelous Mechanical Museum"} cover="/images/MMMM/MMMM.png" source="/music/Welcome_to_Tally_Hall.flac" name="Welcome to Tally Hall" band="Tally Hall" />
					<AudioPlayerWithText album={"Marvin's Marvelous Mechanical Museum"} cover="/images/MMMM/MMMM.png" source="/music/The_Whole_World_and_You.flac" name="The Whole World and You" band="Tally Hall" />
					<AudioPlayerWithText album={"ミラクルミュージカル"} cover="/images/MiM/MiM.png" source="/music/Murders.flac" name="Murders" band="Miracle Musical" />
					<AudioPlayerWithText album={"Depression Cherry"} cover="/images/DC/DC.png" source="/music/Space_Song.flac" name="Space Song" band="Beach House" />
					<AudioPlayerWithText album={"Bonetones"} cover="/images/WAI/Who_AI.png" source="/music/Who_Am_I.flac" name="Who Am I" band="Michael Wyckoff" />
					<AudioPlayerWithText album={"Wannabewithu"} cover="/images/WANNA/WANNA.png" source="/music/Lover_is_a_Day.flac" name="Lover Is a Day" band="Cuco" />
				</div>
			</div>

		</div>


	)
}
