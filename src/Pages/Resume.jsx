import React from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import css from '../assets/icons/css.png';
import html from '../assets/icons/html.png';
import js from '../assets/icons/javascript.png';
import ts from '../assets/icons/typescript.png';
import node from '../assets/icons/node.png';
import mongo from '../assets/icons/mongodb.png';
import sql from '../assets/icons/sql.png';
import python from '../assets/icons/python.png';
import git from '../assets/icons/git.png';
import github from '../assets/icons/github.png';
import reactpic from '../assets/icons/reactpic.png';
import arduino from '../assets/icons/arduino.png';
import graphql from '../assets/icons/graphql.png';
import jsonwebtoken from '../assets/icons/jsonwebtoken.png';
import excel from '../assets/icons/excel.png';
import word from '../assets/icons/word.png';
import npm from '../assets/icons/npm.png';
import postgresql from '../assets/icons/postgresql.png';
import raspberrypi from '../assets/icons/raspberrypi.png';
import materialui from '../assets/icons/materialui.png';
import vscode from '../assets/icons/vscode.png';
import MD from '../assets/icons/markdown.png';
import cypress from '../assets/icons/cypress.png';
import boot from '../assets/icons/bootstrap.png';
import { Link } from 'react-router-dom';
import './Resume.css';


const Item = styled(Box)(({ theme }) => ({
    backgroundColor: (255, 255, 255, 0.05),
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Resume() {
    return (
        <div>
            <div className="objective">

                <h1>Technical Skills</h1>
            </div>
            <div>
                <h3 className="resume">Computer Coding</h3>
            

                <div className="codingSkills" id="codebox" >

                    <Stack direction="row" spacing={6}
                        sx={{
                            width: '80%',
                            height: '80%',
                            alignItems: 'center',
                        }}>

                        <Item><img className="res" src={html} alt="html" />
                            <div className="overlay">
                                <div className="text">HTML</div>
                            </div></Item>
                        <Item><img className="res" src={css} alt="css" />
                            <div className="overlay">
                                <div className="text">CSS</div>
                            </div>
                        </Item>
                        <Item><img className="res" src={js} alt="javascript" />
                            <div className="overlay">
                                <div className="text">JavaScript</div>
                            </div></Item>
                        <Item><img className="res" src={ts} alt="typescript" />
                            <div className="overlay">
                                <div className="text">TypeScript</div>
                            </div></Item>
                    </Stack>
                    <Stack direction="row" spacing={6}
                        sx={{
                            width: '80%',
                            height: '80%'
                        }}>
                        <Item><img className="res" src={github} alt="github" />
                            <div className="overlay">
                                <div className="text">GitHub</div>
                            </div></Item>
                        <Item><img className="res" src={reactpic} alt="react" />
                            <div className="overlay">
                                <div className="text">React</div>
                            </div></Item>
                        <Item><img className="res" src={node} alt="JSnode" />
                            <div className="overlay">
                                <div className="text">Node</div>
                            </div></Item>
                        <Item><img className="res" src={mongo} alt="mongoDB" />
                            <div className="overlay">
                                <div className="text">MongoDB</div>
                            </div></Item>
                    </Stack>
                    <Stack direction="row" spacing={6}
                        sx={{
                            width: '80%',
                            height: '80%'
                        }}>
                        <Item><img className="res" src={sql} alt="SQL" />
                            <div className="overlay">
                                <div className="text">SQL</div>
                            </div></Item>
                        <Item><img className="res" src={python} alt="python" />
                            <div className="overlay">
                                <div className="text">Python</div>
                            </div></Item>
                        <Item><img className="res" src={git} alt="gitBash" />
                            <div className="overlay">
                                <div className="text">GitBash</div>
                            </div></Item>
                        <Item><img className="res" src={arduino} alt="arduino" />
                            <div className="overlay">
                                <div className="text">Arduino</div>
                            </div></Item>
                    </Stack>
                    <Stack direction={"row"} spacing={6}
                        sx={{
                            width: '80%',
                            height: '80%'
                        }}>
                        <Item><img className="res" src={graphql} alt="graphql" />
                            <div className="overlay">
                                <div className="text">Graphql</div>
                            </div></Item>
                        <Item><img className="res" src={jsonwebtoken} alt="jsonwebtoken" />
                            <div className="overlay">
                                <div className="text">JsonWebToken</div>
                            </div></Item>
                        <Item><img className="res" src={excel} alt="microsoft excel" />
                            <div className="overlay">
                                <div className="text">Excel</div>
                            </div></Item>
                        <Item><img className="res" src={word} alt="microsoft word" />
                            <div className="overlay">
                                <div className="text">Word</div>
                            </div></Item>
                    </Stack>
                    <Stack direction={"row"} spacing={6}
                        sx={{
                            width: '80%',
                            height: '80%'
                        }}>
                        <Item><img className="res" src={npm} alt="npm" />
                            <div className="overlay">
                                <div className="text">NPM</div>
                            </div></Item>
                        <Item><img className="res" src={postgresql} alt="postgresql" />
                            <div className="overlay">
                                <div className="text">Postgresql</div>
                            </div></Item>
                        <Item><img className="res" src={raspberrypi} alt="RaspberryPi" />
                            <div className="overlay">
                                <div className="text">Raspberry pi</div>
                            </div></Item>
                        <Item><img className="res" src={materialui} alt="Materialui" />
                            <div className="overlay">
                                <div className="text">Materialui</div>
                            </div></Item>
                    </Stack>
                    <Stack direction={"row"} spacing={6}
                        sx={{
                            width: '80%',
                            height: '80%'
                        }}>
                        <Item><img className="res" src={vscode} alt="vscode" />
                            <div className="overlay">
                                <div className="text">VSCode</div>
                            </div></Item>
                        <Item><img className="res" src={MD} alt="MarkDown" />
                            <div className="overlay">
                                <div className="text">MarkDown</div>
                            </div></Item>
                        <Item><img className="res" src={cypress} alt="cypress" />
                            <div className="overlay">
                                <div className="text">Cypress</div>
                            </div></Item>
                        <Item><img className="res" src={boot} alt="Bootstrap" />
                            <div className="overlay">
                                <div className="text">Bootstrap</div>
                            </div></Item>
                    </Stack>
                </div>
                <div className="codingCon">
                    <h3>Teamwork Traits</h3>
                    <ul className="codingCon">
                        <li>Agile Learning</li>
                        <li>Excellent Communicator</li>
                        <li>SCRUM Framework</li>
                        <li>Self-Motivated</li>
                        <li>Strong Work Ethic</li>
                        <li>Problem Solving</li>
                        <li>Time Management</li>
                        <li>Attention to Detail</li>
                        <li>Adaptability</li>
                        <li>Collaboration</li>
                        <li>Creativity</li>
                        <li>Critical Thinking</li>
                        <li>Leadership</li>
                        <li>Emotional Intelligence</li>
                    </ul>
                    

                </div>
                <div className="resume">
                    <h3>Technical Skills</h3>
                    <h3>Theory/Installation/Maintenance/Troubleshooting/Repair</h3>
                    <ul className="skills">
                        <li>Website Design and Development</li>
                        <li>Full Stack Web Development</li>
                        <li>UX/UI</li>
                        <li>Program Testing CI/CD</li>
                        <li>Remote Equipment Monitoring</li>
                        <li>Building Automation & SCADA Systems</li>
                        <li>Variable Frequency Drives</li>
                        <li>Programmable Logic Controllers</li>
                        <li>Control Panels</li>
                        <li>Ozone Water Sanitation Systems</li>
                        <li>Process Heating/Cooling Automation</li>
                        <li>Process Instrumentation</li>
                        <li>Building HVAC Water Loops</li>
                        <li>Water Filtration Systems</li>
                        <li>Water Quality Laboratory Standards</li>
                        <li>Centrifugal Pumps</li>
                        <li>Air Compressors</li>
                        <li>Chemical Injection</li>
                       
                       
                    </ul>

                    <div className="education">
                        <h2>Education</h2>
                        <p>Software Development Certificate - University of Kansas </p>
                        <p>B.S. Environmental Science - University of Kansas</p>
                        <p>Minor Biological Anthropology - University of Kansas</p>
                    </div>
                    <div className="certifications">
                        <h2>Certifications</h2>
                        <ul className="certs">
                            <li>Software Development Certificate</li>
                            <li>Aquatic Animal Life Support Operator(level 1&2)</li>
                            <li>Certified Water Quality Laboratory Technician(level 1&2)</li>
                            <li>OSHA 10</li>
                            <li>NSPF Certified Pool Operator</li>
                            <li>Eagle Scout - Boy Scouts of America</li>
                        </ul>
                    </div>
            <div className="WorkHighlights">
                <h3>
                    <Link to="/List">Click Here to See My Computer Coding Portfolio</Link>
                </h3>
            </div>

            <div className="workHistory">
                        <h2>Work History</h2>
                        <h3>Commercial Water(Lead service Technician)2024</h3>
                        <p>Provided ultra pure water services. Laboratories, Medical Facilities, and Industrial applicaions</p>
                        <br></br>
                        <h3>Cogent(Field service controls technician)2024</h3>
                        <p>Installed, Commissioned, Maintained, and Repaired, Automated controls for Industrial and Municipal Wastewater Systems.  </p>
                        <br></br>
                        <h3>Kansas City Zoo and Aquarium (Life Support Systems/ Water Quality Manager)2015-2023</h3>
                        <p>Managed all life support systems and staff. This included Polar Bear, Otter, Sea Lion, Stingray Bay, Elephant, MDC aquarium, SOBELLA aquarium, Penguin and many behind the scenes conservation efforts. I specialized in Ozone filtration design and repair, Rotary screw air compressors, long-couples pumps, biofilters, sand filter, foam fractioners, chillers, and process automation</p>
                        <br></br>
                        <h3>Landry's T-REX Cafe (Curator/ Aqusition&Quarantine Manager)2008-2015</h3>
                        <p>Maintained all exhibits and aquatic diver staff. Acquired, Quarantined, Distribted incoming specimens. Had a high rate of success for animal survival (90%)</p>
                        <br></br>
                        <h3>Environmental Science Coporation (Field Technician)2007-2008</h3>
                        <p>Collected soil and water samples for clients. Created proper EPA chain of custody documentations. Preserved samples for shipment. Provided clients with recommendations for testing on different applications. </p>
                        <br></br>
                    </div>



                </div>
            </div>
        </div>
    );

}

export default Resume;