import { useNavigate } from "react-router-dom";

const Banner = ({
  className,
  position,
  title,
  description,
  buttonText,
  heidBtn,
}) => {
  let navigate = useNavigate();

  const showGtownMemberForm = () => {
    navigate("/gtown-info");
  };

  if (className) {
    return (
      <div className={`${className}`}>
        <div className={position}>
          <h1>{title}</h1>
          <p>{description}</p>
          <button onClick={showGtownMemberForm} className={heidBtn}>
            {buttonText}
          </button>
        </div>
      </div>
    );
  }
};

export default Banner;
