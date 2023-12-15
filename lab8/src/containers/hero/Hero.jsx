import './hero.styles.css';
import background_image from '../../assets/hero.png';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero_image'>
                <img src={background_image} alt="background">
                </img>
                <div className='hero_footer'>
                <div className='left_part'>
                    <h1 className='h1_image'>RAIDER X®:</h1>
                    <h2 className='h2_image'>The Future of Vertical Lift</h2>
                </div>
                <div className='right_part'>
                    <a href ='' className='read_more'>READ MORE</a>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Hero