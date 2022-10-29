import React from 'react';
 import { Formik } from 'formik';
 import { Link } from "react-router-dom";
 import './style.css'
 import { loginUser } from '../../APIs';
 import { USER_DATA , setStorageData } from '../../Services/Storage';
 import { toastSuccess, toastError } from '../../Services/Tostify';
 import { useNavigate } from 'react-router-dom';

 const LogIn=()=>{
       const navigate=useNavigate();
       const gotoHome=()=>{
        navigate ({pathname:"/"});
  
       }
    return (
        <div className='login'>
           
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={ async (values, { setSubmitting }) => {
           const response = await loginUser(values);
           console.log(response)
           if(!response.status.errors){
            toastSuccess(response.status.message);
            setStorageData(USER_DATA, response.data);
            gotoHome();
           }else{
            toastError(response.status.message);
           }
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit} className='login-form'>
         <h1> Log in </h1>
         <div >
            <label> E-mail:</label>
            
            <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           </div>
           {errors.email && touched.email && errors.email}
           <div>
           <lable>Password :</lable>
           
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           </div>
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Log in
           </button>
         </form>
       )}
     </Formik>
    
     <Link to='signup'>Signup</Link>
    </div>
    )
 }

 export default LogIn;