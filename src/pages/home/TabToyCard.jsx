import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../providers/AuthContextProvider';

const TabToyCard = ({atoy}) => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContex)
    const location = useLocation()
    
    


    const { _id, name, url, price, category, sellerName, rating} = atoy
    

    const handleViewDetails =()=>{
        
        if(!user){

            swal({
                title: "You must to see details",
                text: "Would you like to be redirected to login page?",
                icon: "warning",
                dangerMode: true,
                buttons: true,
              })
              .then((isOk)=>{
                if(isOk){
                    <Navigate state={{from : location}} replace ></Navigate>
                    navigate(`/login`)
                }
              })
            return
        }else{

            navigate(`/viewdetails/${_id}`)
        }
        
    }
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
                    <span>Rating : {rating}</span>
                    <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h1>
                    
                  
                    <div className="flex items-center mt-2.5 mb-5">

                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={()=>handleViewDetails()}>View details</button>
                    </div>
                </div>
            </div>

    );
};

export default TabToyCard;