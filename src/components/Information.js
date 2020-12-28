import React from "react";
import { withTranslation } from "react-i18next";

class Information extends React.Component {

	onSubmit = () => {
		this.props.history.push("/home"); // after submit form, redirect to a new url
	};

	render() {
    const { t } = this.props;

		return(
			<div className="container-fluid">
        <center><h1>{t("Enter Your Personal Information")}</h1></center>
				<form>
          <div className="form-group">
            <label for="inputAddress">{t("Username")}</label>
            <input type="text" className="form-control" id="inputUsername" />
          </div>
  				<div className="form-row">
    				<div className="form-group col-md-6">
     		 			<label for="inputEmail4">{t("Email Address")}</label>
      				<input type="email" className="form-control" id="inputEmail4" />
    				</div>
    				<div className="form-group col-md-6">
      				<label for="inputPassword4">{t("Password")}</label>
      				<input type="password" className="form-control" id="inputPassword4" />
    				</div>
  				</div>

  				<div className="form-group">
    				<label for="inputAddress">{t("Address")}</label>
    				<input type="text" className="form-control" id="inputAddress" />
  				</div>
  				<div className="form-group">
    				<label for="inputAddress2">{t("Address")} 2</label>
    				<input type="text" className="form-control" id="inputAddress2" />
  				</div>

  				<div className="form-row">
    				<div className="form-group col-md-6">
      				<label for="inputCity">{t("City")}</label>
      				<input type="text" className="form-control" id="inputCity" />
    				</div>
    				<div className="form-group col-md-4">
      				<label for="inputState">{t("State")}</label>
      				<select id="inputState" className="form-control">
        				<option selected>{t("Choose")}...</option>
        				<option>{t("Ontario")}</option>
        				<option>{t("Quebec")}</option>
      				</select>
    				</div>
    				<div className="form-group col-md-2">
      				<label for="inputZip">{t("Zip")}</label>
      				<input type="text" className="form-control" id="inputZip" />
    				</div>
  				</div>

  				<div className="form-group">
    				<div className="form-check">
      				<input className="form-check-input" type="checkbox" id="gridCheck" />
      				<label className="form-check-label" for="gridCheck">{t("Check me out")}</label>
   		 			</div>
  				</div>

  				<button type="submit" className="btn btn-primary" onClick={this.onSubmit}>{t("Submit")}</button> 
				</form>
			</div>
		);
	}
}

export default withTranslation()(Information);