import { useDispatch, useSelector } from "react-redux";
import { searchTerm } from "../store";

const CarSearch = () => {
  const dispatch = useDispatch();
  const searchVal = useSelector((state) => state.cars.searchTerm);
  const onChangeSearch = (event) => {
    dispatch(searchTerm(event.target.value));
  };
  return (
    <div className="d-flex justify-content-end gap-4 align-items-center fw-bold w-100">
      <label htmlFor="carName" className="form-label">
        Car Search
      </label>
      <input
        value={searchVal}
        onChange={onChangeSearch}
        style={{ width: "300px" }}
        type="text"
        className="form-control"
        id="carName"
      />
    </div>
  );
};

export default CarSearch;
