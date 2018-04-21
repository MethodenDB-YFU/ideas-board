import React, { Component } from 'react'
import { MegadraftEditor, editorStateFromRaw } from "megadraft";
import {stateToHTML} from 'draft-js-export-html';
import "megadraft/dist/css/megadraft.css";



export class Editor extends Component {

	state = {
		editorState: editorStateFromRaw(null)
	}

	onChange = (editorState) => {
		this.setState({editorState})
	}

	render() {
		return (
			<MegadraftEditor
				style={{height: 600, textAlign: 'left'}}
				editorState={this.state.editorState}
				onChange={this.onChange}
				placeholder="Deine Idee ..."/>
		)
	}
}