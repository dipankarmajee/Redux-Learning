import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

const App = () => {
  return (
    <div className="m-5 d-flex justify-content-center align-items-center vh-100">
      <div className="w-50 shadow rounded p-3 d-flex flex-column gap-4 bg-light">
        <CarForm />
        <CarSearch />
        <CarList />
        <CarValue />
      </div>
    </div>
  );
};

export default App;
