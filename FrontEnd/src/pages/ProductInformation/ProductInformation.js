import { useContext, useState } from "react";
import style from "./ProductInformation.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import { createComment } from "../../apis/score";

function ProductInformation() {

  const [currentDate, setCurrentDate] = useState(null);
  console.log(currentDate);
  const { user } = useContext(AuthContext);
  let userId = user?.user_id || null;
  let { id } = useParams();

  const [rating, setRating] = useState(0);
  const handleStarClick = (index) => {
    setRating(index);
  };

  const yupSchema = yup.object({
    comment:yup.string().notRequired(false),
  });

  const defaultValues = {
    comment:"",
  };

  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: {errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(yupSchema),
  });

  const submit = handleSubmit(async (values) => {
    try {
      clearErrors();
      await createComment(rating, userId, id, currentDate, values);
      reset(defaultValues);
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });

  const currentDateOnClick = () => {
      const currentDate = new Date(); // Get the current date
      setCurrentDate(currentDate); // Set the currentDate state
    };
  

  return (
    <div className="d-flex flex-column">
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
      {user !== null && (
        <form onSubmit={submit}>
          <div className="">
            <h3>Notez le produit ici :</h3>
            <div className="d-flex justify-content-center align-items-center">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <div
                    key={index}
                    className={
                      index <= rating ? "la la-star la-2x" : "lar la-star la-2x"
                    }
                    onClick={() => handleStarClick(index)}
                  ></div>
                );
              })}
              <input
                type="text"
                placeholder="Votre commentaire"
                {...register("comment")}
              />
              {errors?.comment && <p>{errors.comment.message}</p>}
              <button
                disabled={isSubmitting}
                onClick={currentDateOnClick}
                className=" mt10 btn btn-primary"
              >
                Valider
              </button>
            </div>
            {rating ? <p>Votre note : {rating} étoiles</p> : ""}
          </div>
        </form>
      )}
    </div>
  );
}

export default ProductInformation;
