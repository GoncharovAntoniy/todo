import { useEffect, useState } from "react";
import axios from 'axios'

const Example = () => {
  const [data, setData] = useState([]);
  console.log(data)

  useEffect(() => {
    axios
      .get("https://jso nplaceholder.typicode.com/posts?_start=1&_limit=10")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err.message))
  }, []);

  return <div></div>;
};

export default Example;
