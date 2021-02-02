import { neogma } from "../../server";

import { ModelFactory, NeogmaInstance } from "neogma";

export type JobsPropertiesI = {
    company: string;
    title: string;
    location: string;
    salary: string;
    seniority: string;
    topApplicant: boolean
}

export interface JobsRelatedNodesI {}

export type JobsInstance = NeogmaInstance<JobsPropertiesI, JobsRelatedNodesI>

export const Jobs = ModelFactory<JobsPropertiesI, JobsRelatedNodesI>(
    {
        label: 'Job',
        primaryKeyField: 'title',
        schema: {
            company: {
                type: 'string',
                minLength: 1,
                required: true,
            },
            title: {
                type: 'string',
                minLength: 1,
                required: true,
            },
            location: {
                type: 'string',
                minLength: 1,
                required: true,
            },
            salary: {
                type: 'string',
                minLength: 1,
                required: true,
            },
            seniority: {
                type: 'string',
                minLength: 1,
                required: true,
            },
            topApplicant: {
                type: 'boolean',
            }
        }
    },
    neogma,
)