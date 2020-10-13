import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../../images/main-logo-without-background.png';
import menuIcon from '../../../images/menu-icon.png';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuDisplay: "",
            navContainerZIndex: null,
            navContainerOpacity: "",
            navContainerTransform: "translateX(0)",
            dropDownZIndex: null,
            dropDownOpacity: "0"
        };
    }

    displayDropdown = () => {
        this.setState({
            dropDownZIndex: 20,
            dropDownOpacity: "100%"
        });
    };

    //Needs to be fixed not working properly
    hideDropdown = () => {
        this.setState({
            dropDownZIndex: -20,
            dropDownOpacity: "0%"
        });
    };

    displayMenu = () => {
        this.setState({ menuDisplay: "block" });

        setTimeout(() => {
            this.setState({
                navContainerZIndex: 10,
                navContainerOpacity: "100%",
                navContainerTransform: "translate(0)"
            });
        }, 100);
    };

    hideMenu = () => {
        this.setState({
            navContainerZIndex: -10,
            navContainerOpacity: "0%",
            navContainerTransform: "translate(100vw)"
        });
        setTimeout(() => {
            this.setState({ menuDisplay: "none" });
        }, 1000);
    };

    render() {
        return (
            // <div className="row">
                <div className="navigation">
                    <div className="navigation__navbar">
                        <div className="navigation__logo-box">
                            <Link to="/">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="navigation__logo"
                                />
                            </Link>
                        </div>
                        <img
                            src={menuIcon}
                            alt="menu-icon"
                            className="navigation__menu-icon"
                            onClick={this.displayMenu}
                        />
                        <div
                            className="navigation__nav-container"
                            style={{
                                zIndex: this.state.navContainerZIndex,
                                opacity: this.state.navContainerOpacity,
                                transform: this.state.navContainerTransform,
                                display: this.state.menuDisplay
                            }}
                        >
                            <ul className="navigation__nav">
                                <li className="navigation__nav-item">
                                    <a
                                        href="#"
                                        className="navigation__back-icon"
                                        onClick={this.hideMenu}
                                    >
                                        <i className="fas fa-arrow-circle-right"></i>{" "}
                                        Back
                                    </a>
                                </li>
                                <li className="navigation__nav-item">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="navigation__nav-item">
                                    <Link to="/why-study-abroad">
                                        Why Study Abroad ?
                                    </Link>
                                </li>
                                <li
                                    className="navigation__nav-item navigation__dropdown-btn"
                                    onClick={this.displayDropdown}
                                >
                                    <a href="#">Study</a>
                                    <ul
                                        className="navigation__dropdown-list"
                                        style={{
                                            zIndex: this.state.dropDownZIndex,
                                            opacity: this.state.dropDownOpacity
                                        }}
                                    >
                                        <div className="center-container">
                                            <li
                                                className="navigation__dropdown-list-item"
                                                onClick={this.hideDropdown}
                                            >
                                                <a
                                                    href="#"
                                                    className="navigation__dropdown-back-icon"
                                                >
                                                    <i className="fas fa-arrow-circle-right"></i>{" "}
                                                    Back
                                                </a>
                                            </li>
                                            <li className="navigation__dropdown-list-item">
                                                <Link to="/study-in-australia">
                                                    Australia
                                                </Link>
                                            </li>
                                            <li className="navigation__dropdown-list-item">
                                                <Link to="/study-in-canada">
                                                    Canada
                                                </Link>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <li className="navigation__nav-item">
                                    <Link to="/ielts-online">IELTS ONLINE</Link>
                                </li>
                                <li className="navigation__nav-item">
                                    <Link to="/contact-us">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            // </div>
        );
    }
}

export default Navbar;
