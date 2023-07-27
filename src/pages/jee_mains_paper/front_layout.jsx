import Navbar from '../../components/jee_mains/navbar'
import NavbarImg from '../../components/jee_mains/NavbarImg';
import CandidateDetails from '../../components/jee_mains/condidate_details';
import Middle from '../../components/jee_mains/middle';
import Footer from '../../components/jee_mains/footer';
const Layout = () => {
    return ( <div >

        <Navbar/>
        <NavbarImg/>
        <CandidateDetails/>
        <Middle />
        <Footer />


    </div> );
}
 
export default Layout; 