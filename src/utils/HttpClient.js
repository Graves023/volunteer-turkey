import axios from 'axios';

export const HttpClient = axios.create({
	baseURL: process.env.ADMIN_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});
