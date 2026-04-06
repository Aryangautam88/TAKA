import React from "react";
import "./Career.css";
import heroImg from "../assets/hero-pattern.png";

const jobs = [
    {
        id: 1,
        title: "Outreach Specialist",
        category: "PR & Outreach",
        location: "Indore, M.P",
        type: "Full Time",
        link: "https://forms.gle/ehBSZDHh86WY922h8",
        desc: "Identify and connect with influencers across platforms like Instagram, YouTube, and LinkedIn. Build strong relationships with creators, manage outreach campaigns, and onboard influencers for brand collaborations. Strong communication and negotiation skills required."
    },
    {
        id: 2,
        title: "Production",
        category: "Production",
        location: "Indore, M.P",
        type: "Full Time",
        link: "https://forms.gle/3NKW7Ed2cPTQ1RSC7",
        desc: "Design engaging creatives for influencer campaigns including social media posts, ads, and branding assets. Work closely with marketing and content teams to maintain visual consistency. Proficiency in tools like Figma, Photoshop, or Illustrator is required."
    },
    {
        id: 3,
        title: "Sales Executive",
        category: "Graphic Designing",
        location: "Indore, M.P",
        type: "Full Time",
        link: "https://forms.gle/zHLcno8MLTqVU32J9",
        desc: "Drive business growth by acquiring new brand clients and managing partnerships. Pitch influencer marketing solutions, close deals, and maintain client relationships. Strong sales mindset and communication skills are essential.Proficiency in tools  Illustrator is required."
    }
];

const Career = () => {
    return (
        <div>
            <div className="career">

                {/* 🔥 TOP HEADING */}
                <div className="career-header">
                    <h1 className="career-title">WORK WITH US</h1>

                    <div className="career-nav">
                        <span>Career</span>
                        <span>Apply Now</span>
                        <span>Work With Us</span>
                    </div>
                </div>

                {/* 🔥 MAIN IMAGE (Banner) */}
                <div className="career-banner">
                    {/* Image background CSS se aa rha hai */}
                </div>

                {/* 🔥 BOTTOM IMAGE SPACE (placeholder) */}


            </div>

            {/*------------------------------- job cards ------------------------*/}

            <div className="card-career">

                {/* 🔥 HEADING */}
                <h1 className="card-hiring-title">WE ARE HIRING </h1>

                {/* 🔥 CARDS */}
                <div className="card-jobs-container">
                    {jobs.map((job) => (
                        <div className="card-job-card" key={job.id}>

                            {/* 🔥 TOP */}
                            <div className="card-job-top">

                                <span className="card-job-number">Job {job.id}</span>

                                {/* ✅ Dynamic Category */}
                                <h3 className="card-job-category">{job.category}</h3>

                                {/* ✅ Title add kar (important) */}
                                <h2 className="card-job-title">{job.title}</h2>

                                {/* ✅ Dynamic Description */}
                                <p className="card-job-desc">
                                    {job.desc}
                                </p>

                                {/* ✅ Meta Info */}
                                <div className="card-job-meta">
                                    <span className="card-location">📍 {job.location}</span>
                                    <span className="card-type">{job.type}</span>
                                </div>

                            </div>

                            {/* 🔥 BOTTOM */}
                            <div
                                className="card-job-bottom"
                                onClick={() => window.open(job.link, "_blank")}
                            >
                                <h2 className="card-apply-text">Apply Now</h2>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            {/*-------------------------------- Last section------------------------  */}

            <section className="hero-L">
                <div className="hero__container-L">

                    {/* LEFT CONTENT */}
                    <div className="hero__content-L">
                        <h1 className="hero__title-L">
                            Lorem Ipsum Is <span>Simply</span>
                        </h1>

                        <p className="hero__desc-L">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>

                        <button className="hero__btn-L">
                            Get Started →
                        </button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="hero__image-L">
                        <img src={heroImg} alt="design" />
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Career;