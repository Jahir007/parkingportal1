import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAppContext } from './AppContext';
import Loader from './components/Layout/Loader';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Presence from './components/StartingPage/Presence';
import GuestBooking from './pages/GuestBooking';
import Navbar2 from './components/Layout/Navbar2'
import OwnerPage from './pages/OwnerPage';
import SlotPage from './pages/SlotPage';
import VehiclePage from './pages/VehiclePage';


function App() {
  const { isLoggedIn } = useAppContext();

  return (
    <Suspense fallback={Loader}>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>

        <Route path='/auth'>
          {isLoggedIn && <HomePage />}
          {!isLoggedIn && <AuthPage />}
        </Route>

        {isLoggedIn && (
          <Route path='/profile' exact>
            <Presence />
          </Route>
        )}

        {isLoggedIn && (
          <Route path='/GuestBooking' exact>
            <Navbar2 />
            <GuestBooking />
          </Route>
        )}
        

        {isLoggedIn && (
          <Route path='/Slot' exact>
            <Navbar2 />
            <SlotPage />
          </Route>
        )}

        {isLoggedIn && (
          <Route path='/Vehicle' exact>
            <Navbar2 />
            <VehiclePage />
          </Route>
        )}


        {isLoggedIn && (
          <Route path='/OwnerPage'>
            <Navbar2 />
            <OwnerPage />
          </Route>
        )}

        

        {isLoggedIn && (
          <Route path='/About'>
            <Navbar2 />
            <About />
          </Route>
        )}

        {isLoggedIn && (
          <Route path='/ContactUs'>
            <Navbar2 />
            <ContactUs />
          </Route>
        )}

        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
