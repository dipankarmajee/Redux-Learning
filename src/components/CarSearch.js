import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.cars.searchTerm);
  const onChangeSearch = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };
  return (
    <div className="d-flex justify-content-between">
      <h4 className="d-flex align-items-end">My Cars</h4>
      <div className="d-flex align-items-center gap-3">
        <label
          htmlFor="carName"
          className="form-label fw-semibold p-0 m-0 fs-5"
        >
          Search
        </label>
        <input
          value={searchTerm}
          onChange={onChangeSearch}
          type="text"
          className="form-control"
          id="carName"
          placeholder="Ex - Ford Focus"
        />
      </div>
    </div>
  );
};

export default CarSearch;
