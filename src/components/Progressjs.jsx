import ProgressBar from 'react-bootstrap/ProgressBar';

function Progressjs() {
  const now = 75;
  return <ProgressBar  animated  variant="warning" now={now} label={`${now}%`} />;
}

export default Progressjs;