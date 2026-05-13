import { Router } from 'express'
import { Job } from '../models/job.js';

const router = Router();

router.post('/create-job', async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const job = await Job.insertMany(data)
        return res.status(200).json({ message: "Job created successfully!", job })
    } catch (error) {
        return res.status(500).json({ message: "Interval Server Error!", error: error.message })
    }
})
// @GET /api/job/view job
router.get('/view-job', async (req, res) => {
    try {
        const jobs = await Job.find();
        if (!jobs || jobs.length === 0) {
            return res.status(404).json({ message: "Jobs not found!" })
        }

        return res.status(200).json({ message: "Jobs fetched successfully!", jobs })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
})


// @DELETE /api/job/delete/:id

router.delete('/delete-job/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ message: "Please provide Job ID" })
        }

        const job = await Job.findByIdAndDelete({ _id: id })

        if (!job) {
            return res.status(404).json({ message: "Job not found!" })
        }

        return res.status(200).json({ message: "Job deleted successfully!", job })

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
})

// @GET /api/job/edit-view/:id

router.get('/edit-view/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ message: "Please provide Job ID" })
        }

        const job = await Job.findById({ _id: id })

        if (!job) {
            return res.status(404).json({ message: "Job not found!" })
        }

        return res.status(200).json({ message: "Job fetched successfully!", job })

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
})

// @PUT /api/job/edit/:id

router.put('/edit/:id', async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        const { id } = req.params

        if (!id) {
            return res.status(400).json({ message: "Id is required" })
        }

        const job = await Job.findByIdAndUpdate({ _id: id }, data, { new: true })

        if (!job) {
            return res.status(404).json({ message: "Job not found!" })
        }

        return res.status(200).json({ message: "Job updated successfully", job })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
})
export default router;