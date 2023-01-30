import Alert from 'react-bootstrap/Alert';

function Alerta() {
  return (
    <>
      {[
        'success',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
        I'm happy you got here. you can use any of the following ways to contact me.
        Let's develop great ideas together.
        </Alert>
      ))}
    </>
  );
}

export default Alerta;