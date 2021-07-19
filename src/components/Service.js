import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

const Service = () => {
    return (
        <div className="service">
            <h2>Бухгалтерские услуги заказать недорого </h2>
            <p>Приоритетные направления деятельности нашей компании - оказание</p>
            <div className="service-box">
                <div className="service-icon">
                    <CheckCircleIcon style={{color: 'green'}}/>
                </div>

                <p>Бухгалтерских услуг</p>
            </div>
            <div className="service-box">
                <div className="service-icon">
                    <CheckCircleIcon style={{color: 'green'}}/>
                </div>

                <p>Аудиторских услуг</p>
            </div>
            <div className="service-box">
                <div className="service-icon">
                    <CheckCircleIcon style={{color: 'green'}}/>
                </div>

                <p>Юридических услуг</p>
            </div>
        </div>
    );
};

export default Service;
