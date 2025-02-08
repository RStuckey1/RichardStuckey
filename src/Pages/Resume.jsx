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
            <h1 className="resume">Coding Knowledge </h1>

            <div className="codingSkills" id="codebox" >

                <Stack direction="row" spacing={6}
                    sx={{
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                    }}>

                    <Item><img className="res" src={css} alt="css" />
                        <div className="overlay">
                            <div className="text">CSS</div>
                        </div>
                    </Item>
                    <Item><img className="res" src={html} alt="html" />
                        <div className="overlay">
                            <div className="text">HTML</div>
                        </div></Item>
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
                        width: '100%',
                        height: '100%'
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
                        width: '100%',
                        height: '100%'
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
                        width: '100%',
                        height: '100%'
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
                        width: '100%',
                        height: '100%'
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
                        width: '100%',
                        height: '100%'
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
            <div className="resume">
                <div className="objective">
                    <h1>Objective</h1>
                    <p> In 2023, I realized that I was truely "burned out". It was time for me to follow my dreams. Since I was a child, I was facinated with computers and how they are parts of our everyday life. So I went back to school at the University of Kansas and earned a certificate in Software Development. I feel like my spark has been revived and I am hungry to learn more and to show my tenacity once again.</p>
                </div>
                <div className="WorkHighlights">
                <h1>Resume</h1>
                <h3>
                <Link to="/List" target="_blank">Click to see Rick's Portfolio</Link>
                </h3>
                <br></br>
                <h2>Work Experience Highlights</h2>
                <br></br>
                <h2>Kansas City Zoo & Aquarium (Life Support Systems Manager)</h2>
                <br></br>
                <h3>SOBELLA Oceanarium</h3>
                <br></br>
                
                    <p>From conceptual meetings to opening, I contributed to the design and commissioning of the Life Support Systems and the building management controls systems. After construction of a building this size, there were many changes that had to be made to be successful with animals.</p>
                    <br></br>
                    <h3>Stingray Bay</h3>
                    <br></br>
                    <p>This was my first ground-up touch tank exhibit. I contributed to the design, installation, and commissioning of the exhibit.
                        I managed the Life Support Systems, and the building automation systems. All of the sensors and controllers utilized remote monitoring via a web applicaion interface<br></br>
                        This building had a very unique automation system. The water loop for heating and cooling were one system and would switch between heating via a boiler and cooling, through a water chiller. I was able to program the automation to handle the changing seasons.</p>
                    <br></br>
                    <h3>Helzberg Penguin Plaza</h3>
                    <br></br>
                    <p>This building had many manual procedures that I upgraded to remote monitoring/controls. This included the ozone system for three large aquariums, flowmeters for both a cold penguin(120k gallons) and warm pengiun(30k gallons) exhibits. During this time I identified many processes and procedures that could be improved.</p>
                    <p>Examples:</p>
                    <br></br>
                    <li>Changing exhibit salt suppliers for sea lion and penguin exhibits, saving $65,000 per year</li>
                    <li>Cutting out middleman supply houses, buying parts from manufacture for pumps, ozone equipment, etc. saving over $30,000 per year.</li>
                    <li>Minimized outside contractors, learning many specialized skills in the process. Including maintenance/repairs for: Rotary-screw compressors, DBD ozone generators, Oxygen Concentrators, Programable logic controllers & HMIs, Long-coupled pumps, Building hyrdonic systems and process controls(Building automation)</li>
                </div>
             
                <div className="education">
                <h2>Education</h2>
                    <p>University of Kansas - Software Development Certificate </p>
                    <p>University of Kansas(Lawrence, KS) </p>
                    <p>Bachelor's of Science - Environmental Science</p>
                    <p>Bachelor's of Science - Microbiology</p>
                    <p>Minor - Biological Anthropology</p>
                </div>
               <div className="certifications">
                <h2>Certifications</h2>
                <ul className="certs">
                    <li>Software Development Certificate</li>
                    <li>Aquatic Animal Life Support Operator(level 1&2)</li>
                    <li>Certified Water Quality Laboratory Technician(level 1&2)</li>
                    <li>OSHA 10 certification</li>
                    <li>Certified Pool Operator</li>
                    <li>Eagle Scout - Boy Scouts of America</li>
                </ul>
                </div>
                <div className="workHistory">
                <h1>Work History</h1>
                    <h2>Commercial Water(Lead service Technician)2024</h2>
                    <p>Pure water applications for Industrial, Medical, and Laboratory industries. Diagnosed and repaired automated water systems and CIP(Clean in Place) technologies</p>
                    <h2>Cogent(Field service controls technician)2024</h2>
                    <p>Automated controls for Industrial and Municipal Wastewater systems. Repaired/commissioned systems including rotating equipment. </p>
                    <h2>Kansas City Zoo and Aquarium (Life Support Systems/ Water Quality Manager)2015-2023</h2>
                    <p>Managed all life support systems and staff. This included Polar Bear, Otter, Sea Lion, Stingray Bay, Elephant, MDC aquarium, SOBELLA aquarium, Penguin and many behind the scenes conservation efforts. I specialized in Ozone filtration design and repair, Rotary screw air compressors, long-couples pumps, biofilters, sand filter, foam fractioners, chillers, and process automation</p>
                    <h2>Landry's T-REX Cafe (Curator/ Aqusition&Quarantine Manager)2008-2015</h2>
                    <h2>Environmental Science Coporation (Field Technician)2007-2008</h2>
                    <br></br>
                </div>
        


            </div>

        </div>
    );
}

export default Resume;