import ProgressBar from 'react-bootstrap/ProgressBar';

function Progressreact() {
  const now = 80;
  return <ProgressBar  animated  variant="info" now={now} label={`${now}%`} />;
}

export default Progressreact;