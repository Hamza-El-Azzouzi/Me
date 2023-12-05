
import '../style/About.css';
import Me from '../img/Me.jpg'
export default function About() {
    const dataTec = ["NodeJs",
        "JavaScript ES6+",
        "python",
        "ReactJs",
        "PHP",
        "HTML\\CSS",
        " Mysql\\Mongodb",
        "Laravel",
        "Cloud Nativ (cloud Azure \\ Docker)",
        "CI/CD (jenkins)",
        "WordPress",
    ]


    return (
        <div className="about">
            <div className="fade-insection is-visible">
                <div className="section-header">
                    <span className="section-title" style={{ marginTop:'0px' }}>/About Me </span>
                    <span className='traitForAbout'> </span>
                </div>
                <div className="about-content">
                    <div className="about-description">
                        <p>I am Hamza, a passionate full-stack web developer who embarked on this exciting journey at ISTA of Taza.
                             With a solid educational foundation and an unquenchable thirst for learning,
                             I am here to present to you a showcase of my technical prowess.
                        </p>
                        Here are some technoligies I have been working with :
                        <ul className="tech-stack col" >
                            {dataTec.map(x => (
                                <div className='fade-in-section is-visible' >
                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffa500" className="bi bi-bookmark list-icon" viewBox="0 0 16 16">
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                    </svg>
                                    {x}
                                </li>
                                </div>
                            ))}
                </ul>
                <p>Outside of work, I'm interested in following the developments of science. I also play strategy game. </p>
            </div>
            <span className="about-image">
                <img className='img' src={Me} alt="ME" />
            </span>
        </div>
            </div >

        </div >
    )
}
