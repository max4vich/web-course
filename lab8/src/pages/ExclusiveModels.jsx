import React from 'react';
import Header from '../containers/header/Header';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import HelicopterCard from '../components/HelicopterCard/HelicopterCard';
import Footer from '../containers/footer/Footer';
import Filter from '../components/Filter/Filter';
import './ExclusiveModels.styles.css'

export const ExclusiveModelsList = [
    {
        id:1, 
        image: img1, 
        title:"ROBINSON R44 RAVEN II", 
        price:"500000", 
        description: "This is a popular four-seat, single-engine helicopter known for its reliability and affordability. The R44 is popular among private owners and flight training schools due to its relatively low operating costs."
    },
    {
        id:2, 
        image: img2, 
        title:"BELL JET RANGER X", 
        price:"13000000",
        description: "The Bell 505 Jet Ranger X is a light single-engine helicopter with a seating capacity of up to five passengers. It features advanced technology, such as the Garmin G1000H flight deck."
    },
    {
        id:3, 
        image: img3, 
        title:"LEONARDO AW109", 
        price:"70000000",
        description: "The Leonardo AW109 Trekker is a versatile twin-engine helicopter with a seating capacity of six to seven passengers. It’s designed for various roles, including emergency services, search and rescue, and VIP transport."
    },
    {
        id:4, 
        image: img1, 
        title:"ROBINSON R RAVEN II", 
        price:"50000", 
        description: "This is a popular four-seat, single-engine helicopter known for its reliability and affordability. The R44 is popular among private owners and flight training schools due to its relatively low operating costs."
    },
    {
        id:5, 
        image: img2, 
        title:"BELL 505 JET X", 
        price:"1300000",
        description: "The Bell 505 Jet Ranger X is a light single-engine helicopter with a seating capacity of up to five passengers. It features advanced technology, such as the Garmin G1000H flight deck."
    },
    {
        id:6, 
        image: img3, 
        title:"LEONARDO AW109 TREKKER", 
        price:"7000000",
        description: "The Leonardo AW109 Trekker is a versatile twin-engine helicopter with a seating capacity of six to seven passengers. It’s designed for various roles, including emergency services, search and rescue, and VIP transport."
    },
    {
        id:7, 
        image: img1, 
        title:"ROBINSON II", 
        price:"5000", 
        description: "This is a popular four-seat, single-engine helicopter known for its reliability and affordability. The R44 is popular among private owners and flight training schools due to its relatively low operating costs."
    },
    {
        id:8, 
        image: img2, 
        title:"BELL 505 JET RANGER X", 
        price:"130000",
        description: "The Bell 505 Jet Ranger X is a light single-engine helicopter with a seating capacity of up to five passengers. It features advanced technology, such as the Garmin G1000H flight deck."
    },
    {
        id:9, 
        image: img3, 
        title:"LEONARDO AW109 TREKKER", 
        price:"700000",
        description: "The Leonardo AW109 Trekker is a versatile twin-engine helicopter with a seating capacity of six to seven passengers. It’s designed for various roles, including emergency services, search and rescue, and VIP transport."
    }

];

function ExclusiveModels() {
    
    const [filteredModels, setFilteredModels] = React.useState(ExclusiveModelsList);
    const applyExistingFilters = (models) => {
        let sortedModels = [...models];
      
        // You can add additional filters here if needed
        // ...
    
        return sortedModels;
    };

    const applyFilter = (selectedOptions) => {
    let sortedModels = [...ExclusiveModelsList];

    if (selectedOptions[0] === 'A_to_Z') {
        sortedModels.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedOptions[0] === 'Z_to_A') {
        sortedModels.sort((a, b) => b.title.localeCompare(a.title));
    }

    if (selectedOptions[1] === 'old_to_new') {
        sortedModels.sort((a, b) => a.id - b.id);
    } else if (selectedOptions[1] === 'new_to_old') {
        sortedModels.sort((a, b) => b.id - a.id);
    }

    if (selectedOptions[2] === 'low_to_high') {
        sortedModels.sort((a, b) => parseInt(a.price, 10) - parseInt(b.price, 10));
    } else if (selectedOptions[2] === 'high_to_low') {
        sortedModels.sort((a, b) => parseInt(b.price, 10) - parseInt(a.price, 10));
    }

    sortedModels = applyExistingFilters(sortedModels);

    setFilteredModels(sortedModels);
    };

    const handleSearchChange = (searchInput) => {
        const filtered = ExclusiveModelsList.filter((model) =>
          model.title.toLowerCase().includes(searchInput.toLowerCase())
        );
      
        const combinedFilters = applyExistingFilters(filtered);
        setFilteredModels(combinedFilters);
      };

    return (
            <div>
                <Header />
                <Filter
                options={[
                    [
                        {label: 'Name', value: 'Name'},
                        {label: 'From A to Z', value: 'A_to_Z'},
                        {label: 'From Z to A', value: 'Z_to_A'}
                    ],
                    [
                        {label: 'Date of adding', value: 'date'},
                        {label: 'From oldest to newest', value: 'old_to_new'},
                        {label: 'From newest to oldest', value: 'new_to_old'}
                    ],
                    [
                        { label: 'Price', value: 'Price' },
                        { label: 'From low to high', value: 'low_to_high' },
                        { label: 'From high to low', value: 'high_to_low' },
                    ],
                ]} 
                onApplyFilter={applyFilter}
                onSearchChange={handleSearchChange}
                />
                <div className="exclusive_models_list">
                    {filteredModels.map((model) => (
                    <HelicopterCard
                        key={model.id}
                        id={model.id}
                        image={model.image}
                        title={model.title}
                        price={model.price}
                        description={model.description}
                    />
                    ))}
                </div>
                <Footer />
            </div>
        )
}

export default ExclusiveModels;