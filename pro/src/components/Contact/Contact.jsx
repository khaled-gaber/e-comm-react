import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <div className='Contact container bg-light my-5'>
      <h1 className='text-center text-success'>contact us</h1>
      <form>
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">email</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">subject</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label ">message</label>
    <input type="password"  class="form-control " id="exampleInputPassword1"/>
  </div>
 
  <button type="submit"  class="btn btn-success  w-100 my-5 ">send message</button>
  
</form>
    </div>
  )
}

export default Contact
