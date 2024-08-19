import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description } = job;

    return (
        <div className='bg-base-100 shadow-lg rounded-lg flex flex-col gap-4 p-10'>
            {/* Logo Section */}
            <div className="w-24 h-24 flex justify-center items-center mb-4">
                <img src={logo} alt="Company Logo" className="w-full h-full object-contain" />
            </div>

            <h1 className="text-[#474747] text-2xl font-extrabold font-['Manrope']">{job_title}</h1>

            <div className="text-[#757575] text-xl font-semibold font-['Manrope']">{company_name}</div>

            <div className="w-1/2 flex gap-4 mb-4">
                <button className="w-1/2 px-5 py-2.5 rounded border border-[#7E90FE] text-[#7E90FE] text-[16px] font-['Manrope'] font-extrabold">
                    {remote_or_onsite}
                </button>
                <button className="w-1/2 px-5 py-2.5 rounded border border-[#7E90FE] text-[#7E90FE] text-[16px] font-['Manrope'] font-extrabold">
                    {job_type}
                </button>
            </div>

            {/* Job Description */}
            <div className="flex items-center gap-2 text-base text-[#757575] font-['Manrope'] mb-4">
                <CiLocationOn className="text-xl" />
                <p className="text-[#757575] text-xl font-semibold font-['Manrope']">{location}</p>

                <RiMoneyDollarCircleLine className="ml-10"/>
                <div className="text-[#757575] text-xl font-semibold font-['Manrope']">Salary : {salary}</div>
            </div>

            {/* Actions */}
            <div className="flex justify-start">
                <button className="btn btn-primary">Apply Now</button>
            </div>
        </div>
    );
};

export default Job;
