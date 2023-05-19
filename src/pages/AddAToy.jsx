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


        <form className='border' onSubmit={(e)=>hadleAddToy(e)}>
            <div className='border container mx-auto w-2/3 p-10'>

                <div className='md:flex md:justify-between'>
                    <input className='outline-none border rounded-md' type="text" name="name" id="name" placeholder='Toy Name' />
                    <input className='outline-none border rounded-md my-3' type="url" name="url" id="url" placeholder='Photo url of toy' />
                </div>
                <div className='md:flex md:justify-between'>
                    <input className='outline-none border rounded-md my-3' type="text" name="sellerName" id="sellerName" defaultValue={user.displayName} />
                    <input className='outline-none border rounded-md my-3' type="email" name="email" id="email" defaultValue={user.email} />
                </div>
                <div>
                    <h3>Additional Information</h3>
                    <select name="category" id="category">
                        <option value="sports-car">sports car</option>
                        <option value="regular-car">regular car</option>
                    </select>
                </div>
                <div className='md:flex md:justify-between'>
                    <input className='outline-none border rounded-md my-3' type="number" name='price' id='price' placeholder='Price' />
                    <input className='outline-none border rounded-md my-3' type="number" name='rating' id='rating' placeholder='Rating' />
                    <input className='outline-none border rounded-md my-3' type="number" name='quantity' id='quantity' placeholder='Quantity' />

                </div>
                <div>
                    <textarea className='w-full border' name="description" id="des" ></textarea>
                </div>
                <div>
                    <input type="submit" value="ADD TOY" />
                </div>
            </div>

        </form>
    );
};

export default AddAToy;