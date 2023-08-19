import React from "react";
import QuoteCard from "./components/QuoteCard";
import { QuoteProvider } from "./context/QuoteContext";

const App = () => {
  return (
    <QuoteProvider>
      <div className="container my-5">
        <h1 className="display-3 text-center my-5">Daily Quotes</h1>
        <QuoteCard />
      </div>
    </QuoteProvider>
  );
};

export default App;
