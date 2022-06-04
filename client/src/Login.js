import React from 'react'

import { Container } from 'react-bootstrap'

const AUTH_URL =
	'https://accounts.spotify.com/authorize?client_id=ee3cfbab67ac45559416505321a9fe7f&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

export default function Login() {
	return (
		<Container>
			<a className='btn btn-success btn-lg' href={AUTH_URL}>
				Login with Spotify
			</a>
		</Container>
	)
}
