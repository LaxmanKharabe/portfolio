import { useEffect, useState } from "react";
import './projects.css';
const Projects = () => {
    const [Projects, setProjects] = useState({ projectData: [{ "title": "", "TechStack": [] }] });
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        fetch('./data/projetcts.json')
            .then(res => res.json())
            .then(proData => {
                setProjects(proData);
                console.log(proData);
            })
    }, [])
    return (
        <div className="container w-75 marTop">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    Projects.projectData.slice(0, visibleCount).map(allData =>

                        <div className="col">
                            < div class="card">
                                <img src={allData.images} class="card-img-top" alt={allData.images} />
                                <div class="card-body">
                                    <h5 class="card-title font-size-1">{allData.title}</h5>
                                    <p class="card-text font-size-0">{allData.TechStack.map((tech, index) => <span key={index}>{tech}</span>)}</p>
                                </div>
                                <div className="card-footer">
                                    <a href="#" class="btn btn-primary btnStyls font-size-0">Check</a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="d-flex w-100 justify-content-center">
                <button className="btn btn-primary mt-4" onClick={() => { setVisibleCount((preValue) => preValue + 3) }}>Load more</button>
            </div>
        </div >
    )
}
export default Projects;