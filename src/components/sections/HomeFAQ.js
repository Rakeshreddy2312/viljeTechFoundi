import React from "react";
import "./HomeFAQ.css";
import faqLine from "../../assets/image/HomeFAQLine.svg";
import QAToggleMinus from "../../assets/image/QAToggleCollapse.svg";
import QATogglePlus from "../../assets/image/QAToggler.svg";

const HomeFAQ = () => {
  return (
    <div className="home-faq-parent">
      {/* <div className="home-faq-bg"></div> */}
      <div className="home-faq-child">
        <div className="faq-top-blck">
          <h4>Frequently asked questions</h4>
          <p>Click on the plus icon below to expand each FAQ.</p>
        </div>
        <div className="faq-blck-line faq-fst-line">
          <img src={faqLine} alt="line" />
        </div>
        <div className="QA-toggle-blck">
          <div className="QA-left">
            <h5>01 - Here goes the question number one?</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse risus urna, rutrum non quam in, pretium pulvinar
              felis. Donec malesuada lacus nis.
            </p>
          </div>
          <div className="QA-right">
            <img src={QAToggleMinus} alt="toggle icon" />
          </div>
        </div>
        <div className="faq-blck-line">
          <img src={faqLine} alt="line" />
        </div>
        <div className="QA-toggle-blck">
          {" "}
          <div className="QA-left">
            <h5>02 - Here goes the question number two?</h5>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse risus urna, rutrum non quam in, pretium pulvinar
              felis. Donec malesuada lacus nis.
            </p> */}
          </div>
          <div className="QA-right">
            <img src={QATogglePlus} alt="toggle icon" />
          </div>
        </div>
        <div className="faq-blck-line">
          <img src={faqLine} alt="line" />
        </div>
        <div className="QA-toggle-blck">
          {" "}
          <div className="QA-left">
            <h5>03 - Here goes the question number three?</h5>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse risus urna, rutrum non quam in, pretium pulvinar
              felis. Donec malesuada lacus nis.
            </p> */}
          </div>
          <div className="QA-right">
            <img src={QATogglePlus} alt="toggle icon" />
          </div>
        </div>
        <div className="faq-blck-line">
          <img src={faqLine} alt="line" />
        </div>
        <div className="QA-toggle-blck">
          {" "}
          <div className="QA-left">
            <h5>04 - Here goes the question number four?</h5>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse risus urna, rutrum non quam in, pretium pulvinar
              felis. Donec malesuada lacus nis.
            </p> */}
          </div>
          <div className="QA-right">
            <img src={QATogglePlus} alt="toggle icon" />
          </div>
        </div>
        <div className="faq-blck-line">
          <img src={faqLine} alt="line" />
        </div>
      </div>
    </div>
  );
};

export default HomeFAQ;
