import React from 'react';

const Modal = (props) => {
    const {image_link, description, features, accuracy, integrations , pricing} = props.singleData;
    console.log(props.singleData)

    return (
         <>
          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
             <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">

                    <div className="card card-side bg-base-100">
                         <div className="card-body">
                            <h2 className="card-title">{description ? description : "Not Found"}</h2>
                            
                            <div className="payment flex justify-between items-center gap-4 my-5">
                                <div className="cash text-center bg-white p-5 rounded-lg font-semibold">
                                    <p className="text-[#03A30A]">{pricing ? pricing[0].plan : "Free of"}</p>
                                    <p className="text-[#03A30A]">{pricing ? pricing[0].price : "Cost/Basic"}</p>
                                </div>
                                <div className="cash text-center bg-white p-5 rounded-lg font-semibold">
                                    <p className="text-[#F28927]">{pricing ? pricing[1].plan : "Free of"}</p>
                                    <p className="text-[#F28927]">{pricing ? pricing[1].price : "Cost/Pro"}</p>
                                </div>
                                <div className="cash text-center bg-white p-5 rounded-lg font-semibold">
                                    <p className="text-[#EB5757]">{pricing ? pricing[2].plan : "Free of"}</p>
                                    <p className="text-[#EB5757]">{pricing ? pricing[2].price : "Cost/Enterprise"}</p>
                                </div>
                                </div> 

                             <div className="flex justify-between items-center">
                                <div>
                                    <h1 className='font-semibold text-[#111]'> Features</h1>
                                    {
                                        Object.values(features || {}).map((value , index) => 
                                          <p key={index}>{index + 1}. {value.feature_name ? value.feature_name : "not found"}</p>
                                        )
                                    }
                                </div>
                                <div>
                                    <h1 className='font-semibold text-[#111]'>Integrations</h1>

                                    {
                                        integrations ? 
                                        <div>
                                            { integrations.map((initial, index) => 
                                            <p className='font-semibold text-[#111]' key={index}> {index + 1}. {initial}</p>)}
                                        </div> 
                                        : <p>Not found</p>
                                    }
                                </div>
                             </div>

                         </div>
                          <div className='w-1/2 relative'>
                            <img className="w-full object-contain" src={image_link ? image_link[0] : null} alt="Movie"/>
                           
                             { accuracy?.score && <p className="bg-lime-900 rounded-lg text-center text-white w-1/2 absolute top-0 right-1 ">{ accuracy.score * 100 + "%"} accuracy</p> }
                          </div>
                        </div>

                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
             </div>
        </>
    );
};

export default Modal;
 

{/* <div className="card-actions justify-end">
<button className="btn btn-primary">Watch</button>
</div> */}



{/* <input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
 <div className="modal-box w-11/12 max-w-5xl">

 <div className="flex justify-between items-center gap-5">
    <div className="w-1/2 border-[1px] border-error rounded-lg p-5 mb-5 bg-[#eb575762]">
       <h1 className="text-2xl text-[#111] font-semibold">{description}</h1>



    <div className="flex justify-between items-center gap-4">
        <div className="features">
            <h2 className="text-2xl text-[#111] font-semibold">Features</h2>
            {
              Object.values(features || {}).map((value, index) => <p>{index + 1}. {value.feature_name}</p>
              )}
        </div>
        <div className="">
            <h2 className="text-2xl text-[#111] font-semibold">Integrations</h2>
          {
            integrations?.map((int) => <p>{int}</p>)
          }
        </div>
    </div>
 </div>

    <div className="w-1/2">
        <img src={image_link ? image_link[0] : "NO image here"} alt="" />
        <h3>{accuracy ? accuracy.description : "no"}</h3>
    </div>
    </div>

    <div className="modal-action">
       <label htmlFor="my-modal-5" className="btn">Yay!</label>
    </div>
    
</div>
</div>  */}



{/* <div className="payment flex justify-between items-center gap-4 my-5">
<div className="cash text-center bg-white p-5 rounded-lg font-semibold">
    <p className="text-[#03A30A]">{pricing ? pricing[0].plan : "Free of"}</p>
    <p className="text-[#03A30A]">{pricing ? pricing[0].price : "Cost/Basic"}</p>
</div>
<div className="cash text-center bg-white p-5 rounded-lg font-semibold">
    <p className="text-[#F28927]">{pricing ? pricing[1].plan : "Free of"}</p>
    <p className="text-[#F28927]">{pricing ? pricing[1].price : "Cost/Pro"}</p>
</div>
<div className="cash text-center bg-white p-5 rounded-lg font-semibold">
    <p className="text-[#EB5757]">{pricing ? pricing[2].plan : "Free of"}</p>
    <p className="text-[#EB5757]">{pricing ? pricing[2].price : "Cost/Enterprise"}</p>
</div>
</div> */}