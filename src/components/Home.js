import React from "react";


const Home= () => {
    return(

        <div className="container-fluid">
             <div className="content">
                <h1 className="heading-title">
                    Find <br /> 
                    an ideal <br /> property.
                </h1>
                <p className="body-content">Discover a range of homes that suits you.</p>
                <div className="search-bar">
                    <img className="location-img" src="http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Pic.png"></img>
                    <input className="text-input" type= "text" />
                    <button className="searchbar-button">Search</button>
                </div>
            </div>
            <div className="image">
                <img src= "http://www.toplawfirm.com/images/Real-Estate-Law.gif"></img>
            </div>
        </div>  
    )
}

export default Home;