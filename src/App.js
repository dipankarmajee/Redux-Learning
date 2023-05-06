import CarForm from "./component/CarForm";
import CarList from "./component/CarList";
import CarSearch from "./component/CarSearch";
import CarValue from "./component/CarValue";

const App = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
      <div className="w-50 h-50 shadow p-5 d-flex flex-column justify-content-center align-items-center rounded gap-3">
        <CarForm />
        <CarSearch />
        <CarList />
        <CarValue />
      </div>
    </div>
  );
};

export default App;
