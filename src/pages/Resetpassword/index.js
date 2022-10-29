import { Formik } from "formik";
import { toastSuccess, toastError } from '../../Services/Tostify';
import styles from './style.module.css';
import { Link } from "react-router-dom";
import {resetUserPassword} from '../../APIs';
import { useState } from "react";


const  ResetPassord = () => {
    const[password ,setPassword]=useState()
    const initialValues = {
      email: "",
    
      
    };
    const validator = (values) => {
      const errors = {};
      
      if (!values.email) {
        errors.email = "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      
  
      return errors;
    };
    const onSubmit = async (values, { setSubmitting }) => {
        console.log('hello')
        const response =await resetUserPassword(values)
        console.log(response)
        if (!response.status.errors){
            toastSuccess(response.status.message);
            setPassword(response.data.password);
        }else{
            toastError(response.status.message)
        }
       setSubmitting(false)
        
   
    };
    return (
      <div>
        <Formik
          initialValues={initialValues}
          validate={validator}
          onSubmit={onSubmit}
        >
          {myForm}
          
          
           </Formik>
       {password?(<div className="resetdiv">Your Password is: {password}</div>):null}    
      </div>
    );
  };
  const myForm = (props) => {
    const {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    } = props;
    return (
      <div className={styles['midle']}>
      <div className={styles['register-container']}>
        <form action="" id="form" className={styles['form']} onSubmit={handleSubmit}>
          <h2>Register with Us</h2>
  
          {/* <div className={styles["form-control"]}>
            <label htmlFor="username">Username</label>
            <input
              type="txt"
              name="username"
              placeholder="Enter username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <small>
              {errors.username && touched.username && errors.username}
            </small>
          </div> */}
          <div className={styles["form-control"]}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <small>{errors.email && touched.email && errors.email}</small>
           </div>
          {/*<div className={styles["form-control"]}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <small>
              {errors.password && touched.password && errors.password}
            </small>
          </div>
          <div className={styles["form-control"]}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter password again"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            <small>
              {errors.confirmPassword &&
                touched.confirmPassword &&
                errors.confirmPassword}
            </small>
          </div> */}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <Link to="/login"></Link>
        </form>
      </div>
      </div>
    );
  };
  
  export default ResetPassord;