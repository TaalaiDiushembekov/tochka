import React from 'react';

const Discount = () => {
    return (
        <div className="discount">
            <div className="discount-box">
                <h2>8% скидка на первый месяц обслуживания</h2>
                <p>В честь дня рождения, по промокоду: Tochka8</p>
            </div>
            <div className="discount-box">
                <h2>Управленческий учёт</h2>
                <p>Наглядный инструмент спланирует бюджет и проанализирует данные из 1С в режиме реального времени.</p>
                <a href="#">Подробнее</a>
            </div>
            <div className="discount-box">
                <h2>Пакет «Электронный Лайт»</h2>
                <p>Обменивайтесь первичкой с контрагентами в Диадок. Наш робот сам выгрузит все документы и занесёт в 1С.</p>
                <a href="#">Подробнее</a>
            </div>
        </div>
    );
};

export default Discount;
