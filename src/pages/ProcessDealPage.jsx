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
    const nextCard = cardRefs[index].current;
    
    if (nextCard) {
        // 1. Get the height of your navbar (e.g., 80px)
        const navbarHeight = 80; 
        
        // 2. Calculate the distance from the top of the page to the card
        const targetPosition = nextCard.getBoundingClientRect().top + window.pageYOffset;
        
        // 3. Subtract the navbar height to create the "gap"
        const finalScrollPosition = targetPosition - navbarHeight;

        window.scrollTo({
            top: finalScrollPosition,
            behavior: "smooth"
        });
    }
};

    return (
        <section className="process-section">
            <div className="container">
                <div className="process-header">
                    <h2 className="process-title">How we build your success</h2>
                    <p className="process-subtitle">Please go through our project workflow here every phase means a lot to us. </p>
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