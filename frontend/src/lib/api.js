'use client'

import axios from 'axios'
import Cookies from 'js-cookie'

async function postRequest(url, data) {
	const cookie = Cookies.get('pjwt')
	try {
		const res = await axios.post(url, data, {
			headers: {
				Authorization: `Bearer ${cookie}`,
			},
			withCredentials: true,
		})
		return res
	} catch (error) {
		console.log('Error in postRequest:', error)
		throw error
	}
}

async function getRequest(url) {
	try {
		const res = await axios.get(url)
		return res
	} catch (error) {
		console.log('Error in getRequest:', error)
	}
}

module.exports = { postRequest, getRequest }
