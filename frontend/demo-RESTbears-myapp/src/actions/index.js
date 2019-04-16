import axios from 'axios';

export const ADD_BEAR = 'add_bear';
export const FETCH_BEARS = 'fetch_bears';
export const GET_BEAR = 'get_bear';
export const DELETE_BEAR = 'delete_bear';
export const UPDATE_BEAR = 'update_bear';

const ROOT_URL = 'http://localhost:8000/api/bears';

export function fetchBears() {
    const request = axios.get(ROOT_URL);
    return {
        type: FETCH_BEARS,
        payload: request
    };
}

export function addBear(name, weight, callback) {
    const request = axios.post(ROOT_URL, {
        name: name,
        weight: weight
    }).then((res) => callback(res));
    return {type: ADD_BEAR, payload: request};
}

export function deleteBear(id, callback) {
    const request = axios.delete(`${ROOT_URL}/${id}`)
        .then((res) => callback(res));
    return {
        type: DELETE_BEAR,
        payload: request
    }
}

export function getBear(id, callback) {
    const request = axios.get(`${ROOT_URL}/${id}`)
    return {
        type: GET_BEAR,
        payload: request
    };
}

export function updateBear(id, name, weight,callback) {
    const request = axios.put(`${ROOT_URL}/${id}`, {
        name: name,
        weight: weight
    })
        .then((res) => callback(res))
    return {
        type: UPDATE_BEAR,
        payload: request
    };
}
