// InputBox.tsx
import { cn } from '@/lib/utils'
import React from 'react'

interface InputBoxProps {
   formik?: any
   placeholder?: string
   name: string
   label?: string
   type?: string
   className?: string
   labelClassName?: string
   inputClassName?: string
}

const InputBox: React.FC<InputBoxProps> = ({
   formik,
   placeholder,
   name,
   label,
   type = 'text',
   className,
   labelClassName,
   inputClassName,
}) => {
   if (formik) {
      const inputName = name
      const touched = formik.touched[inputName]
      const errors = formik.errors[inputName]

      return (
         <div className={cn('flex w-full flex-col flex-wrap md:flex-nowrap', className)}>
            <label htmlFor={inputName} className={cn('mb-1 mt-2 font-medium', labelClassName)}>
               {label}
            </label>
            <input
               className={cn(
                  'border py-2 px-2 rounded-md shadow-sm outline-gray-200',
                  touched && errors && 'border-red-500 placeholder:text-red-500 bg-red-200/10',
                  inputClassName,
               )}
               placeholder={placeholder}
               id={inputName}
               name={inputName}
               type={type}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values[inputName]}
            />
            {touched && errors ? (
               <div className="flex items-center justify-start mt-1 gap-1 ">
                  <p className="text-red-500 text-sm">{errors}</p>
               </div>
            ) : null}
         </div>
      )
   }

   return null
}

export default InputBox
