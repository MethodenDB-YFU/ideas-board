import React, { Component } from "react";
import {userHasLiked, removeLikeByUser, addLike, updateIdea, getLikeByUser} from '../../utils/idea-utils'
import {loadIdeas, postLike, deleteLike} from '../../utils/ideaService';
import { Idea } from './Idea'


export class IdeaList extends Component {

	state = {
		ideas: [],
		user: {
			id: '1fa68f9d-962a-442a-9a4c-e9e40dcc738c'
		}
	}

	componentDidMount() {
		loadIdeas().then((ideas) => {
			this.setState({ideas})
		})
	}

	handleLikeClick = (idea) => {
		if (userHasLiked(idea, this.state.user)) {
			deleteLike(idea, getLikeByUser(idea, this.state.user))
			const updatedIdea = removeLikeByUser(idea, this.state.user)
			const updatedIdeas = updateIdea(this.state.ideas, updatedIdea)
			this.setState({ideas: updatedIdeas})
		}
		else {
			const like = {'like_by': this.state.user.id}
			postLike(idea, like)
				.then(like => this.setState({
					ideas: updateIdea(
						this.state.ideas, 
						addLike(idea, like)
					)}))
		}
	}

	render() {
		return (
			this.state.ideas.map(idea => {
				let liked = userHasLiked(idea, this.state.user);
				return(
					<Idea key={idea.id} idea={idea} liked={liked} handleLikeClick={this.handleLikeClick} />
					)
			})
		)
	}
}

