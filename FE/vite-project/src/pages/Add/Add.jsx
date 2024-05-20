import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

function Add() {
  async function addProducts(val) {
    const res = await fetch("http://localhost:7000/f", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(val),
    });
    const data = await res.json();
    return data;
  }

  return (
    <>
     <Formik
       initialValues={{ name: '', price: '', image: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         price: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         image: Yup.string().required('Required'),
       })}
       onSubmit={(values) => {
         setTimeout(() => {
          addProducts(values)
         }, 400);
       }}
     >
       {formik => (
         <form onSubmit={formik.handleSubmit}>
           <label htmlFor="name"> Name</label>
           <input
             id="name"
             type="text"
             {...formik.getFieldProps('name')}
           />
           {formik.touched.name && formik.errors.name ? (
             <div>{formik.errors.name}</div>
           ) : null}
 
           <label htmlFor="price"> price</label>
           <input
             id="price"
             type="text"
             {...formik.getFieldProps('price')}
           />
           {formik.touched.price && formik.errors.price ? (
             <div>{formik.errors.price}</div>
           ) : null}
 
           <label htmlFor="image">image </label>
           <input id="image" type="text" {...formik.getFieldProps('image')} />
           {formik.touched.image && formik.errors.image ? (
             <div>{formik.errors.image}</div>
           ) : null}
 
           <button type="submit">Submit</button>
         </form>
       )}
     </Formik>
    </>
  );
}

export default Add;
