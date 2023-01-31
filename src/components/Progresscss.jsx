import ProgressBar from 'react-bootstrap/ProgressBar';

function Progresscss() {
  const now = 85;
  return <ProgressBar  animated  now={now} label={`${now}%`} />;
}

export default Progresscss;