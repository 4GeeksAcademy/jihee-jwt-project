import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Signup = () => {
	const { actions } = useContext(Context);
	const navigate = useNavigate()

	const handleSubmit = async (event) => {
		event.preventDefault();

		let email = event.target.emailInput.value;
		let password = event.target.passwordInput.value;
		let confirmPassword = event.target.confirmPasswordInput.value;

		if (password !== confirmPassword) {
			alert('Password does not match');
			return;
		}

		const response = await actions.signup(email, password);
		if (response) {
			alert('Account has been created');
			navigate('/login')
		} else {
			alert("We weren't able to sign you up at this time. Please try again later.");
		}
	}


	return (
		<div className="container mt-5">
			<form onSubmit={handleSubmit} className="row g-3">
				<div className="col-md-6">
					<label for="inputEmail4" className="form-label">Email</label>
					<input name='emailInput' type="email" className="form-control" id="inputEmail4" required/>
				</div>
				<div className="col-md-6">
					<label for="inputPassword4" className="form-label">Password</label>
					<input type="password" name='passwordInput' className="form-control" id="inputPassword4" required />
				</div>
				<div className="col-md-6">
					<label for="inputConfirmPassword4" className="form-label">Confirm Password</label>
					<input type="password" name='confirmPasswordInput' className="form-control" id="confirmPassword4" required/>
				</div>
				<div className="col-12">
					<div className="form-check">
						<input className="form-check-input" type="checkbox" id="gridCheck" />
							<label className="form-check-label" for="gridCheck">
								Keep me signed-in
							</label>
					</div>
				</div>
				<div className="col-12">
					<button type="submit" className="btn btn-primary">Sign up</button>
				</div>
			</form>
		</div>
	);
};

Signup.propTypes = {
	match: PropTypes.object
};
