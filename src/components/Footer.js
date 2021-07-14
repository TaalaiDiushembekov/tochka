import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import logo from '../images/logo.jpg'
import Container from "@material-ui/core/Container";

const Footer = () => {
    return (
        <div className="footer">
            <Container>
            <div className="contacts">
                <div className="tel">
                    <h3 className="number">+996 555 45 86 26</h3>
                    <p className="email">valyarado458626@gmail.com</p>
                </div>
                <div className="social">
                    <div className="socialscc">
                        <FacebookIcon/>
                    </div>
                    <div className="socialscc">
                        <TwitterIcon/>
                    </div>
                    <div className="socialscc">
                        <TelegramIcon/>
                    </div>
                    <div className="socialscc">
                        <InstagramIcon/>
                    </div>
                    <div className="socialscc">
                        <YouTubeIcon/>
                    </div>
                    <div className="socialscc">
                        <WhatsAppIcon/>
                    </div>
                </div>
            </div>
            <div className="adress">
                <div className="points">
                    <h4>Офис в Бишкеке</h4>
                    <p>мкр. Городок Cтроителей,<br/> ул. Зеленая 9/2</p>
                </div>
                <div className="points">
                    <h4>Документы</h4>
                    <p>Договор об использовании сервиса</p>
                    <p>Договор для бухкомпаний</p>
                    <p>Тарифы для бухкомпаний</p>
                    <p>Договор для аутсорсеров</p>
                    <p>Тарифы официально</p>
                    <p>Архивные тарифы</p>
                    <p>Страховой полис</p>
                    <p>Оплата банковской картой</p>

                </div>
                <div className="points">
                    <h4>Услуги</h4>
                    <p>Налоговая отчетность</p>
                    <p>Расчет заработной платы</p>
                    <p>Ведение кадрового учета</p>
                    <p>Бухгалтерские консультации</p>
                    <p>Аудит бухгалтерии</p>
                    <p>Разблокировка расчетного счета</p>
                    <p>Востановление бухгалтерского учета</p>
                    <p>Бухгалтерский учет и отчетность</p>
                </div>
                <div className="points">
                    <h4>Партнерам</h4>
                    <p>Мероприятиям</p>
                    <p>Франшизам</p>
                    <p>Юридическим лицам</p>
                    <p>Частным лицам</p>
                </div>
            </div>
            <div className="login">
                <div className="img">
                    <img className="logo"
                         src={logo}
                         alt="тут должна быть картинка"
                    />
                    <p>Работы для бухгалтеров</p>
                </div>
                <div className="low">
                    <p>Согласно закону Кыргызской Республики "О специальной оценке условий труда" <br/> №...КР от .....г. ООО «Точка» провело специальную оценку условий труда.</p>
                </div>
            </div>
            </Container>
        </div>

    );
};

export default Footer;
