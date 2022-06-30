import QuoteList from "../components/quotes/QuoteList";

const DUMMY_DATA = [
  { id: "q1", author: "Max", text: "Learning react is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning javascript is fun!" },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};
export default AllQuotes;
