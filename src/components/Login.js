import React from 'react'; 
import { useTranslation } from 'react-i18next';

export default function Login() {
	const { t } = useTranslation();

	return(
		<div className="container">
			<center><h1>{t("Login")}</h1></center>

			<form>
				<div className="row pt-5 mx-auto">
					<div className="col-8 form-group mx-auto">
						<label><strong>{t("Email Address")}</strong></label>
						<input type="email" className="form-control"></input>
					</div>

					<div className="col-8 form-group pt-2 mx-auto">
						<label><strong>{t("Password")}</strong></label>
						<input type="password" className="form-control"></input>
					</div>

					<div className="col-8 form-group mx-auto">
						<div className="form-check">
							<input type="checkbox" className="form-check-input" id="check1"></input>
						<label className="form-check-label" htmlFor="check1">{t("Remember me")}</label>
						</div>
					</div>

					<div className="col-8 pt-3 mx-auto">
						<button type="submit" className="btn btn-primary btn-block">{t("Login")}</button>
						<p className="text-right"><a href="/">{t("Forget password")}?</a></p>
						<strong>change href in a tag later~~~</strong>
					</div>
				</div>
					
			</form>
		</div>
	) 
}