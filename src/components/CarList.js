import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const dispatch = useDispatch();
  const { carData, name } = useSelector(
    ({ form, cars: { carList, searchTerm } }) => {
      const filteredCar = carList.filter((eachCar) =>
        eachCar.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return { carData: filteredCar, name: form.name };
    }
  );

  const onClickDeleteCar = (id) => {
    dispatch(removeCar(id));
  };
  return (
    <div>
      <ul className="list-group">
        {carData.map((eachCar) => (
          <li
            key={eachCar.id}
            className="border list-group-item d-flex justify-content-between align-items-center"
          >
            <span
              className={`fs-5 ${
                name &&
                eachCar.name.toLowerCase().includes(name.toLowerCase()) &&
                "fw-bold"
              }`}
            >
              {eachCar.name} - ${eachCar.cost}
            </span>
            <button
              onClick={() => onClickDeleteCar(eachCar.id)}
              className="btn btn-outline-danger px-5"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
