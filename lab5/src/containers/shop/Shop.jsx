import './shop.styles.css';
import exclusive_models from '../../assets/exclusive_models.png'
import collectible_models from '../../assets/collectible_models.png'
import combat_models from '../../assets/combat_models.png'
import used_models from '../../assets/used_models.png'


const Shop = () => {
    return(
        <div className='shop_main'>
            <div className='shop'>
                <h1 className='h1_shop'>OUR</h1>
                <h1 className='h1_shop_bold'>SHOP</h1>
                <div className='first_section'>
                    <div className='exclusive_models'>
                        <img className='exclusive_models' src={exclusive_models}>
                        </img>
                        <h1 className='h1_exclusive'>EXCLUSIVE <b>MODELS</b></h1>
                    </div>
                    <div className='second_section'>
                        <div className='third_section'>
                            <div className='collectible_models'>
                                <img className='collectible_models' src={collectible_models}></img>
                                <h1 className='h1_collectible'>COLLECTIBLE <b>MODELS</b></h1>
                            </div>
                            <div className='combat_models'>
                                <img className='combat_models' src={combat_models}></img>
                                <h1 className='h1_combat'>COMBAT <b>MODELS</b></h1>
                            </div>
                        </div>  
                        <div className='used_models'>
                            <img className='used_models' src={used_models}></img>
                            <h1 className='h1_used'>USED <b>MODELS</b></h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Shop