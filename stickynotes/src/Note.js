import React from "react";

export const Note = React.createClass({
	getInitialState: function () {
		return {
			editing: true
		};
	},
	edit: function () {
		this.setState({
			editing: true
		});
	},
	remove: function () {
		this.props.deleteFromBoard(this.props.index);
	},
	save: function () {
		this.props.updateNoteText(this.refs.newText.value, this.props.index);
		this.setState({
			editing: false
		});
	},
	renderNormal: function () {
		return (
			<div className="col s12 m6">
				<div className="noteContainer card blue-grey darken-1">
					<div className="noteText card-content white-text">
						<span className="card-title">{this.props.children}</span>
					</div>
					<div className="card-action">
						<button onClick={this.edit} className="waves-effect waves-light btn">Edit</button>
						<button onClick={this.remove} className="waves-effect waves-light btn red darken-4">Remove</button>
					</div>
				</div>
			</div>
		);
	},
	renderForm: function () {
		return (
			<div className="col s12 m6">
				<div className="noteContainer card blue-grey darken-1">
					<div className="noteText card-content white-text">
						<div class="input-field col s6">
							<label for="note">Note</label>
							<textarea id="note" className="materialize-textarea" ref="newText" defaultValue={this.props.children}></textarea>
						</div>
					</div>
					<div className="card-action">
						<button onClick={this.save} className="waves-effect waves-light btn">Save</button>
						<button onClick={this.remove} className="waves-effect waves-light btn red darken-4">Remove</button>
					</div>
				</div>
			</div>
		);
	},
	render: function () {
		if(this.state.editing) {
			return this.renderForm();
		} else {
			return this.renderNormal();
		}
	}
});