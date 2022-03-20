import GuestList from './GuestList';
import GuestContextProvider from '../contexts/GuestContext';

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <GuestContextProvider>
            <GuestList />
          </GuestContextProvider>
        </div>
      </div>  
    </div>

  );
}

export default App;
