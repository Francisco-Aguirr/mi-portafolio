import ProgressBar from 'react-bootstrap/ProgressBar';

function Progressphp() {
  const now = 70;
  return <ProgressBar  animated now={now} label={`${now}%`} />;
}

export default Progressphp;