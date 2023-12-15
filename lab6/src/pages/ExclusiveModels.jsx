import React from 'react';
import Header from '../containers/header/Header';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import HelicopterCard from '../components/HelicopterCard/HelicopterCard';
import Footer from '../containers/footer/Footer';
import Filter from '../components/Filter/Filter';
import './ExclusiveModels.styles.css'

const ExclusiveModels = () => {
    const exclusiveModelsLits = [
        {id:1, image: img1, title:"ROBINSON R44 RAVEN II", price:"500000", description: "This is a popular four-seat, single-engine helicopter known for its reliability and affordability. The R44 is popular among private owners and flight training schools due to its relatively low operating costs."},
        {id:2, image: img2, title:"BELL 505 JET RANGER X", price:"13000000",
        description: "The Bell 505 Jet Ranger X is a light single-engine helicopter with a seating capacity of up to five passengers. It features advanced technology, such as the Garmin G1000H flight deck."},
        {id:3, image: img3, title:"LEONARDO AW109 TREKKER", price:"70000000",
        description: "The Leonardo AW109 Trekker is a versatile twin-engine helicopter with a seating capacity of six to seven passengers. It’s designed for various roles, including emergency services, search and rescue, and VIP transport."},
        {id:4, image: img1, title:"ROBINSON R44 RAVEN II", price:"50000", 
        description: "This is a popular four-seat, single-engine helicopter known for its reliability and affordability. The R44 is popular among private owners and flight training schools due to its relatively low operating costs."},
        {id:5, image: img2, title:"BELL 505 JET RANGER X", price:"1300000",
        description: "The Bell 505 Jet Ranger X is a light single-engine helicopter with a seating capacity of up to five passengers. It features advanced technology, such as the Garmin G1000H flight deck."},
        {id:6, image: img3, title:"LEONARDO AW109 TREKKER", price:"7000000",
        description: "The Leonardo AW109 Trekker is a versatile twin-engine helicopter with a seating capacity of six to seven passengers. It’s designed for various roles, including emergency services, search and rescue, and VIP transport."},
        {id:7, image: img1, title:"ROBINSON R44 RAVEN II", price:"5000", 
        description: "This is a popular four-seat, single-engine helicopter known for its reliability and affordability. The R44 is popular among private owners and flight training schools due to its relatively low operating costs."},
        {id:8, image: img2, title:"BELL 505 JET RANGER X", price:"130000",
        description: "The Bell 505 Jet Ranger X is a light single-engine helicopter with a seating capacity of up to five passengers. It features advanced technology, such as the Garmin G1000H flight deck."},
        {id:9, image: img3, title:"LEONARDO AW109 TREKKER", price:"700000",
        description: "The Leonardo AW109 Trekker is a versatile twin-engine helicopter with a seating capacity of six to seven passengers. It’s designed for various roles, including emergency services, search and rescue, and VIP transport."}

    ];
    return (
            <div>
                <Header />
                <Filter />
                <div className="exclusive_models_list">
                    {exclusiveModelsLits.map((models) => (
                        <HelicopterCard key={models.id} image={models.image} title={models.title} price={models.price} description={models.description} />
                    ))}
                </div>
                <Footer />
            </div>
        )
}

export default ExclusiveModels