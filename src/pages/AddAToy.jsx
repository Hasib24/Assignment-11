import React, { useContext } from 'react';
import { AuthContex } from '../providers/AuthContextProvider';

const AddAToy = () => {
    const {user} = useContext(AuthContex)

    const hadleAddToy = (e) =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value
        const sellerName = form.sellerName.value;
        const url = form.url.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        


        const toy = {
            name,
            sellerName,
            email,
            url,
            category,
            price,
            rating,
            quantity,
            description
        }
        

        fetch('http://localhost:5000/addatoy',{
            method: 'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (


        <form className=' my-10' onSubmit={(e)=>hadleAddToy(e)}>
            <div className='border rounded-md shadow-xl container mx-auto w-2/3 p-10'>

                <div className='md:flex md:justify-between md:gap-2'>
                    <input className='outline-none border rounded-md my-3 w-full md:mx-auto' type="text" name="name" id="name" placeholder='Toy Name' />
                    <input className='outline-none border rounded-md my-3 w-full md:mx-auto' type="url" name="url" id="url" placeholder='Photo url of toy' />
                </div>
                <div className='md:flex md:justify-between md:gap-2'>
                    <input className='outline-none border rounded-md my-3 w-full md:mx-auto disabled:bg-slate-200' type="text" name="sellerName" id="sellerName" defaultValue={user.displayName} disabled />
                    <input className='outline-none border rounded-md my-3 w-full md:mx-auto disabled:bg-slate-200' type="email" name="email" id="email" defaultValue={user.email}  disabled/>
                </div>
                <div className=''>
                    <h3 className=''>Additional Information</h3>
                    <select defaultValue="" className='outline-none border rounded-md my-3 w-full md:mx-auto disabled:bg-slate-200' name="category" id="category">
                        <option disabled value="">Select car category</option>
                        <option value="private-car">Private car</option>
                        <option value="hiking-car">Hiking car</option>
                        <option value="police-car">Police car</option>
                        <option value="toy-taxi">Toy taxi</option>
                        <option value="toy-bus">Toy bus</option>
                    </select>
                </div>
                <div className='md:flex md:justify-between'>
                    <input className='outline-none border rounded-md my-3 w-full md:mx-1 disabled:bg-slate-200' type="number" name='price' id='price' placeholder='Price' />
                    <input className='outline-none border rounded-md my-3 w-full md:mx-1 disabled:bg-slate-200' type="number" name='rating' id='rating' placeholder='Rating' />
                    <input className='outline-none border rounded-md my-3 w-full md:mx-1 disabled:bg-slate-200' type="number" name='quantity' id='quantity' placeholder='Quantity' />

                </div>
                <div>
                    <textarea className='outline-none border rounded-md my-3 w-full md:mx-auto disabled:bg-slate-200' name="description" id="des" placeholder='Descrition' ></textarea>
                </div>
                <div>
                    <input className='bg-blue-600 border border-blue-600 duration-700 text-white active:bg-blue-500 hover:bg-white hover:text-slate-800 cursor-pointer outline-none rounded-md my-3 w-full md:mx-auto py-2 font-semibold disabled:bg-slate-200' type="submit" value="ADD TOY" />
                </div>
            </div>

        </form>
    );
};

export default AddAToy;