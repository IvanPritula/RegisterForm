import React from 'react';
import "./register.css"
import { object, string, ref, boolean } from 'yup';

const loginSchema = object({
    firstName:string().required(),
    lastName:string().required(), 
    displayName:string().required(),
    email: string().required().email(),
    password: string().required(),
    confirmPassword: string().required().oneOf([ref('password')]),
     role: string().oneOf(['admin', 'user']).required(),  
});


 class Register extends React.Component {
     constructor(props){
         super(props);
         this.state={
            firstName:'',
            lastName:'', 
            displayName:'',
            email:'',
            password:'',
            passwordConfirmation:'',
            role: '',
            errors: {},
         }
     }

     onSubmit = async (e) => {
        e.preventDefault();
    
        // validate
        try {
          await loginSchema.validate(this.state);
        } catch (error) {
          console.log(error.message);
    
          this.setState((state) => {
            return {
              ...state,
              errors: { [error.path]: true },
            }
          })
    
          return;
        }
    
        // do smth
        console.log(this.state);
    
        this.setState(() => {
            return{
                firstName:'',
                lastName:'', 
                displayName:'',
                email:'',
                password:'',
                passwordConfirmation:'',
        }
        });
    }

     onChange = (event) => {
        const value = event.target.value;
        const key = event.target.name;

        this.setState((state) => {
            return{
            ...state,
            [key]:value
        }
        });
    }

    componentDidUpdate(){
        console.log(this.state);
    }

  render() {
    console.log(this.state);
    return (
     <form className="registerForm" onSubmit={this.onSubmit}>

         <h1>CREATE AN ACCOUNT</h1>
         <div className='we'>We alwayss keep your name and email address private.</div>
         <div className='vvod'>
             <input  className='dani' type="text"
              name="firstName" id="" placeholder='First name' required
              onChange={this.onChange} value={this.state.firstName}/>

             <input className='dani' type="text"
              name="lastName" id="" placeholder='Last name' required
              onChange={this.onChange} value={this.state.lastName}/>

             <input className='dani' type="text"
              name="displayName" id="" placeholder='Display name' required
              onChange={this.onChange} value={this.state.displayName}/>

             <input className={"dani" + (this.state.errors.email ? "error" : "")} type="email"
              name="email" id="" placeholder='Email Address' required
              onChange={this.onChange} value={this.state.passwordName}/>

             <input className={"dani" + (this.state.errors.password ? "error" : "")} type="password"
              name="password" id="" placeholder='Password' required
              onChange={this.onChange} value={this.state.password}/>

             <input className={"dani" + (this.state.errors.confirmPassword ? "error" : "")} type="password" 
              name="passwordConfirmation" id="" placeholder='Password Confirmation'
               required
              onChange={this.onChange} value={this.state.passwordConfirmation}/>
              
         </div>
         <div className={'radio'+(this.state.errors.role ? "errorRadio" : "")}>
         <input type="radio" name='join' value="admin"
         onChange={this.onChange}/>Join As a Buyer
         </div>
         <div className={'radio'+(this.state.errors.role ? "errorRadio" : "")}>
         <input type="radio" name='join' value="user"
         onChange={this.onChange}/>Join As a Creative or Marketplace Seller
         </div>
         <div className='radio'>
         <input type="checkbox" name='checkbox' required/>Agree with the rules
         </div>
        <button className='create' type='submit'>Create account</button>
     
     </form>
    )
  }
}

export default Register;