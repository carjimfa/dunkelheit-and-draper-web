import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkflowElements = ({ }) => {
    const pages = [
        { title:"Listen", subtitle: "Crafting the Briefing", navigation: "nav-element-1", copyVisible: false, workflowElement: "element-1", copy: ["Functional Specifications", "Project Goals", "Target Audience", "Market", "Competitors", "Content Requirements", "Technical requirements"] },
        { title:"Research", subtitle: "Evaluate the problem", navigation: "nav-element-2", copyVisible: false, workflowElement: "element-2", copy: ["User persona", "Crafting MVP", "Moodboard", "Product mapping", "Content Architecture", "Storyframes", "Rapid wireframe", "Tone & Voice", "Technical Scope", "Software Requirements", "Functional Limitations", "Legal Analysis"] },
        { title:"Plan", subtitle: "Timming is important", navigation: "nav-element-3", copyVisible: false, workflowElement: "element-3", copy: ["Structurate the form of work", "Working agile in sprints", "Involve the client in the process", "Timetable Agreement", "Deadlines", "Release Phases"] },
        { title:"Design", subtitle: "Visual, writting & technical design", navigation: "nav-element-4", copyVisible: false, workflowElement: "element-4", copy: ["UX writing", "User Interface", "High definition prototype", "Interations", "Animations", "Software Architecture", "Technical Design", "Project Scaffolding", "Data Domain Modelling", "Prepare Environment", "Deployment Plan"] },
        { title:"Implement", subtitle: "Build, build, build!", navigation: "nav-element-5", copyVisible: false, workflowElement: "element-5", copy: ["Software implementation", "Business Logic", "Consume Third-party libraries", "Database Building", "Client Apps Implementation"] },
        { title:"Deploy", subtitle: "Turning it on!", navigation: "nav-element-6", copyVisible: false, workflowElement: "element-6", copy: ["Execute Deployment Plan", "Test Before & After", "Deployment", "Client Validation", "Continuous Integration", "Maintenance Plan", "Bug Fixes", "Move to production"] },
    ];

    const getWorkflowElements=function(){
        let workflowElements=[];
        pages.forEach(p=>{
            let copies=[]
            p.copy.forEach(c=>{
                let copyElement=<li style={{listStyle:"none"}}>{c}</li>
                copies.push(copyElement)
            })
            let element=
                <div className="grid" style={{width:"100%"}}>
                    <h1 className="workflow-element-title col-12">{p.title}</h1>
                    <div className="col-6 grid" style={{width:"100%", borderRight:'3px solid #3b625c'}}>
                        <h2 className="col-6 hide-mobile"></h2>
                        <h2 className="col-6 font-lust" style={{fontSize:"54px", textAlign:"right", marginRight:"2vw", marginTop:"0", marginBottom:"0"}}>{p.subtitle}</h2>
                    </div>
                    <div className="col-6 grid workflow-element-copies" style={{width:"100%"}}>
                        <p className="col-8" style={{marginTop:"0", marginBottom:"0"}}>
                            <ul style={{marginTop:"0", paddingLeft:"0", marginLeft:"calc(2vw - 1rem)", marginBottom:"0"}}>
                                {copies}
                            </ul>
                        </p>
                        <p className="col-4"></p>
                    </div>
                </div>
            workflowElements.push(element);
        });
        return workflowElements;
    }

    return (
        <>
            <div className="col-12 grid" style={{width:"100%"}}>
                <div className="col-1"></div>
                <div className="col-11 hide-mobile" id="workflow-navigation">
                    <ul>
                        <li id="nav-element-0"></li>
                        <li id="nav-element-1">Listen</li>
                        <li id="nav-element-2">Research</li>
                        <li id="nav-element-3">Plan</li>
                        <li id="nav-element-4">Design</li>
                        <li id="nav-element-5">Implement</li>
                        <li id="nav-element-6">Deploy</li>
                    </ul>
                </div>
            </div>
            <div className="col-12" style={{width:"100vw"}}>
                <div className="grid grid-center">
                    <div class="col-12">
                        {getWorkflowElements()}
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkflowElements
