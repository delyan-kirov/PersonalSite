import "./About.css";
import "../TopBar/TopBar";
import "../Dash/Dash";
import TopBar from "../TopBar/TopBar";
import BottomBar from "../BottomBar/BottomBar";
import { motion } from 'framer-motion';

function About() {
    return (
        <div className="App">
            <header className="App-header">
                < TopBar />
                <div style={{ margin: "40px" }}></div>
                <div className="FullPanel">
                    <div className="square-panel">

                        <motion.div
                            transition={{ duration: 0.3 }}
                            initial={{ opacity: 0, transform: 'translateY(-40px)' }}
                            whileInView={{ opacity: 1, transform: 'translateY(0)' }}
                            viewport={{ once: true }}>
                            <div className='title'>
                                Delyan Kirov
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, transform: 'translateY(-60px)' }}
                            whileInView={{ opacity: 1, transform: 'translateY(0)' }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}>
                            <div className="smaller-panel">
                                <p> Hello!</p>
                                <p>
                                    I recently graduated from the University of Saint Andrews, looking for a web <b style={{ color: "$b8eff2" }}>development position</b>.
                                    My expertise includes <b style={{ color: "$b8eff2" }}>TypeScript</b> and <b style={{ color: "$b8eff2" }}>React</b> for frontend development, as well as <b style={{ color: "$b8eff2" }}>Java</b> and <b style={{ color: "$b8eff2" }}>Go</b> for backend solutions.
                                    I am experienced in working with <b style={{ color: "$b8eff2" }}>Redis</b> and <b style={{ color: "$b8eff2" }}>SQL</b> databases.
                                    My aim is to create stable and future rich websites with style 😎
                                </p>
                                <br></br>
                            </div>
                        </motion.div>

                        <div>
                            <p className='show-p'></p>
                            <br></br>
                            <div style={{ margin: "1%" }}>
                                <p> {/* Add some links */}
                                    If you would like to know more about my projects, click on Resume!
                                    I also have a Blog you can check out, where I write about interesting tect and software I worked with.
                                    Lastly, feel free to check my git or linkedin pages, or send me an email. Links are bellow as well.
                                </p>
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                    </div >
                </div>
                <div style={{ margin: "5px" }}></div>
                <div />
                <div style={{ bottom: "0" }}><BottomBar /></div>
            </header>
        </div>
    );
}

export default About;
