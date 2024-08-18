import iconImage from '../../assets/icons/icons.png';

const Footer = () => {
    // Different lists for each section
    const companyLinks = ["About Us", "Work", "Latest News", "Careers"];
    const supportLinks = ["Help Center", "Privacy Policy", "Terms of Service", "FAQs"];
    const resourcesLinks = ["Blog", "Developers", "Guides", "Community"];
    const contactLinks = ["Contact Us", "Support", "Locations", "Partnerships"];

    return (
        <footer className="p-10 bg-gray-900 text-white h-auto">
            <div className="container mx-auto grid grid-cols-6 gap-4 mb-6 mt-8">

                <div className="col-span-2 flex flex-col gap-4">
                    <div className="text-white text-[32px] font-extrabold font-['Manrope'] mb-4">CareerHub</div>
                    <div className="w-[300px] text-white/70 text-base font-normal font-['Manrope'] leading-[27px] mb-6">There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.</div>
                    <div className="w-[156px] h-[42px] relative mb-4">
                        <img src={iconImage} alt="icon" className="" />
                    </div>
                    <div className="mt-auto">
                        <hr className="border-t border-white/20" />
                    </div>
                </div>

                <div className="col-span-1 flex flex-col justify-between">
                    <div>
                        <div className="text-white text-xl font-semibold font-['Manrope'] mb-2">Company</div>
                        <div className="text-white/70 text-base font-normal font-['Manrope'] leading-8 flex flex-col space-y-1">
                            {companyLinks.map((link, index) => (
                                <span key={index}>{link}</span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-auto">
                        <hr className="border-t border-white/20" />
                    </div>
                </div>

                <div className="col-span-1 flex flex-col justify-between">
                    <div>
                        <div className="text-white text-xl font-semibold font-['Manrope'] mb-2">Support</div>
                        <div className="text-white/70 text-base font-normal font-['Manrope'] leading-8 flex flex-col space-y-1">
                            {supportLinks.map((link, index) => (
                                <span key={index}>{link}</span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-auto">
                        <hr className="border-t border-white/20" />
                    </div>
                </div>

                <div className="col-span-1 flex flex-col justify-between">
                    <div>
                        <div className="text-white text-xl font-semibold font-['Manrope'] mb-2">Resources</div>
                        <div className="text-white/70 text-base font-normal font-['Manrope'] leading-8 flex flex-col space-y-1">
                            {resourcesLinks.map((link, index) => (
                                <span key={index}>{link}</span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-auto">
                        <hr className="border-t border-white/20" />
                    </div>
                </div>

                <div className="col-span-1 flex flex-col justify-between">
                    <div>
                        <div className="text-white text-xl font-semibold font-['Manrope'] mb-2">Contact</div>
                        <div className="text-white/70 text-base font-normal font-['Manrope'] leading-8 flex flex-col space-y-1">
                            {contactLinks.map((link, index) => (
                                <span key={index}>{link}</span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-auto">
                        <hr className="border-t border-white/20" />
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
