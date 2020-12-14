import React, { useReducer, useState } from 'react';
import ChatBot from './ChatBot';



export function Orders(){
    const orderlist = ["Voice Over - English(Male)", "Abu Dhabi TV Ad"]
    const [chosen,setChosen] = useState(99);
    const [sub, setSub] = useState(0);
    const deliv = ["quality", "price", "service", 'speed in delivery']
    return(
        <div className='orders'>
            {orderlist.map((item,index) => (
                <div className='listitemdetails'>
                <div className='listitem'>
                    <div className='section1items'>
                    <span onClick={()=>setChosen(index)} style={chosen === index ? {background: 'rgb(223, 114, 68)'}: null} className='selectedItem'></span>
                    <p onClick={()=>setChosen(index)}>{item}</p>
                    </div>
                    <div className='section2items'>
                    <p>20th Nov</p>
                    <p>23rd Nov</p>
                    <p>200AED</p>
                    <p>Pending</p>
                    </div>
                  
                </div>
                  { 
                    chosen === index ?
                    <div className='subdetails'>
                    <div className='detailTabs'>
                    <div onClick={()=>setSub(0)} className='tabNoti'>
                      <p>Requirements</p>
                      
                      {sub=== 0 ?<span className='arrowup'></span> :null}
                    </div>
                    <p>|</p>
                    <div onClick={()=>setSub(1)} className='tabNoti'>
                      <p>Activity</p>
                      
                      {sub=== 1 ?<span className='arrowup'></span>: null}
                    </div>
                    <p>|</p>
                    <div onClick={()=>setSub(2)} className='tabNoti'>
                      <p>Delivery</p>
                      
                      {sub=== 2 ?<span className='arrowup'></span>: null}
                      </div>
                    </div>
                    {sub === 0 && chosen ===index ? 
                <div className='detailscontainer'>
                        {index === 1? <div className ='orderdetails'>
                            <div classname= 'orderdetails1'>
                                <p>Please Attach your xxsecond TV commercial:</p>
                                <button>Attach Video</button>
                            </div>
                    <div classname= 'orderdetails1'>
                             <p>If you would like a high quality video commercial, visit Tasweiq Instant Production and select from our affordable options:</p>
                            <button>Tv Ad Production</button>
                </div>
                <ChatBot/>
                    </div> : null}
                    {index === 0 ?
                    <div className ='orderdetails'>

                     <p>Please explain the tone of your voice over and list any special instructions.</p>
                     <textarea></textarea>
                     <button>Attach Doc File</button>
                     <p>If you ordered any gig extras: please provide details. (Background/text to be added/logo/script writing/custom attire) (optional)</p>
                     <textarea></textarea>
                     <p>Please record all pronunciation of Business names, names, special words, acronyms, locations and such. If you can send an audio recording of the pronunciation that would be best! Thank you! </p>
                     <div className='recordhere'>
                       <button>Record Here</button>
                       <button>Attach Audio</button>
                     </div>
                     <div className='recordhere'>
                       <input type='radio'></input>
                       <p>The information I provided is accurate and complete. Any changes will require the sellers approval and may be subject to additional cost.</p>
                     </div>
                     <button className='recordsubbtn'>Submit</button>
                     <div classname= 'orderdetails1'>
                       <p>If you would like a high quality Script to be developed for as little as 2.00AED per word, visit Tasweiq Instant Production:</p>
                       <button>Get Script Written Now</button>
                      </div>
                        <ChatBot/>
                     </div>
                : null}
                </div> 
                : null}

                {sub === 1 && chosen ===index ? 
                
                    <div className='activitycontainer'>
                        <div className='date'>
                            <h3>Date</h3>
                            <p>Nov 20th</p>
                            <p>Nov 21st</p>
                            <p>Nov 21st</p>
                            <p>Nov 22nd</p>

                        </div>
                        <div className='activity'>
                            <h3>Activity</h3>
                            <p>You Placed the order at : </p>
                            <p>You submitted the Requirements at: </p>
                            <p>Your order started at :</p>
                            <p>You requested a revision at:</p>
                            <textarea placeholder='Type your message here...'></textarea>
                        </div>
                        <div className='orderdetailsactivity'>
                            <h3>Order details</h3>
                        </div>
                    </div>
                
                :null}

                {sub === 2 && chosen ===index ? 
                
                <div className='delivery'>
                  <div className='thanksorder'>
                  <h2>Thank you for your order!</h2>
                  </div> 
                  <div className="feedbackandsat">
                  <h3>{"Feedback & Satisfaction"}</h3>
                  <h3>(Your answer will remain anonymous)</h3>
                  </div>
                  <div className='delivcontainer'>
                  {deliv.map((del,index)=> {
                    return(
                    <div>
                   
                  <p>{index + 1 } : How are you with the overall {del} of your purchase?</p>
                      <div className="sat1">
                    <div className='sat-sub'>
                      <input type='radio'></input>
                      <small>Very Satisfied</small>
                    </div>
                    <div className='sat-sub'>
                      <input type='radio'></input>
                      <small>Satisfied</small>
                    </div>
                    <div className='sat-sub'>
                      <input type='radio'></input>
                      <small>Neutral</small>
                    </div>
                    <div className='sat-sub'>
                      <input type='radio'></input>
                      <small>Not Satisfied</small>
                    </div>
                    <div className='sat-sub'>
                      <input type='radio'></input>
                      <small>Do Not Want to Disclose</small>
                    </div>

                  </div>
                  </div>
                    )
                  })}
                  <button>Continue</button>
                  </div>
                  
                  

                </div>
                
                : null}
                    </div>
                        : null
                }
              
                
                </div>
            ))}
        </div>
    )
}