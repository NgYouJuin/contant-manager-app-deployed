import axios from "axios";
import Layout from "components/Layout";
import ResourceLabel from "components/ResourceLabel";
import Link from "next/link";
// import {useRouter } from "next/router"

const ResourceDetail = ({resourceId, resource}) => {
    // const router = useRouter();

    // if(router.isFallback){
    //     return <div>Loading Data!</div>
    // }

    const activeResource = () => {
        axios.patch("/api/resources", {...resource, status: "active"})
          .then(res => {
              console.log(res)
              alert("Resource has been activated!")
              location.reload()
            })
            .catch(err => {
                console.log(err)
                alert("Cannot active the resource!")
            })
          
      }
    return (

        <Layout>
            <section className="hero ">
                <div className="hero-body">
                <div className="container">
                    <section key={resource.id} className="section">
                    <div className="columns">
                        <div className="column is-8 is-offset-2">
                        <div className="content is-medium">
                            <h2 className="subtitle is-4">{resource.createdAt}
                            <ResourceLabel status={resource.status}/>
                            </h2>
                            <h1 className="title">{resource.title}</h1>
                            <p>{resource.description}</p>
                            <p>Time to finish: {resource.timeToFinish} min</p>
                            { resource.status === "inactive" &&
                            <>
                                <Link href={`/resources/${resource.id}/edit`}>
                                    <a className="button is-warning">
                                        Update
                                    </a>
                                </Link>
                                <button onClick={activeResource} className="button is-success ml-1">
                                    Activate
                                </button>
                            </>
                            }
                        </div>
                        </div>
                    </div>
                    </section>
                </div>
                </div>
            </section>
        </Layout>
    )
}

// ResourceDetail.getInitialProps = async ({query}) => {
//   const dataRes = await fetch(`http://localhost:3001/api/resources/${query.id}`);
//   const data = await dataRes.json();

//   return {
//     resource: data
//   }
// }

// export async function getStaticPaths() {
//     const resData = await fetch(`http://localhost:3001/api/resources`);
  
//     const data = await resData.json();

//     const paths = data.map(resource => {
//         return {
//             params: {id: resource.id}
//         }
//     })
//     return{
//         paths,
//         // means that other routes should resolve into 404 page
//         fallback: true
//     }
// }



export async function getServerSideProps({params}) {

    const resData = await fetch(`${process.env.API_URL}/resources/${params.id}`);
  
    const data = await resData.json();
  
    return {
      props: {
          resourceId: params.id,
          resource: data
      }
    }
  }
  

export default ResourceDetail;