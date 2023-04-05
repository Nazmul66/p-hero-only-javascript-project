import React from 'react';

const SingleData = (props) => {
    const {id, image, features, name, published_in} = props.cards;

    return (
        <div className="">
            <div className="card card-compact w-full h-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
               <h2 className="text-[25px] font-normal mb-2">Features</h2>
               <div className=''>
                    {
                       features.map((feature , index) => {
                        <div className="leading-6 font-medium">{index + 1}. {feature}</div>
                       })}
               </div>
               <hr className="border-2 border-info w-full mt-5"/>
            </div>
            <div className="flex justify-between items-end p-5">
                <div className='another-div'>
                    <h3 className="text-[#111]">{name}</h3>
                    <div className='flex text-[#111]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                        <span className="text-[#111]">{published_in}</span>
                    </div>
                </div>

                <label htmlFor="my-modal-5" onClick={() => props.setUniqueId(id)} className="text-[#111] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}   stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </label>
            </div>


          </div>
        </div>
    );
};

export default SingleData;