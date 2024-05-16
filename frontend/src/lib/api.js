'use client'

import axios from 'axios'

async function postRequest(url, data) {
	try {
		const res = await axios.post(url, data)
		return res
	} catch (error) {
		console.log('Error in postRequest:')
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
