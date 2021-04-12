import Layout from "components/Layout"
import ResourceForm from "components/ResourceForm"
import axios from "axios";
import {useRouter } from "next/router"

const ResourceEdit = ({resource}) => {
    const router = useRouter();

    const updateResource = (FormData) => {
        axios.patch("/api/resources", FormData)
        .then(res => {
            router.push("/")})
        .catch(err => {
            console.log(err)
            alert(err?.response?.data)
        })
    }

    return (
        <Layout>
            <div className="container">
                <div className="columns">
                <div className="column is-8 is-offset-2">
                    <ResourceForm initialData={resource} onFormSubmit={updateResource}/>
                </div>
                </div>
            </div>
        </Layout>
    )
}

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
  

export default ResourceEdit