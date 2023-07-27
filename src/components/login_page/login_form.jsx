import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const Login_Form = () => {
    const {handleSubmit , register , reset } = useForm()
    const router = useRouter()

    const  onSubmit = (e) =>
    {
        console.log(e);
        reset();
        router.push("/jee_mains_paper/instruction_page")
    }

    return ( <div className="bg-[#012B55] h-[500px] ">
        <div className='flex justify-center '>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col bg-[url(https://www.nta.ac.in/img/texture-frozen-window.jpg)] mt-10 w-[30%] h-[425px] '>
               
                <h1 className='text-black ml-6 text-2xl border-b pb-6 mt-10'>Login (Demo)</h1>
                <label className='ml-6 text-lg mb-1'>Username</label>
                <input type='text ' className='border  ml-4 w-[91%] h-[40px] bg-[#eee]'
                 {...register('UserName')} />

                <label className='ml-6 mt-6 text-lg mb-1'>passward</label>
                <input type='password' className='border  ml-4 w-[91%] h-[40px] bg-[#eee] '
                 {...register('passdword')} />

                 <button className='border font-bold text-xl text-white border-[#2e6da4]  ml-4 w-[91%] h-[50px] mt-8 bg-[#337ab7]'>LOGIN</button>
                 <div className='mt-1 flex justify-center text-medium font-bold text-[#f7931e]'>Click Login To proceed</div>
              
            </form>
        </div>
    </div> );
}
 
export default Login_Form;