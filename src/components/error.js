import { useRouteError,Link } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <>
    <h1 className="error-title">{err.data} {err.status} {err.statusText}</h1>
      <div className="error-page-container">
        <img
          src="https://dhis2.b-cdn.net/uploads/default/original/3X/9/7/974507c80a0d6bcec9996031aaa0f73feef4438a.png"
          alt="{err.data} {err.status} {err.statusText}"
        />
      </div>
      <button className="back-to-home-btn"><Link to='/'>Back to Home</Link></button>
    </>
  );
};

export default Error;
