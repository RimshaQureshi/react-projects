import React from 'react';

export default function Hero() {
    return (
        <main className="hero container">
            <div classname="hero-content" >
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES.
                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className ="category-btn">Caterory </button>
                </div>


                <div className="shopping">
                    <p>Also Avilable On </p>
                    <div class="brand-icon">
                        <img src="/images/flipkart.png" alt="flipcart" />
                        <img src="/images/amazon.png" alt="amazon" />
                    </div>

                </div>
            </div>
            <div classNmae="hero-img">
                <img src="/images/shoe_image.png" alt="" />
            </div>

        </main>
    );
}
