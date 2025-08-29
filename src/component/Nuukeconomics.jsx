import React from "react";
import "./Nuukeconomics.css";

function Nuukeconomics() {
  return (
    <div className="nuuke-container">
      <div className="nuuke-box glass-box">
        <h1 className="nuuke-title">NUUKE Tokenomics</h1>
        <p className="nuuke-supply">
          <strong>Total Supply:</strong> 18,400,000,000 <span>(18.4 Billion Tokens)</span>
        </p>

        <h2 className="nuuke-subtitle">Allocation</h2>
        <div className="nuuke-list">
          <div className="nuuke-item">
            <span>Public Sale</span>
            <span className="highlight">43%</span>
          </div>
          <div className="nuuke-item">
            <span>Liquidity Pool</span>
            <span className="highlight">6%</span>
          </div>
          <div className="nuuke-item">
            <span>Pre-Sale</span>
            <span className="highlight">11%</span>
          </div>
          <div className="nuuke-item">
            <span>Community Airdrop & Reward</span>
            <span className="highlight">14%</span>
          </div>
          <div className="nuuke-item">
            <span>Team & Advisors</span>
            <span className="highlight">13%</span>
          </div>
          <div className="nuuke-item">
            <span>Burn Mechanism</span>
            <span className="highlight">13%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nuukeconomics;
