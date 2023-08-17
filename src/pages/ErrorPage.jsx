import './Error.css';

function ErrorPage() {
  return (
    <>
      <div className="error">
        <div className="error-image">
          <img src="error.jpg" alt="loading" />
        </div>
        <div className="error-text">
          <h1 className="error-heading">Sorry I am Unable to find this Page.</h1>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
