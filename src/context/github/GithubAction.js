import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
});

//get search result
export const searchUsers = async (text) => {
  //set loading to true
  //setLoading(); //set loading from component instead

  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`); //axios give response including json data
  return response.data.items;
  //fetch data
  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const { items } = await response.json();

  //   //call dispatch from component
  //   //   dispatch({
  //   //     type: "GET_USERS",
  //   //     payload: items,
  //   //   });

  //   return items;
};

//get user and repos with axios
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};

/*
//get single user
export const getUser = async (login) => {
  //set loading to true
  //setLoading();

  //fetch data
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();
    // dispatch({
    //   type: "GET_USER",
    //   payload: data,
    // });
    return data;
  }
};

//get user repos
export const getUserRepos = async (login) => {
  //set loading to true
  //setLoading();

  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  //fetch data
  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();

  //   dispatch({
  //     type: "GET_REPOS",
  //     payload: data,
  //   });
  return data;
};
*/
