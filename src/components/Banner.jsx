const Banner = ({
  className,
  position,
  title,
  description,
  buttonText,
  heidBtn,
}) => {
  if (className) {
    return (
      <div className={`${className}`}>
        <div className={position}>
          <h1>{title}</h1>
          <p>{description}</p>
          <button className={heidBtn}>{buttonText}</button>
        </div>
      </div>
    );
  }
};

export default Banner;
