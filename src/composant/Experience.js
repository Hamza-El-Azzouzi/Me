import '../style/Experience.css'
import { Tabs } from 'antd';

// import React, { useState } from 'react';
export default function Experience() {
    const data = [{
        title: "test",
        duration: "01/23 - 02/23",
        emplacement: "Province OF Taza",
        post: "web Developer",
        decs:
            ["Adhered to Security and Compliance Standards ,Implemented rigorous security measures within the Laravel application to safeguard sensitive participant information and payment data. Ensured compliance with data protection regulations by implementing encryption, access controls, and secure authentication mechanisms.",
                "Efficient Data Management , Developed a robust Laravel backend system to handle convention data effectively, including attendee registrations, schedules, and feedback. Implemented insightful reporting capabilities to drive data-driven decision-making for event success.",
                "Security and Compliance ,Ensured utmost security in the Laravel application by enforcing rigorous measures to safeguard sensitive participant data and financial information. Achieved compliance with data protection regulations through encryption, access controls, and secure authentication methode"
            ]
    }

    ]

    return (
        <div className='section-Exper'>
            <span className="section-title exp">/Experiences </span >
            <div className='traitForExp'></div>
            <div className="tabs">

                <Tabs
                    style={{
                        color: '#ffa500'

                    }}
                    color='#ffa500'
                    tabPosition={(window.innerWidth < 600) ? 'top' : 'left'}
                    size='large'
                    items={new Array(data.length).fill(null).map((_, i = 0) => {

                        return {
                            label: data[i].emplacement,
                            key: i,
                            children: (
                                <div>
                                    <h4 className='ExperienceTitle'>{data[i].post + ' @ '}<span className='ExperienceEmplacement'>{data[i].emplacement}</span></h4>
                                    <h6 className='ExperienceDuration'>{data[i].duration}</h6>
                                    <div className='ExperienceDetails'>
                                        <ul className='ExperienceUl'>{data[i].decs.map(x => (

                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffa500" className="bi bi-bookmark list-icon" viewBox="0 0 16 16">
                                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                                </svg>{x}
                                            </li>
                                        )
                                        )}
                                        </ul>
                                    </div>
                                </div>),
                        };

                    })
                    }
                />

            </div>
        </div>
    )
}