import React from 'react';
import './CardsSection.styles.css';
import HelicopterCard from '../../components/HelicopterCard/HelicopterCard';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';

function CardsSection() {
    return (
        <div className = 'section_cards'>
            <div className = 'cards_container'>
                <h1 className='h1_shop'>TOP</h1>
                <h1 className='h1_shop_bold'>MODELS</h1>
                <div className = 'cards_block'>
                    <HelicopterCard
                        image = {img1}
                        title = "ROBINSON R44 RAVEN II"
                        price = "$500000"
                        description = "This is a popular four-seat, 
                                    single-engine helicopter known 
                                    for its reliability and affordability. 
                                    The R44 is popular among private 
                                    owners and flight training schools due 
                                    to its relatively low operating costs." />
                    <HelicopterCard
                        image = {img2}
                        title = "BELL 505 JET RANGER X"
                        price = "$13000000"
                        description = "The Bell 505 Jet Ranger X is a light 
                                        single-engine helicopter with a seating 
                                        capacity of up to five passengers. It features 
                                        advanced technology, such as the Garmin 
                                        G1000H flight deck." />
                    <HelicopterCard
                        image = {img3}
                        title = "LEONARDO AW109 TREKKER"
                        price = "$70000000"
                        description = "The Leonardo AW109 Trekker is a versatile 
                                        twin-engine helicopter with a seating capacity 
                                        of six to seven passengers. It’s designed for 
                                        various roles, including emergency services, 
                                        search and rescue, and VIP transport." />
                </div>
            </div>
        </div>
    );
}

export default CardsSection;

