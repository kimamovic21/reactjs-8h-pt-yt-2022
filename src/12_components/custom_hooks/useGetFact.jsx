import React from 'react';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';

const useGetFact = () => {
    const { 
        data, 
        refetch, 
        isLoading: isFactLoading,
        error,
    } = useQuery(["fact"], async () => {
        return await axios.get(`https://uselessfacts.jsph.pl/api/v2/facts/random`)
                     .then((res) => res.data);
      });

      const refetchData = () => {
        alert('Data refetched');
        refetch();
      };

      return {data, refetchData, isFactLoading};
};

export default useGetFact;
