import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";

const Resume = () => {

        return(
        <p className="readMore-text">
            <span className="bigger-title">Education</span>
            <hr />
            <strong>MSc. Product Design</strong>
            <span style={{float: 'right'}}>Glasgow, United Kingdom</span>
            <br/><span>University of Strathclyde</span>
            <span style={{float: 'right'}}>Sept 2024 - March 2025</span>
            <ul>
                <li>Relevant coursework: Sustainable Product Design, Design Management, Global Design, Design Methods, Design Form and Aesthetics. </li>
                <li>Key skills: Sketching and 3D Modelling, CAD (SolidWorks and Fusion).</li>
                <li>Projects :</li>
                <ul>
                    <li>Deep Vein Thrombosis (DVT) – in long flights - In the project my team and I researched about the effects and cure of DVT, and came up with different concepts, then applied the 6-3-5 design method to identify the best concept and created a flight accessory to help prevent DVT on long flights.</li>
                    <li>Redesign Cross Trainer - In this project, my team and I applied three design methods (5 Whys, Scenario-Based Design, and Design for Manufacturing and Assembly) to a company’s existing cross-trainer and recreated the product from scratch.</li>
                    <li>Cow Selective Cooling – a project undertaken with Galebreaker Limited as part of the final-year industrial project. Created a product for DARE Cows, provided a creative solution to the problem, delivered a prototype, and installed the test prototype on an end-user’s dairy farm. (NDA)</li>
                </ul>
            </ul>
            <br/>
            <strong>Bachelor of Computer Applications</strong>
            <span style={{float: 'right'}}>Gurugram, India</span>
            <br/><span>Sushant University</span>
            <span style={{float: 'right'}}>Jun 2019 - Aug 2025</span>
            <ul>
                <li>My undergraduate coursework provided a strong foundation in computer science and programming. I gained expertise in algorithms, programming languages, software development, and computer systems.</li>
                <li>Key skills: Web Development (HTML, CSS, JavaScript, React), Python, Data sets and Algorithm</li>
                <li>Projects :</li>
                <ul>
                    <li>SOLO, an anonymous blogging web application, was created using Django</li>
                    <li>https://sauravdutt.github.io/Canvas_Practice/ ,  This is a practice project, an online gaming website. </li>
                    <li>The Gallery is an e-commerce kind of application where illustrators, artists, graphic designers, etc. can showcase their artworks. It’s a simple full-stack web application built by React.js + Google Firebase. https://github.com/sauravDutt/gallerySD</li>
                </ul>
            </ul>
            <br/>
            <span className="bigger-title">Work Experience</span>
            <hr />
        </p>
    )
}

const DesignerIntro = () => {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <MotionConfig transition={{ duration: 0.5 }}>
            <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                className="designer-intro-outter"
            >
                <div >
                    <img src={process.env.PUBLIC_URL+"/img/profileImg.jpeg"} alt="profile" className="profile-img" />
                    <h1>Saurav Dutt</h1>
                    <h3>Industrial Product Designer</h3>
                    <p>
                        Welcome to <strong>Good Time Design</strong> or <strong>GTD</strong>, a personal design portfolio, expressing my various domains of sustainable design solutions following design methodologies and philosophies. 
                    </p>
                    {isOpen ? <Resume/> : null}
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? "Read Less" : "Read More"}
                    </button>
                </div>
                
            </motion.div>
        </MotionConfig>
    )
}

export default DesignerIntro;