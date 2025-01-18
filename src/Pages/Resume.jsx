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
import './Resume.css';


const Item = styled(Box)(({ theme }) => ({
    backgroundColor: (255, 255, 255, 0.05),
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('darkj', {
        backgroundColor: '#000000',
    }),
}));


function Resume() {
    return (
       <div>
            <h1 className="resume">coding skills</h1>

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
                    <Item><img className="res" src={reactpic} alt="react"/>
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
                            <div className="text">Git</div>
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
            </div>
            <div className="resume">
                <h1 className="resume">Resume</h1>
                

                <h2>Experience Highlights</h2>
                <h3>Kansas City Zoo & Aquarium (Life Support Systems Manager)</h3>
                <h4 className="resume">SOBELLA Oceanarium</h4>
                <p>From conceptual meetings to opening, I contributed to the design and commissioning of the Life Support Systems and the building</p>
                <p>management controls systems.</p>
                <h4>Stingray Bay</h4>
                <p>This was my first ground-up touch tank exhibit. I contributed to the design, installation, and commissioning of the exhibit.</p>
                <p>I managed the Life Support Systems, and the building automation systems. All of the sensors and controllers utilized remote monitoring</p>
                <p>via a web applicaion interface</p>
                <h4>Helzberg Penguin Plaza</h4>
                <p>This building had many manual procedures that I upgraded to remote monitoring/controls. This included the ozone system for three large</p>
                <p>aquariums, flowmeters for both a cold penguin(120k gallons) and warm pengiun(30k gallons) exhibits.</p>
                <p>During this time I identified many processes and procedures that could be improved.</p>
                <p>Examples:</p>
                <p>-Changing exhibit salt suppliers, saving $65,000 per year</p>
                <p>-Cutting out middleman supply houses, buying parts from manufacture for pumps, ozone equipment, etc.</p>
                <p>saving over $30,000 per year.</p>

                <h2>Education</h2>
                <p>University of Kansas(Lawrence, KS) </p>
                <p>Bachelor's of Science - Environmental Science</p>
                <p>Bachelor's of Science - Microbiology</p>
                <p>Minor - Biological Anthropology</p>
                <h2>Work History</h2>
                <p>Cogent (Controls Field Technician)2023-2024</p>
                <p>Kansas City Zoo and Aquarium (Life Support Systems/ Water Quality Manager)2015-2023</p>
                <p>Landry's T-REX Cafe (Curator/ Aqusition&Quarantine Manager)2008-2015</p>
                <p>Environmental Science Coporation (Field Technician)2007-2008</p>



            </div>

        </div>
    );
}

export default Resume;