import { useRouter } from "next/router";





const id = ({data}) => {

    console.log(data)

    const route = useRouter();

   

    return ( <div>
        this is a dynamic page {route.query.id}
    </div> );
}
 
export default id;