import { useState } from 'react'
import useAuth from './useAuth'
import { Container, Form } from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
	clientId: 'ee3cfbab67ac45559416505321a9fe7f',
})

export default function Dashboard({ code }) {
	const accessToken = useAuth(code)

	const [search, setSearch] = useState('')
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
