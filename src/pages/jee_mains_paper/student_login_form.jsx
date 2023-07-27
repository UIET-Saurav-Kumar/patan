import Navbar from "../../components/jee_mains/navbar";
import NavbarImg from "../../components/jee_mains/NavbarImg";
import Login_Cand_Detail from "../../components/login_page/login_cand_detail";
import Footer from "../../components/jee_mains/footer";
import Login_Form from "../../components/login_page/login_form";
const Student_Login_Form = () => {
    return ( <div>
        <Navbar />
        <NavbarImg />
        <Login_Cand_Detail/>
         <Login_Form />
         <Footer/>

    </div> );
}
 
export default Student_Login_Form;