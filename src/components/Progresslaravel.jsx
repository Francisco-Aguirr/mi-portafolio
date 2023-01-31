import ProgressBar from 'react-bootstrap/ProgressBar';

function Progresslaravel() {
  const now = 60;
  return <ProgressBar  animated  variant="danger" now={now} label={`${now}%`} />;
}

export default Progresslaravel;