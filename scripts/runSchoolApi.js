"use strict";

const axios = require("axios");

const path = "/admin/api/v1";
const endPointSchools = "/admin/schools";
const endPointUsers = "/admin/users";
const federalStateNames = {
	nbc: "Niedersachsen",
	brb: "Brandenburg",
	dbc: "Niedersachsen",
};
const users = {
	admin: "administrator",
	teacher: "teacher",
	student: "student",
	adminDoublerolle: "administrator,teacher",
};
const userData = {
	admin1: {
		firstName: "cypress",
		lastName: "admin_1",
	},
	adminDoublerolle: {
		firstName: "cypress",
		lastName: "admin_doublerolle",
	},
	teacher1: {
		firstName: "cypress",
		lastName: "teacher_1",
	},
	student1: {
		firstName: "cypress",
		lastName: "student_1",
	},
	admin2: {
		firstName: "cypress",
		lastName: "admin_2",
	},
	teacher2: {
		firstName: "cypress",
		lastName: "teacher_2",
	},
	student2: {
		firstName: "cypress",
		lastName: "student_2",
	},
};

const headers = {
	"Content-Type": "application/json",
};

const extractSubdomain = (url) => {
	try {
		const parsedUrl = new URL(url);
		return parsedUrl.hostname.split(".")[1];
	} catch (error) {
		console.error("Error parsing URL:", error.message);
		return null;
	}
};

const createSchool = async (schoolUrl, headers) => {
	try {
		const payload = {
			name: `cypress-test-school-1`,
			federalStateName: federalStateNames[extractSubdomain(schoolUrl)],
		};
		const response = await axios.post(schoolUrl, payload, { headers });
		const { id } = response.data;
		console.log(`School created with ID: ${id}`);
		return { id };
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error("Error creating school:", error.message);
			if (error.response) {
				console.error("Status:", error.response.status);
				console.error("Data:", error.response.data);
			}
			// rethrow only safe error message
			throw new Error(`Failed to create school: ${error.message}`);
		} else {
			console.error("Unexpected error:", error.message);
			throw new Error(`Unexpected failure: ${error.message}`);
		}
	}
};

const generateRandomUserEmail = () => {
	const commonNames = ["john", "emma", "michael", "sarah", "david"];
	const randomName = commonNames[Math.floor(Math.random() * commonNames.length)];
	const timestamp = new Date().getTime();
	const randomNumber = Math.floor(Math.random() * 1000);
	const emailDomain = "cypress-mail.de";
	return `${randomName}_${randomNumber}_${timestamp}@${emailDomain}`;
};

const getUrl = (baseUrl) => {
	const schoolUrl = `${baseUrl
		.toLowerCase()
		.replace(/\/$/, "")}${path}${endPointSchools}`;
	const userUrl = `${baseUrl.toLowerCase().replace(/\/$/, "")}${path}${endPointUsers}`;

	return { schoolUrl, userUrl };
};

const getUserRole = (userType) => {
	//extend the role for doublerolle: userType : admin1_doublerolle1_dbc
	const roleName = userType.split("_")[0].slice(0, -1);
	if (userType.length > 15) {
		const extended = userType.split("_")[1];
		const doubleRoleName =
			roleName + extended.charAt(0).toUpperCase() + extended.slice(1);
		const doubleMatchedRole = Object.keys(users).find((role) => doubleRoleName === role);
		console.log("Double role matched:", doubleMatchedRole);
		return doubleMatchedRole ? users[doubleMatchedRole] : "unknown";
	}
	//convert to roleName to adminDoublerolle
	//will not affect other roles eg. student1, teacher1, extstudent, extteacher...
	const matchedRole = Object.keys(users).find((role) => roleName === role);
	console.log("Matched role:", matchedRole);
	return matchedRole ? users[matchedRole] : "unknown";
};

const generatePayload = (schoolId, userType, role) => {
	//extend the role for doublerolle: userType : admin1_doublerolle1_dbc
	let userRole = userType.split("_")[0];
	//stucked up here because our userData has adminDoublerolle and the above outcome is admin1
	if (userData.hasOwnProperty(userRole)) {
		return {
			schoolId,
			firstName: userData[userRole].firstName,
			lastName: userData[userRole].lastName,
			email: generateRandomUserEmail(),
			roleNames: [role],
		};
	} else {
		console.warn(`User type "${userType}" not found in userData.`);
		return {};
	}
};

const createUser = async (baseUrl, apiKeys, schoolId, userType) => {
	try {
		const { schoolUrl, userUrl } = getUrl(baseUrl);

		const finalHeaders = { ...headers };
		if (!finalHeaders.hasOwnProperty("x-api-key")) {
			finalHeaders["x-api-key"] = apiKeys;
		}

		if (schoolId === undefined) {
			const { id } = await createSchool(schoolUrl, finalHeaders);
			schoolId = id;
		} else {
			console.log(`User created using existing school ID: ${schoolId}`);
		}

		const role = getUserRole(userType);
		if (!role) {
			throw new Error("Invalid user type");
		}

		const payload = generatePayload(schoolId, userType, role);

		const response = await axios.post(userUrl, payload, {
			headers: finalHeaders,
		});

		const { username, initialPassword } = response.data;
		return { schoolId, username, initialPassword };
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error("Error creating users:", error.message);
			if (error.response) {
				console.error("Status:", error.response.status);
				console.error("Data:", error.response.data);
			}
			throw new Error(`Failed to create user: ${error.message}`);
		} else {
			console.error("Unexpected error:", error.message);
			throw new Error(`Unexpected failure: ${error.message}`);
		}
	}
};

module.exports = { createUser };
