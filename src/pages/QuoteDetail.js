import { Fragment } from "react";
import { Route, useParams, useRouteMatch, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HiglightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_DATA = [
  { id: "q1", author: "Max", text: "Learning react is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning javascript is fun!" },
];
const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
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
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
