import style from "./ProductInformation.module.scss";

function ProductInformation() {
	return (
		<div className={`${style.container} d-flex justify-content-center`}>
			<div className="d-flex flex-column align-items-center m10">
				<img
					className={`${style.imgAvatar} m10`}
					src="https://www.chaussettes.com/14186-large_default/mi-chaussettes-en-coton-motif-tropical-made-in-france.jpg"
					alt=""
				/>
				<div className={`${style.straight} ${style.shorizontal} m10`} />
				<img
					className={`${style.imgAvatar} m10`}
					src="https://www.chaussettes.com/14489-large_default/mi-chaussettes-en-coton-noe-made-in-france.jpg"
					alt=""
				/>
			</div>
			<div className="d-flex justify-content-center align-items-center">
				<div className="m10">
					<img
						className={`${style.imgCentral}`}
						src="https://www.chaussettes.com/13698-thickbox_default/mi-chaussettes-en-coton-motifs-ours-made-in-france.jpg"
						alt=""
					/>
				</div>
				<div className={`${style.straight} ${style.svertical} m30`} />
				<div className="m10">
					<p>Very nice sock</p>
					<p>Color choice:</p>
					<button className={`${style.btnColor} mr5`} />
					<button className={`${style.btnColor} mr5`} />
					<button className={`${style.btnColor} mr5`} />
					<button className={`${style.btnColor} mr5`} />
					<button className={`${style.btnColor} mr5`} />
					<div className="mt10">
						<input className={`${style.inputSize}`} />
					</div>
					<p>Details</p>
					<p>Brand</p>
					<p>Category</p>
					<p>Price</p>
					<button className="btn btn-primary">Add to cart</button>
				</div>
			</div>
		</div>
	);
}

export default ProductInformation;
