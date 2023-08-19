import React, { useContext, useEffect } from "react";
import QuoteContext from "../context/QuoteContext";
import { getData } from "../context/QuoteActions";

const QuoteCard = () => {
  const { quoteData, dispatch } = useContext(QuoteContext);

  const handleFetch = async () => {
    const data = await getData();
    dispatch({
      type: "GET_QUOTE",
      payload: data,
    });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  if (!quoteData) {
    return <h1 className="display-5 text-center">Loading...</h1>;
  }

  return (
    <div className="card p-4 shadow-lg">
      <h1 className="card-title display-4">{quoteData.content}</h1>
      <span>
        <p className="card-text text-secondary float-end">{quoteData.author}</p>
      </span>
      <span>
        <span className="badge text-bg-warning float-end mt-2">
          {quoteData.tags}
        </span>
      </span>
      <button className="btn btn-success w-100 mt-4" onClick={handleFetch}>
        Get More Quotes
      </button>
    </div>
  );
};

export default QuoteCard;
