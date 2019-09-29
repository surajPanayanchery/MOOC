import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const promise = axios.get(baseUrl);
    return promise.then((response) => response.data);
}

const create = newObject => {
    return axios.post(baseUrl, newObject);
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const deletePerson = (id) => {
    const promise = axios.delete(`${baseUrl}/${id}`)
    return promise;
}

export default { getAll, create, update,deletePerson }