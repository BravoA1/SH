import style from './Product.module.scss';

function Product(){
    return(
        <div className={`${style.container} d-flex justify-content-center align-items-center`}>
            <img src='https://www.chaussettes.com/14186-large_default/mi-chaussettes-en-coton-motif-tropical-made-in-france.jpg' alt=''/>
            <div className='ml10'>
                <p>20€</p>
                <p>mi chaussettes</p>
                <p>KINDY</p>
            </div>
        </div>
    );
};

export default Product;