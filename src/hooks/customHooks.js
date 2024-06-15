import { useState, useEffect } from 'react';
import { getData } from '../utils/get-data';

export default function useCustomHook() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log('Fetching data...');
    try {
      const response = await getData('/data.json', 'json');
      setData(response.data);  // Ensure response.data contains the expected array
    } catch (error) {
      console.error(error);
    }
  };



  return { data };  // Return data as an object
}
