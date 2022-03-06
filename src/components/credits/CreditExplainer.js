import React from "react";
import teiLogo from "../../assets/extrainch.png";
import explainer from "../../assets/new-slice_3.png";

const CreditExplainer = ({ data, onLogoClick }) => {
  return (
    <span className="flex-span credit-span" id="the-span">
      <img
        src={teiLogo}
        //width="130px"
        className="tei-logo"
        alt="The Extra Inch Logo"
        onClick={() => onLogoClick(data)}
      />
      <span className="credit-text-span">
        <p className="credit-text">chart by</p>
        <p className="credit-text">@bobaluya</p>
      </span>

      <span className="explainer-span">
        <img src={explainer} className="explainer" />
      </span>
    </span>
  );
};

export default CreditExplainer;
