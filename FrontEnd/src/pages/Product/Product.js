import style from './Product.module.scss';

function Product({product}){
    return(
        <div className={`${style.container} d-flex justify-content-center align-items-center`}>
            <img src='https://www.chaussettes.com/14186-large_default/mi-chaussettes-en-coton-motif-tropical-made-in-france.jpg' alt=''/>
            <div className={`${style.information} ml10`}>
                <p>{product.price}€</p>
                <p>{product.model}</p>
                <p>{product.brand}</p>
            </div>
        </div>
    );
};

export default Product;