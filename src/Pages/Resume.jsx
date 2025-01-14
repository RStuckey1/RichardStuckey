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
    return(
        <>
        <div className="codingSkills">
            <Stack direction="row" spacing={2}
                sx = {{
                    width: '100%',
                    height: '100%'
                    }}>
                <Item><img src={css} alt="css" /></Item>
                <Item><img src={html} alt="html" /></Item>
                <Item><img src={js} alt="js" /></Item>
                <Item><img src={ts} alt="ts" /></Item>
            </Stack>
            <Stack direction="row" spacing={2}>
                <Item><img src={github} alt="github" /></Item>
                <Item><img src={reactpic} alt="reactpic" /></Item>
                <Item><img src={node} alt="node" /></Item>
                <Item><img src={mongo} alt="mongo" /></Item>
            </Stack>
            <Stack direction="row" spacing={2}>
                <Item><img src={sql} alt="sql" /></Item>
                <Item><img src={python} alt="python" /></Item>
                <Item><img src={git} alt="git" /></Item>
               
            </Stack>
        </div>
        <div className="resume">
            <h1 className="resume">Resume</h1>
            <h2>Coding Knowledge</h2>

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
        </>
    );
}

    export default Resume;