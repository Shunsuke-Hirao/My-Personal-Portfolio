"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedTitle({ title }: { title: string }) {
    const [isActive, setIsActive] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsActive(true);

                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`project-header ${isActive ? "is-active" : ""}`}>
            <div className="title-wrapper">
                <h2 className="title-text text-6xl">{title}</h2>
            </div>
            <div className="line-container">
                <div className="drawing-line"></div>
            </div>
        </div>
    );
}