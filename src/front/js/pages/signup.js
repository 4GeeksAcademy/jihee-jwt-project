import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Signup = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container mt-5">
			<form className="row g-3">
				<div className="col-md-6">
					<label for="inputEmail4" className="form-label">Email</label>
					<input type="email" className="form-control" id="inputEmail4"/>
				</div>
				<div className="col-md-6">
					<label for="inputPassword4" className="form-label">Password</label>
					<input type="password" className="form-control" id="inputPassword4"/>
				</div>
				<div className="col-md-6">
					<label for="inputConfirmPassword4" className="form-label">Confirm Password</label>
					<input type="password" className="form-control" id="confirmPassword4"/>
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
