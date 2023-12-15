import React,{useEffect, useState} from 'react';
import Header from '../containers/header/Header';
import HelicopterCard from '../components/HelicopterCard/HelicopterCard';
import Footer from '../containers/footer/Footer';
import Filter from '../components/Filter/Filter';
import './ExclusiveModels.styles.css';
import Loader from "../components/Loader/Loader";
import {getAllHelicopters, getFilteredAndSortedHelicopters, searchHelicoptersByTitle} from "../components/api/api";

function ExclusiveModels() {
 const [ExclusiveModelsList, setExclusiveModelsList] = useState([]);

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

    const applyExistingFilters = (models) => {
        let sortedModels = [...models];
      
        // You can add additional filters here if needed
        // ...
    
        return sortedModels;
    };

    // const applyFilter = (selectedOptions) => {
    // let sortedModels = [...ExclusiveModelsList];

    // if (selectedOptions[0] === 'A_to_Z') {
    //     sortedModels.sort((a, b) => a.title.localeCompare(b.title));
    // } else if (selectedOptions[0] === 'Z_to_A') {
    //     sortedModels.sort((a, b) => b.title.localeCompare(a.title));
    // }

    // if (selectedOptions[1] === 'old_to_new') {
    //     sortedModels.sort((a, b) => a.id - b.id);
    // } else if (selectedOptions[1] === 'new_to_old') {
    //     sortedModels.sort((a, b) => b.id - a.id);
    // }

    // if (selectedOptions[2] === 'low_to_high') {
    //     sortedModels.sort((a, b) => parseInt(a.price, 10) - parseInt(b.price, 10));
    // } else if (selectedOptions[2] === 'high_to_low') {
    //     sortedModels.sort((a, b) => parseInt(b.price, 10) - parseInt(a.price, 10));
    // }

    // sortedModels = applyExistingFilters(sortedModels);

    // setFilteredModels(sortedModels);
    // };
    const [search, setSearch] = useState("");
    let [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = async (searchInput) => {
        try {
            const result = await searchHelicoptersByTitle(searchInput);
            console.log(result);
            setSearchResults(result); 
            setExclusiveModelsList(result)
        } catch (error) {
            console.error('Error handling search:', error);
            // Handle the error, e.g., show an error message to the user
        }
        setSearch(searchInput);
        
    };


    // const applyFilter = async (selectedOptions) => {
    //     try {
    //         const response = await getFilteredAndSortedHelicopters(
    //             search,
    //             selectedOptions[0] === 'Z_to_A' ? 2 : 1, // Assuming sorting options are A_to_Z and Z_to_A
    //             999 // Default maximum price
    //         );
    //         setFilteredModels(response.data);
    //         console.log(response.data)
    //         console.log(selectedOptions)
    //         console.log(search)
    //     } catch (error) {
    //         console.error('Error fetching filtered and sorted helicopters:', error);
    //     }
    // };

    // ExclusiveModels.js
const applyFilter = async (selectedOptions) => {
    try {
        const title = selectedOptions[0] === 'A_to_Z' || selectedOptions[0] === 'Z_to_A' ? selectedOptions[0] : '';
        const sortBy = selectedOptions[1] === 'old_to_new' || selectedOptions[1] === 'new_to_old' ? selectedOptions[1] : '';
        const sortOrder = selectedOptions[2] === 'low_to_high' || selectedOptions[2] === 'high_to_low' ? selectedOptions[2] : '';

        const response = await getFilteredAndSortedHelicopters(
            title,
            sortBy,
            sortOrder
        );
        console.log(response)
        setExclusiveModelsList(response.data);
    } catch (error) {
        console.error('Error fetching filtered and sorted helicopters:', error);
    }
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
                    {loading ? <Loader/>: ExclusiveModelsList.map((model) => (
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