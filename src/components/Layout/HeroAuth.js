import React from 'react';
import {useHistory} from 'react-router-dom';
import AuthForm from '../Auth/AuthForm';
import Footer from './Footer';

const Hero = () => {
  const history = useHistory();

  const back = () => {
    history.goBack()
  };

  return (
    <>
    <section className = 'hero' >
      <div className = 'main'>
        <div className="container-2">
          <button onClick = {back} className ='btn-dark btn-sm mb-3 mt-2'>
            Back
          </button>
          <AuthForm />
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default Hero;