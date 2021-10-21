import React from 'react';
import { ErrorMessage, useField } from 'formik';


export const TextField = ({ formik, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <input
        {...field} {...props} className={` form-control shadow-none ${meta.touched && meta.error && 'is-invalid mr-20'}`}
      />
      <ErrorMessage name={field.name} />
    </div>
  )
}