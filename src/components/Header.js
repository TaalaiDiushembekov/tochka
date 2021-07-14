import React from 'react';
import logo from '../images/logo.jpg'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Container from "@material-ui/core/Container";

const Header = () => {
    return (
        <div className="logo">
            <Container>
                <div className="logo-box">
                    <div className="logo-img">
                        <img src={logo}/>
                    </div>

                    <div className="logo-text">
                        <a>о точке</a>
                        <a>тарифы</a>
                        <a>старт бизнеса</a>
                        <a>0555458626</a>

                    </div>
                    <div className="logo-icon">
                        <VpnKeyIcon  className="logo-icon-two" style={{ color: "white", fontSize: 30  }}/>
                    </div>
                </div>
            </Container>


        </div>
    );
};

export default Header;
