import SlotList from './SlotList';
import SlotContextProvider from '../contexts/SlotContext';

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <SlotContextProvider>
            <SlotList />
          </SlotContextProvider>
        </div>
      </div>
    </div>

  );
}

export default App;
