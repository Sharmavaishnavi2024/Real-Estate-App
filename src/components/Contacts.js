import React from "react";

const Contacts= ()=> {
    return (
        <div className="contact" id="contact-us">
            <div className="contact-img">
                <img className="img" src="https://www.gurutechnolabs.com/wp-content/uploads/2018/10/Real-Estate-App-Ideas-for-Agencies-Agents-and-Investors.jpg"></img>
            </div>

            <div className="contacts-content">
                <h3 className="contact-title">Get in touch!</h3>
                <p className="contact-body">Whenever you need us we're here for you.</p>

                <div className="contact-modes">
                    <div className="contact-call-icon">
                        <img src= "https://w7.pngwing.com/pngs/915/706/png-transparent-blue-call-icon-dialer-android-google-play-telephone-phone-blue-text-telephone-call.png" width="10%" height= "20%" />
                        <span className="icons">Call</span>
                         <div className="icon-content">
                          <span>021 123 123</span>
                          <button className="contact-button">Call now</button>
                          </div>
                          </div>

                          <div className="contact-chat-icon">
                            <img src= "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-and-lines-1/2/10-1024.png" width= "10%" height= "20%" />
                             <span className="icons">Chat</span>
                           <div className="icon-content">
                            <span>021 123 123</span>
                            <button className="contact-button">Chat now</button>
                           </div>
                           </div>


                          
                    
                </div>
            </div>
        </div>
    )
}

export default Contacts;