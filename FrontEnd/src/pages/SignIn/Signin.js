import React, { useContext } from "react";
import styles from "./Signin.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/AuthContext";
import { Link, Navigate } from "react-router-dom";

export default function Signin() {
	const { signin, user } = useContext(AuthContext);
	const validationSchema = yup.object({
		user_mail: yup
			.string()
			.required("Ce champ doit être saisi")
			.email("Email non valide"),
		user_password: yup
			.string()
			.required("Ce champ doit être saisi")
			.min(6, "Le mot de passe doit contenir 6 caractères"),
	});

	const initialValues = {
		user_mail: "",
		user_password: "",
	};

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
		setError,
		clearErrors,
	} = useForm({
		initialValues,
		resolver: yupResolver(validationSchema),
	});

	const submit = handleSubmit(async (values) => {
		console.log(values);
		try {
			clearErrors();
			await signin(values);
		} catch (message) {
			setError("generic", { type: "generic", message });
		}
	});

	return (
		<>
			{user ? (
				<Navigate to="/" />
			) : (
				<div
					className={`flex-fill d-flex align-items-center justify-content-center ${styles.ContainForm}`}
				>
					<form
						onSubmit={submit}
						className={`d-flex flex-column card p20 ${styles.form}`}
					>
						<h2 className="mb10 connexion">Connexion</h2>
						<div className="mb20 d-flex flex-column">
							<label htmlFor="user_mail" className="mb10">
								Email
							</label>
							<input type="email" name="user_mail" {...register("user_mail")} />
							{errors.user_mail && (
								<p className="form-error">{errors.user_mail.message}</p>
							)}
						</div>
						<div className="mb20 d-flex flex-column">
							<label htmlFor="user_password" className="mb10">
								Mot de passe
							</label>
							<input
								type="password"
								name="user_password"
								{...register("user_password")}
							/>
							{errors.user_password && (
								<p className="form-error">{errors.user_password.message}</p>
							)}
						</div>
						{errors.generic && (
							<p className="form-error">{errors.generic.message}</p>
						)}
						<Link>
							<p className={`${styles.forgetPassword}`}>Mot de passe oublié?</p>
						</Link>
						<div className="d-flex justify-content-center">
							<button disabled={isSubmitting} className="btn btn-primary">
								Connexion
							</button>
						</div>
						<Link to="/signup" className={`${styles.signup}`}>
							<span className="test">Inscrivez-vous</span>
						</Link>
					</form>
				</div>
			)}
		</>
	);
}
