import '../assets/styles/containers/education.css';
import LogoUTEC from '../assets/images/logo_utec.png';
import LogoITSP from '../assets/images/logo_itsp.png';
import LogoSOFKAU from '../assets/images/logo_sofkau.png';
import LogoUDEMY from '../assets/images/logo_udemy.png';
import EducationPoint from '../components/EducationPoint';

export const Education = () => {
    return (
        <div className="education-container">
            <EducationPoint 
                logo={ LogoUTEC } 
                title="Computer Science Technologist" 
                ubication="UTEC (Technological University), Paysandú, Uruguay" 
                referenceLink="https://www.utec.edu.uy/" 
                downloadLink="#home"
                leftBorder={false}
                rightBorder={true}
            />
            <EducationPoint 
                logo={ LogoSOFKAU } 
                title="Development Training League" 
                ubication="Sofka University, Medellin, Colombia" 
                referenceLink="https://www.sofkau.com/" 
                downloadLink="#home" 
                leftBorder={false}
                rightBorder={true}
            />
            <EducationPoint 
                logo={ LogoITSP } 
                title="Computer Technician" 
                ubication="ITSP (Technological Institute Superior of Paysandú), Paysandú, Uruguay" 
                referenceLink="https://www.utu.edu.uy/" 
                downloadLink="#home" 
                leftBorder={false}
                rightBorder={true}
            />
            <EducationPoint 
                logo={ LogoUDEMY } 
                title="Angular Avanzado: Lleva tus bases al siguiente nivel - MEAN" 
                ubication="Udemy, Remote" 
                referenceLink="https://www.udemy.com/course/angular-avanzado-fernando-herrera/" 
                downloadLink="#home" 
                leftBorder={true}
                rightBorder={false}
            />
            <EducationPoint 
                logo={ LogoUDEMY } 
                title="Angular: De cero a experto - Edición 2023" 
                ubication="Udemy, Remote" 
                referenceLink="https://www.udemy.com/course/angular-fernando-herrera/" 
                downloadLink="#home"
                leftBorder={true}
                rightBorder={false} 
            /> 
            <EducationPoint 
                logo={ LogoUDEMY } 
                title="Python and Django Full Stack Web Developer Bootcamp" 
                ubication="Udemy, Remote" 
                referenceLink="https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/" 
                downloadLink="#home"
                leftBorder={true}
                rightBorder={false} 
            />  
            <EducationPoint 
                logo={ LogoUDEMY } 
                title="Universidad Python 2021 - POO, Django, Flask y PostgreSQL" 
                ubication="Udemy, Remote" 
                referenceLink="https://www.udemy.com/course/universidad-python-desde-cero-hasta-experto-django-flask-rest-web" 
                downloadLink="#home"
                leftBorder={true}
                rightBorder={false} 
            /> 
            <EducationPoint 
                logo={ LogoUDEMY } 
                title="Programación Reactiva con Spring Boot y Spring WebFlux" 
                ubication="Udemy, Remote" 
                referenceLink="https://www.udemy.com/course/programacion-reactiva-con-spring-webflux-reactor/" 
                downloadLink="#home"
                leftBorder={true}
                rightBorder={false} 
            />      
            <EducationPoint 
                logo={ LogoUDEMY } 
                title="GIT + GitHub: Todo un sistema de control de versiones" 
                ubication="Udemy, Remote" 
                referenceLink="https://www.udemy.com/course/git-github/" 
                downloadLink="#home" 
                leftBorder={true} 
                rightBorder={false} 
            /> 
        </div>
    );
}