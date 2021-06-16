import React ,{useState,useEffect}from 'react'

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
          return (<div className= 'box-1 ' key={i}><div className="box-box">{item.name}</div></div>)
      })}
    </div>
  )
}

export default HomePage
