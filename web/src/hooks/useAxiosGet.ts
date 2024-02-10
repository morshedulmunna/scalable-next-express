// useAxiosGet.ts
import axios, { AxiosResponse, AxiosError } from 'axios' // Import axios and its types
import { useState } from 'react'

/**
 * Custom hook to perform GET requests using Axios.
 * @returns An object containing response data, error, loading state, and a function to fetch data.
 */
const useAxiosGet = () => {
   // State hooks for response data, error, loading state
   const [response, setResponse] = useState<any>(null) // Initialize as null instead of empty array
   const [error, setError] = useState<AxiosError | null>(null) // Use AxiosError for error type
   const [isLoading, setIsLoading] = useState<boolean>(false)

   /**
    * Function to fetch data from a given URL.
    * @param requestUrl The URL to fetch data from.
    * @param callBack Optional callback function to execute after successful fetch.
    */
   const getResponseData = (requestUrl: string, callBack?: (data: any) => void) => {
      setIsLoading(true)
      axios
         .get(requestUrl)
         .then((res: AxiosResponse) => {
            setResponse(res?.data) // Set response data
            setIsLoading(false) // Disable loader
            callBack && callBack(res?.data) // Invoke callback if provided
         })
         .catch((err: AxiosError) => {
            setError(err) // Set error state
            setResponse(null) // Reset response data
            setIsLoading(false) // Disable loader
         })
   }

   // Return an immutable object with response data, fetch function, loading state, and error
   return { response, getResponseData, isLoading, error } as const
}

export default useAxiosGet
