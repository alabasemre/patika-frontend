import axios from "axios";

export default async function getData(id) {

  let { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);

  let { data: userPosts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

  user.posts = userPosts;

  return user;
}