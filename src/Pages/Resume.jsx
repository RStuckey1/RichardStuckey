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
          
            <div>
                <h2 className="resume">Computer Coding</h2>
            

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
                    <h2>Teamwork Traits</h2>
                    <ul className="codingCon">
                        <li>Agile Learning</li>
                        <li>Excellent Communicator</li>
                        <li>SCRUM Framework</li>
                        <li>Adaptability</li>
                        <li>Collaboration</li>
                        <li>Creativity</li>
                        <li>Critical Thinking</li>
                        <li>Emotional Intelligence</li>
                    </ul>
                    

                </div>
                <div className="resume">
                    <h2>Technical Skills</h2>
                    <ul className="skills">
                        <li>Website Design & Development</li>
                        <li>Full-Stack Programming</li>
                        <li>UX/UI</li>
                        <li>Program Testing CI/CD</li>
                        <li>Automation & SCADA Systems</li>
                        <li>Variable Frequency Drives</li>
                        <li>Programmable Logic Controllers</li>
                        <li>Control Panel Design</li>
                        <li>Process Instrumentation</li>
                        <li>Calibration</li>
                
                       
                       
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
                            <li>Eagle Scout - BSA</li>
                        </ul>
                    </div>
            <div className="WorkHighlights">
                <h3>
                    <Link to="/List">Click Here to See My Computer Coding Portfolio</Link>
                </h3>
            </div>

            <div className="workHistory">
                        <h2>Work History</h2>
                        <h3>Kansas City Zoo and Aquarium (Life Support Systems/ Water Quality Manager)</h3>
                        <p>Managed all life support systems and staff. This included Polar Bear, Otter, Sea Lion, Stingray Bay, Elephant, Misouri Department of Conservation Aquarium, SOBELLA Ocean Aquarium, Alligator Alley, Penguin Exhibits and many behind the scenes conservation efforts.</p>
                        <br></br>
                        <h3>Landry's T-REX Cafe (Curator/ Aqusition&Quarantine Manager)</h3>
                        <p>Maintained all exhibits and aquatic dive staff. Acquired, Quarantined,and Distribted incoming specimens.</p>
                        <br></br>
                        <h3>Environmental Science Coporation (Field Technician)</h3>
                        <p>Collected soil and water samples for clients. Created proper EPA chain of custody documents for samples. Preserved samples for shipment. Provided clients with recommendations for Local and Federal compliance. </p>
                        <br></br>
                    </div>



                </div>
            </div>
        </div>
    );

}

export default Resume;