import { useState, useEffect } from 'react'
import useAuth from './useAuth'
import { Container, Form } from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
	clientId: 'ee3cfbab67ac45559416505321a9fe7f',
})

export default function Dashboard({ code }) {
	const accessToken = useAuth(code)
	const [searchResults, setSearchResults] = useState([])
	const [search, setSearch] = useState('')
	const [playingTrack, setPlayingTrack] = useState()
	const [lyrics, setLyrics] = useState('')

	function chooseTrack(track) {
		setPlayingTrack(track)
		setSearch('')
		setLyrics('')
	}

	useEffect(() => {
		if (!playingTrack) return

		axios
			.get('http://localhost:3001/lyrics', {
				params: {
					track: playingTrack.title,
					artist: playingTrack.artist,
				},
			})
			.then((res) => {
				setLyrics(res.data.lyrics)
			})
	}, [playingTrack])

	useEffect(() => {
		if (!accessToken) return
		spotifyApi.setAccessToken(accessToken)
	}, [accessToken])

	useEffect(() => {
    if (!search) return setSearchResults([])
	if (!accessToken) return


	return (
		<Container className='d-flex flex-column py-2' style={{ height: '100vh' }}>
			<Form.Control
				type='search'
				placeholder='Search Songs/Artists'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<div className='flex-grow-1 my-2' style={{ overFlowY: 'auto' }}>
				Songs
			</div>
			<div>Bottom</div>
		</Container>
	)
}
