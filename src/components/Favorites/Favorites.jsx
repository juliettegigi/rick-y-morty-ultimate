import { useEffect } from 'react';
import {useDispatch,useSelector } from 'react-redux'
import {filterCards,desfilter,orderCards} from '../../redux/actions/actionsCreator'
import Cards from '../Cards/Cards'
import s from './favorites.module.css'

export default function Favorites(props) {
 const gender=['All','Male', 'Female', 'unknown', 'Genderless'];
 const dispatch=useDispatch();
 const myFavorites=useSelector((state)=>state.myFavorites)
 
useEffect(()=>{
 return(()=>{
    dispatch(desfilter());
 })
},[])

 function filterCardsSelect(e){
  dispatch(filterCards(e.target.value))
 }


function orderCardsSelect(e){
  dispatch(orderCards(e.target.value))
}

  return (
    <>
<div className={s.div1}>
<label>Ordenar: 
    <select onChange={orderCardsSelect} >
       <option  value="Ascendente" >Ascendente</option> 
       <option  value="Descendente" >Descendente</option> 
    </select>
</label>    

<label>Filtrar: 
    <select onChange={filterCardsSelect} >
      { gender.map(elem=> 
    <option  value={elem}   key={elem}>{elem}</option> )
      }
    </select>
</label>   
   </div>
         
      {myFavorites && <Cards personajes={myFavorites}></Cards>
      }



    </>
  )
}



