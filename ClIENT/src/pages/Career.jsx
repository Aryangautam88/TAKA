import React from "react";
import "./Career.css";
import heroImg from "../assets/hero-pattern.png";

const jobs = [
    {
        id: 1,
        title: "Outreach Specialist",
        category: "Sales & Marketing",
        location: "Indore, M.P",
        type: "Full Time",
        link: "https://forms.gle/YOUR_FORM_LINK"
    },
    {
        id: 2,
        title: "Production Designer",
        category: "Sales & Marketing",
        location: "Indore, M.P",
        type: "Full Time",
        link: "https://forms.gle/YOUR_FORM_LINK"
    },
    {
        id: 3,
        title: "Sales Executive",
        category: "Sales & Marketing",
        location: "Indore, M.P",
        type: "Full Time",
        link: "https://forms.gle/YOUR_FORM_LINK"
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
                <h1 className="card-hiring-title">WE ARE HIRING !</h1>

                {/* 🔥 CARDS */}
                <div className="card-jobs-container">
                    {jobs.map((job) => (
                        <div className="card-job-card" key={job.id}>

                            {/* 🔥 TOP WITH IMAGE */}
                            <div className="card-job-top">

                                <span className="card-job-number">Job {job.id}</span>

                                <h3 className="card-job-category">Sales & Marketing</h3>

                                <p className="card-job-desc">
                                    Glaebam ipsam nunc at hic reponat nam dicta lius te est iriure
                                    in aut stante inceptos scandalum germaniafioniam vincere risus
                                    Glaebam ipsam nunc at hic reponat nam dicta lius te est iriure...
                                </p>

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
                                {/* <div className="card-arrow"></div> */}
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