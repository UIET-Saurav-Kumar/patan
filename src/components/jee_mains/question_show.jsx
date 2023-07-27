
const Question_Show = () => {
    return (<div className="grid grid-cols-[44px_minmax(400px,_1fr)_50px] mt-12 ">
    <div> </div>
    <div>
    <div className="h-[450px] overflow-auto " >

       <div  className='border-b border-black pt-2 flex justify-between'>

        <h1 className="text-2xl font-black  ">Question 1:</h1>
        {/* <img src="https://www.nta.ac.in/img/QuizIcons/down.png" className='w-10 h-10'/> */}

        </div>

       <img src="/images/que.png" className=' max-w-full min-w-[50%]'/>


       <div className='grid grid-cols-4  h-12 text-xl ml-4'>
        <div>
       <input type="radio" value="1"  name="radiospage01" id="rOp-b8t"/>   1 )
       </div>
       <div>
       <input type="radio" value="2"  name="radiospage01" id="rOp-b8t"/>   2 )
       </div>
       <div>
       <input type="radio" value="3"  name="radiospage01" id="rOp-b8t"/>   3 )
       </div>
       <div>
       <input type="radio" value="4"  name="radiospage01" id="rOp-b8t"/>   4 )
       </div>
       </div>

       <div className='border-t border-black flex flex-row-reverse h-16 mt-4'>
       {/* <img className='w-10 h-10' src="https://www.nta.ac.in/img/QuizIcons/up.png" /> */}
       </div>

       
       
    </div>
    <div className='flex border-t border-black h-16 items-center pl-6'>
      <button className='border border-[#4cae4c] h-10 font-bold pl-4 pr-4 text-lg bg-[#5cb85c] text-white mr-2'>SAVE & NEXT</button>
      <button className='border  h-10 font-bold pl-4 pr-4 text-lg  text-black mr-2'>CLEAR</button>
      <button className='border border-[#eea236] h-10 font-bold pl-4 pr-4 text-lg bg-[#f0ad4e] text-white mr-2'>SAVE &MARK FOR REVIEW</button>
      <button className='border border-[#2e6da4] h-10 font-bold pl-4 pr-4 text-lg bg-[#337ab7] text-white mr-2'>MARK FOR REVIEW & NEXT</button>
    </div>

    <div className='flex justify-between mt-4 border-t border-[#ddd] h-[70px] bg-[#f5f5f5] items-center '>
      <div>
      <button className='border border-[#ddd] h-10 font-bold pl-4 pr-4 text-lg text-black   ml-4'>&lt;&lt; BACK  </button>
      <button className='border border-[#ddd] h-10 font-bold pl-4 pr-4 text-lg text-black '>NEXT &gt;&gt;</button>
        
      </div>
      <div>
      <button className='border border-[#4cae4c] h-10 font-bold pl-4 pr-4 text-lg bg-[#5cb85c] text-white mr-4'>SUBMIT</button>
      </div>
    </div>

    </div>
    
    <div>
       3
       </div>
  </div> );
}
 
export default Question_Show;