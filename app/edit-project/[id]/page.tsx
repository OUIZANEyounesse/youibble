import { ProjectInterface } from "@/common.types";
import Modal from "@/components/Modal";
import ProjectForm from "@/components/form/ProjectForm";
import { getProjectDetails } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";


const EditProject = async ({params: {id}}:{params:{id: string}}) => {
    const session = await getCurrentUser();
    if(!session?.user) redirect('/')

    const result = await getProjectDetails(id) as {project?: ProjectInterface};
  return (
    <Modal>
        <h3 className="modal-head-text">Edit Project</h3>
        <ProjectForm type="update" session={session} project={result?.project}/>
      
    </Modal>
  )
}

export default  EditProject ;
