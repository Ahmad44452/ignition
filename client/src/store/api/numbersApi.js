import axios from "axios";

import { setNumbers } from "../slices/numbersSlice";
import showToast from "../../utils/showToast";

axios.defaults.headers.post['Content-Type'] = "application/json";

export const getNumbersApi = () => {
  return async (dispatch) => {
    try {

      const res = await axios.get('/api/user/generateNumbers');
      dispatch(setNumbers(res.data));
      return 'passed'
    } catch (error) {
      let errorMessage = error.response.data.message;
      if (errorMessage === "Error") {
        errorMessage = error.response.data.error.message;
      }
      showToast('error', errorMessage);
    }
  }
}