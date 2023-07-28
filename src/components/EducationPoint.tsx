import { FaFileDownload, FaHome } from "react-icons/fa";

type EducationPointProps = {
    logo: string,
    title: string,
    ubication: string,
    referenceLink: string,
    downloadLink: string,
    leftBorder: boolean,
    rightBorder: boolean
}

const EducationPoint = ({ logo, title, ubication, referenceLink, downloadLink, leftBorder, rightBorder }: EducationPointProps) =>{
    return (
        <div className="education-point-container">
            { leftBorder && 
                <div className="left-border">
                    <div className="left-border-point"></div>
                    <div className="left-border-line"></div>
                </div> 
            }
            <div className="education-container-v2">
                <div className="education-info-container">
                    <img src={ logo } alt="" />
                    <div className="education-info">
                        <p className="education-title">{ title }</p>
                        <p>{ ubication }</p>
                    </div>
                </div>
                <div className="education-action-container">
                    <a className="education-action" href={ referenceLink } rel="noreferrer" target="_blank">
                        <div className="icon"><FaHome size={"25px"} /></div>
                        <span className="description">&nbsp;Go to webpage</span>
                    </a>
                    <a className="education-action" href={ downloadLink } rel="noreferrer">
                        <div className="icon"><FaFileDownload size={"25px"} /></div>
                        <span className="description">&nbsp;Certification download</span>
                    </a>
                </div>
            </div>
            { rightBorder && 
                <div className="right-border">
                    <div className="right-border-line"></div>
                    <div className="right-border-point"></div>
                </div> 
            }
        </div>
    )
}

export default EducationPoint;