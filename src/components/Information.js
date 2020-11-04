import React from "react";

class Information extends React.Component {

	onSubmit = () => {
		this.props.history.push("/"); // after submit form, redirect to a new url
	};

	render() {
		return(
			<div class="container-fluid">
        <center><h1>Enter Your Personal Information</h1></center>
				<form>
          <div class="form-group">
            <label for="inputAddress">Username</label>
            <input type="text" class="form-control" id="inputUsername" placeholder="Username" />
          </div>
  				<div class="form-row">
    				<div class="form-group col-md-6">
     		 			<label for="inputEmail4">Email</label>
      				<input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
    				</div>
    				<div class="form-group col-md-6">
      				<label for="inputPassword4">Password</label>
      				<input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
    				</div>
  				</div>

  				<div class="form-group">
    				<label for="inputAddress">Address</label>
    				<input type="text" class="form-control" id="inputAddress" placeholder="....." />
  				</div>
  				<div class="form-group">
    				<label for="inputAddress2">Address 2</label>
    				<input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  				</div>

  				<div class="form-row">
    				<div class="form-group col-md-6">
      				<label for="inputCity">City</label>
      				<input type="text" class="form-control" id="inputCity" />
    				</div>
    				<div class="form-group col-md-4">
      				<label for="inputState">State</label>
      				<select id="inputState" class="form-control">
        				<option selected>Choose...</option>
        				<option>Ontario</option>
        				<option>Quebec</option>
      				</select>
    				</div>
    				<div class="form-group col-md-2">
      				<label for="inputZip">Zip</label>
      				<input type="text" class="form-control" id="inputZip" />
    				</div>
  				</div>

  				<div class="form-group">
    				<div class="form-check">
      				<input class="form-check-input" type="checkbox" id="gridCheck" />
      				<label class="form-check-label" for="gridCheck">Check me out</label>
   		 			</div>
  				</div>

  				<button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Submit</button> 
				</form>
			</div>
		);
	}
}

export default Information;