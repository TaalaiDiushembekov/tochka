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

                    <div className="logo-section">
                  <div className="about-point">
                      <ul >
                          <li>о точке
                              <ul className="about-point2">
                                  <li>
                                      <a>Кто мы</a>
                                      <a>Контакты и реквизиты</a>
                                      <a>Политика конфиденциальности</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </div>
                        <div className="logo-text">
                            <a>тарифы</a>
                            <a>старт бизнеса</a>
                            <a>0555458626</a>

                        </div>
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
