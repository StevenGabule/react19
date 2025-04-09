const BACKEND_URL = 'http://localhost:3000/api/timers';

const getTimers = (success: (data: any) => void) => {
	return fetch(BACKEND_URL, {
		headers: {
			Accept: 'application/json'
		}
	}).then(checkStatus)
	.then(parseJSON)
	.then(success)
}

const createTimer = (data: any) => {
	return fetch(BACKEND_URL, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	}).then(checkStatus)
}

const updateTimer = (data: any) => {
	return fetch(BACKEND_URL, {
		method: 'put',
		body: JSON.stringify(data),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	}).then(checkStatus)
}

const deleteTimer = (data: any) => {
	return fetch(BACKEND_URL, {
		method: 'delete',
		body: JSON.stringify(data),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	}).then(checkStatus)
}

const startTimer = (data: any) => {
	return fetch(`${BACKEND_URL}/start`, {
		method: 'post',
		body: JSON.stringify(data),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	}).then(checkStatus)
}

const stopTimer = (data: any) => {
	return fetch(`${BACKEND_URL}/stop`, {
		method: 'post',
		body: JSON.stringify(data),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	}).then(checkStatus)
}

function checkStatus(response: any) {
	if(response.status >= 200 && response.status < 300) {
		return response;
	} else {
		const error: any = new Error(`HTTP Error ${response.statusText}`);
		error.status = response.statusText;
		error.response = response
		console.log(error);
		throw error;
	}
}

function parseJSON(response: any) {
	return response.json();
}

export { getTimers, createTimer, updateTimer, deleteTimer, startTimer, stopTimer }