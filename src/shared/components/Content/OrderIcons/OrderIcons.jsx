import React from 'react';

const OrderIcons = ({content}) => {
    return (
        <div className="orderIcons">
            {content.map((elem)  =>
                <div key={elem.id} className="orderIcons__items">
                    <div className="orderIcons__items_item">
                        <div className="orderIcons__items_item_icon">
                            <img src={elem.icon} alt="icon"/>
                        </div>
                        <img className="orderIcons__items_item_dot" src={elem.dot} alt=""/>
                    </div>
                    <p className="orderIcons__items_desc">{elem.desc}</p>
                </div>
            )}
        </div>
    );
};

export default OrderIcons;
