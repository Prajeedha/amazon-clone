import React from 'react'
import "./Home.css"
import Product from "./Product.js"

function Home() {
    return (
        <div className="home">
        <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
        
        <div className="home__row">
           <Product id="12321341" title="The lean startup : How Constant Innovation Creates Radically Successful Business Paperback" 
           image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
           price={19.99}
           rating={5}/>
           <Product id="4903850" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
           image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
           price={209.99}
           rating={4}/>
        </div>
        <div className="home__row">
            <Product id="49538094" title="Kenwood kMix Stand Mixer for Baking,Stylish Kitchen Mixer with K-beater ,Dough hook and Whisk,5 litre Glass Bowl" 
           image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
           price={219.99}
           rating={4}/>
            <Product id="23445930" title="Amazon Echo 3rd Generation | Smart speaker with Alexa ,Charcoal Fabric" 
           image="https://images-na.ssl-images-amazon.com/images/I/61zQN-TujQL._AC_SL1000_.jpg"
           price={79.99}
           rating={4}/>
            <Product id="3254354345" title="New Apple ipad Pro (12.9-inch ,Wi-Fi ,128GB) -Silver -4th Generation" 
           image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
           price={459.99}
           rating={5}/>
        </div>
        <div className="home__row">
            <Product id="90829332" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor -Super Ultra Wide Dual WQHD 5120 * 1440" 
           image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
           price={999.99}
           rating={3}/>
           
        </div>
      </div>
    </div>
    )
}

export default Home
