import React, {useState} from 'react';
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import OrderFormFile from "./OrderFormFile/OrderFormFile";

const OrderForm = () => {
    const [data, setData] = useState(75)

    return (
        <div className="orderForm">
            <div className="orderForm__inputs">
                <DropDownMenu />
                <input className="orderForm__inputs_email" placeholder="Ваш e-mail" type="text" name="email"/>
                <input className="orderForm__inputs_name" placeholder="Ваше имя" type="text" name="name"/>
                <OrderFormFile />
            </div>
            <div className="orderForm__inputs_range">
                <div className="orderForm__inputs_range_input">
                    <div className="orderForm__inputs_range_input_desc">
                        <p>Sed ut perspiciatis, unde omnis iste natus</p>
                        <p>{data} %</p>
                    </div>
                    <input
                        type="range"
                        name="range"
                        min="0"
                        max="100"
                        value={data}
                        onChange={(e)=>setData(e.target.value)}/>
                </div>
                <OrderFormFile />
            </div>
        </div>
    );
};

export default OrderForm;
