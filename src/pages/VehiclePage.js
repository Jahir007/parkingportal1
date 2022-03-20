import VehList from './VehList';
import VehicleContextProvider from '../contexts/VehicleContext';

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <VehicleContextProvider>
            <VehList />
          </VehicleContextProvider>
        </div>
      </div>
    </div>

  );
}

export default App;
