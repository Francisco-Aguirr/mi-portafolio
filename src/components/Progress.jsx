import ProgressBar from 'react-bootstrap/ProgressBar';

function Progresshtml() {
  const now = 85;
  return <ProgressBar  animated  now={now} label={`${now}%`} />;
}

export default Progresshtml;