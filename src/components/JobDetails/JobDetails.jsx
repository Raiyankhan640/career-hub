import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const job = jobs.find((job) => job.id === idInt);

    if (!job) {
        return <div>Job not found</div>;
    }

    
    return (
        <div className="container mx-auto p-6">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <div className="flex items-center mb-6">
                    <img src={job.logo} alt={`${job.company_name} logo`} className="h-16 w-16 object-contain mr-4"/>
                    <div>
                        <h1 className="text-2xl font-bold">{job.job_title}</h1>
                        <p className="text-gray-600">{job.company_name}</p>
                    </div>
                </div>

                <div className="mb-6">
                    <p><strong>Location:</strong> {job.location}</p>
                    <p><strong>Job Type:</strong> {job.job_type}</p>
                    <p><strong>Remote or Onsite:</strong> {job.remote_or_onsite}</p>
                    <p><strong>Salary:</strong> {job.salary}</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Job Description</h2>
                    <p>{job.job_description}</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Job Responsibilities</h2>
                    <p>{job.job_responsibility}</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Educational Requirements</h2>
                    <p>{job.educational_requirements}</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Experience</h2>
                    <p>{job.experiences}</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                    <p><strong>Phone:</strong> {job.contact_information.phone}</p>
                    <p><strong>Email:</strong> {job.contact_information.email}</p>
                    <p><strong>Address:</strong> {job.contact_information.address}</p>
                </div>

                {/* Apply Now Button */}
                <div className="text-center">
                    <button 
                        className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600"
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
