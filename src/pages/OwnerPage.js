import OwnerList from './OwnerList';
import OwnerContextProvider from '../contexts/OwnerContext';

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <OwnerContextProvider>
            <OwnerList />
          </OwnerContextProvider>
        </div>
      </div>
    </div>

  );
}

export default App;
