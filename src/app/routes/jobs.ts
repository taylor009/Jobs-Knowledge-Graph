import { Router } from 'express';
import JobsController from "../controllers/Jobs";

const router = Router();

const controller = new JobsController

router.get('/jobs', controller.getJobs);

router.post('/jobs/create', controller.createJob)

export default router;
