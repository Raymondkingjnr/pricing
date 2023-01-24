import React from "react";
import "./plans.css";
function Plans() {
  return (
    <div className="app__plans section__width">
      <div className="app__plans-years">
        <div className="app__plans-billed flex__center">
          <h2>prices</h2>
          <p className="p__opensans p__billed"> Billed</p>
          <main className="app__plans-monthly">
            <p className="p__opensans">Monthly</p>
            <p className="p__opensans">Yearly</p>
          </main>
        </div>
        <p className="app__plans-notes p__opensans">
          {" "}
          As a matter of fact concentration of any operations can turn out to be
          a result of the Deception of scientific interferance
        </p>
      </div>
      <div className="app__plans-budget flex__center section__width">
        <div className="app__plans-budget__basic">
          <h3>Basic</h3>
          <h2>$20/mo</h2>
          <p className="p__opensans">billed Monthly</p>
          <div className="app__plans-basic__content">
            <p className="p__opensans budget__benefit">
              Organizational Content
            </p>
            <div className="underline__div" />
            <p className="p__opensans budget__benefit">Fight Estimation</p>
            <div className="underline__div" />
            <p className="p__opensans budget__benefit">Evident Base</p>
            <div className="underline__div" />
          </div>
          <button className="app__plans-btn">Add Plans</button>
        </div>

        <div className="app__plans-budget__business">
          <h3>Bussiness</h3>
          <h2>$30/mo</h2>
          <p className="p__opensans">billed Monthly</p>
          <div className="app__plans-basic__content">
            <p className="p__opensans budget__benefit">
              Organizational Content
            </p>
            <div className="underline__div" />
            <p className="p__opensans budget__benefit">Fight Estimation</p>
            <div className="underline__div" />
            <p className="p__opensans budget__benefit">Evident Base</p>
            <div className="underline__div" />
            <p className="p__opensans budget__benefit">Adaptive Unification</p>
            <div className="underline__div" />
          </div>
          <button className="app__plans-btn">Add Plans</button>
        </div>

        <div className="app__plans-budget__enterprise">
          <h3>Enterprise</h3>
          <h2>Contact Us</h2>
          <p className="p__opensans">
            Bring enterprise -level security , compliances and scalability to
            your website
          </p>
          <div className="app__plans-basic__content">
            <p className="p__opensans budget__benefit">
              Organizational Content
            </p>
            <div className="underline__div" />
            <p className="p__opensans budget__benefit">Evident Base</p>
            <div className="underline__div" />
            <p className="p__opensans budget__benefit">Fight Estimation</p>
            <div className="underline__div" />
            <p className="p__opensans budget__benefit">Evident Base</p>
            <div className="underline__div" />
          </div>
          <button className="app__plans-btn">Add Plans</button>
        </div>
      </div>
    </div>
  );
}

export default Plans;
