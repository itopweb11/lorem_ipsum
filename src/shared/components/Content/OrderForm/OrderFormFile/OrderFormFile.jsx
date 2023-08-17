import React, {useState} from 'react';
import Doc from "../../../../../img/doc.png";

const OrderFormFile = () => {
    const [file, setFile] = useState('Прикрепить файл')

    return (
        <form method="post" encType="multipart/form-data">
            <label className="orderForm__inputs_range_file">
                <input
                    type="file"
                    name="file"
                    onChange={(e)=>setFile(e.target.value)}
                />
                <img src={Doc} alt="icon"/>
                <span>{file}</span>
            </label>
        </form>
    );
};

export default OrderFormFile;
