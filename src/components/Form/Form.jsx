import s from "./form.module.css"
import { useDispatch,useSelector } from "react-redux"
import React from 'react'
import { setUserdata } from "../../redux/actions/actionsCreator"
import {validation} from './validation'
import img from '../../assets/form.png'
export default function Form(props){
    const [userData, setUserData] = React.useState({ username: 'julia@g.com', 
                                                     password: 'julia18' });
    const userDataGlobal=useSelector((state)=>({...state.userData}))
    const [errors,setErrors]=React.useState({});
    let [flag,setFlag]=React.useState(false);
    const dispatch=useDispatch();
   

    const handleInputChange=(e)=>{
       setUserData({...userData,[e.target.name]:e.target.value});
       setErrors(validation({...userData,[e.target.name]:e.target.value}));
    }    
    

    const handleSubmit=(e)=>{    
            
            e.preventDefault();
            setFlag(true) ; 
            dispatch(setUserdata(userData));         
    }

    return(
   <div className={s.padre}>
     
     <form className={s.form} onSubmit={handleSubmit} >
             <h1>Rick y morty</h1>
             <label>Username: 
                <input type="text"  onChange={handleInputChange} value={userData.username} name="username"></input>
             </label>
             {errors.username && errors.username.map(
                (error,i)=>{ return <p className={s.p} 
                                       key={`username-${i}`}
                                       >{error+ "-"}
                                    </p>
                            }
             )} 
            <label>Password:
                <input type="password" onChange={handleInputChange} value={userData.password} name="password"/>
            </label>
            {errors.password && errors.password.map((error,i)=>{
                return<p key={`pass-${i}`} className={s.p}>{error+ "-"}</p>
            })}
            <button type="submit" className={s.boton}>Login</button>

            {flag && <img src={img} className={s.img2} />}
           
        </form>
       
        {flag || <img src={img} className={s.img} /> }
      <div className={s.time}> { setTimeout(()=>{
                    if(flag){
                     props.login({...userDataGlobal});
                    setFlag(false);}
},6000)


}


</div>
     
 
 </div>
    )
}
