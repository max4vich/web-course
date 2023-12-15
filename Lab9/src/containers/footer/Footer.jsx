import instagram from '../../assets/instagram.png'; 
import twitter from '../../assets/twitter.png'; 
import facebook from '../../assets/facebook.png'; 
import '../footer/footer.styles.css'

const Footer = () => { 
    return ( 
        <div className="footer"> 
            <h4>HeliBuy corp. 2023</h4> 
            <div className='icons'> 
                <div className="icon"> <img src={instagram} alt="Instagram Icon" /> </div> 
                <div className="icon"> <img src={twitter} alt="Twitter Icon" /> </div> 
                <div className="icon"> <img src={facebook} alt="Facebook Icon" /> </div> 
            </div> 
            <h4>www.helibuy.org</h4> 
 
        </div> 
    ) 
} 

export default Footer