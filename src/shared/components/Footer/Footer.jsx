import React from 'react';
import Frame19 from "../../../img/Frame19.png"
import Frame20 from "../../../img/Frame20.png"
import Frame21 from "../../../img/Frame21.png"
import Frame22 from "../../../img/Frame22.png"
import Frame23 from "../../../img/Frame23.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                <p>© 2018 «LoremIpsum.net» Все права защищены.</p>
                <div className="footer__content_payment">
                    <div>
                        <img src={Frame19} alt="icon"/>
                        <p>Qiwi wallet</p>
                    </div>
                    <div>
                        <img src={Frame20} alt="icon"/>
                        <p>Yandex Money</p>
                    </div>
                    <div>
                        <img src={Frame21} alt="icon"/>
                        <p>Web Money</p>
                    </div>
                </div>
                <div className="footer__content_social">
                    <div className="footer__content_social_mail">
                        <img src={Frame22} alt="icon"/>
                        <a href="mailto:info@ipsum228.com">info@ipsum228.com</a>
                    </div>
                    <div className="footer__content_social_vk">
                        <img src={Frame23} alt="icon"/>
                        <a href="https://vk.com/">Мы вконтакте</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
