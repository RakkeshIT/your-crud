import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true },
    companyName: { type: String, required: true },
    location: { type: String, required: true },
    jobType: { type: String, required: true },
    salaryRange: { type: String, required: true },
    description: { type: String, required: true },
    skills: { type: Array, required: true },
    applicationLink: { type: String, required: true },
    priority: { type: String, required: true },
    applyBy: { type: String, required: true }
}, { timestamps: true })

export const Job = mongoose.model("Job", jobSchema)