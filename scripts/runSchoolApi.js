'use strict'

const axios = require('axios')

const path = '/admin/api/v1'
const endPointSchools = '/admin/schools'
const endPointUsers = '/admin/users'
const federalStateNames = {
	nbc: 'Niedersachsen',
	brb: 'Brandenburg',
}
const users = {
	admin1_nbc: 'administrator',
	teacher1_nbc: 'teacher',
	student1_nbc: 'student',
}

const headers = {
	'Content-Type': 'application/json',
}

const extractSubdomain = url => {
	try {
		const parsedUrl = new URL(url)
		return parsedUrl.hostname.split('.')[1]
	} catch (error) {
		console.error('Error parsing URL:', error.message)
		return null
	}
}

const createSchool = async (schoolUrl, headers) => {
	try {
		const payload = {
			name: `cypress-automated-tests`,
			federalStateName: federalStateNames[extractSubdomain(schoolUrl)],
		}
		const response = await axios.post(schoolUrl, payload, { headers })
		const { id } = response.data
		console.log(`School created with ID: ${id}`)
		return { id }
	} catch (error) {
		console.error('Error creating school:', error.message)
		throw error
	}
}

const generateRandomUserEmail = () => {
	const commonNames = ['john', 'emma', 'michael', 'sarah', 'david']
	const randomName = commonNames[Math.floor(Math.random() * commonNames.length)]
	const randomNumber = Math.floor(Math.random() * 1000)
	const emailDomain = 'cypress-mail.de'
	return `${randomName}${randomNumber}@${emailDomain}`
}

const getUrl = baseUrl => {
	const schoolUrl = `${baseUrl
		.toLowerCase()
		.replace(/\/$/, '')}${path}${endPointSchools}`
	const userUrl = `${baseUrl
		.toLowerCase()
		.replace(/\/$/, '')}${path}${endPointUsers}`

	return { schoolUrl, userUrl }
}

const createUser = async (baseUrl, apiKeys, schoolId, userType) => {
	try {
		const { schoolUrl, userUrl } = getUrl(baseUrl)

		console.log('Creating user:', userType)

		const finalHeaders = { ...headers }
		if (!finalHeaders.hasOwnProperty('x-api-key')) {
			finalHeaders['x-api-key'] = apiKeys
		}

		if (schoolId === undefined) {
			const { id } = await createSchool(schoolUrl, finalHeaders)
			schoolId = id
		} else {
			console.log(`Using existing school ID: ${schoolId}`)
		}

		const role = users[userType]
		if (!role) {
			throw new Error('Invalid username')
		}

		const payload = {
			schoolId,
			firstName: 'cypress',
			lastName: 'test',
			email: generateRandomUserEmail(),
			roleNames: [role],
		}

		const response = await axios.post(userUrl, payload, {
			headers: finalHeaders,
		})

		const { username, initialPassword } = response.data
		return { schoolId, username, initialPassword }
	} catch (error) {
		console.error('Error creating users:', error.message)
		if (error.response) {
			console.error('Response data:', error.response.data)
			console.error('Response status:', error.response.status)
			console.error('Response headers:', JSON.stringify(error.response.headers))
		}
		throw error
	}
}

module.exports = { createUser }
