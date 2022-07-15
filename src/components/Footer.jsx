import React from 'react'
import { Link } from 'react-router-dom'
import Grid from './Grid'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';
import { footerAboutLinks, footerCustomerLinks } from '../mockData'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <span>NS-MART</span>
                            </Link>
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        </p>
                    </div>
                    <div>
                        <div className="footer__title">
                            Link
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Quick Link
                        </div>
                        <div className="footer__content">

                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>

                    <div>
                        <div className="footer__title">
                            Follow Us
                        </div>
                        <div className="footer__content">
                            <p>
                                <span>
                                    <Link to='/'><BsFacebook /></Link>
                                </span>
                                <span>
                                    <Link to='/'><BsInstagram /></Link>
                                </span>
                                <span>
                                    <Link to='/'><BsTwitter /></Link>
                                </span>
                                <span>
                                    <Link to='/'><BsGithub /></Link>
                                </span>

                            </p>
                        </div>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
