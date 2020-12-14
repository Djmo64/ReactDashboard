import React, { useReducer, useState } from 'react';
import { Orders } from './Orders';





export function ManageOrders(){

    
    const [value,setValue] = useState(0);
    const [tab,setTab] = useState(0);
 
  return(
    
<div className='orderDetailstop-container'>
<div className='orderDetailstop'>
   <h2>Order Details</h2>
    <div className='detailTabs'>
      <div onClick={()=>setTab(0)} className='tabNoti'>
        <div className ='tabNoti-1'>
        <p>Active</p>
        <span className='amount'>3</span>
        </div>
        {tab === 0 ?<span className='arrowup'></span> :null}
      </div>
      <p>|</p>
      <div onClick={()=>setTab(1)} className='tabNoti'>
      <div className ='tabNoti-1'>
        <p>Missing Details</p>
        <span className='amount'>2</span>
        </div>
        {tab === 1 ?<span className='arrowup'></span>: null}
      </div>
      <p>|</p>
      <div onClick={()=>setTab(2)} className='tabNoti'>
      <div className ='tabNoti-1'>
        <p>Completed</p>
        <span className='amount'>5</span>
        </div>
        {tab === 2 ?<span className='arrowup'></span>: null}
      </div>
      <p>|</p>
      <div onClick={()=>setTab(3)} className='tabNoti'>
        <div className ='tabNoti-1'>
        <p>All</p>
        <span className='amount'>10</span>
        </div>
        {tab === 3 ?<span className='arrowup'></span>:null}
      </div>
    </div>
 </div>
 {tab === 1 ?
 <div className='detailsLayout'>
        <div className='missingDetails'>
          <div className='missingDetailTop'>
            <h2>Orders With Missing Details</h2>
            <div className='missingparams'>
              <p>Order Date:</p>
              <p>|</p>
              <p>Due On:</p>
              <p>|</p>
              <p>Total:</p>
              <p>|</p>
              <p>Status:</p>
            </div>
          </div>
        </div>
         <Orders/>
        </div>
        : null}
       
        </div>
  )

}