import { useState } from "react";
import useMeasure from "react-use-measure";

import { motion, MotionConfig } from "framer-motion";

const HiddenContent = () => {
    return(
        <>
            With modules like a camera, a microphone, or a pet-usable button, the modular design enables various individual users to <strong>customise and optimise the dispensers to their needs</strong>, enabling a <mark>pet-centred design</mark> and improving a pet's <u>cognitive thinking abilities</u> by <strong>operant conditioning</strong> the pet to interact with the products themselves.
            <br/>
            <br/>
            The initial conceptual design is kept simple, allowing people with no mechanical experience or education to easily assemble and use the appliance. The mobile application enables adding different modules, like joining Lego bricks. <strong>A hands-on assembly process educates the user about different parts of the product, making it easier to maintain and do self-repairs</strong>.  
            <br/>
            <br/>
        </>
    )
}

const AboutDispenser = () => {
    let [ref, { height }] = useMeasure();

    const [isOpen, setIsOpen] = useState(false);

    return(
        <MotionConfig transition={{ duration: 0.7 }}>
        <motion.div animate={{ height }}>
            <div ref={ref} className="dispenser-outter" >
                <h1>treat dispenser</h1>
                <h3>Design insights</h3>
                <p >
                    Given the range of treat dispensers on the market, GTD offers a sustainable and cutting-edge new product for busy pet owners who are constantly <strong>stressed about feeding their furry babies</strong> while they are away at work: a modular, easy-to-assemble, long-lasting treat and food dispenser that will ease modern pet owners' concerns about their pets' <strong>proper nutrition</strong>. 
                    <br/>
                    <br/>
                    {isOpen ? <HiddenContent/> : null}
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? "Read Less" : "Read More"}
                    </button>
                    <br/>
                    <br/>
                    <br/>
                    Web application is under development. In the meantime, you can check out my <a href="https://www.instagram.com/goodtime__design/" target="_blank" rel="noopener noreferrer">Instagram</a> for more updates and content.
                </p>
            </div>
        </motion.div>
       
        </MotionConfig>
    )
}

export default AboutDispenser