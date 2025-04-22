import React from "react";

import Services from "./Components/Services";
import Footer from "./Components/Footer";
import "./App.css";
import ServiceNav from "./Components/ServiceNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import MarketAnalysis from "./Components/MarketAnalysis";
import Lending from "./Components/Lending";
import Trade from "./Components/Trade";
import Banking from "./Components/Banking";
import DigitalBanking from "./Components/DigitalBanking";
import SavingsPage from "./Components/SavingsPage";
import Invest from "./Components/Invest";
import CreditCard from "./Components/CreditCard";
import UserDetails from "./Components/UserDetails";
import Learn from "./Components/Learn";
import FinanceChatbot from "./Components/Chatbot";
import FinancialAdvisor from "./Components/FinancialAdvisor";
// import MultipleOpt from "./Components/MultipleOpt";
// import KeyTerms from "./Components/KeyTerms";
// import Carausel from "./Components/Carausel";
// import FinancialAdvisor from "./Components/FinancialAdvisor";

const App = () => {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <ServiceNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<MarketAnalysis />} />
            <Route path="/lending" element={<Lending />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/banking/digibanking" element={<DigitalBanking />} />
            <Route path="/banking/savings" element={<SavingsPage />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/banking/cards" element={<CreditCard />} />
            <Route path="/banking/signin" element={<UserDetails />} />

            <Route path="/learn" element={<Learn />} />
            <Route
              path="/banking/smartbudgeting"
              element={<FinancialAdvisor />}
            />

            {/* <Services /> */}
            {/*
            <ServiceNav /> */}
          </Routes>
          <FinanceChatbot />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
