import Link from "next/link"

export const getStaticProps = async () => {
    const res = await fetch("http://api.tvmaze.com/search/shows?q=golden%20girls")
    const show = await res.json()

    return {
        props : {
            show,
        }
    }

}



const Api = ({show : data}) => { 

    console.log(data);
    

    
    return ( 
    <div>
        {data.map((m)=> {
            return(

                <Link href={`/${m.show.id}`} key={m.show.id}><div  >
                    {m.show.id}
                </div>
                </Link>
            )
        })}
    </div>
    
     );
} 
 
export default Api;