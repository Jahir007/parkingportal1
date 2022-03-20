import Button from './Button';

const AuthOptions = () => {
	return (
		<>
		<div className='position-relative'>
		<div className=''>
			<img className=' rounded mx-auto d-block img-fluid col-lg-3 col-xs-6' src="/images/logo.png" alt="" />
			<h2 className='d-flex justify-content-center'>Welcome to Parking Portal</h2>
		</div>
		<div className = 'text-center'>
			<Button text = 'Log in' />
			<Button text = 'Sign up' />
		</div>
		</div>
		</>
	);
};

export default AuthOptions;