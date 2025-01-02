function Hero(){
    return <div>
        <div className="hero-container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <br />
                <p>
                Your feet deserve the best, and Nike is here to take you further. With every stride, we provide the support, comfort, and innovation to help you push beyond limits and achieve greatness.
                </p>
            </div>

            <div className="Hero-image" >
                <img src="./images/hero-image.png" alt="" srcset="" />
            </div>
            
        </div>
        
        <div className="footer">
            <div className="hero-button">
                <button>Shop Now</button>
                <button id="categories">Catagories</button>
            </div>

            <div className="shopping">
                <p>Also Available on</p>
                
                <div id="shopping-images">
                    <img src="./images/flipkart.png" alt="flipkart-logo" />

                    <img src="./images/amazon.png" alt="amazon-logo" />
                </div>
            
            </div>
        </div>
    </div>
}

export default Hero