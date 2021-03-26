export const fetchQuotesApi = async () => {
  const response = await fetch("https://quotes.rest/qod?category=inspire");
  let quoteDetails = [];
  const { contents } = await response.json();
  const { author, quote } = contents.quotes[0];
  quoteDetails.push(author, quote);
  return quoteDetails;
};
