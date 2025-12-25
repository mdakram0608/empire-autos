import './FeaturedCars.css';

const FeaturedCars = () => {
    const cars = [
        {
            id: 1,
            name: 'Mercedes-Benz S-Class',
            year: 2022,
            price: '₹1,25,00,000',
            mileage: '12,000 km',
            fuel: 'Petrol',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
            badge: 'Certified'
        },
        {
            id: 2,
            name: 'BMW 7 Series',
            year: 2023,
            price: '₹1,45,00,000',
            mileage: '8,500 km',
            fuel: 'Diesel',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
            badge: 'New Arrival'
        },
        {
            id: 3,
            name: 'Audi A8 L',
            year: 2022,
            price: '₹1,35,00,000',
            mileage: '15,000 km',
            fuel: 'Petrol',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
            badge: 'Best Value'
        },
        {
            id: 4,
            name: 'Porsche Panamera',
            year: 2023,
            price: '₹1,85,00,000',
            mileage: '5,000 km',
            fuel: 'Petrol',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
            badge: 'Premium'
        },
        {
            id: 5,
            name: 'Jaguar XJ',
            year: 2021,
            price: '₹95,00,000',
            mileage: '20,000 km',
            fuel: 'Diesel',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
            badge: 'Hot Deal'
        },
        {
            id: 6,
            name: 'Range Rover Vogue',
            year: 2022,
            price: '₹1,65,00,000',
            mileage: '10,000 km',
            fuel: 'Diesel',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
            badge: 'Exclusive'
        }
    ];

    return (
        <section className="featured-cars" id="collection">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Our Premium <span className="text-gradient">Collection</span>
                    </h2>
                    <p className="section-subtitle">
                        Handpicked luxury vehicles, meticulously inspected and certified for your ultimate driving experience
                    </p>
                </div>

                <div className="cars-grid">
                    {cars.map((car, index) => (
                        <div
                            key={car.id}
                            className="car-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="car-image-wrapper">
                                <img src={car.image} alt={car.name} className="car-image" />
                                <div className="car-badge">{car.badge}</div>
                                <div className="car-overlay">
                                    <button className="view-details-btn">View Details</button>
                                </div>
                            </div>

                            <div className="car-info">
                                <h3 className="car-name">{car.name}</h3>
                                <p className="car-year">{car.year}</p>

                                <div className="car-specs">
                                    <div className="spec-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2v20M2 12h20" />
                                        </svg>
                                        <span>{car.mileage}</span>
                                    </div>
                                    <div className="spec-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                        </svg>
                                        <span>{car.fuel}</span>
                                    </div>
                                    <div className="spec-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="11" width="18" height="10" rx="2" />
                                        </svg>
                                        <span>{car.transmission}</span>
                                    </div>
                                </div>

                                <div className="car-footer">
                                    <p className="car-price">{car.price}</p>
                                    <button className="contact-btn">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="view-all-wrapper">
                    <a href="#all-cars" className="btn btn-secondary">
                        View All Cars
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCars;
