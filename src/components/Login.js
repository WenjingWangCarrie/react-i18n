import React, { Component } from 'react'; 

export default class Login extends Component {
	render() {

		return(
			<div class="container">
				<center><h1>Login</h1></center>

				<form>
					<div class="row pt-5 mx-auto">
						<div class="col-8 form-group mx-auto">
							<label><strong>Email Address</strong></label>
							<input type="email" class="form-control" placeholder="Enter Email"></input>
						</div>

						<div class="col-8 form-group pt-2 mx-auto">
							<label><strong>Password</strong></label>
							<input type="password" class="form-control" placeholder="Enter Password"></input>
						</div>

						<div class="col-8 pt-2 mx-auto custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="check1"></input>
							<label class="custom-control-label" htmlFor="check1">Remember me</label>
						</div>

						<div class="col-8 pt-3 mx-auto">
							<button type="submit" class="btn btn-primary btn-block">Login</button>
							<p class="text-right"><a href="#">Forget password?</a></p>
						</div>
					</div>
					
				</form>
			</div>
		)
	}
}