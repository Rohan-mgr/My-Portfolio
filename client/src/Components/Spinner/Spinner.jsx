import Spinner from "react-bootstrap/Spinner";

function MySpinner() {
  return (
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default MySpinner;
