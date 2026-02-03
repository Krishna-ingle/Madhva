import React, { useRef } from "react";
import { motion } from "framer-motion";
import '../assets/styles/ProcessDealPage.css';
import DiscoveryCard from "../components/DiscoveryCard";
import DesignCard from "../components/DesignCard";
import DevelopmentCard from "../components/DevelopmentCard";
import LaunchCard from "../components/DeploymentCard";

export const ProcessDealPage = () => {
    // 1. Create references for each card section
    const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    // 2. Function to scroll to the next index
    const scrollToNext = (index) => {
        if (index < cardRefs.length) {
            cardRefs[index].current?.scrollIntoView({ 
                behavior: "smooth", 
                block: "start" 
            });
        }
    };

    return (
        <section className="process-section">
            <div className="container">
                <div className="process-header">
                    <h2 className="process-title">How we build your success</h2>
                    <p className="process-subtitle">A simple, transparent 4-step process to take your business digital.</p>
                </div>
            </div>

            <div className="process-cards-container">
                {/* 3. Wrap each card in a div with a ref and pass the scroll function */}
                <div ref={cardRefs[0]}>
                    <DiscoveryCard onNext={() => scrollToNext(1)} />
                </div>

                <div ref={cardRefs[1]}>
                    <DesignCard onNext={() => scrollToNext(2)} />
                </div>

                <div ref={cardRefs[2]}>
                    <DevelopmentCard onNext={() => scrollToNext(3)} />
                </div>

                <div ref={cardRefs[3]}>
                    <LaunchCard isLast={true} />
                </div>
            </div>
        </section>
    );
};