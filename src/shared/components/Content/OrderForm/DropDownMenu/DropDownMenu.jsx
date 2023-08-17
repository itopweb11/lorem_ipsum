import React, {useState} from 'react';
import Frame14 from "../../../../../img/Frame14.png"

const DropDownMenu = () => {
    const [select, setSelect] = useState(true)

    const inputValue = document.querySelector(".dropDownMenu__select_input")
    const listItem = document.querySelectorAll(".dropDownMenu__list_item")

    listItem.forEach(item => {
        item.addEventListener("click", () => {
            inputValue.value = item.innerHTML
            setSelect(true)
        })
    })

    return (
        <div className="dropDownMenu">
            <div
                onClick={() => select ? setSelect(false) : setSelect(true)}
                className="dropDownMenu__select"
            >
                <input className="dropDownMenu__select_input" type="text" name="select" value="Выберите тип системы"/>
                <img
                    className={ select
                        ? "dropDownMenu__select_img"
                        : "dropDownMenu__select_img_active dropDownMenu__select_img"}
                    src={Frame14} alt="icon"
                />
            </div>
            <div className={select ? "dropDownMenu__list" : "dropDownMenu__list_active dropDownMenu__list"}>
                <span className="dropDownMenu__list_item">Sed ut perspiciatis</span>
                <span className="dropDownMenu__list_item">Nemo enim ipsam</span>
                <span className="dropDownMenu__list_item">Et harum quidem</span>
                <span className="dropDownMenu__list_item">Temporibus autem</span>
                <span className="dropDownMenu__list_item">Itaque earum rerum</span>
                <span className="dropDownMenu__list_item">Sed ut perspiciatis</span>
                <span className="dropDownMenu__list_item">Nemo enim ipsam</span>
                <span className="dropDownMenu__list_item">Et harum quidem</span>
                <span className="dropDownMenu__list_item">Temporibus autem</span>
                <span className="dropDownMenu__list_item">Itaque earum rerum</span>
            </div>
        </div>
    );
};

export default DropDownMenu;
