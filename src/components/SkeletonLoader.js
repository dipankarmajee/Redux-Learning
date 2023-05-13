const SkeletonLoader = (props) => {
  const { data } = props;

  return (
    <div className="w-50" aria-hidden="true">
      <div className="placeholder-wave">
        {Array(data)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="placeholder d-flex mb-4"
              style={{ height: "30px", opacity: "0.5" }}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
