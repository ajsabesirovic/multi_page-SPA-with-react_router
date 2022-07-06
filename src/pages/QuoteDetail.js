import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HiglightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_DATA = [
  { id: "q1", author: "Max", text: "Learning react is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning javascript is fun!" },
];
const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;
  const quote = DUMMY_DATA.find((quote) => quote.id === quoteId);
  if (!quote) {
    return <p>No quote found!</p>;
  }
  return (
    <Fragment>
      <HiglightedQuote
        text={quote.text}
        author={quote.author}
      ></HiglightedQuote>
      <Route path={`/quotes/${quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
