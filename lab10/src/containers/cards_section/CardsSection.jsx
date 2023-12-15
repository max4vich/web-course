import React, { useState, useEffect } from 'react';
import './CardsSection.styles.css';
import HelicopterCardWithoutButton from '../../components/HelicopterCardWithoutButton/HelicopterCard';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import Loader from "../../components/Loader/Loader";
import {getAllHelicopters} from "../../components/api/api";

const initialDisplayCount = 3;
const additionalDisplayCount = 3;

function CardsSection() {
    const [displayCount, setDisplayCount] = useState(initialDisplayCount);

    const [helicopters, setExclusiveModelsList] = useState([]);

    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const allShoes = await getAllHelicopters();
            setExclusiveModelsList(allShoes);
            setLoading(false);
        }
  
        fetchData();
    }, []);
  

    const handleViewButtonClick = () => {
        if (displayCount === initialDisplayCount) {
            setDisplayCount(displayCount + additionalDisplayCount);
        } else {
            setDisplayCount(displayCount - additionalDisplayCount);
        }
    };

    return (
        <div className='section_cards'>
            <div className='cards_container'>
                <h1 className='h1_shop'>TOP</h1>
                <h1 className='h1_shop_bold'>MODELS</h1>
                <div className='cards_block'>
                {loading ? <Loader/>:helicopters.slice(0, displayCount).map((helicopter, index) => (
                        <HelicopterCardWithoutButton
                            key={index}
                            image={helicopter.image}
                            title={helicopter.title}
                            price={helicopter.price}
                            description={helicopter.description}
                        />
                    ))}
                </div>
                <a className='view-all-button' onClick={handleViewButtonClick}>
                    {displayCount === initialDisplayCount ? 'VIEW ALL' : 'VIEW LESS'}
                </a>
            </div>
        </div>
    );
}

export default CardsSection;
