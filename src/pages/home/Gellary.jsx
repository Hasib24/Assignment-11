import React from 'react';

const Gellary = () => {
    return (
        <section className='container mx-auto my-10'>

            <h1 className='text-5xl text-center mb-10 font-bold'>Toy Gellary</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/3358482/pexels-photo-3358482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/10550501/pexels-photo-10550501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    </div>
                </div>

                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2016/10/20/06/00/fiat-1754723_960_720.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/1522180/pexels-photo-1522180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2017/06/04/20/15/cars-2372103_960_720.jpg" alt=""/>
                    </div>
                </div>

                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/1196838/pexels-photo-1196838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2016/11/24/14/28/christmas-tree-1856383_960_720.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2018/06/06/12/58/car-3457883_960_720.jpg" alt=""/>
                    </div>
                </div>

                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2020/04/24/11/45/model-car-5086548_960_720.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2020/03/19/06/40/car-4946516_960_720.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2015/11/16/15/57/fire-1045906_960_720.jpg" alt=""/>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Gellary;