import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./KeyTerms.css";

const KeyTerms = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const terms = [
    {
      title: "Sweep Account",
      definition:
        "A sweep account is a specialized account that is often attached to a brokerage account to automatically transfer or sweep cash funds into a low-risk, higher interest-earning investment such as a money market fund at the close of each business day.",
      relatedTerms: [
        "SAVINGS ACCOUNT",
        "DEPOSIT INTEREST RATE",
        "SWEEP ACCOUNT",
        "PASSBOOK LOAN",
        "LINKED SAVINGS ACCOUNT",
        "JOINT ACCOUNT",
      ],
      glowColor: "#00ff8c",
    },
    {
      title: "Deposit Interest Rate",
      definition:
        "The deposit interest rate is the rate at which banks pay customers for keeping their money in savings accounts, certificates of deposit, or other deposit products. This rate is typically expressed as an annual percentage yield (APY).",
      relatedTerms: [
        "SAVINGS ACCOUNT",
        "DEPOSIT INTEREST RATE",
        "SWEEP ACCOUNT",
        "PASSBOOK LOAN",
        "LINKED SAVINGS ACCOUNT",
        "JOINT ACCOUNT",
      ],
      glowColor: "#00ffaa",
    },
    {
      title: "Joint Account",
      definition:
        "A joint account is a bank or brokerage account shared by two or more individuals. All account holders have equal rights and responsibilities for transactions and maintenance of the account.",
      relatedTerms: [
        "SAVINGS ACCOUNT",
        "DEPOSIT INTEREST RATE",
        "SWEEP ACCOUNT",
        "PASSBOOK LOAN",
        "LINKED SAVINGS ACCOUNT",
        "JOINT ACCOUNT",
      ],
      glowColor: "#00ff73",
    },
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % terms.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + terms.length) % terms.length);
  };

  return (
    <div className="key_container">
      <h1 className="key_main_title">Key Terms</h1>

      <div className="key_content_area">
        <button
          className="key_nav_button key_prev"
          onClick={prevPage}
          aria-label="Previous term"
        >
          <ChevronLeft size={30} color="#00ff8c" />
        </button>

        <div className="key_term_display">
          <div
            className="key_term_card"
            style={{ "--glow-color": terms[currentPage].glowColor }}
          >
            <h2 className="key_term_title">{terms[currentPage].title}</h2>
            <div className="key_definition_block">
              <h3 className="key_definition_label">DEFINITION</h3>
              <p className="key_definition_text">
                {terms[currentPage].definition}
              </p>
              <a href="#" className="key_learn_more">
                Learn More
              </a>
            </div>
          </div>

          <div className="key_related_terms">
            {terms[currentPage].relatedTerms.map((term, index) => (
              <div
                key={index}
                className={`key_term_tag ${
                  term === terms[currentPage].title ? "key_active_term" : ""
                }`}
                style={
                  term === terms[currentPage].title
                    ? { "--glow-color": terms[currentPage].glowColor }
                    : {}
                }
              >
                {term}
              </div>
            ))}
          </div>
        </div>

        <button
          className="key_nav_button key_next"
          onClick={nextPage}
          aria-label="Next term"
        >
          <ChevronRight size={30} color="#00ff8c" />
        </button>
      </div>
    </div>
  );
};

export default KeyTerms;
