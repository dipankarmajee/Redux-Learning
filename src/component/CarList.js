import { useDispatch, useSelector } from "react-redux";
import { deleteCar } from "../store";

const CarList = () => {
  const dispatch = useDispatch();
  const { carData, name } = useSelector(
    ({ form, cars: { carData, searchTerm } }) => {
      const filterCar = carData.filter((eachCar) =>
        eachCar.name.includes(searchTerm)
      );
      return { carData: filterCar, name: form.name };
    }
  );

  const onClickDelete = (id) => {
    console.log(id);
    dispatch(deleteCar(id));
  };
  return (
    <div className="w-100 d-flex flex-column gap-3">
      {carData.map((eachCarData) => (
        <div
          key={eachCarData.id}
          className="d-flex justify-content-between align-items-center w-100 border p-1 rounded"
        >
          <div className="d-flex gap-2">
            <span
              className={name && eachCarData.name.includes(name) && "fw-bold"}
            >
              {eachCarData.name}
            </span>
            <span>Rs.{eachCarData.cost}</span>
          </div>
          <button
            onClick={() => onClickDelete(eachCarData.id)}
            className="btn btn-danger px-5 py-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CarList;
