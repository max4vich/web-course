import axios from "axios";



export function getFilteredAndSortedHelicopters(title, sortBy, sortOrder, price) {
    return axios.get('http://localhost:8080/helicopters/filteredAndSorted', {
        params: {
            title: title,
            sortBy: sortBy,
            sortOrder: sortOrder,
            price: price
        }
    });
}


export function getAllHelicopters(){
    return axios.get('http://localhost:8080/helicopters').then(response=>{
        return response.data
    })
}


export function getHelicopterbyId(id) {
    return axios.get(`http://localhost:8080/helicopters/${id}`).then(response => {
        return response.data;
    });
}

export const searchHelicoptersByTitle = async (title) => {
    try {
        const response = await axios.get('http://localhost:8080/helicopters/search', {
            params: {
                title: title
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error searching helicopters by title:', error);
        throw error;
    }
};

