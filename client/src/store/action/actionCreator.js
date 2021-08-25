import { SHOW_REPOSITORIES, SHOW_LOADING, SHOW_ERROR } from "./actionType";
import axios from "axios";

export function setRepositories(payload) {
  return {
    type: SHOW_REPOSITORIES,
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: SHOW_LOADING,
    payload,
  };
}

export function setError(payload) {
  return {
    type: SHOW_ERROR,
    payload,
  };
}

export function searchRepositories(username) {
  return async (dispatch) => {
    try {
      //   console.log(username, "<<<action cretaor");
      let { data } = await axios({
        method: "GET",
        url: `https://api.github.com/users/${username.username}/repos`,
      });
      //   console.log(data, "<<<fetch repo");
      dispatch(setRepositories(data));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
}
