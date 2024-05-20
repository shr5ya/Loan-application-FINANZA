// import React from 'react';
import logo from '../assets/logo.png';
import phone from '../assets/phone.png';
import head from '../assets/head-end.png';
import girl from '../assets/cleavage.png';
import Card from '../components/pansy';
import slash from '../assets/Rectangle4.png';
const Header = () => {
  return (
    <>
    <div className='head'>
    <nav className="nav">
        
        <div className=" comp1">
          <img className='logo' src={logo} alt="Logo" />
          <a className="logo-name">Finanza</a>
          
        </div>
        <div className=' comp2'>
            <img className='phone' src={phone} alt="phone-img" />
            <div className='call'>
                <div className='callus'>Call Us Now</div>
                <div className='number'>+44 00 000 123</div>
            </div>
        </div>
      </nav>
      <img className='heady' src={head} alt="" />

      <div className='body'>
        <img className='girl' src={girl} alt="" />
        <div className='girl-text'>
            <h3 className='margin'>Leave <span>Money Problems</span> to us</h3>
            <h3>  and just <span>focus on your Business</span></h3>
        </div>
        
        
      </div>
    </div>  
    <div className='contact-us'>
        <Card />
    </div>
    <div className='numbers'>
        <div className='num1'>
            <h2>2300</h2>
            <img src={slash} alt="" />
            <h5>HAPPY CLIENTS</h5>
        </div>
        <div className='num1'>
            <h2>934</h2>
            <img src={slash} alt="" />
            <h5>Branches Around The Worl</h5>
        </div>
        <div className='num1'>
            <h2>1.4</h2>
            <img src={slash} alt="" />
            <h5>Billon Dollars Managed</h5>
        </div>
        <div className='num1'>
            <h2>6000</h2>
            <img src={slash} alt="" />
            <h5>Cups of Coffee</h5>
        </div>
    </div>
    </>
  );
}

export default Header;
