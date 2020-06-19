import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkflowElements = ({ }) => {
    let currentTitle="HELLO";
    let currentcopy="";
    const pages = [
        { title: "", navigation: "nav-element-0", copy: [] },
        { title: "Crafting the Briefing", navigation: "nav-element-1", copy: ["Functional Specifications", "Project Goals", "Target Audience", "Market", "Competitors", "Content Requirements", "Technical requirements"] },
        { title: "Evaluate the problem", navigation: "nav-element-2", copy: ["User persona", "Crafting MVP", "Moodboard", "Product mapping", "Content Architecture", "Storyframes", "Rapid wireframe", "Tone & Voice", "Technical Scope", "Software Requirements", "Functional Limitations", "Legal Analysis"] },
        { title: "Timming is important", navigation: "nav-element-3", copy: ["Structurate the form of work", "Working agile in sprints", "Involve the client in the process", "Timetable Agreement", "Deadlines", "Release Phases"] },
        { title: "Visual, writting & technical design", navigation: "nav-element-4", copy: ["UX writing", "User Interface", "High definition prototype", "Interations", "Animations", "Software Architecture", "Technical Design", "Project Scaffolding", "Data Domain Modelling", "Prepare Environment", "Deployment Plan"] },
        { title: "Build, build, build!", navigation: "nav-element-5", copy: ["Software implementation", "Business Logic", "Consume Third-party libraries", "Database Building", "Client Apps Implementation"] },
        { title: "Turning it on!", navigation: "nav-element-6", copy: ["Execute Deployment Plan", "Test Before & After", "Deployment", "Client Validation", "Continuous Integration", "Maintenance Plan", "Bug Fixes", "Move to production"] },
    ];
    
    let pageNumber = 0;
    var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

    const next = function () {
        console.log(pages[pageNumber].title)
        pageNumber = pageNumber + 1;
        if (pageNumber > pages.length - 1) {
            pageNumber = 0;
        }
        updateSection();
    }

    const previous = function () {
        console.log(pages[pageNumber].title)
        pageNumber = pageNumber - 1;
        if (pageNumber < 0) {
            pageNumber = pages.length - 1;
        }
        updateSection();
    }

    const updateSection = function () {
        hideElement("workflow-elements");
        updateSelectorNavigation();
        setTimeout(function () {
            showElement("workflow-elements");
        }, 400);

    }

    const hideElement = function (queryElement) {
        if(typeof(document)!==`undefined`){
            document.getElementById(queryElement).style.opacity = "0";
        }
    }

    const showElement = function (queryElement) {
        if(typeof(document)!==`undefined`){
            document.getElementById(queryElement).style.opacity = "1";
        }
    }

    const updateSelectorNavigation = function () {
        if(typeof(document)!==`undefined`){
            let alreadySelected = document.getElementsByClassName("selected");
            for (let i = 0; i < alreadySelected.length; i++) {
                alreadySelected[i].classList.remove("selected");
            }
            let navigationQuery = pages[pageNumber].navigation;
            currentTitle=pages[pageNumber].title;
            console.log(currentTitle);
            document.getElementById(navigationQuery).classList.add("selected");
    
        }
    }

    const onKeyUpEvent = function (event) {
        if (event.key == 'ArrowRight') {
            next();
        }
        if (event.key == 'ArrowLeft') {
            previous();
        }
    }

    const enableNavigationEvents = function () {
        if(typeof(document)!==`undefined`){
            document.body.addEventListener('wheel', onWheelEvent, false);
            document.addEventListener('keyup', onKeyUpEvent);
        }
    }

    const disableNavigationEvents = function () {
        if(typeof(document)!==`undefined`){
            document.body.removeEventListener('wheel', onWheelEvent, false);
            document.removeEventListener('keyup', onKeyUpEvent);    
        }
    }

    const onWheelEvent = function (event) {
        if(window){
            window.scrollTo(0, 100);
            if (event.deltaY > 0) {
                disableNavigationEvents();
                next();
                setTimeout(enableNavigationEvents, 800);
            } else {
                disableNavigationEvents();
                previous();
                setTimeout(enableNavigationEvents, 800);
            }
        }

    }

    enableNavigationEvents();

    return (
        <>
            <div className="col-12">
                <div id="workflow-navigation">
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
            <div className="col-12">
                <div id="workflow-elements" className="grid grid-baseline">
                    <div className="col-2"></div>
                    <div id="workflow-element-title" className="col-2">
                        <hi>{currentTitle}</hi>
                    </div>
                    <div className="col-8">
                        <div id="workflow-element-description" className="grid grid-baseline">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkflowElements
