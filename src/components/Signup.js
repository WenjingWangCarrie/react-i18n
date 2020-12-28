import React from 'react'; 
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

export default function Signup() {
	const { t } = useTranslation(); 

	/*
    const history = useHistory();
    const routeChange = () =>{  
    	history.push("/login");
  	}
	*/
	return(
		<div className="container">
			<center><h1>{t("Sign Up")}</h1></center>

			<form>
				<div className="row pt-5 mx-auto">
					<div className="col-8 form-group mx-auto">
						<label><strong>{t("Username")}</strong></label>
						<input type="text" className="form-control"></input>
					</div> 

					<div className="col-8 form-group mx-auto">
						<label><strong>{t("Email Address")}</strong></label>
						<input type="email" className="form-control"></input>
					</div>
					<div className="col-8 form-group pt-2 mx-auto">
						<label><strong>{t("Password")}</strong></label>
						<input type="password" className="form-control" placeholder=""></input>
					</div> 

					<div className="col-8 pt-3 mx-auto">
						<button type="submit" className="btn btn-primary btn-block">{t("Sign Up")}</button>
						<p className="text-right"><Link to={"/login"}>{t("Already have an account")}?</Link></p>
					</div>
				</div>
				
			</form>
		</div>
	)
}


