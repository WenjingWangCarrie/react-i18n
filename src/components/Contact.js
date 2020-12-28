import React from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_carrie', 'template_carrie', e.target, 'user_MQtv4i7gW1bScOjgA4u7l')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            });
            alert("Sent email successfully!");
            e.target.reset()
    }

    const { t } = useTranslation();

    return(
        <div className="container">
            <h1 className="text-center">{t("Contact Us")}</h1>
            <p className="text-center">{t("If you have any questions")}.</p>
            <p className="text-center">{t("personal information")}</p>
            <form onSubmit={sendEmail}>
                    
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <label><strong>{t("Name")}</strong></label>
                        <input type="text" className="form-control" name="name" /> 
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <label><strong>{t("Email Address")}</strong></label>
                        <input type="email" className="form-control" name="email" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <label><strong>{t("Subject")}</strong></label>
                        <input type="text" className="form-control" name="subject" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <label><strong>{t("Message")}</strong></label>
                        <textarea className="form-control" cols="30" rows="8" name="message"></textarea>
                    </div>

                    <div className="col-8 pt-3 mx-auto">
                        <button type="submit" className="btn btn-danger">{t("Send Message")}</button>
                    </div>
                </div>

            </form>
        </div>
    )

}

export default Contact;