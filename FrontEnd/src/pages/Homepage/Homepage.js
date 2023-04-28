import Product from '../Product/Product';
import style from './Homepage.module.scss';

function Homepage(){
    return(
        <>
        <div className="flex-fill d-flex align-items-center justify-content-center">
            <div className={`${style.container}`}>
                <div className={`${style.bar} d-flex`}>
                    <div className={`${style.title} d-flex justify-content-center align-items-center`}>
                        Homme
                    </div>
                    <div className={`${style.items} d-flex justify-content-center align-items-center`}>
                        <div className={`${style.item} d-flex justify-content-center align-items-center`}><Product/></div>
                        <div className={`${style.item} d-flex justify-content-center align-items-center`}><Product/></div>
                        <div className={`${style.item} d-flex justify-content-center align-items-center`}><Product/></div>
                    </div>
                </div>
                <div className={`${style.bar} d-flex`}>
                    <div className={`${style.title} d-flex justify-content-center align-items-center`}>
                        Femme
                    </div>
                    <div className={`${style.items} d-flex justify-content-center align-items-center`}>
                        <div className={`${style.item} d-flex justify-content-center align-items-center`}><Product/></div>
                        <div className={`${style.item} d-flex justify-content-center align-items-center`}><Product/></div>
                        <div className={`${style.item} d-flex justify-content-center align-items-center`}><Product/></div>
                    </div>
                </div>
                <div className={`${style.bar} d-flex`}>
                    <div className={`${style.title} d-flex justify-content-center align-items-center`}>
                        Enfant
                    </div>
                    <div className={`${style.items} d-flex justify-content-center align-items-center`}>
                        <div className={`${style.item} d-flex justify-content-center align-items-center`}><Product/></div>
                        <div className={`${style.item} d-flex justify-content-center align-items-center`}><Product/></div>
                        <div className={`${style.item} d-flex justify-content-center align-items-center`}><Product/></div>
                    </div>
                </div>
            </div>
        </div>

<div className="flex-fill d-flex align-items-center justify-content-center">
<div className={`${style.container}`}>
    <div className={`${style.bar} d-flex`}>
        <div className={`${style.title} d-flex justify-content-center align-items-center`}>
            Homme
        </div>
        <div className={`${style.items} d-flex justify-content-center align-items-center`}>
            <div className={`${style.item} d-flex justify-content-center align-items-center`}><Product/></div>
            <div className={`${style.item} d-flex justify-content-center align-items-center`}><Product/></div>
            <div className={`${style.item} d-flex justify-content-center align-items-center`}><Product/></div>
        </div>
    </div>
    <div className={`${style.bar} d-flex`}>
        <div className={`${style.title} d-flex justify-content-center align-items-center`}>
            Femme
        </div>
        <div className={`${style.items} d-flex justify-content-center align-items-center`}>
            <div className={`${style.item} d-flex justify-content-center align-items-center`}><Product/></div>
            <div className={`${style.item} d-flex justify-content-center align-items-center`}><Product/></div>
            <div className={`${style.item} d-flex justify-content-center align-items-center`}><Product/></div>
        </div>
    </div>
    <div className={`${style.bar} d-flex`}>
        <div className={`${style.title} d-flex justify-content-center align-items-center`}>
            Enfant
        </div>
        <div className={`${style.items} d-flex justify-content-center align-items-center`}>
            <div className={`${style.item} d-flex justify-content-center align-items-center`}><Product/></div>
            <div className={`${style.item} d-flex justify-content-center align-items-center`}><Product/></div>
            <div className={`${style.item} d-flex justify-content-center align-items-center`}><Product/></div>
        </div>
    </div>
</div>
</div>
</>
    );
};

export default Homepage;