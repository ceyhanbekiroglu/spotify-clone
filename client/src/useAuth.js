import React from 'react'

export default function useAuth(code) {
	const [accessToken, setAccessToken] = React.useState()
	const [refreshToken, setRefreshToken] = React.useState()
	const [expiresIn, setExpiresIn] = React.useState()
}
