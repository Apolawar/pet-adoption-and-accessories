import React from 'react';
import hero from '../assets/hero-banner.jpg';
import category from '../assets/category-1.jpg';
import category2 from '../assets/category-2.jpg';
import category3 from '../assets/category-3.jpg';
import category4 from '../assets/category-4.jpg';
import category5 from '../assets/category-5.jpg';
import offerbanner1 from '../assets/offer-banner-1.jpg';
import offerbanner2 from '../assets/offer-banner-2.jpg';
import offerbanner3 from '../assets/offer-banner-3.jpg';
import product1 from '../assets/product-1.jpg';
import product10 from '../assets/product-1_0.jpg';
import product2 from '../assets/product-2.jpg';
import product20 from '../assets/product-2_0.jpg';
import product3 from '../assets/product-3.jpg';
import product30 from '../assets/product-3_0.jpg';
import product4 from '../assets/product-4.jpg';
import product40 from '../assets/product-4_0.jpg';
import product5 from '../assets/product-5.jpg';
import product50 from '../assets/product-5_0.jpg';
import product6 from '../assets/product-6.jpg';
import product60 from '../assets/product-6_0.jpg';
import service0 from '../assets/service-image.png';
import service1 from '../assets/service-icon-1.png';
import service2 from '../assets/service-icon-2.png';
import service3 from '../assets/service-icon-3.png';
import service4 from '../assets/service-icon-4.png';
import catImage from '../assets/cta-banner.png';
import catbanner from '../assets/cta-bg.jpg';
import catIcon from '../assets/cta-icon.png';
import brand1 from '../assets/brand-1.jpg';
import brand2 from '../assets/brand-2.jpg';
import brand3 from '../assets/brand-3.jpg';
import brand4 from '../assets/brand-4.jpg';
import brand5 from '../assets/brand-5.jpg';





import './Service.css';

