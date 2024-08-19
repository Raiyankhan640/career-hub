import accountImage from '../../assets/icons/accounts.png'
import creativeImage from '../../assets/icons/creative.png'
import marketingImage from '../../assets/icons/marketing.png'

const JobCategory = () => {

    const jobCategoryData = [{ image: accountImage, title: "Account & Finance", text: "300 Jobs Available" }, { image: creativeImage, title: "Creative Design", text: "100+ Jobs Available" }, { image: marketingImage, title: "Marketing & Sales", text: "150 Jobs Available" }, { image: accountImage, title: "Engineering Job", text: "224 Jobs Available" }];

    return (
        <div className='container mx-auto mb-32'>
            <div className="mb-8">
                <div className="mb-4 text-center text-[#191919] text-5xl font-extrabold font-['Manrope']">Job Category List</div>
                <div className="text-center text-[#757575] text-base font-medium font-['Manrope'] leading-relaxed">Explore thousands of job opportunities with all the information you need. Its your future</div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {jobCategoryData.map((data, index) => (
                    <div
                        key={index}
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            background: 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)', 
                            borderRadius: 8 
                        }} 
                        className='h-64 p-9 flex flex-col justify-between'
                    >
                        <div className='p-4 mb-4'>
                            <img src={data.image} alt={`${data.title} Icon`} />
                        </div>
                        <h1 className="text-[#474747] text-xl font-extrabold font-['Manrope'] mb-2">{data.title}</h1>
                        <p className="text-start text-neutral-400 text-base font-medium font-['Manrope'] leading-relaxed">{data.text}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default JobCategory;