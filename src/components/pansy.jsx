// import React from 'react'
const pansy = () => {
  return (
    <>
        <div className='blueback'>
        <p className='intro'>Leave your number and we &ensp;&ensp;&ensp;&ensp;&ensp;will call you back</p>
        <h5>Get up to $5000 within 10 minutes**</h5>
        <form className='contact-form'>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Your Name' style={{ width: '409px', height: '42px' }} />
          </div>
          <div className='form-group2'>
            <input type='email' className='form-control' placeholder='Your Email' style={{ width: '200px', height: '42px', marginRight: '10px' }} />
            <input type='tel' className='form-control' placeholder='Your Phone' style={{ width: '200px', height: '42px' }} />
          </div>
          <div className='form-group'>
            <textarea className='form-control' rows='4' placeholder='Your Message' style={{ width: '409px', height: '75px' }}></textarea>
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
        <p className='hiddit'> * We don’t share your personal info with anyone. </p>

        </div>
    </>
)
}

export default pansy