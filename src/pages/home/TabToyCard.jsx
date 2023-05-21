import React from 'react';

const TabToyCard = ({atoy}) => {


const { _id, name, url, price, category, sellerName, quantity} = atoy
    console.log(name, url);
    return (
        
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                {/* //img */}
                <a href="#">
                    <img className="mb-3 h-60 w-full object-cover rounded-t-lg" src={url} alt="product image" />
                </a>
                <div className="px-5 pb-5">
                    <div className='flex text-sm font-extralight justify-between text-slate-700'>
                        <h3>Seller : {sellerName}</h3>
                        <h3>Category : {category}</h3>
                    </div>
                    <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h1>
                    <h3 className='font-extralight'>Avoilable : {quantity} pices</h3>
                  
                    <div className="flex items-center mt-2.5 mb-5">

                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">View details</a>
                    </div>
                </div>
            </div>

    );
};

export default TabToyCard;