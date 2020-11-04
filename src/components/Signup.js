import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends Component {
	render() {

		return(
			<div class="container">
				<center><h1>Sign Up</h1></center>

				<form>
					<div class="row pt-5 mx-auto">
						<div class="col-8 form-group mx-auto">
							<label><strong>Username</strong></label>
							<input type="text" class="form-control" placeholder="Enter Username"></input>
						</div> 

						<div class="col-8 form-group mx-auto">
							<label><strong>Email Address</strong></label>
							<input type="email" class="form-control" placeholder="Enter Email"></input>
						</div>
						<div class="col-8 form-group pt-2 mx-auto">
							<label><strong>Password</strong></label>
							<input type="password" class="form-control" placeholder="Enter Password"></input>
						</div> 

						<div class="col-8 pt-3 mx-auto">
							<button type="submit" class="btn btn-primary btn-block">Sign Up</button>
							<p class="text-right"><Link to="/login">Already has an account?</Link></p>
						</div>
					</div>
					
				</form>
			</div>
		)
	}
}