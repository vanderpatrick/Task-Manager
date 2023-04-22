import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [taskData, setTaskData] = useState(null)
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response.data);
        setIsPending(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setIsPending(false);
      }
    };
    fetchData();
  }, []);
  const deleteData = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      setData((prevData) => prevData.filter((item) => item.id !== id));
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };
  
  const createTask = async (taskData) => {
    setIsPending(true);
    try {
      const res = await axios.post(url, taskData);
      setTaskData((prevTaskData) => [...prevTaskData, res.data]);
      console.log(res)
      setIsPending(false);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };
  
  return { data, isPending, error, deleteData, createTask };
};

export default useFetch;
