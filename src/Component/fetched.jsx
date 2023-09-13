import React from 'react'
import"./style/frist.scss"
import { useEffect, useState}from 'react'


  
  

const FetchPage = () => {
  const [datas, setDatas] = useState([])
    const [dataInput, setDataInput] = useState("")
    

  useEffect(() => {
   fetch('https://local-business-data.p.rapidapi.com/search?query=Hotels%20in%20San%20Francisco%2C%20USA&limit=20&lat=37.359428&lng=-121.925337&zoom=13&language=en&region=us',{
       method: 'GET',
       headers: {
		'X-RapidAPI-Key': 'a465948493mshf50e2b9c122b874p12cfddjsn1970be296489',
		'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
	}
   })

   .then(response =>{
  return(response.json());
   })
   .then(data=>{
    setDatas(data.data);
   })
   .catch(err=>{
    console.error(err)
   })




  
  }, []);
  

 
  return (
   <div className=' container '>
<div className="mt-4">
          <input type="search"
          value={dataInput}
          onChange={(e)=>setDataInput(e.target.value)}
            placeholder='search'   className='form-control w-100' />
        </div>
    <div className="container grid" >
   {
      datas.filter(
              (key) =>
                key.ownerl_name
                  .toLowerCase()
                  .includes(dataInput)).map((key) => {
          return (
            <div className="row  p-1 shadow-sm wrap"  key={key.business_id}>
              <p>{key.owner_name}</p>
              <p>{key.phone_number}</p>
              <p>{key.full_address}</p>
          
            </div>
          )
        })
   
      }


    </div>
   </div>
  )
  }

export default FetchPage