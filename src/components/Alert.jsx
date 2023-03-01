import Alert from 'react-bootstrap/Alert';

function Alerta() {
  return (
    <>
      {[
        'success',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
        I'm happy you got here. Please send me an Email, I will contact you as soon as possible.
        Let's develop great ideas together.
        </Alert>
      ))}
    </>
  );
}

export default Alerta;