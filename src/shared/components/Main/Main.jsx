import React from 'react';

const Main = () => {
    return (
        <div className="main">
            <div className="main__content">
                <div className="main__content_title">
                    <h1>Lorem ipsum <span>dolor sit <br/> ametconsectetur</span> adipiscing</h1>
                </div>
                <div className="main__content_subtitle">
                    <h4>At vero eos et accusamus et iusto odio dignissimos ducimus!</h4>
                    <p>- Totam rem aperiam eaque ipsa</p>
                    <p>- Sit voluptatem accusantium doloremque laudantium</p>
                    <p>- Sed ut perspiciatis, unde omnis iste natus error</p>
                </div>
                <div className="main__content_buttons">
                    <button>заказать</button>
                    <button>подробнее</button>
                </div>
            </div>
        </div>
    );
};

export default Main;
