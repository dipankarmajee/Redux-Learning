import { useDispatch, useSelector } from "react-redux";
import { addCar, costInput, nameInput } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => ({
    name: state.form.name,
    cost: state.form.cost,
  }));

  const onChangeName = (event) => {
    dispatch(nameInput(event.target.value));
  };

  const onChangeCost = (event) => {
    dispatch(costInput(event.target.value));
  };

  const onSubmitAdd = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="w-100">
      <form
        onSubmit={onSubmitAdd}
        className="d-flex justify-content-between align-items-center gap-5 fw-semibold "
      >
        <div>
          <label htmlFor="carName" className="form-label">
            Car Name
          </label>
          <input
            value={name}
            onChange={onChangeName}
            name="name"
            type="text"
            className="form-control"
            id="carName"
          />
        </div>
        <div>
          <label htmlFor="carPrice" className="form-label">
            Car Price
          </label>
          <input
            value={cost || ""}
            onChange={onChangeCost}
            name="cost"
            type="number"
            className="form-control"
            id="carPrice"
          />
        </div>
        <div className="d-flex mt-auto">
          <button type="submit" className="btn btn-outline-primary px-5">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
