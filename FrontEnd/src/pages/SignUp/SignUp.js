import React from "react";
import styles from "./SignUp.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../apis/users";

export default function SignUp() {
	const navigate = useNavigate();

	const validationSchema = yup.object({
		user_name: yup
			.string()
			.required("Ce champ doit être saisi")
			.min(2, "Au moins deux lettres"),
		user_firstname: yup
			.string()
			.required("Ce champ doit être saisi")
			.min(2, "Au moins deux lettres"),
		user_mail: yup
			.string()
			.required("Ce champ doit être saisi")
			.email("Email non valide"),
		user_password: yup
			.string()
			.required("Ce champ doit être saisi")
			.min(6, "Le mot de passe doit contenir 6 caractères"),
		confirm_password: yup
			.string()
			.required("Ce champ doit être saisi")
			.oneOf(
				[yup.ref("user_password")],
				"les mots de passe ne sont pas identiques"
			),
	});

	const initialValues = {
		user_name: "",
		user_firstname: "",
		user_mail: "",
		user_password: "",
		confirm_password: "",
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
			await createUser(values);
			navigate("/signin");
		} catch (message) {
			setError("generic", { type: "generic", message });
		}
	});

	return (
		<div
			className={`flex-fill d-flex align-items-center justify-content-center ${styles.ContainForm}`}
		>
			<form
				onSubmit={submit}
				className={`d-flex flex-column card p20 ${styles.form}`}
			>
				<h2 className="mb10">Inscription</h2>
				<div className="mb10 d-flex flex-column">
					<label htmlFor="user_name">Nom</label>
					<input type="text" name="user_name" {...register("user_name")} />
					{errors.user_name && (
						<p className="form-error">{errors.user_name.message}</p>
					)}
				</div>
				<div className="mb10 d-flex flex-column">
					<label htmlFor="user_firstname">Prénom</label>
					<input
						type="text"
						name="user_firstname"
						{...register("user_firstname")}
					/>
					{errors.user_firstname && (
						<p className="form-error">{errors.user_firstname.message}</p>
					)}
				</div>
				<div className="mb10 d-flex flex-column">
					<label htmlFor="user_mail">Email</label>
					<input type="email" name="user_mail" {...register("user_mail")} />
					{errors.user_mail && (
						<p className="form-error">{errors.user_mail.message}</p>
					)}
				</div>
				<div className="mb10 d-flex flex-column">
					<label htmlFor="user_password">Mot de passe</label>
					<input
						type="password"
						name="user_password"
						{...register("user_password")}
					/>
					{errors.user_password && (
						<p className="form-error">{errors.user_password.message}</p>
					)}
				</div>
				<div className="mb10 d-flex flex-column">
					<label htmlFor="confirm_password">Confirmation du mot de passe</label>
					<input
						type="password"
						name="confirm_password"
						{...register("confirm_password")}
					/>
					{errors.confirm_password && (
						<p className="form-error">{errors.confirm_password.message}</p>
					)}
				</div>
				{errors.generic && (
					<p className="form-error">{errors.generic.message}</p>
				)}
				<div>
					<button disabled={isSubmitting} className="btn btn-primary">
						Inscription
					</button>
				</div>
			</form>
		</div>
	);
}
