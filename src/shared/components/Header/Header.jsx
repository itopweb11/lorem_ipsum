import React from 'react';
import LoremIpsum from "../../../img/LoremIpsum.png"
import HeaderMenu from "./HeaderMenu/HeaderMenu";

const Header = () => {

    return (
        <header className="header">
            <div className="header__content">
                <img className="header__content_img" src={LoremIpsum} alt="logo"/>
                <HeaderMenu />
                <div className="header__content_menu">
                    <li>
                        <a href="#">Бизнес</a>
                    </li>
                    <li>
                        <a href="#">О нас</a>
                    </li>
                    <li>
                        <a href="#">Цены</a>
                    </li>
                    <li>
                        <a href="#">Оформить заказ</a>
                    </li>
                </div>
            </div>
        </header>
    );
};

export default Header;