const CustomHTML = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
  backgroundPosition: 'center',
  
      };
  return (
    <main>
      <section className="section hero has-bg-image" id="home" aria-label="home" style={backgroundImageStyle} >
        
          <h5 className="h1 hero-title">
            <span className="span">High Quality</span><h6>Pet Food</h6>
          </h5>
          <p className="hero-text">Sale up to 40% off today</p>
          <a href="#" className="btn">Shop Now</a>
        
      </section>

      <section className="section category" aria-label="category">
        <div className="container">
          <h2 className="h2 section-title">
            <span className="span">Top</span> categories
          </h2>
          <ul className="has-scrollbar">
            <li className="scrollbar-item">
              <div className="category-card">
                <figure className="card-banner img-holder" style={{ "--width": 330, "--height": 300 }}>
                  <img src={category} width="330" height="300" loading="lazy" alt="Cat Food" className="img-cover" />
                </figure>
                <h3 className="h3">
                  <a href="#" className="card-title">Cat Food</a>
                </h3>
              </div>
            </li>
            <li className="scrollbar-item">
              <div className="category-card">
                <figure className="card-banner img-holder" style={{ "--width": 330, "--height": 300 }}>
                  <img src={category2} width="330" height="300" loading="lazy" alt="Cat Toys" className="img-cover" />
                </figure>
                <h3 className="h3">
                  <a href="#" className="card-title">Cat Toys</a>
                </h3>
              </div>
            </li>
            <li className="scrollbar-item">
              <div className="category-card">
                <figure className="card-banner img-holder" style={{ "--width": 330, "--height": 300 }}>
                  <img src={category3} width="330" height="300" loading="lazy" alt="Dog Food" className="img-cover" />
                </figure>
                <h3 className="h3">
                  <a href="#" className="card-title">Dog Food</a>
                </h3>
              </div>
            </li>
            <li className="scrollbar-item">
              <div className="category-card">
                <figure className="card-banner img-holder" style={{ "--width": 330, "--height": 300 }}>
                  <img src={category4} width="330" height="300" loading="lazy" alt="Dog Toys" className="img-cover" />
                </figure>
                <h3 className="h3">
                  <a href="#" className="card-title">Dog Toys</a>
                </h3>
              </div>
            </li>
            <li className="scrollbar-item">
              <div className="category-card">
                <figure className="card-banner img-holder" style={{ "--width": 330, "--height": 300 }}>
                  <img src={category5} width="330" height="300" loading="lazy" alt="Dog Supplements" className="img-cover" />
                </figure>
                <h3 className="h3">
                  <a href="#" className="card-title">Dog Supplements</a>
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section offer" aria-label="offer">
        <div className="container">
          {/* Offer section content */}
          <ul class="grid-list">

            <li>
              <div class="offer-card has-bg-image img-holder"
               style={{ backgroundImage: `url(${offerbanner1})`, "--width": 540, "--height": 374 }}>
                <p class="card-subtitle">Selected Items. Online Only.</p>

                <h3 class="h3 card-title">
                  Hot Summer <span class="span">Deals</span>
                </h3>

                <a href="#" class="btn">Read More</a>

              </div>
            </li>

            <li>
              <div class="offer-card has-bg-image img-holder"
                style={{ backgroundImage: `url(${offerbanner2})`, "--width": 540, "--height": 374 }}>

                <p class="card-subtitle">Treats & Grooming</p>

                <h3 class="h3 card-title">
                  Spoil your true <span class="span">love</span>
                </h3>

                <a href="#" class="btn">Read More</a>

              </div>
            </li>

            <li>
              <div class="offer-card has-bg-image img-holder"
                style={{ backgroundImage: `url(${offerbanner3})`, "--width": 540, "--height": 374 }}>

                <p class="card-subtitle">Our Brand You Will Love</p>

                <h3 class="h3 card-title">
                  New in this <span class="span">year</span>
                </h3>

                <a href="#" class="btn">Read More</a>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <section className="section product" id="shop" aria-label="product">
        <div className="container">
          {/* Product section content */}
          <h2 class="h2 section-title">
            <span class="span">Best</span> Seller
          </h2>

          <ul class="grid-list">

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style={{ width: "320px", height: "320px" }}>
                  <img src={ product1}width="360" height="360" loading="lazy"
                    alt="Commodo leo sed porta" class="img-cover default"/>
                  <img src={ product10} width="360" height="360" loading="lazy"
                    alt="Commodo leo sed porta" class="img-cover hover"/>

                  <button className="card-action-btn" aria-label="add to card" title="Add To Card">
                    <i class="bi bi-cart-check-fill"></i>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">PawPal Drinks</a>
                  </h3>

                  <data class="card-price" value="15">$15.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style={{ width: "320px", height: "320px" }}>
                  <img src={ product2} width="360" height="360" loading="lazy"
                    alt="Purus consequat congue sit" class="img-cover default"/>
                  <img src={ product20} width="360" height="360" loading="lazy"
                    alt="Purus consequat congue sit" class="img-cover hover"/>

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">MeowMunchies</a>
                  </h3>

                  <data class="card-price" value="45">$45.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style={{ width: "320px", height: "320px" }}>
                  <img src={ product3} width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover default"/>
                  <img src={ product30} width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover hover"/>

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Finny Flavors</a>
                  </h3>

                  <data class="card-price" value="45">$75.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style={{ width: "320px", height: "320px" }}>
                  <img src={ product4} width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover default"/>
                  <img src={ product40} width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover hover"/>

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    {/* <span class="span">(0)</span> */}
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Beak Bites</a>
                  </h3>

                  <data class="card-price" value="49">$49.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style={{ width: "320px", height: "320px" }}>
                  <img src={ product5} width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover default"/>
                  <img src={ product50} width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover hover"/>

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Playful Paws</a>
                  </h3>

                  <data class="card-price" value="85">$110.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style={{ width: "320px", height: "320px" }}>
                  <img src={ product6} width="360" height="360" loading="lazy"
                    alt="Nam justo libero porta ege" class="img-cover default"/>
                  <img src={ product60} width="360" height="360" loading="lazy"
                    alt="Nam justo libero porta ege" class="img-cover hover"/>

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper gray">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Pawsitive Wellness</a>
                  </h3>

                  <data class="card-price" value="85">$85.00</data>

                </div>

              </div>
            </li>

            
          </ul>

        </div>
      </section>

      <section className="section service" aria-label="service">
        <div className="container">
          {/* Service section content */}
          <img src={service0} width="122" height="136" loading="lazy" alt="" class="img"/>

          <h2 class="h2 section-title">
            <span class="span">What your pet needs,</span> when they need it.
          </h2>

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <figure class="card-icon">
                  <img src={service1} width="70" height="70" loading="lazy"
                    alt="service icon"/>
                </figure>

                <h3 class="h3 card-title">Free Same-Day Delivery</h3>

                <p class="card-text">
                  Order by 2pm local time to get free delivery on orders $35+ today.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <figure class="card-icon">
                  <img src={service2} width="70" height="70" loading="lazy"
                    alt="service icon"/>
                </figure>

                <h3 class="h3 card-title">30 Day Return</h3>

                <p class="card-text">
                  35% off your first order plus 5% off all future orders.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <figure class="card-icon">
                  <img src={service3} width="70" height="70" loading="lazy"
                    alt="service icon"/>
                </figure>

                <h3 class="h3 card-title">Security payment</h3>

                <p class="card-text">
                  25% off your online order of $50+. Available at most locations.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <figure class="card-icon">
                  <img src={service4} width="70" height="70" loading="lazy"
                    alt="service icon"/>
                </figure>

                <h3 class="h3 card-title">24/7 Support</h3>

                <p class="card-text">
                  Shop online to get orders over $35 shipped fast and free.
                </p>

              </div>
            </li>

          </ul>
        </div>
      </section>

      <section className="cta has-bg-image" aria-label="cta" style={{ backgroundImage: `url(${catbanner})` }}>
        <div className="container">
          {/* CTA section content */}
          <figure class="cta-banner">
            <img src={catImage}  loading="lazy" alt="cat" class="w-100"/>
          </figure>

          <div class="cta-content">

            <img src={catIcon}width="120" height="35" loading="lazy" alt="taste guarantee"
              class="img"/>

            <h2 class="h2 section-title">Taste it, love it or we’ll replace it… Guaranteed!</h2>

            <p class="section-text">
              At Petio, we believe your dog and cat will love their food so much that if they don’t … we’ll help you
              find a
              replacement. That’s our taste guarantee.
            </p>

            <a href="#" class="btn">Find out more</a>

          </div>
        </div>
      </section>

      <section className="section brand" aria-label="brand">
        <div className="container">
          {/* Brand section content */}
          <h2 class="h2 section-title">
            <span class="span">Popular</span> Brands
          </h2>

          <ul class="has-scrollbar">

            <li class="scrollbar-item">
              <div class="brand-card img-holder" style={{ width: "150px", height: "150px" }}>
                <img src={brand1} width="150" height="150" loading="lazy" alt="brand logo"
                  class="img-cover"/>
              </div>
            </li>

            <li class="scrollbar-item">
              <div class="brand-card img-holder" style={{ width: "150px", height: "150px" }}>
                <img src={brand2} width="150" height="150" loading="lazy" alt="brand logo"
                  class="img-cover"/>
              </div>
            </li>

            <li class="scrollbar-item">
              <div class="brand-card img-holder" style={{ width: "150px", height: "150px" }}>
                <img src={brand3} width="150" height="150" loading="lazy" alt="brand logo"
                  class="img-cover"/>
              </div>
            </li>

            <li class="scrollbar-item">
              <div class="brand-card img-holder" style={{ width: "150px", height: "150px" }}>
                <img src={brand4} width="150" height="150" loading="lazy" alt="brand logo"
                  class="img-cover"/>
              </div>
            </li>

            <li class="scrollbar-item">
              <div class="brand-card img-holder" style={{ width: "150px", height: "150px" }}>
                <img src={brand5} width="150" height="150" loading="lazy" alt="brand logo"
                  class="img-cover"/>
              </div>
            </li>

          </ul>

        </div>
      </section>
    </main>
  );
}

export default CustomHTML;