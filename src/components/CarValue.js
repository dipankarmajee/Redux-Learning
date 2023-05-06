import { useSelector } from "react-redux";

const CarValue = () => {
  const carArr = useSelector(({ cars: { carList, searchTerm } }) => {
    return carList.filter((eachCar) =>
      eachCar.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const totalValue = carArr.reduce((acc, currentVal) => {
    return acc + currentVal.cost;
  }, 0);
  return (
    <div className="d-flex justify-content-end fw-semibold fs-4">
      Total Value : ${totalValue}
    </div>
  );
};

export default CarValue;
