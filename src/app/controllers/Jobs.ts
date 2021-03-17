import * as express from 'express';
import { Jobs } from "../models/Jobs";

export default class JobsController {

    public getJobs = async (_request: express.Request, response: express.Response): Promise<void> => {
        await Jobs.findOne({
            where: {
                company: 'Google'
            }
        }).then(res => {
            console.log(res);
            response.json(res);
        }).catch(error => {
            console.log(`Error: ${error}`);
            response.status(500).json({
                message: 'Issue finding Node!'
            })
        })
    }

     public createJob = async (req: express.Request, res: express.Response): Promise<void> => {
         await Jobs.createOne({
            company: req.body.company,
            title: req.body.title,
            location: req.body.location,
            salary: req.body.salary,
            seniority: req.body.seniority,
            topApplicant: req.body.topApplicant
        })
            .then(job => {
                res.status(201).json(job);
            })
            .catch(error => {
               res.status(500).json({
                   message: 'Creating job node failed!'
               });
               console.error(error);
            });
    }

}