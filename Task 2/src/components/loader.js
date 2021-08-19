import Loader from "react-loader-spinner";
import "./styles.css";

const LoaderComp = () => {
  return (
    //use to display the loader when the api is fetching data
    <div className="loader">
      <Loader
        type="Circles"
        color="rgba(var(--bs-primary-rgb)"
        height={50}
        width={50}
        timeout={3000}
      />
    </div>
  );
};
export default LoaderComp;
