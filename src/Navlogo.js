import React from 'react'
import './Navlogo.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AdbOutlinedIcon from '@material-ui/icons/AdbOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { IconButton } from '@material-ui/core';
import { Link } from "react-router-dom";


function Navlogo() {

    return (
        <div className="navlogo">
            <div className="navlogo__left">
                <img className="navlogo__leftLogo" src="https://iflix-images.akamaized.net/web/logos/visitor-light.svg?v=1#svgView(preserveAspectRatio(xMidYMid meet)" alt="netflix-logo" />
                <IconButton>
                    <HomeOutlinedIcon style={{ fill: 'rgba(226, 19, 19, 0.911)' }} />
                    <span className="navlogo__textRed">HOME</span>
                </IconButton>
                <IconButton>
                    <AdbOutlinedIcon />
                    <span className="navlogo__text">KIDS</span>
                </IconButton>
            </div>

            <div className="navlogo__right">
                <Link to="/search">
                    <IconButton className="navlogo__buttonSearch">
                        <SearchIcon />
                    </IconButton>
                </Link>
                <IconButton>
                    <AccountCircleOutlinedIcon />
                </IconButton>
            </div>
        </div >
    )
}

export default Navlogo
