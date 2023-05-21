import React from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';

const UpdateMyToy = () => {
    
    const toy = useLoaderData()
    const { _id, name, sellerName, email, url, category, price, rating, quantity, description } = toy[0]

    const hadleUpdateToy =(e)=>{
        e.preventDefault()
        const form = e.target
        const url = form.url.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const toy = {
            url,
            category,
            price,
            rating,
            quantity,
            description
        }

        fetch(`http://localhost:5000/update/${_id}`,{
            method: 'PATCH',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                swal("Good job!", "Information update successfuly !", "success");
            }
        })
    
    }
    

    return (
        <form className=' my-10' onSubmit={(e)=>hadleUpdateToy(e)}>
        <div className='border rounded-md shadow-xl container mx-auto w-2/3 p-10'>

            <div className='md:flex md:justify-between md:gap-2'>
                <input className='outline-none border rounded-md my-3 w-full md:mx-auto disabled:bg-slate-200' type="text" name="name" id="name" placeholder='Toy Name' defaultValue={name} disabled/>
                <input className='outline-none border rounded-md my-3 w-full md:mx-auto' type="url" name="url" id="url" placeholder='Photo url of toy' defaultValue={url}/>
            </div>
            <div className='md:flex md:justify-between md:gap-2'>
                <input className='outline-none border rounded-md my-3 w-full md:mx-auto disabled:bg-slate-200' type="text" name="sellerName" id="sellerName" defaultValue={sellerName} disabled />
                <input className='outline-none border rounded-md my-3 w-full md:mx-auto disabled:bg-slate-200' type="email" name="email" id="email" defaultValue={email}  disabled/>
            </div>
            <div className=''>
                <h3 className=''>Additional Information</h3>
                <select defaultValue="" className='outline-none border rounded-md my-3 w-full md:mx-auto disabled:bg-slate-200' name="category" id="category" required>
                        <option disabled value="">Select car category</option>
                        <option value="private-car">Private car</option>
                        <option value="hiking-car">Hiking car</option>
                        <option value="police-car">Police car</option>
                        <option value="toy-taxi">Toy taxi</option>
                        <option value="toy-bus">Toy bus</option>
                </select>
            </div>
            <div className='md:flex md:justify-between'>
                <input className='outline-none border rounded-md my-3 w-full md:mx-1 disabled:bg-slate-200' type="number" name='price' id='price' placeholder='Price' defaultValue={price} />
                <input className='outline-none border rounded-md my-3 w-full md:mx-1 disabled:bg-slate-200' type="number" name='rating' id='rating' placeholder='Rating' defaultValue={rating}/>
                <input className='outline-none border rounded-md my-3 w-full md:mx-1 disabled:bg-slate-200' type="number" name='quantity' id='quantity' placeholder='Quantity' defaultValue={quantity} />

            </div>
            <div>
                <textarea className='outline-none border rounded-md my-3 w-full md:mx-auto disabled:bg-slate-200' name="description" id="des" placeholder='Descrition' defaultValue={description} ></textarea>
            </div>
            <div>
                <input className='bg-blue-600 border border-blue-600 duration-700 text-white active:bg-blue-500 hover:bg-white hover:text-slate-800 cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-slate-200' type="submit" value="UPDATE TOY" />
            </div>
        </div>

    </form>
    );
};

export default UpdateMyToy;