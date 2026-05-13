import { useEffect, useState } from "react"
import axios from 'axios'
import { DeleteButton, EditButton } from "../components/common/Button"
import { toast } from "react-toastify"

const View = () => {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    ViewJobs()
  }, [])

  const ViewJobs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/job/view-job')
      setJobs(response.data.jobs)
    } catch (error) {
      console.log(error)
    }
  }

  // Delete job

  const deleteJob = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/job/delete-job/${id}`)
      if (response.status === 200) {
        toast.success(response.data.message)
        ViewJobs()
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <div className="p-4">
      <div className="overflow-x-auto w-full relative shadow-lg rounded-lg overflow-hidden bg-white">

        <table className="border-collapse min-w-full p-4 text-sm">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr className="">
              <th className="border-b border-gray-200 py-2 px-4 text-left whitespace-nowrap">
                S.No
              </th>
              <th className="border-b border-gray-200 py-2 px-4 text-left whitespace-nowrap">Job Title</th>
              <th className="border-b border-gray-200 py-2 px-4 text-left whitespace-nowrap">Company Name</th>
              <th className="border-b border-gray-200 py-2 px-4 text-left whitespace-nowrap">Location</th>
              <th className="border-b border-gray-200 py-2 px-4 text-left whitespace-nowrap">Job Type</th>
              <th className="border-b border-gray-200 py-2 px-4 text-left whitespace-nowrap">Salary Range</th>
              <th className="border-b border-gray-200 py-2 px-4 text-left whitespace-nowrap">Description</th>
              <th className="border-b border-gray-200 py-2 px-4 text-left whitespace-nowrap">Skills</th>
              <th className="border-b border-gray-200 py-2 px-4 text-left whitespace-nowrap">Application Link</th>
              <th className="border-b border-gray-200 py-2 px-4 text-left whitespace-nowrap">Priority</th>
              <th className="border-b border-gray-200 py-2 px-4 text-left whitespace-nowrap">Apply By</th>
              <th className="border-b border-gray-200 py-2 px-4 text-left whitespace-nowrap">Edit</th>
              <th className="border-b border-gray-200 py-2 px-4 text-left whitespace-nowrap">Delete</th>
            </tr>
          </thead>
          <tbody className="text-left">
            {
              jobs.map((job, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-200">
                  <td className=" border-b border-gray-200 py-2 px-4 whitespace-nowrap text-center">{index + 1}</td>
                  <td className="border-b border-gray-200 py-2 px-4 whitespace-nowrap">{job.jobTitle}</td>
                  <td className="border-b border-gray-200 py-2 px-4 whitespace-nowrap">{job.companyName}</td>
                  <td className="border-b border-gray-200 py-2 px-4 whitespace-nowrap">{job.location}</td>
                  <td className="border-b border-gray-200 py-2 px-4 whitespace-nowrap">{job.jobType}</td>
                  <td className="border-b border-gray-200 py-2 px-4 whitespace-nowrap">{job.salaryRange}</td>
                  <td className="border-b border-gray-200 py-2 px-4 whitespace-nowrap">{job.description}</td>
                  <td className="border-b border-gray-200 py-2 px-4 whitespace-nowrap">
                    {
                      job.skills.map((skill, index) => (
                        <span className="bg-blue-200 text-blue-800 px-2 text-sm rounded-lg ml-2">{skill}</span>
                      ))
                    }
                  </td>
                  <td className="border-b border-gray-200 py-2 px-4 text-center whitespace-nowrap">
                    <a href={job.applicationLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-center">
                      Link
                    </a>
                  </td>
                  <td className={`border-b border-gray-200 py-2 px-4 whitespace-nowrap ${job.priority === "High" ? "text-red-500" : job.priority === "Medium" ? "text-yellow-500" : "text-green-500"
                    }`}>{job.priority}</td>
                  <td className="border-b border-gray-200 py-2 px-4 whitespace-nowrap">{job.applyBy}</td>
                  <td className="border-b border-gray-200 py-2 px-4 whitespace-nowrap">
                    <EditButton text="Edit" href={`/edit/${job._id}`} />
                  </td>
                  <td className="border-b border-gray-200 py-2 px-4 whitespace-nowrap">
                    <DeleteButton onClick={() => deleteJob(job._id)} text="Delete" />
                  </td>

                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default View