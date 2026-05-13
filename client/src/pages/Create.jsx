import { LuAnnoyed } from "react-icons/lu";
import { BiSolidBoltCircle } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { Submit } from "../components/common/Button";
import { FaThermometerEmpty, FaUserCircle } from "react-icons/fa";
import { BsCalendar2RangeFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { FaLink } from "react-icons/fa";
// API
import axios from 'axios';

// Alert Toastify
import { toast } from 'react-toastify';

const Create = () => {
  const [form, setForm] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    jobType: '',
    salaryRange: '',
    description: '',
    skill: '',
    applicationLink: '',
    priority: '',
    applyBy: '',
  })

  const [skills, setSkills] = useState([])

  // Error Handling
  const [error, setError] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    jobType: '',
    salaryRange: '',
    description: '',
    skills: [],
    applicationLink: '',
    priority: '',
    applyBy: ''
  })

  // Add Skills
  const addSkills = (e) => {
    e.preventDefault()
    if (form.skill.trim() === "") return;
    setSkills([...skills, form.skill])
    console.log(skills)
    setForm({ ...form, skill: '' })
  }

  // Remove Skill
  const removeSkills = (index) => {
    setSkills(
      (prev) => prev.filter((_, id) => id !== index)
    )
  }

  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })

    setError({
      ...error,
      [name]: ''
    })
  }

  const handleSubmit = async () => {

    const newErrors = {}

    if (form.jobTitle === "") {
      newErrors.jobTitle = "Please enter your job title"
    }

    if (form.companyName === "") {
      newErrors.companyName = "Please enter your company name"
    }

    if (form.location === "") {
      newErrors.location = "Please enter your location"
    }

    if (form.jobType === "") {
      newErrors.jobType = "Please enter your job type"
    }

    if (form.salaryRange === "") {
      newErrors.salaryRange = "Please enter your salary range"
    }

    if (form.description === "") {
      newErrors.description = "Please enter your description"
    }

    if (skills.length === 0) {
      newErrors.skills = "Please enter your skill"
    }

    if (form.applicationLink === "") {
      newErrors.applicationLink = "Please enter your application link"
    }

    if (form.priority === "") {
      newErrors.priority = "Please enter your priority"
    }

    if (form.applyBy === "") {
      newErrors.applyBy = "Please enter apply by date"
    }

    // Set all errors once
    setError(newErrors)

    // Stop API if validation fails
    if (Object.keys(newErrors).length > 0) {
      return
    }

    const data = {
      ...form,
      skills
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/job/create-job",
        data
      )

      if (res.status === 200) {
        toast.success("Data Saved Successfully!")
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
      <div className="p-4">
        <h1 className="text-md md:text-2xl font-bold mb-4 text-blue-500">
          Please Enter Your Current Company Details
        </h1>
        <p className="text-gray-600">
          This is the Create page. You can add your company details here.
        </p>

        {/* Form */}

        {/* Company Name */}
        <div className=" mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Col - 1 */}
          <div >
            <div className="relative">
              <input
                type="text"
                value={form.jobTitle}
                name="jobTitle"
                onChange={handleChange}
                className="peer py-2.5 sm:py-3 px-4 ps-11 block w-full bg-surface border-1 border-gray-200 rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:bg-layer focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Job Titile"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <BiSolidBoltCircle className={`${error.jobTitle ? "text-red-600" : "text-blue-600"}`} />
              </div>
            </div>

            {error.jobTitle && (
              <p className="text-red-600 text-sm">{error.jobTitle}</p>
            )}
          </div>
          {/* Col - 2 */}
          <div>
            <div className="relative">
              <input
                type="text"
                value={form.companyName}
                name="companyName"
                onChange={handleChange}
                className="peer py-2.5 sm:py-3 px-4 ps-11 block w-full bg-surface border-1 border-gray-200 rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:bg-layer focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Company name"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <FaUserCircle className={`${error.companyName ? "text-red-600" : "text-blue-600"}`} />
              </div>
            </div>
            {error.companyName && (
              <p className="text-red-600 text-sm">{error.companyName}</p>
            )}
          </div>
        </div>

        {/* Location Name & Job Type & Salary */}
        <div className=" mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Col - 1 */}
          <div >

            <div className="relative">
              <input
                type="text"
                value={form.location}
                name="location"
                onChange={handleChange}
                className="peer py-2.5 sm:py-3 px-4 ps-11 block w-full bg-surface border-1 border-gray-200 rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:bg-layer focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Location Name"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <FaLocationDot className={`${error.location ? "text-red-600" : "text-blue-600"}`} />
              </div>
            </div>
            {error.location && (
              <p className="text-red-600 text-sm">{error.location}</p>
            )}
          </div>
          {/* Col - 2 */}
          <div className="max-w-sm w-full">
            <div>
              <select
                id="hs-select-label"
                value={form.jobType}
                name="jobType"
                onChange={handleChange}
                className="py-3 px-4 pe-9 block w-full bg-layer border-1 border-gray-200 rounded-lg text-sm text-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
              >
                <option selected>Job Type</option>
                <option value='Full Time'>Full Time</option>
                <option value='Part Time'>Part Time</option>
                <option value='Remote'>Remote</option>
              </select>
            </div>

            {
              error.jobType && (
                <p className="text-red-600 text-sm">{error.jobType}</p>
              )
            }
          </div>

          {/* Col - 3 */}
          <div >
            <div className="relative">
              <input
                type="text"
                value={form.salaryRange}
                name="salaryRange"
                onChange={handleChange}
                className="peer py-2.5 sm:py-3 px-4 ps-11 block w-full bg-surface border-1 border-gray-200 rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:bg-layer focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Salary Range"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <BsCalendar2RangeFill className={`${error.salaryRange ? "text-red-600" : "text-blue-600"}`} />
              </div>
            </div>

            {error.salaryRange && (
              <p className="text-red-600 text-sm">{error.salaryRange}</p>
            )}
          </div>
        </div>

        {/* Devider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-6">Description</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Description */}
        <div className="grid grid-cols-1">
          <div className="relative">
            <textarea
              value={form.description}
              name="description"
              onChange={handleChange}
              id="hs-textarea-autoheight-to-destroy"
              className="peer p-3 sm:p-4 block w-full bg-layer border-1 border-gray-300 rounded-lg sm:text-sm text-foreground placeholder:text-transparent focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none
    focus:pt-6  
    focus:pb-2
    not-placeholder-shown:pt-6
    not-placeholder-shown:pb-2
    autofill:pt-6
    autofill:pb-2"
              placeholder="This is a textarea placeholder"
              data-hs-textarea-auto-height
            />
            <label
              htmlFor="hs-textarea-autoheight-to-destroy"
              className="absolute top-0 start-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] text-foreground peer-disabled:opacity-50 peer-disabled:pointer-events-none
peer-focus:text-xs
peer-focus:-translate-y-1.5
peer-focus:text-muted-foreground-1
peer-not-placeholder-shown:text-xs
peer-not-placeholder-shown:-translate-y-1.5
peer-not-placeholder-shown:text-muted-foreground-1"
            >
              description
            </label>
          </div>

          {error.description && (
            <p className="text-red-600 text-sm">{error.description}</p>
          )}
        </div>

        {/* Devider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-6">Skills Required</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Skills */}

        <div className="mt-4 grid grid-cols-1">
          <div className="relative">
            <input
              type="text"
              value={form.skill}
              name="skill"
              onChange={(e) => setForm({ ...form, skill: e.target.value })}
              className=" peer py-2.5 sm:py-3 px-4 pr-12 ps-11 block w-full bg-surface border-1 border-gray-200 rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:bg-layer focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Enter Required Skills"
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
              <GiSkills className={`${error.skill ? "text-red-600" : "text-blue-600"}`} />
            </div>

            <div className="absolute inset-y-0 end-5 z-10 flex items-center ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
              <button className="cursor-pointer" onClick={addSkills}>
                <CiCirclePlus className="text-2xl text-blue-500 text-bold" />
              </button>
            </div>
          </div>
          {error.skills && (
            <p className="text-red-600 text-sm">{error.skills}</p>
          )}
        </div>

        {/* Skills Displayed */}
        <div className="mt-4 bg-gray-200 rounded-md p-2">
          {skills.length > 0 ? (
            <ul className="flex gap-6 flex-wrap">
              {
                skills.map((skill, index) => (
                  <li className="bg-blue-500/10 backdrop-blur-md flex gap-3 items-center px-3 py-1 rounded-sm" key={index}>
                    <span>{skill}</span>
                    <button type="button" onClick={() => removeSkills(index)} className="cursor-pointer"><TiDelete className="text-xl text-blue-700" /></button>
                  </li>
                ))
              }
            </ul>
          ) : (
            <p className="text-center">No Skills Added</p>
          )}

        </div>
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-6">Others</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className=" mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Col - 1 */}
          <div >
            <div className="relative">
              <input
                type="text"
                value={form.applicationLink}
                name="applicationLink"
                onChange={handleChange}
                className="peer py-2.5 sm:py-3 px-4 ps-11 block w-full bg-surface border-1 border-gray-200 rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:bg-layer focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Application Link"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <FaLink className="text-blue-600" />
              </div>
            </div>
            {error.applicationLink && (
              <p className="text-red-600 text-sm">{error.applicationLink}</p>
            )}
          </div>
          {/* Col - 2 */}
          <div className="max-w-sm w-full">
            <select
              id="hs-select-label"
              value={form.priority}
              name="priority"
              onChange={handleChange}
              className="py-3 px-4 pe-9 block w-full bg-layer border-1 border-gray-200 rounded-lg text-sm text-foreground focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
            >
              <option selected>priority</option>
              <option value='High'>High</option>
              <option value='Low'>Low</option>
              <option value='Medium'>Medium</option>
            </select>

            {
              error.priority && (
                <p className="text-red-600 text-sm">{error.priority}</p>
              )
            }
          </div>

          {/* Col - 3 */}

          <div className="w-full">
            <input
              type="date"
              value={form.applyBy}
              name="applyBy"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {
              error.applyBy && (
                <p className="text-red-600 text-sm">{error.applyBy}</p>
              )
            }
          </div>


        </div>

        {/* Buttons */}

        <div className="flex items-center gap-6 mt-6">
          <Submit text="Submit" onClick={handleSubmit} />
          <Submit text="Reset" className="bg-red-500 hover:bg-red-600" />
        </div>
      </div>
    </>
  );
};

export default Create;
