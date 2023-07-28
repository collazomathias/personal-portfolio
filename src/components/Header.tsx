import '../assets/styles/components/header.css';
import Image from '../assets/images/profile.png';
import Typed from 'react-typed';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Header = () => {
    return (
        <div className="header-container">
            <img src={ Image } alt="" />
            <div className="header-info-container">
                <p>Hi, my name is</p>
                <h1>Mathías Collazo</h1>
                <p>and i'm a <span><Typed strings={["Full stack developer", "RPA developer", "Graphic designer", "UI/UX passionate"]} typeSpeed={50} backSpeed={40} loop /></span></p>
                <div className="header-socials-container">
                    <a href="https://www.github.com/collazomathias" rel="noreferrer" target="_blank"><FaGithub size={"42px"} />&nbsp;&nbsp;Github @collazomathias</a>
                    <a href="https://www.linkedin.com/in/collazomathias" rel="noreferrer" target="_blank"><FaLinkedin size={"42px"} />&nbsp;&nbsp;LinkedIn @collazomathias</a>
                </div>
            </div>
        </div>
    );
}