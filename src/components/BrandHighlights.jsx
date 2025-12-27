import './BrandHighlights.css';

const BrandHighlights = () => {
    const highlights = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            ),
            title: 'Certified Quality',
            description: 'Every vehicle undergoes rigorous 150-point inspection'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: 'Best Price Guarantee',
            description: 'Competitive pricing with transparent evaluation process'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                </svg>
            ),
            title: 'Instant Financing',
            description: 'Quick loan approvals with flexible payment options'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: 'Expert Consultation',
            description: 'Dedicated advisors to guide your luxury car journey'
        }
    ];

    return (
        <section className="brand-highlights">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Why Choose <span className="text-gradient">Empire Autos</span>
                    </h2>
                    <p className="section-subtitle">
                        Experience unmatched excellence in luxury pre-owned automotive retail
                    </p>
                </div>

                <div className="highlights-grid">
                    {highlights.map((highlight, index) => (
                        <div
                            key={index}
                            className="highlight-card"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="highlight-icon">
                                {highlight.icon}
                            </div>
                            <h3 className="highlight-title">{highlight.title}</h3>
                            <p className="highlight-description">{highlight.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandHighlights;
