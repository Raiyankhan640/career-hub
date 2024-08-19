import React from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import Jobs from '../FeaturedJobs/Jobs';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <Jobs></Jobs>
        </>
    );
};

export default Home;