import React ,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [albums ,setAlbums] = useState([]);
    useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(setAlbums)
    .catch(err => {
      console.log(err)
    })
    },[]);

  
  return (
    <div className='box' >
      {albums.map((item,i)=>{
          return (<Link to='/categories' >< div className= 'box-1 grow shadow-5'
          key={i}>
             
        <div className="box-box shadow-5 ">{item.name}</div></div></Link>)
      })}
    </div>
  )
}

export default HomePage
