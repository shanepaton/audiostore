import React from 'react'
import Image from 'next/image'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


export default function AudioPlayerWithText(props) {

	function handlePlay() {
		navigator.mediaSession.metadata = new MediaMetadata({
			title: props.name,
			artist: props.band,
			album: props.album,
			artwork: [
				{
					src: props.cover,
					sizes: '300x300', // HeightxWidth
					type: 'image/png'
				}
			]
		});
	}


	return (
		<div>
			<img className="rounded-md" src={props.cover} width={300} height={300} alt={props.name}></img>
			<div className="flex flex-row bg-gray-200 justify-between pr-4 pl-4" style={{ width: "300px" }}>
				<span>{props.name}</span>
				<span>{props.band}</span>
			</div>
			<AudioPlayer
				style={{ width: "300px" }}
				src={props.source}
				onPlay={handlePlay}
			/>
		</div>
	)
}
