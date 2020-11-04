import React from 'react';
import emailjs from 'emailjs-com';

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

    return(
        <div class="container">
            <form onSubmit={sendEmail}>
                    
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" /> 
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email" name="email" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" cols="30" rows="8" placeholder="Enter message" name="message"></textarea>
                    </div>

                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" className="btn btn-danger" value="Send Message" />
                    </div>
                </div>

            </form>
        </div>
    )

}

export default Contact;