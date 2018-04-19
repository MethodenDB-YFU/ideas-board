/**
 * Does this return the comments or the idea?
 * I need it to return the idea
 */
export const addComment = (idea, comment) => [...idea.comments, comment]

export const updateComment = (idea, comment) => {
	const updatedIndex = idea.comments.findIndex(c => c.id === comment.id)
	idea.comments = [
		...idea.comments.slice(0, updatedIndex),
		comment,
		...idea.comments.slice(updatedIndex+1)
	]

}

export const removeComment = (idea, comment) => {
	const removedIndex = idea.comments.findIndex(comment)
	idea.comments = [
		...idea.comments.slice(0, removedIndex),
		...idea.comments.slice(removedIndex+1)
	]
	return idea
}

export const userCanUpdateComment = (comment, user) => {
	return (comment.commented_by === user.id) ? true : false

}

export const userCanDeleteComment = (comment, user) => {
	return (comment.commented_by === user.id) ? true : false
}

export const addLike = (idea, like) => {
	idea.likes = [
		...idea.likes, 
		like
	]
	return idea
}

export const removeLike = (idea, like) => {
	const removedIndex = idea.likes.findIndex(l => l.id === like.id)
	idea.likes = [
		...idea.likes.slice(0, removedIndex),
		...idea.likes.slice(removedIndex+1)
	]
	return idea
}

export const removeLikeByUser = (idea, user) => {
	const removedIndex = idea.likes.findIndex(l => l.like_by === user.id)
	idea.likes = [
		...idea.likes.slice(0, removedIndex),
		...idea.likes.slice(removedIndex+1)
	]
	return idea
}

export const getLikeByUser = (idea, user) => {
	return idea.likes.find(l => l.like_by === user.id)
}

/**
 * if for every like the liked by is **not** the current user id:
 * negate and return
 */
export const userHasLiked = (idea, user) => {
	return !idea.likes.every(l => l.like_by !== user.id)
}

export const addCommit = (idea, commit) => [...idea.commits, commit]

export const removeCommit = (idea, commit) => {
	const removedIndex = idea.commits.findIndex(commit)
	idea.commits = [
		...idea.commits.slice(0, removedIndex),
		...idea.commits.slice(removedIndex+1)
		]
	return idea

}

export const userHasCommitted = (idea, user) => {
	return !idea.likes.every(c => c.commit_by !== user.id)
}

export const addIdea = (list, idea) => [...list, idea]

export const updateIdea = (list, idea) => {
	const updatedIndex = list.findIndex(item => item.id === idea.id)
	return [
		...list.slice(0, updatedIndex),
		idea,
		...list.slice(updatedIndex+1)
	]
}

export const removeIdea = (list, idea) => {
	const removedIndex = list.find(item => item.id === idea.id)
	return [
		...list.slice(0, removedIndex),
		...list.slice(removedIndex)
	]
}

export const userCanUpdateIdea = (idea, user) => {
	return (idea.created_by === user.id) ? true : false
}

export const userCanDeleteIdea = (idea, user) => {
	return (idea.created_by === user.id) ? true : false
}