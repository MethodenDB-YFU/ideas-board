const baseUrl = 'http://localhost:8080/api'

const headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
}

export const loadIdeas = () => {
	const endpoint = '/ideas'
	return fetch(baseUrl + endpoint, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then(res => res.json())
}

export const loadIdea = (idea) => {
	const endpoint = `/ideas/${idea.id}`
	return fetch(baseUrl + endpoint, {
		method: 'GET',
		headers: {...headers}
	})
	.then(res => res.json())
}

export const createIdea = (idea) => {
	const endpoint = '/ideas'
	return fetch(baseUrl + endpoint, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(idea)
	})
		.then(res => res.json())
}

export const updateIdea = (idea) => {
	const endpoint = `/ideas/${idea.id}`
	return fetch(baseUrl + endpoint, {
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(idea)
	})
	.then(res => res.json())
}

export const deleteIdea = (idea) => {
	const endpoint = `/ideas/${idea.id}`
	return fetch(baseUrl + endpoint, {
		method: 'DELETE'
	})
	.then(res => res.json())
}

export const postLike = (idea, like) => {
	const endpoint = `/ideas/${idea.id}/like`
	return fetch(baseUrl + endpoint, {
		method: 'PUT',
		headers: {...headers},
		body: JSON.stringify(like)
	})
	.then(res => res.json())
}

export const deleteLike = (idea, like) => {
	const endpoint = `/ideas/${idea.id}/like/${like.id}`
	return fetch(baseUrl + endpoint, {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(like)
	})
}

export const addCommit = (idea, commit) => {
	const endpoint = `/ideas/${idea.id}/commit`
	return fetch(baseUrl + endpoint, {
		method: 'PUT',
		headers: {...headers},
		body: JSON.stringify(commit)
	})
	.then(res => res.json())
}

export const removeCommit = (idea, commit) => {
	const endpoint = `/ideas/${idea.id}/commit/${commit.id}`
	return fetch(baseUrl + endpoint, {
		method: 'DELETE',
		headers: {...headers},
		body: JSON.stringify(commit)
	})
	.then(res => res.json())
}

export const addComment = (idea, comment) => {
	const endpoint = `/ideas/${idea.id}/comment`
	return fetch(baseUrl + endpoint, {
		method: 'POST',
		headers: {...headers},
		body: JSON.stringify(comment)
	})
	.then(res => res.json())
}

export const updateComment = (idea, comment) => {
	const endpoint = `/ideas/${idea.id}/comment/${comment.id}`
	return fetch(baseUrl + endpoint, {
		method: 'PUT',
		headers: {...headers},
		body: JSON.stringify(comment)
	})
	.then(res => res.json())
}

export const deleteComment = (idea, comment) => {
	const endpoint = `/idea/${idea.id}/comment/${comment.id}`
	return fetch(baseUrl + endpoint, {
		method: 'DELETE',
		headers: {...headers},
		body: JSON.stringify(comment)
	})
	.then(res => res.json())
}