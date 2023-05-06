import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

const CarhtmlForm = () => {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const onChangeCarName = (event) => {
    dispatch(changeName(event.target.value));
  };

  const onChangeCarValue = (event) => {
    dispatch(changeCost(parseInt(event.target.value)));
  };

  const onSubmitCarSearch = (event) => {
    event.preventDefault();
    if (name === "" || cost === "") {
      alert("Please check the input fields!");
    } else {
      dispatch(addCar({ name, cost }));
    }
  };

  return (
    <div className="mb-3">
      <form
        onSubmit={onSubmitCarSearch}
        className="d-flex justify-content-between align-items-center"
      >
        <div>
          <label htmlFor="carName" className="form-label fw-semibold fs-5">
            Car Name
          </label>
          <input
            onChange={onChangeCarName}
            value={name}
            type="text"
            className="form-control"
            id="carName"
            placeholder="Ex - Ford Focus"
          />
        </div>

        <div>
          <label htmlFor="carValue" className="form-label  fw-semibold fs-5">
            Car Value
          </label>
          <input
            onChange={onChangeCarValue}
            value={cost || ""}
            type="number"
            className="form-control"
            id="carValue"
            placeholder="Ex - 1500"
          />
        </div>

        <div className="d-flex mt-auto h-100">
          <button type="submit" className="btn btn-primary px-5">
            Submit
          </button>
        </div>
      </form>
      <hr />
    </div>
  );
};

export default CarhtmlForm;
