import React from 'react';
import Header from "./shared/components/Header/Header";
import Main from "./shared/components/Main/Main";
import Order from "./shared/components/Content/Order/Order";
import content from "./shared/components/Content/OrderIcons/OrderIconsData"
import Footer from "./shared/components/Footer/Footer";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Main />
            <Order content={content}/>
            <Footer />
        </div>
    );
};

export default App;
