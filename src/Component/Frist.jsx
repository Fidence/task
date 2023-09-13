
import FetchPage from "./fetched"
import FooterComp from "./footer"
import "./style/frist.scss"



const Frist = () => {

        

  return (
    <>
    <div className='wrapper'>
      <div className="overlay d-flex justify-content-center align-items-center">

      <div className="container-lg ">
        <div className="row ">
          <div className="txt_left text-center">
            <h1 className=' text-light'>Welcome to FIBIZZ where business grow</h1>
            <p className=' text-light '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, esse ullam, voluptates est <br /> architecto, debitis cum atque soluta corporis dignissimos adipisci modi!br
             Deserunt doloremque <br /> perferendis et nemo repudiandae? Explicabo, exercitationem.</p>
          </div>
        </div>
        </div>  
      </div>
    </div>

   
      
        
    
   
      <FetchPage />
      <FooterComp/>
    </>
  )
  
  }
export default Frist;
