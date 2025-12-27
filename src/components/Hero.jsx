import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [carVisible, setCarVisible] = useState(false);
    const [logoVisible, setLogoVisible] = useState(false);

    useEffect(() => {
        // Start car animation with headlight turn-on effect
        const carTimer = setTimeout(() => {
            setCarVisible(true);
        }, 300);

        // Start logo animation after car animation completes
        const logoTimer = setTimeout(() => {
            setLogoVisible(true);
        }, 1500); // Car animation duration + buffer

        return () => {
            clearTimeout(carTimer);
            clearTimeout(logoTimer);
        };
    }, []);

    return (
        <section className="hero" id="home">
            {/* Car Image with headlight turn-on animation */}
            <div className={`hero-car-wrapper ${carVisible ? 'car-visible' : ''}`}>
                <img src="/hero-car.png" alt="Luxury Car" className="hero-car-image" />
                {/* Headlight glow effect */}
                <div className="headlight-glow headlight-left"></div>
                <div className="headlight-glow headlight-right"></div>
            </div>

            {/* Logo - appears at bottom after car animation */}
            <div className={`hero-logo-wrapper ${logoVisible ? 'logo-visible' : ''}`}>
                <img src="/logo.png" alt="Empire Autos" className="hero-logo-image" />
            </div>

            {/* Scroll indicator */}
            <div className={`scroll-indicator ${logoVisible ? 'visible' : ''}`}>
                <div className="scroll-text">Scroll to Explore</div>
                <div className="scroll-icon">
                    <div className="scroll-wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
