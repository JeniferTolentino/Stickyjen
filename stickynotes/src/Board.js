import React from "react";
import {Note} from "./Note";

export const Board = React.createClass({
	getInitialState: function () {
		return {
			notes: []
		};
	},
	add: function (text) {
		let arr = this.state.notes;
		
		arr.push(text);
		
		this.setState({
			notes: arr
		});
	},
	removeNote: function (i) {
		let arr = this.state.notes;
		
		arr.splice(i, 1);
		
		this.setState({
			notes: arr
		});
	},
	updateNote: function (newText, i) {
		let arr = this.state.notes;

		arr[i] = newText;

		this.setState({
			notes: arr
		});
	},
	eachNote: function (item, i) {
		return (
			<Note key={i} index={i} updateNoteText={this.updateNote} deleteFromBoard={this.removeNote}>
				{item}
			</Note>
		);
	},
	render: function () {
		return (
			<div className="row">
				<div className="col s12 app-description">
					<p className="flow-text">
						Sticky Notes 
					</p>
					
					<p className="flow-text">
						by Jenjen Kook
					</p>
				</div>
				<div className="col s12 add-note-container">
					<button onClick={this.add.bind(null, "Add a new note!")} className="waves-effect waves-light btn-large new-note-btn">
						Add New Note
					</button>
					<div className="board">
						{this.state.notes.map(this.eachNote)}
					</div>
				</div>
			</div>
		);
	}
});