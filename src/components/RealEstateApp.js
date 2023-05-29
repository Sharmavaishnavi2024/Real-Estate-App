import React from "react";
import Header from "./Header";
import Home from "./Home";
import Companies from "./Companies";
import Resedencies from "./Residencies";
import Contacts from "./Contacts";
import GetStarted from "./GetStarted";
import Footer from "./footer";


export default class RealEstateApp extends React.Component {


    render() {
     return (
        <div>
            <Header />
            <Home />
            <Companies />
            <Resedencies />
            <GetStarted />
            <Contacts />
            <Footer />
        </div>
        
     )
    }
}


