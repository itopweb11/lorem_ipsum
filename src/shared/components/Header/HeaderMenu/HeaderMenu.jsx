import React, {useState} from 'react';
import Menu from "../../../../img/menu.png";
import Crossed from "../../../../img/crossed.png";

const HeaderMenu = () => {
    const [data, setData] = useState(true)

    return (
        <div className="header__content_media">
            <img
                onClick={() => setData(false)}
                className={data ? "header__content_media_img" : "header__content_media_img_active"}
                src={Menu} alt="icon"
            />
            <img
                onClick={() => setData(true)}
                className={data ? "header__content_media_imgCrossed" : "header__content_media_imgCrossed_active"}
                src={Crossed} alt="icon"
            />
            <div className={ data ? "header__content_media_menu" : "header__content_media_menu_active"}>
                <li>
                    <a
                        onClick={() => setData(true)}
                        className="header__content_media_menu_linck"
                        href="#"
                    >
                        Бизнес
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => setData(true)}
                        className="header__content_media_menu_linck"
                        href="#"
                    >
                        О нас
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => setData(true)}
                        className="header__content_media_menu_linck"
                        href="#"
                    >
                        Цены
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => setData(true)}
                        className="header__content_media_menu_linck"
                        href="#"
                    >
                        Оформить заказ
                    </a>
                </li>
            </div>
        </div>
    );
};

export default HeaderMenu;
