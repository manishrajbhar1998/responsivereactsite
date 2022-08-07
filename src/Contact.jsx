import React, { useState } from 'react';

const Contact = () => {

    const [data,setData] = useState({
        name:"",
        phone:"",
        email:"",
        message:""
    });

    const inputVal = (e) => {
        const {name,value} = e.target;
        setData((old)=>{
            return{
                ...old,
                [name]: value
            }
        })
    } 

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`Name = ${data.name}, Phone = ${data.phone}, Email = ${data.email}, Message = ${data.message}`);
    }
    return (
        <>
            <div className="my-5">
                <h1 className='text-center'>Contact us</h1>
            </div>
            <div className="container contact_div py-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label class="form-label">Full Name</label>
                                <input type="text" name="name" value={data.name} onChange={inputVal} placeholder='Enter your name' class="form-control"/>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Phone</label>
                                <input type="text" name="phone" value={data.phone} onChange={inputVal} class="form-control"/>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Email address</label>
                                <input type="email" name="email" value={data.email} onChange={inputVal} class="form-control"/>
                            </div>
                            <div className="mb-3">
                            <label for="" class="form-label">Message</label>
                                <textarea name="message" value={data.message} onChange={inputVal} className='form-control' rows="5"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-primary w-50">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;