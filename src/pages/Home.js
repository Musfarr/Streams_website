import React, { useEffect } from "react";

const Home = () => {


    // for smooth scroll
  

      // for smooth scroll

      
  return (
    <div>
      <section className="firstsec">
        <div className="uk-container">
          <div className="front_text_wrap uk-light">
            <div className="front_text">
              <h1>
                Software Development Company That Can Breathe Life Into Your
                Vision
              </h1>
              <h4>
                Leverage a Software Development Company’s technological
                capability to transform your ideas into reality with the right
                engineering talent.
              </h4>
              <button className=" uk-button-large uk-button-danger">
                {" "}
                Contact Now{" "}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="scndsec uk-light">
        <div className="uk-container " >
          <div
            className="services_text"
            style={{
              
              textAlign: "center",
              display: "block",
            }}
          >
            <h1>Our Core Services</h1>
            <h5>
              Our team is equipped with the knowledge and ability to deliver a
              broad cross-section of services to meet your ever-evolving
              business software needs
            </h5>
          </div>

          <div className="uk-child-width-1-4@s uk-grid"  >
            <div className="uk-card uk-card-default uk-card-medium uk-card-body uk-card-hover ">
              <h3 className="uk-card-title">Software Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="uk-card uk-card-default uk-card-medium uk-card-body ">
              <h3 className="uk-card-title">Application Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="uk-card uk-card-default uk-card-medium uk-card-body ">
              <h3 className="uk-card-title">UI/UX Design
</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="uk-card uk-card-default uk-card-medium uk-card-body ">
              <h3 className="uk-card-title">Ecommerce Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="uk-card uk-card-default uk-card-medium uk-card-body">
              <h3 className="uk-card-title">Ecommerce Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="uk-card uk-card-default uk-card-medium uk-card-body">
              <h3 className="uk-card-title">Ecommerce Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section> </section>
    </div>
  );
};

export default Home;
