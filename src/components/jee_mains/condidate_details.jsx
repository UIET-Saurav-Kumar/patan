const CandidateDetails = () => {
    return ( <div className=" h-[200px] lg:h-[100px] flex flex-col lg:flex-row  items-center justify-between mt-2 bg-[url('https://www.nta.ac.in/img/texture-frozen-window.jpg')]">
        
        <div className="flex h-[90px] ml-14 items-center ">
        <div className="h-[95px]   w-[90px]  border-2 border-black ">
             
        </div >
        <div className="flex-col ml-2 font-medium lg:text-xl mr-1 ">
            <div className="">
                Candidate Name 
            </div>
            <div className="-mt-1">
                Exam Name 
            </div>
            <div className="-mt-1">
                Subeject Name 
            </div>
            <div className="-mt-1">
                Remaining Time 
            </div>

        </div>

        <div className="flex-col lg:text-xl">
            <div  >
                : <span style={{color:'#f7931e'}} className="font-bold ">[Your Name]</span>
            </div>
            <div className="-mt-1" >
               : <span style={{color:'#f7931e'}} className="font-bold ">[JEE-Main]</span>
            
            </div>
            <div className="-mt-1" >
                 : <span style={{color:'#f7931e'}} className="font-bold ">4050367_B PLANNING 6th JAN 2020 Shift 2 Set 2</span>
            </div>
            <div className="-mt-1">
                : <span style={{color:'#f7931e'}}  className="font-bold ">02:08:33</span>
            </div>

        </div>
        </div>

        <div >

            <select className="h-10 w-[300px] mr-12 sm:pt-2 border border-black flex-col text-base pl-4" >
                <option >English</option>
                <option>Hindi</option>
                <option>Gujrati</option>
               
            </select>
            
        </div>
    </div> );
}
 
export default CandidateDetails;