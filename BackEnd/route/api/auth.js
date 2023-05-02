const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const connection = require("../../database/index");
const { key, keyPub } = require("../../keys");

router.post("/", async (req, res) => {
	const email = req.body.user_mail;
	const password = req.body.user_password;

	const sqlVerify = `SELECT * FROM user WHERE user_mail = ?`;
	connection.query(sqlVerify, [email], (err, result) => {
		try {
			if (result.length > 0) {
				const user = result[0];
				const userId = user.user_id;
				if (bcrypt.compareSync(password, user.user_password)) {
					const token = jsonwebtoken.sign({}, key, {
						subject: userId.toString(),
						expiresIn: 3600 * 24 * 30 * 6,
						algorithm: "RS256",
					});
					// console.log(res.cookie("token", token));
					res.cookie("token", token);
					res.send(user);
				} else {
					res
						.status(400)
						.send(JSON.stringify("Email et/ou mot de passe incorrect"));
				}
			} else {
				res
					.status(400)
					.send(JSON.stringify("Email et/ou mot de passe incorrect"));
			}
		} catch (error) {
			res
				.status(400)
				.send(JSON.stringify("Email et/ou mot de passe incorrect"));
		}
	});
});

module.exports = router;
