import React from "react";
import logo from '../images/main-logo-without-background.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="col-1-of-3">
                    <div className="footer__logo-box">
                        <a href="http://loopeduservices.com/">
                            <img
                                src={logo}
                                alt="Logo"
                                className="footer__logo"
                            />
                        </a>
                    </div>
                    <ul className="footer__social-icon-list">
                        <li className="footer__social-icons">
                            <a
                                href="https://www.facebook.com/loopeduservices"
                                target="_blank"
                                alt="facebook page"
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li className="footer__social-icons">
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="footer__social-icons">
                            <a
                                href="https://api.whatsapp.com/message/M25ANME7JW4RP1"
                                target="_blank"
                                alt="Chat on whatsapp"
                            >
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </li>
                        <li className="footer__social-icons">
                            <a href="#">
                                <i className="fab fa-google-plus-g"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="footer__phone-box">
                        {/* <img
                            className="footer__phone-icon"
                            src="images/phone.png"
                        /> */}
                        
                        <h5 className="footer__phone"><i className="fas fa-phone-alt footer__phone-icon"></i> +1 416-450-6320</h5>
                        <h5 className="footer__phone"><i className="fas fa-phone-alt footer__phone-icon"></i> +61 433-186-302</h5>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <ul className="footer__nav-list">
                        <li className="footer__nav-list-item">
                            <a href="#">About</a>
                        </li>
                        <li className="footer__nav-list-item">
                            <a href="#">Services</a>
                        </li>
                        <li className="footer__nav-list-item">
                            <a href="#">Resources</a>
                        </li>
                        <li className="footer__nav-list-item">
                            <a href="#">Policies</a>
                        </li>
                    </ul>
                </div>
                <div className="col-1-of-3">
                    <h5 className="footer__author">
                        Developed by
                        <a href="http://jorawarsinghs.com/" target="_blank">
                            &nbsp; Jorawar Singh &copy;
                        </a>
                    </h5>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
