import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  //children is what ever we surround with provider
  const initialState = {
    users: [],
    user: {}, //empty object
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  /*
  //get initial users(testing purpose)
  const fetchUsers = async () => {
    //set loading to true
    setLoading();

    //fetch data
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };*/

  return (
    <GithubContext.Provider
      value={{
        ...state,
        //users: state.users,
        //loading: state.loading,
        //user: state.user,
        //repos: state.repos,

        dispatch,
        //function
        //searchUsers,
        //clearUsers,
        //getUser,
        //getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
