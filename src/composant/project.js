import '../style/Project.css'
import { Card } from 'antd';
import React, { useState, useEffect } from 'react';

// Most be the project mor detaols in the vertical way
// the picture should be in the fist section

export default function Project() {
    const [marginLeft, setMarginLeft] = useState('200px');
    const [width, setWidth] = useState('350px');
    const [hieght, setHieght] = useState('370px');
    const Project = [
        {
            link: "https://github.com/Hamza-El-Azzouzi/Convention-Projet",
            Title: "Agreement Management",
            details: "It's applcation created for Province Of Taza help them to manage their Agreement ",
            technologies: "PHP(Laravel), Jquery, BootStrap, MySQL"
        },
        {
            link: "https://github.com/Hamza-El-Azzouzi/HL-broker",
            Title: "HL Broker",
            details: "It's E-com Application that can help to find what's kind of goods you want ",
            technologies: "PHP(Laravel), ReactJs, Api, MySQL"
        },
    ]
    useEffect(() => {
        const updateSize = () => {
            if (window.innerWidth < 600) {
                setMarginLeft('0px');
                setWidth('310px');
                setHieght('340px');
            } else {
                setMarginLeft('200px');
                setWidth('350px');
                setHieght('370px');
            }
        };

        window.addEventListener('resize', updateSize);

        // Initialize margin left based on screen width on component mount
        updateSize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, []);

    return (
        <div className='Project-div'>
            <span className="section-title Pr exp">/Projects </span >
            <div className='traitForProject'></div>

            {Project.map((card, index) => (
                card.link === "" || card.link === undefined ?
                    (
                        <Card
                        key={index}
                        className='Project-card ,FirstCard'
                        style={
                            {
                                height: hieght,
                                width: width,
                                // marginLeft: index === 0 ? marginLeft : '0px'
                            }
                        }
                    >
                        <div className='HeaderOfProjectBloc'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFA500" class="bi bi-folder2" viewBox="0 0 20 20" className='FolderIcon'>
                                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                            </svg>


                        </div>
                        <h3 className='HeadLineProject'>{card.Title}</h3>
                        <p className='Details'>{card.details}</p>
                        <p className='Tech'>{card.technologies}</p>
                    </Card>)
                    :
                    (<Card
                        key={index}
                        className='Project-card ,FirstCard'
                        style={
                            {
                                height: hieght,
                                width: width,
                                // marginLeft: index === 0 ? marginLeft : '0px'
                            }
                        }
                    >
                        <div className='HeaderOfProjectBloc'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFA500" class="bi bi-folder2" viewBox="0 0 20 20" className='FolderIcon'>
                                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z" />
                            </svg>
                            <a href={card.link}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FFA500" class="bi bi-github" viewBox="0 0 20 20" className='githubIcon'>
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>


                        </div>
                        <h3 className='HeadLineProject'>{card.Title}</h3>
                        <p className='Details'>{card.details}</p>
                        <p className='Tech'>{card.technologies}</p>
                    </Card>
                    )
        
            
                
            ))}



        </div>

    )

}
