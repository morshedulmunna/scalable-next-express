import axios, { AxiosResponse, AxiosError } from 'axios'
import toast from 'react-hot-toast'
import { useState } from 'react'

interface PostDataOptions {
   requestUrl: string
   payload: any
   callBack?: (data: any) => void
   isToast?: boolean
   successMessage?: string
   errorMessage?: string
}

/**
 * Custom hook to perform POST requests using Axios.
 * @returns An object containing response data, a function to post data, loading state, and error.
 */
const useAxiosPost = () => {
   const [response, setResponse] = useState<any | null>(null)
   const [error, setError] = useState<AxiosError | null>(null)
   const [isLoading, setIsLoading] = useState<boolean>(false)

   /**
    * Function to post data to a given URL.
    * @param options An object containing options for the post request.
    * @returns An object containing response data and an error flag.
    */
   const postFn = async ({
      requestUrl,
      payload,
      callBack,
      isToast = true,
      successMessage = 'Submitted Successfully',
      errorMessage = 'Failed, try again',
   }: PostDataOptions): Promise<{ responseData: any | null; error: AxiosError | null }> => {
      setIsLoading(true)
      try {
         const res: AxiosResponse = await axios.post(requestUrl, payload)
         setResponse(res.data)
         callBack && callBack(res.data)
         setIsLoading(false)
         if (isToast) {
            toast.success(res?.data?.message || successMessage)
         }
         return { responseData: res.data, error: null }
      } catch (err: any) {
         setError(err)
         setResponse(null)
         setIsLoading(false)
         if (isToast) {
            toast.error(err?.response?.data?.message || errorMessage)
         }

         return { responseData: null, error: err }
      }
   }

   return { response, postFn, isLoading, setResponse, error }
}

export default useAxiosPost
