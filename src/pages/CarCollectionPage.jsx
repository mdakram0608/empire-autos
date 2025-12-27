import { useState, useMemo } from 'react';
import './CarCollectionPage.css';

const CarCollectionPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState('all');
    const [selectedYearRange, setSelectedYearRange] = useState('all');
    const [selectedFuelType, setSelectedFuelType] = useState('all');
    const [selectedTransmission, setSelectedTransmission] = useState('all');
    const [sortBy, setSortBy] = useState('featured');
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

    const cars = [
        {
            id: 1,
            name: 'Mercedes-Benz S-Class',
            brand: 'Mercedes-Benz',
            year: 2023,
            price: 12500000,
            mileage: '8,000 km',
            fuel: 'Petrol',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
            badge: 'Certified',
            color: 'Obsidian Black',
            engine: '3.0L V6 Turbo'
        },
        {
            id: 2,
            name: 'BMW 7 Series',
            brand: 'BMW',
            year: 2023,
            price: 14500000,
            mileage: '5,200 km',
            fuel: 'Diesel',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
            badge: 'New Arrival',
            color: 'Tanzanite Blue',
            engine: '3.0L Diesel'
        },
        {
            id: 3,
            name: 'Audi A8 L',
            brand: 'Audi',
            year: 2022,
            price: 13500000,
            mileage: '12,000 km',
            fuel: 'Petrol',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
            badge: 'Best Value',
            color: 'Glacier White',
            engine: '3.0L TFSI'
        },
        {
            id: 4,
            name: 'Porsche Panamera',
            brand: 'Porsche',
            year: 2023,
            price: 18500000,
            mileage: '3,500 km',
            fuel: 'Petrol',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
            badge: 'Premium',
            color: 'Carrara White',
            engine: '2.9L V6 Twin-Turbo'
        },
        {
            id: 5,
            name: 'Jaguar XJ',
            brand: 'Jaguar',
            year: 2021,
            price: 9500000,
            mileage: '18,000 km',
            fuel: 'Diesel',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
            badge: 'Hot Deal',
            color: 'Santorini Black',
            engine: '3.0L V6 Diesel'
        },
        {
            id: 6,
            name: 'Range Rover Vogue',
            brand: 'Land Rover',
            year: 2022,
            price: 16500000,
            mileage: '9,000 km',
            fuel: 'Diesel',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
            badge: 'Exclusive',
            color: 'Byron Blue',
            engine: '3.0L D300'
        },
        {
            id: 7,
            name: 'Bentley Continental GT',
            brand: 'Bentley',
            year: 2023,
            price: 35000000,
            mileage: '2,000 km',
            fuel: 'Petrol',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
            badge: 'Ultra Luxury',
            color: 'Glacier White',
            engine: '6.0L W12'
        },
        {
            id: 8,
            name: 'Audi Q7',
            brand: 'Audi',
            year: 2023,
            price: 8500000,
            mileage: '6,500 km',
            fuel: 'Diesel',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&q=80',
            badge: 'Popular',
            color: 'Navarra Blue',
            engine: '3.0L TDI'
        },
        {
            id: 9,
            name: 'Mercedes-AMG GT',
            brand: 'Mercedes-Benz',
            year: 2022,
            price: 22000000,
            mileage: '7,200 km',
            fuel: 'Petrol',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80',
            badge: 'Performance',
            color: 'AMG Solarbeam',
            engine: '4.0L V8 Biturbo'
        },
        {
            id: 10,
            name: 'BMW X7',
            brand: 'BMW',
            year: 2023,
            price: 11500000,
            mileage: '4,800 km',
            fuel: 'Diesel',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1617886322207-8d349c0b56e5?w=800&q=80',
            badge: 'Family Luxury',
            color: 'Carbon Black',
            engine: '3.0L Inline-6'
        },
        {
            id: 11,
            name: 'Porsche Cayenne',
            brand: 'Porsche',
            year: 2022,
            price: 13800000,
            mileage: '11,000 km',
            fuel: 'Petrol',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1607603750916-e3200a65d15a?w=800&q=80',
            badge: 'Sport SUV',
            color: 'Dolomite Silver',
            engine: '3.0L V6 Turbo'
        },
        {
            id: 12,
            name: 'Maserati Quattroporte',
            brand: 'Maserati',
            year: 2021,
            price: 10500000,
            mileage: '15,000 km',
            fuel: 'Petrol',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1563720223185-11003d5099b2?w=800&q=80',
            badge: 'Italian Luxury',
            color: 'Blu Emozione',
            engine: '3.0L V6 Twin-Turbo'
        },
        {
            id: 13,
            name: 'Lexus LS 500h',
            brand: 'Lexus',
            year: 2023,
            price: 9800000,
            mileage: '3,000 km',
            fuel: 'Hybrid',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
            badge: 'Eco Luxury',
            color: 'Sonic Titanium',
            engine: '3.5L V6 Hybrid'
        },
        {
            id: 14,
            name: 'Range Rover Sport',
            brand: 'Land Rover',
            year: 2023,
            price: 12800000,
            mileage: '5,500 km',
            fuel: 'Petrol',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11d?w=800&q=80',
            badge: 'Dynamic',
            color: 'Fuji White',
            engine: '3.0L P400'
        },
        {
            id: 15,
            name: 'BMW M5 Competition',
            brand: 'BMW',
            year: 2022,
            price: 17500000,
            mileage: '8,800 km',
            fuel: 'Petrol',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80',
            badge: 'M Performance',
            color: 'Marina Bay Blue',
            engine: '4.4L V8 Twin-Turbo'
        },
        {
            id: 16,
            name: 'Audi RS7 Sportback',
            brand: 'Audi',
            year: 2023,
            price: 16800000,
            mileage: '4,200 km',
            fuel: 'Petrol',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&q=80',
            badge: 'RS Performance',
            color: 'Nardo Grey',
            engine: '4.0L TFSI V8'
        },
        {
            id: 17,
            name: 'Mercedes-Benz GLS',
            brand: 'Mercedes-Benz',
            year: 2023,
            price: 11200000,
            mileage: '6,000 km',
            fuel: 'Diesel',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=800&q=80',
            badge: 'Luxury SUV',
            color: 'Selenite Grey',
            engine: '3.0L Inline-6 Diesel'
        },
        {
            id: 18,
            name: 'Porsche 911 Carrera',
            brand: 'Porsche',
            year: 2022,
            price: 19500000,
            mileage: '9,500 km',
            fuel: 'Petrol',
            transmission: 'Automatic',
            image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=800&q=80',
            badge: 'Icon',
            color: 'GT Silver Metallic',
            engine: '3.0L Twin-Turbo Flat-6'
        }
    ];

    const brands = [...new Set(cars.map(car => car.brand))].sort();

    // Filter and sort cars
    const filteredAndSortedCars = useMemo(() => {
        let filtered = cars.filter(car => {
            // Search filter
            if (searchQuery && !car.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                return false;
            }

            // Brand filter
            if (selectedBrands.length > 0 && !selectedBrands.includes(car.brand)) {
                return false;
            }

            // Price filter
            if (selectedPriceRange !== 'all') {
                const price = car.price;
                if (selectedPriceRange === 'under-10' && price >= 10000000) return false;
                if (selectedPriceRange === '10-15' && (price < 10000000 || price >= 15000000)) return false;
                if (selectedPriceRange === '15-20' && (price < 15000000 || price >= 20000000)) return false;
                if (selectedPriceRange === 'above-20' && price < 20000000) return false;
            }

            // Year filter
            if (selectedYearRange !== 'all') {
                const year = car.year;
                if (selectedYearRange === '2023' && year !== 2023) return false;
                if (selectedYearRange === '2022' && year !== 2022) return false;
                if (selectedYearRange === '2021' && year !== 2021) return false;
            }

            // Fuel type filter
            if (selectedFuelType !== 'all' && car.fuel !== selectedFuelType) {
                return false;
            }

            // Transmission filter
            if (selectedTransmission !== 'all' && car.transmission !== selectedTransmission) {
                return false;
            }

            return true;
        });

        // Sort
        if (sortBy === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'year-new') {
            filtered.sort((a, b) => b.year - a.year);
        } else if (sortBy === 'year-old') {
            filtered.sort((a, b) => a.year - b.year);
        } else if (sortBy === 'mileage') {
            filtered.sort((a, b) => parseInt(a.mileage) - parseInt(b.mileage));
        }

        return filtered;
    }, [searchQuery, selectedBrands, selectedPriceRange, selectedYearRange, selectedFuelType, selectedTransmission, sortBy]);

    const toggleBrand = (brand) => {
        setSelectedBrands(prev =>
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedBrands([]);
        setSelectedPriceRange('all');
        setSelectedYearRange('all');
        setSelectedFuelType('all');
        setSelectedTransmission('all');
        setSortBy('featured');
    };

    const formatPrice = (price) => {
        return `₹${(price / 100000).toFixed(2)} L`;
    };

    return (
        <div className="collection-page">
            <div className="collection-hero">
                <div className="container">
                    <h1 className="collection-title">
                        Our Premium <span className="text-gradient">Collection</span>
                    </h1>
                    <p className="collection-subtitle">
                        Discover {cars.length} handpicked luxury vehicles, meticulously inspected and certified
                    </p>
                </div>
            </div>

            <div className="collection-container">
                <div className="container">
                    <div className="collection-layout">
                        {/* Filters Sidebar */}
                        <aside className="filters-sidebar">
                            <div className="filters-header">
                                <h3>Filters</h3>
                                {(selectedBrands.length > 0 || selectedPriceRange !== 'all' ||
                                    selectedYearRange !== 'all' || selectedFuelType !== 'all' ||
                                    selectedTransmission !== 'all') && (
                                        <button className="clear-filters" onClick={clearAllFilters}>
                                            Clear All
                                        </button>
                                    )}
                            </div>

                            {/* Search */}
                            <div className="filter-group">
                                <label className="filter-label">Search</label>
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Search by car name..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {/* Brand Filter */}
                            <div className="filter-group">
                                <label className="filter-label">Brand</label>
                                <div className="filter-options">
                                    {brands.map(brand => (
                                        <label key={brand} className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                checked={selectedBrands.includes(brand)}
                                                onChange={() => toggleBrand(brand)}
                                            />
                                            <span>{brand}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="filter-group">
                                <label className="filter-label">Price Range</label>
                                <select
                                    className="filter-select"
                                    value={selectedPriceRange}
                                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                                >
                                    <option value="all">All Prices</option>
                                    <option value="under-10">Under ₹1 Cr</option>
                                    <option value="10-15">₹1 Cr - ₹1.5 Cr</option>
                                    <option value="15-20">₹1.5 Cr - ₹2 Cr</option>
                                    <option value="above-20">Above ₹2 Cr</option>
                                </select>
                            </div>

                            {/* Year */}
                            <div className="filter-group">
                                <label className="filter-label">Year</label>
                                <select
                                    className="filter-select"
                                    value={selectedYearRange}
                                    onChange={(e) => setSelectedYearRange(e.target.value)}
                                >
                                    <option value="all">All Years</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                </select>
                            </div>

                            {/* Fuel Type */}
                            <div className="filter-group">
                                <label className="filter-label">Fuel Type</label>
                                <select
                                    className="filter-select"
                                    value={selectedFuelType}
                                    onChange={(e) => setSelectedFuelType(e.target.value)}
                                >
                                    <option value="all">All Types</option>
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>

                            {/* Transmission */}
                            <div className="filter-group">
                                <label className="filter-label">Transmission</label>
                                <select
                                    className="filter-select"
                                    value={selectedTransmission}
                                    onChange={(e) => setSelectedTransmission(e.target.value)}
                                >
                                    <option value="all">All Types</option>
                                    <option value="Automatic">Automatic</option>
                                    <option value="Manual">Manual</option>
                                </select>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <main className="collection-main">
                            {/* Toolbar */}
                            <div className="collection-toolbar">
                                <div className="results-info">
                                    <span className="results-count">{filteredAndSortedCars.length}</span>
                                    <span className="results-text">vehicles found</span>
                                </div>

                                <div className="toolbar-controls">
                                    {/* Sort Dropdown */}
                                    <select
                                        className="sort-select"
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                    >
                                        <option value="featured">Featured</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="year-new">Year: Newest First</option>
                                        <option value="year-old">Year: Oldest First</option>
                                        <option value="mileage">Mileage: Low to High</option>
                                    </select>

                                    {/* View Toggle */}
                                    <div className="view-toggle">
                                        <button
                                            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                            onClick={() => setViewMode('grid')}
                                            title="Grid View"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="3" width="7" height="7" />
                                                <rect x="14" y="3" width="7" height="7" />
                                                <rect x="14" y="14" width="7" height="7" />
                                                <rect x="3" y="14" width="7" height="7" />
                                            </svg>
                                        </button>
                                        <button
                                            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                                            onClick={() => setViewMode('list')}
                                            title="List View"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="8" y1="6" x2="21" y2="6" />
                                                <line x1="8" y1="12" x2="21" y2="12" />
                                                <line x1="8" y1="18" x2="21" y2="18" />
                                                <line x1="3" y1="6" x2="3.01" y2="6" />
                                                <line x1="3" y1="12" x2="3.01" y2="12" />
                                                <line x1="3" y1="18" x2="3.01" y2="18" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Cars Grid */}
                            {filteredAndSortedCars.length === 0 ? (
                                <div className="no-results">
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="11" cy="11" r="8" />
                                        <path d="m21 21-4.35-4.35" />
                                    </svg>
                                    <h3>No vehicles found</h3>
                                    <p>Try adjusting your filters or search criteria</p>
                                    <button className="clear-filters-btn" onClick={clearAllFilters}>
                                        Clear All Filters
                                    </button>
                                </div>
                            ) : (
                                <div className={`cars-${viewMode}`}>
                                    {filteredAndSortedCars.map((car, index) => (
                                        <div
                                            key={car.id}
                                            className={`car-card-${viewMode}`}
                                            style={{ animationDelay: `${index * 0.05}s` }}
                                        >
                                            <div className="car-image-wrapper">
                                                <img src={car.image} alt={car.name} className="car-image" />
                                                <div className="car-badge">{car.badge}</div>
                                                <div className="car-overlay">
                                                    <button className="view-details-btn">View Details</button>
                                                </div>
                                            </div>

                                            <div className="car-info">
                                                <div className="car-header">
                                                    <h3 className="car-name">{car.name}</h3>
                                                    <p className="car-year">{car.year}</p>
                                                </div>

                                                <div className="car-specs">
                                                    <div className="spec-item">
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path d="M12 2v20M2 12h20" />
                                                        </svg>
                                                        <span>{car.mileage}</span>
                                                    </div>
                                                    <div className="spec-item">
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <circle cx="12" cy="12" r="10" />
                                                        </svg>
                                                        <span>{car.fuel}</span>
                                                    </div>
                                                    <div className="spec-item">
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <rect x="3" y="11" width="18" height="10" rx="2" />
                                                        </svg>
                                                        <span>{car.transmission}</span>
                                                    </div>
                                                </div>

                                                <div className="car-details">
                                                    <div className="detail-item">
                                                        <span className="detail-label">Color</span>
                                                        <span className="detail-value">{car.color}</span>
                                                    </div>
                                                    <div className="detail-item">
                                                        <span className="detail-label">Engine</span>
                                                        <span className="detail-value">{car.engine}</span>
                                                    </div>
                                                </div>

                                                <div className="car-footer">
                                                    <p className="car-price">{formatPrice(car.price)}</p>
                                                    <button className="contact-btn">Contact Us</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCollectionPage;
