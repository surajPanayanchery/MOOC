import axios from 'axios'
const baseUrl = 'https://fierce-stream-06910.herokuapp.com/api'

const getAll = () => {
    const promise = axios.get(baseUrl+'/persons');
    return promise.then((response) => response.data);
}

const create = newObject => {
    return axios.post(baseUrl+'/person', newObject);
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/person/${id}`, newObject)
}

const deletePerson = (id) => {
    const promise = axios.delete(`${baseUrl}/person/${id}`)
    return promise;
}

export default { getAll, create, update,deletePerson }