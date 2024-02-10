import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import Cookies from 'js-cookie'

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}

export const saveInLocalStorage = (key: string, value: string) => {
   localStorage.setItem(key, value)
}

export const getFromLocalStorage = (key: string) => {
   return localStorage.getItem(key)
}

export const removeFromLocalStorage = (key: string) => {
   localStorage.removeItem(key)
}

/**
 *
 * @param key string to set or remove from cookies
 * @param value  type string this is value to store or set in cookies
 */
export const saveInCookies = (key: string, value: string) => {
   Cookies.set(key, value)
}
export const getFromCookies = (key: string) => {
   Cookies.get(key)
}
export const removeFromCookies = (key: string) => {
   Cookies.remove(key)
}
