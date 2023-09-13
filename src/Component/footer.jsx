import React from 'react'

const FooterComp = () => {
  return (
    <div className=' footer bg-body-secondary ' >
        <div className="container d-flex justify-content-between">
            <div className="site">
                <h5>FiBizz</h5>
              <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Obcaecati, doloribus?</p>
            </div>
            <div className="site">
                <h5>Sitemap</h5>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    
                </ul>
            </div>
            <div className="site">
                <h5>Resources</h5>
                <ul>
                    <li>Support</li>
                    <li>Contact</li>
                    <li>FAQ</li>
                  
                </ul>
            </div>
            <div className="site">
                <h5>Company</h5>
                <ul>
                    <li>About</li>
                    <li>Customers</li>
                    <li>Blog</li>
                    
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default FooterComp