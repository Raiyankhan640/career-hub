import { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [visibleCount, setVisibleCount] = useState(4); 

    useEffect(() => {
        fetch('/jobs.json') 
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 2);
    };

    return (
        <div className='mb-16'>
            <div className='mb-4'>
                <div className="mb-4 text-center text-[#191919] text-5xl font-extrabold font-['Manrope']">Featured Jobs</div>
                <div className="text-center text-[#757575] text-base font-medium font-['Manrope'] leading-relaxed">
                    Explore thousands of job opportunities with all the information you need. It's your future.
                </div>
            </div>
            <div className='container mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 my-2 gap-8'>
                {jobs.slice(0, visibleCount).map((job) => (
                    <Job key={job.id} job={job} />
                ))}
            </div>
            {visibleCount < jobs.length && (
                <div className="text-center mt-10 mb-14">
                    <button
                        onClick={handleShowMore}
                        className="btn btn-primary bg-gray-900 hover:bg-blue-950 hover:font-bold"
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Jobs;
