import Question_Show from "./question_show";
import Question_Count from "./question_count";
const Middle = () => {
    return ( <div className="grid grid-cols-3">
        <div className="col-span-2">
            <Question_Show/>
        </div>
        <div>
           < Question_Count />
        </div>
        
    </div> );
}
 
export default Middle;