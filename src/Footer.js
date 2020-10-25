import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import React from 'react'
import './Footer.css';
function Footer() {
    return (
        <div className="footer">
            <h1>Iflix</h1>
            <p><strong>FREE TV </strong>.SERIOUSLY</p>

            <div className="footer__link">
                <ul className="footer__list">
                    <li><strong>MORE IFLIX</strong></li>
                    <li>Blog</li>
                    <li>Media</li>
                    <li>About Us</li>
                    <li>Career</li>
                </ul>
                <ul className="footer__list">
                    <li><strong>SUPPORT</strong></li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>

                </ul>

                <ul className="footer__list">
                    <li><strong>FRIENDS</strong></li>
                    <li>Partners</li>
                </ul>

                <ul className="footer__list">
                    <li><strong>GET YOUR APP</strong></li>
                    <li>Android</li>
                    <li>iOS</li>
                </ul>

            </div>

            <div className="footer__icon">
                <IconButton className="footer__iconButton">
                    <FacebookIcon fontSize="large" />
                </IconButton >
                <IconButton className="footer__iconButton">
                    <InstagramIcon fontSize="large" />
                </IconButton>
                <IconButton className="footer__iconButton">
                    <TwitterIcon fontSize="large" />
                </IconButton>
                <IconButton className="footer__iconButton">
                    <YouTubeIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
    )
}

export default Footer

