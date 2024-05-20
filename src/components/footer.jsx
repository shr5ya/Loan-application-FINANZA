// import React from 'react'
import line from '../assets/Layer10.png'
import Phone from '../assets/phoneblack.png'
import mail from '../assets/mail.png'

const footer = () => {
  return (
    <>
        <div className='footer1'>
            <div className='boxcont'>
                <div >
                    <div className='bluebox'><img src={Phone} alt="" /></div>
                </div>
                <div>
                    <img src={line} alt="" />
                </div>
                <div>
                    <div className='bluebox'><img src={mail} alt="" /></div>
                </div>
            </div>
            <div className='boxconty'>
            <h4>+44 00 00 1234</h4>
            <h4 id='h4'>name@email.com</h4>
            </div>
            <p>Vestibulum id ligula porta felis color sit, aadipisicing elit. Eos, vitae ullam quas harum blanditiis error tenetur voluptatibus ipsa porro ab eum consequatur 
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, tempore aut cumque mollitia eveniet perspiciatis iusto facere adipisci autem incidunt amet harum sint perferendis quas, commodi, assumenda nemo? Sit, dolores! facere doloremque animi molestiae, quae distinctio. Illum, in.</p>
           
        </div>
        <div className='footer2'><p>Powered By PSDFreebies.com , Copyright 2017 All Right Reserved</p></div>
    </>
  )
}

export default footer