import axios from 'axios'

export const add = () => {
    return { type: 'ADD' }
}

export const add2 = (num) => {
    return { type: 'ADD2', num: num }
}

export const minus = () => {
    return { type: 'MINUS' }
}



//Get
export const getBearsSuccess = bears => ({
    type: 'GET_BEARS_SUCCESS',
    bears
});
export const getBearsFailed = () => ({ type: 'GET_BEARS_FAILED' });

export const getBears = () => async (dispatch) => {
    try {
        console.log('Get Bear New')
        const response = await axios.get(`http://localhost:8001/api/bears`)
        const responseBody = await response.data;
        console.log('response: ', responseBody)
        dispatch(getBearsSuccess(responseBody));
    } catch (error) {
        console.error(error);
        dispatch(getBearsFailed());
    }
}

//ADD
export const addbear = (bearname, weight) => async (dispatch) => {
    try {
        console.log('Add Bear New')
        if (bearname !== undefined && weight !== undefined) {
            await axios.post(`http://localhost/api/bears`, { name: bearname, weight: weight })
            const response = await axios.get(`http://localhost:8001/api/bears`)
            const responseBody = await response.data;
            console.log('response: ', responseBody)
            dispatch(getBearsSuccess(responseBody))
        }
    } catch (error) {
        console.error(error);
        dispatch(getBearsFailed());
    }
}

//Update
export const updateBear = (id, bearname, weight) => async (dispatch) => {
    try {
      console.log('Update Bear')
      console.log("ID:",id)
      
      if (id!== undefined && bearname !== undefined && weight !== undefined) {
        await axios.put(`http://localhost:8001/api/bears/${id}`, { name: bearname, weight: weight })
        const response = await axios.get(`http://localhost:8001/api/bears/`)
        const responseBody = await response.data;
        console.log('response: ', responseBody)
        dispatch(getBearsSuccess(responseBody))
      }
    } catch (error) {
      console.error(error)
      dispatch(getBearsFailed())
    }
  }
  
  //Delete
  export const deleteBear = (id) => async (dispatch) => {
    try {
      console.log('Delete Bear')
      if(id !== undefined){
        await axios.delete(`http://localhost:8001/api/bears/${id}`)
        const response = await axios.get(`http://localhost:8001/api/bears/`)
        const responseBody = await response.data;
        console.log('response: ', responseBody)
        dispatch(getBearsSuccess(responseBody))
      }
    }catch (error) {
      console.error(error)
      dispatch(getBearsFailed())
    }
  }
