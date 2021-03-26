import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuotes, quoteSelector } from "./quoteSlice";

import "./Quote.css";

const Quote = () => {
  const { quotes, isLoading } = useSelector(quoteSelector);
  const [author, quote] = quotes;
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchQuotes()), [dispatch]);

  return (
    <div className='quote'>
      <div className='scrim'>
        <blockquote>{quote}</blockquote>
        <cite>
          <span>-{author}</span>
        </cite>
      </div>
    </div>
  );
};

export default Quote;
