
import Link from "next/link"
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";

const Front_Page_Form = () => {
    const {handleSubmit , register , reset } = useForm()
    const route = useRouter()

    const  onSubmit = (e) =>
    {
        console.log(e);
        reset();
        route.push("/jee_mains_paper/student_login_form")
        
    }

    return ( <div className="bg-[#012B55] h-[700px] ">
        <div className='flex justify-center mt-2'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col bg-[url(https://www.nta.ac.in/img/texture-frozen-window.jpg)] mt-10 w-[30%] h-[400px] '>
               
                <label className='ml-10 mt-8 text-base mb-1'>Select exam you would like to appear</label>
                <select type='text ' className='border border-[#555]  ml-10 w-[80%] h-[40px] '
                 {...register('Exam_Code')} >
                    <option value="">
          --Select--
        </option>
        <option value="1">
          JEE-Main
        </option>
        <option value="2">
          UGC-NET
        </option>
        <option value="3">
          NEET
        </option>
        <option value="4">
          AIAPGT
        </option>
        <option value="5">
          JNU
        </option>
        <option value="6">
          ARPIT
        </option>
        <option value="7">
          NCHM
        </option>
        <option value="8">
          ICAR-AIEEA-UG
        </option>
        <option value="9">
          ICAR-AIEEA-PG
        </option>
        <option value="10">
          ICAR-AIEEA-JRF
        </option>
        <option value="11">
          IGNOU
        </option>
        <option value="12">
          SWAYAM
        </option>
        <option value="13">
          CMAT
        </option>
        <option value="14">
          GPAT
        </option>
        <option value="17">
          CSIR
        </option>
        <option value="18">
          IIFT
        </option>
        <option value="19">
          KCET
        </option>
        <option value="20">
          DUET
        </option>
        <option value="21">
          AISSEE
        </option>
        <option value="22">
          NSU
        </option>
        <option value="23">
          GNDU
        </option>
        <option value="24">
          MEA-JSS
        </option>
        <option value="25">
          MEA-SWAYAM
        </option>
        <option value="26">
          I &amp; B
        </option>
        <option value="27">
          IIMC
        </option>
        <option value="28">
          NIS
        </option>
        <option value="29">
          FNCON
        </option>
        <option value="30">
          Ind-SAT
        </option>
        <option value="31">
          NLU
        </option>
        <option value="32">
          LHMC
        </option>
        <option value="33">
          IGNOU Recruitment
        </option>
        <option value="34">
          AO - 2021
        </option>
        <option value="35">
          ALLAHABAD HIGH COURT
        </option>
        <option value="36">
          AICTE Recruitment Test -2021
        </option>
        <option value="37">
          Devi Ahilya Vishwavidyalaya
        </option>
        <option value="38">
          NITTT 
        </option>
        <option value="39">
          PRAGATII (IND-SAT)
        </option>
        <option value="40">
          National Institute of Social Defence
        </option>
        <option value="41">
          BET
        </option>
        <option value="42">
          GAT-B
        </option>
        <option value="43">
          JIP-MAT
        </option>
        <option value="44">
          LNIPE
        </option>
        <option value="45">
          CUCET
        </option>
        <option value="46">
          YASASVI
        </option>
        <option value="47">
          SHRESHTA
        </option>
        <option value="48">
          CUET(UG)
        </option>
        <option value="49">
          CUET (PG)
        </option>



                 </select>

                <label className='ml-10 mt-6 text-lg mb-1'>paper</label>
                <select type='text' className='border border-[#555]  ml-10 w-[80%] h-[40px] '
                 {...register('Paper_Code')} >

<option value="">
          --Select--
        </option>
        <option value="3992">
          4050367_B PLANNING 6th JAN 2020 Shift 2 Set 2
        </option>
        <option value="3991">
          40503627_BTECH 9th Jan 2020 Shift 2
        </option>
        <option value="3990">
          40503624_BTECH 9th Jan 2020 Shift 1
        </option>
        <option value="3989">
          40503621_BTECH 8th Jan 2020 Shift 2
        </option>
        <option value="3988">
          40503618_BTECH 8th Jan 2020 Shift 1
        </option>
        <option value="3987">
          40503615_BTECH 7th Jan 2020 Shift 2
        </option>
        <option value="3986">
          4050361_BTECH 7th Jan 2020 Shift 1
        </option>
        <option value="3985">
          40503612_B PLANNING AND B ARCH 6th Jan 2020 Shift 2 Set 2
        </option>
        <option value="3984">
          4050366_B ARCH 6th Jan 2020 Shift 2 Set 2
        </option>
        <option value="3983">
          4050369_B ARCH 6th Jan 2020 Shift 1 Set 2
        </option>
        <option value="327">
          PAPER 1 EHG 11th Jan SHIFT 2
        </option>
        <option value="326">
          PAPER 1 EHG 11th Jan SHIFT 1
        </option>
        <option value="325">
          PAPER 1 EHG 10th Jan SHIFT 2
        </option>
        <option value="324">
          PAPER 1 EHG 12th Jan SHIFT 1
        </option>
        <option value="323">
          PAPER 1 EHG 12th Jan SHIFT 2
        </option>
        <option value="322">
          PAPER 1 EHG 10th Jan SHIFT 1
        </option>
        <option value="321">
          PAPER 1 EHG 9th Jan SHIFT 2
        </option>
        <option value="320">
          PAPER II EHG 8th Jan SHIFT 2
        </option>
        <option value="319">
          PAPER 1 EHG 9th Jan SHIFT 1
        </option>
        <option value="318">
          PAPER II EHG 8th Jan SHIFT 1
        </option>
        <option value="317">
          PAPER 1 EHG 12th  April SHIFT 1
        </option>
        <option value="316">
          PAPER 1 EHG 12th  April SHIFT 2
        </option>
        <option value="315">
          PAPER 1 EHG 10th  April SHIFT 1
        </option>
        <option value="314">
          PAPER 1 EHG 10th  April SHIFT 2
        </option>
        <option value="313">
          PAPER II EHG 7th April SHIFT 1
        </option>
        <option value="312">
          PAPER 1 EHG 9th  April SHIFT 1
        </option>
        <option value="311">
          PAPER 1 EHG 9th  April SHIFT 2
        </option>
        <option value="310">
          PAPER 1 EHG 8th  April SHIFT 2
        </option>
        <option value="309">
          PAPER II EHG 7th  April SHIFT 2
        </option>
        <option value="308">
          PAPER 1 EHG 8th  April SHIFT 1
        </option>
        <option value="299">
          PAPER 1 08.04.2019 1st SHIFT
        </option>
        <option value="169">
          PAPER 2 08-01-2019 EVENING
        </option>
        <option value="163">
          PAPER 2 08-01-2019 MORNING
        </option>
        <option value="161">
          PAPER 1 12-01-2019 EVENING
        </option>
        <option value="155">
          PAPER 1 12-01-2019 MORNING
        </option>
        <option value="153">
          PAPER 1 11-01-2019 EVENING
        </option>
        <option value="151">
          Paper 1 15-04-18
        </option>
        <option value="150">
          PAPER 1 10-01-2019
        </option>
        <option value="148">
          PAPER 1 09-01-2019 MORNING
        </option>
        <option value="146">
          PAPER 1 10-04-16
        </option>
        <option value="145">
          PAPER 1 03-04-16
        </option>
        <option value="144">
          PAPER 1 09-04-17
        </option>
        <option value="143">
          PAPER 1 03-04-17
        </option>
        <option value="140">
          PAPER 1 16-04-18 MORNING
        </option>
        <option value="138">
          PAPER1 15-04-18 MORNING
        </option>
        <option value="135">
          PAPER 2
        </option>
        <option value="133">
          Paper1
        </option>
        <option value="1">
          Paper 1 15-Apr-2018 (Evening)
        </option>



                 </select>

                 <Link href="/jee_mains_paper/student_login_form"></Link><button className='border font-bold text-xl text-white border-[#2e6da4]  ml-10 w-[80%] h-[40px] mt-8 bg-[#337ab7]'>START MOCK TEST</button> 
                 <div className='mt-8  flex justify-center text-lg ml-10 w-[80%]'>For NTA Mock Tests of December 2018 onwards, please click here</div>

              
            </form>
        </div>

        <div className='text-center mt-10 text-3xl text-white'>Welcome to <span className="font-bold text-[#f7931e] ">Patanjali Career Acadmemy</span>, Test practice Centre</div>
         <div className=' border-t border-white ml-12 mr-12 mt-12 text-2xl text-white'>
            <div className='ml-10 mt-6'>This Mock Test is to familiarize the students about processes of Computer Based Test (CBT), candidate can understand various processes of Computer Based Test (CBT) with the available mock test.</div>
            </div>
    
    </div> );
}
 
export default Front_Page_Form;