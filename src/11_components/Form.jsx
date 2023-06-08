import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is Required!"),
    email: yup.string().email().required("Your Email is Required!"),
    age: yup.number().positive().integer().min(12).required(),
    password: yup.string().min(5).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required("Passwords Don't Match!"),
  });

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    // console.log('Hello World');
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
            <input 
                type="text" 
                placeholder='Full Name...' 
                {...register('fullName')} 
            />
            <p style={{color: 'red'}}>{errors.fullName?.message}</p>
        </div>
        <div>
            <input 
                type="email" 
                placeholder='Email...' 
                {...register('email')} 
            />
            <p style={{color: 'red'}}>{errors.email?.message}</p>
        </div>
        <div>
            <input 
                type="number" 
                placeholder='Age...'
                {...register('age')}  
            />
            <p style={{color: 'red'}}>{errors.age?.message}</p>
        </div>
        <div>
            <input 
                type="password" 
                placeholder='Password...' 
                {...register('password')}  
            />
            <p style={{color: 'red'}}>{errors.password?.message}</p>
        </div>
        <div>
            <input 
                type="password" 
                placeholder='Confirm Password'
                {...register('confirmPassword')}  
            />
            <p style={{color: 'red'}}>{errors.confirmPassword?.message}</p>
        </div>
        <input type="submit" />
    </form>
  );
};

export default Form;
