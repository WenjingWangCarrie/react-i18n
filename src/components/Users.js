import React from "react";
import { Route, Link } from "react-router-dom";

const User = ({ match }) => {
	// console.log("match");
	return <p>{ match.params.name }</p>;
}

class Users extends React.Component {
	render() {
		const { url } = this.props.match;

		return (
			<div class="container-fluid">
				<h1>Users</h1>
				<strong>Select a user</strong>

				<ul>
					<li><Link to="/users/Carrie">User 1</Link></li>
					<li><Link to="/users/Dragon">User 2</Link></li>
					<li><Link to="/users/Pig">User 3</Link></li>
				</ul>
				<Route path="/users/:name" component={ User } />
			</div>
		);
	}
}

export default Users;

