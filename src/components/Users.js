import React from "react";
import { Route, Link } from "react-router-dom";

import { withTranslation } from "react-i18next";

const User = ({ match }) => {
	// console.log("match");
	return <p>{ match.params.name }</p>;
}

class Users extends React.Component {
	render() {
		// const { url } = this.props.match;

		const { t } = this.props;

		return (
			<div className="container">
				<div className="jumbotron">
					<h1>{t("Users")}</h1>
					<h5>{t("Select a user")}</h5> 
				</div>

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

export default withTranslation()(Users);

