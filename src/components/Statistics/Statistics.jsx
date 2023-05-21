import PropTypes from 'prop-types';
import { Results } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Results>Good: {good}</Results>
      <Results>Neutral: {neutral}</Results>
      <Results>Bad: {bad}</Results>
      <Results>Total: {total}</Results>
      <Results>Positive feedback: {positivePercentage}%</Results>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
