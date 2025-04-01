import React from 'react'

import FigmaLogo from '../assets/logo/figma.png';
import ReactLogo from '../assets/logo/react.png';
import NodeLogo from '../assets/logo/nodejs.png';
import CPlusPlus from '../assets/logo/cplusplus.png';
import ElectronjsLogo from '../assets/logo/electron-icon.png';
import JsLogo from '../assets/logo/js.png';
import CssLogo from '../assets/logo/css.png';
import MongoDBLogo from '../assets/logo/MongoDB.png';
import JavaLogo from '../assets/logo/java.png';
import PythonLogo from '../assets/logo/python.png';
import BootStrapLogo from '../assets/logo/bootstrap.png';
import PostGreLogo from '../assets/logo/postgre.png';
import MySqlLogo from '../assets/logo/mysql.png';
import GitLogo from '../assets/logo/git.png';
import GitHubLogo from '../assets/logo/github.png';      
import PostmanLogo from '../assets/logo/postman.png';
import ScrumLogo from '../assets/logo/scrum.png'; 

import Three from './Three';

const logoList = [
    FigmaLogo,
    ReactLogo,
    NodeLogo,
    CPlusPlus,
    ElectronjsLogo,
    JsLogo,
    CssLogo,
    MongoDBLogo,
    JavaLogo,
    PythonLogo,
    BootStrapLogo,
    PostGreLogo,
    MySqlLogo,
    GitLogo,
    GitHubLogo,
    PostmanLogo,
    ScrumLogo
  ]

const keySplines = [
".73,.15 .45,.92",
".19 .51 .75 .38"
]

const pathList = [
    "M 150 110 A 225 105 0 1 0 450 110 A 225 105 0 0 0 150 110",
    "M 150 266 A 225 105 0 1 1 450 266 A 225 105 0 0 1 150 266",

    "M 125 110 A 260 105 0 1 0 475 110 A 260 105 0 0 0 125 110",
    "M 125 265 A 260 105 0 1 1 475 265 A 260 105 0 0 1 125 265",

    "M 100 110 A 290 105 0 1 0 500 110 A 290 105 0 0 0 100 110",
    "M 100 267 A 290 105 0 1 1 500 267 A 300 105 0 0 1 100 267"
  ]

function LogoRound() {
  return (
    <div className='relative'>
        <Three />
        <svg width="100%" height="100%" viewBox="0 0 600 400" className='flex justify-center'>
            <defs>
                <linearGradient id="gradient-stroke" x1="0" y1="50" x2="600" y2="50" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="rgba(50, 15, 133, 0.4)"/> 
                    <stop offset="35%" stopColor="rgba(118, 60, 172, 0.8)"/> 
                    <stop offset="65%" stopColor="rgba(118, 60, 172, 0.8)"/> 
                    <stop offset="100%" stopColor="rgba(50, 15, 133, 0.4)"/>
                </linearGradient>
            </defs>

            <path d="M 150 110 A 225 105 0 1 0 450 110" stroke="url(#gradient-stroke)" fill="transparent" strokeWidth="1"/>
            <path d="M 125 110 A 260 105 0 1 0 475 110" stroke="url(#gradient-stroke)" fill="transparent" strokeWidth="1"/>
            <path d="M 100 110 A 290 106 0 1 0 500 110" stroke="url(#gradient-stroke)" fill="transparent" strokeWidth="1"/>

            {
                logoList.map((logo, index) => {
                const ranDur = Math.floor(Math.random() * (20 - 9 + 1)) + 9;
                const ranKeySpline = Math.floor(Math.random() * keySplines.length);
                const ranPath = Math.floor(Math.random() * pathList.length);

                return   (
                    <g key={index}>
                        <image xlinkHref={logo} width="16" height="16" style={{top: 0, left: 0}}>
                            <animateMotion 
                                repeatCount="indefinite" 
                                dur={`${ranDur}s`}
                                keyTimes="0; 0.5; 1"
                                keySplines={`${keySplines[ranKeySpline]}; ${keySplines[ranKeySpline]}`}
                                calcMode="spline"
                                rotate={"auto"}
                                path={`${pathList[ranPath]}`}
                            />
                        </image>
                    </g>
                )})
            }
        </svg>
    </div>
  )
}

export default LogoRound