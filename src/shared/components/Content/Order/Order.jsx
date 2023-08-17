import React from 'react';
import OrderIcons from "../OrderIcons/OrderIcons";
import OrderForm from "../OrderForm/OrderForm";
import OrderButton from "../OrderButton/OrderButton";

const Order = ({content}) => {
    return (
        <div className="order">
            <div className="order__content">
                <div className="order__content_title">
                    <h2>Оформление <span>Заказа</span></h2>
                    <p>Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>
                </div>
                <OrderIcons content={content}/>
                <OrderForm />
                <OrderButton />
            </div>
        </div>
    );
};

export default Order;
