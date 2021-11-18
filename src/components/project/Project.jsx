import React, { useEffect, useRef } from 'react'
import './project.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

function Project() {
    const panels = useRef([]);
    const panelsContainer = useRef();

    const createPanelsRefs = (panel, index) => {
        panels.current[index] = panel;
    };
    useEffect(() => {
        const totalPanels = panels.current.length;

        gsap.to(panels.current, {
            xPercent: -100 * (totalPanels - 1),
            ease: "none",
            scrollTrigger: {
                trigger: panelsContainer.current,
                pin: true,
                scrub: 1,
                snap: 1 / (totalPanels - 1),
                // base vertical scrolling on how wide the container is so it feels more natural.
                end: () => "+=" + panelsContainer.current.offsetWidth
            }
        });
    }, []);
    return (
        <>
            <div className="panels" ref={panelsContainer}>
                <section className="project panel" ref={(e) => createPanelsRefs(e, 0)}>
                    <div className="project-container">
                        <div className="title">
                            ONE
                        </div>
                    </div>

                </section>
                <section className="project2 panel" ref={(e) => createPanelsRefs(e, 1)}>
                    <div className="project-container">
                        <div className="title">
                            TWO
                        </div>
                    </div>

                </section>
                <section className="project3 panel" ref={(e) => createPanelsRefs(e, 2)}>
                    <div className="project-container">
                        <div className="title">
                            TWO
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Project
