import { createContext, useState } from "react";

export const PostContext = createContext();
const { Provider } = PostContext;

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  return <Provider value={{ posts, setPosts }}>{children}</Provider>;
};
