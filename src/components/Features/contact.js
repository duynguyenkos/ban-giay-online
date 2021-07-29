
import React, { useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const Contact = () => {
    const [isSend, setIsSend] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [name,setName]=useState();
    const [email, setEmail] = useState();
    const [phone,setPhone]= useState();
    const [message,setMessage]= useState();

    const handleName= (event)=>{

        const value = event.target.value;
        setName(value);
    }
    const handleEmail= (event)=>{
        const value = event.target.value;
        setEmail(value);
    }
    const handlePhone= (event)=>{
        const value = event.target.value;
        setPhone(value);
    }

    const handleMess= (event)=>{
        const value = event.target.value;
        setMessage(value);
    }
    const handleSendMail = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsSend(true);
            setIsLoading(false);
        }, 3000);
    }
    return (
        <div className="container">
            {isLoading && <LinearProgress color="secondary" />}
            {isSend == false ? <div className="contact-box">               
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="Name..." onInput={handleName} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Email..." onInput={handleEmail} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Phone..." onInput={handlePhone} />
                        </div>
                        <div className="form-group">
                            <button className="btn btnContactSubmit" onClick={() => handleSendMail()}>Send Message</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Message..." onInput={handleMess}></textarea>
                        </div>
                    </div>
                </div>
            </div> : <p>Thanks for sending me a message.</p>}
        </div>
    )
}

export default Contact;