import { useState } from 'react';
import './SellCar.css';

const SellCarPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Car Details
        brand: '',
        model: '',
        year: '',
        variant: '',
        fuelType: '',
        transmission: '',

        // Step 2: Condition & Specs
        mileage: '',
        owners: '1',
        registrationState: '',
        serviceHistory: 'yes',
        accidentHistory: 'no',

        // Step 3: Photos
        photos: [],

        // Step 4: Contact Info
        name: '',
        phone: '',
        email: '',
        city: '',
        inspectionDate: '',
    });

    const totalSteps = 4;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePhotoUpload = (e) => {
        const files = Array.from(e.target.files);
        const photoURLs = files.map(file => URL.createObjectURL(file));
        setFormData(prev => ({
            ...prev,
            photos: [...prev.photos, ...photoURLs]
        }));
    };

    const removePhoto = (index) => {
        setFormData(prev => ({
            ...prev,
            photos: prev.photos.filter((_, i) => i !== index)
        }));
    };

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // TODO: Send data to backend
        alert('Thank you! We will contact you shortly to schedule an inspection.');
    };

    return (
        <div className="sell-car-page">
            {/* Mini Hero */}
            <section className="sell-hero">
                <div className="sell-hero-overlay"></div>
                <div className="sell-hero-content">
                    <h1 className="sell-hero-title">Turn Your Car Into <span className="highlight">Cash</span></h1>
                    <p className="sell-hero-subtitle">Get the best value for your luxury car with our transparent process</p>
                </div>
            </section>

            {/* How It Works */}
            <section className="how-it-works">
                <div className="container">
                    <h2 className="section-title">How It <span className="highlight">Works</span></h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-icon">1</div>
                            <h3>Submit Details</h3>
                            <p>Fill out our simple form with your car information</p>
                        </div>
                        <div className="timeline-connector"></div>
                        <div className="timeline-item">
                            <div className="timeline-icon">2</div>
                            <h3>Get Quote</h3>
                            <p>Receive a competitive offer within 24 hours</p>
                        </div>
                        <div className="timeline-connector"></div>
                        <div className="timeline-item">
                            <div className="timeline-icon">3</div>
                            <h3>Inspection</h3>
                            <p>Schedule a free inspection at your convenience</p>
                        </div>
                        <div className="timeline-connector"></div>
                        <div className="timeline-item">
                            <div className="timeline-icon">4</div>
                            <h3>Get Paid</h3>
                            <p>Instant payment upon agreement</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Multi-Step Form */}
            <section className="sell-form-section">
                <div className="container">
                    <div className="form-wrapper">
                        {/* Progress Indicator */}
                        <div className="progress-bar">
                            {[1, 2, 3, 4].map((step) => (
                                <div key={step} className="progress-step-wrapper">
                                    <div className={`progress-step ${currentStep >= step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}>
                                        {currentStep > step ? '✓' : step}
                                    </div>
                                    {step < 4 && <div className={`progress-line ${currentStep > step ? 'active' : ''}`}></div>}
                                </div>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit} className="sell-form">
                            {/* Step 1: Car Details */}
                            {currentStep === 1 && (
                                <div className="form-step">
                                    <h2 className="step-title">Car Details</h2>
                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label>Brand *</label>
                                            <select name="brand" value={formData.brand} onChange={handleInputChange} required>
                                                <option value="">Select Brand</option>
                                                <option value="Mercedes-Benz">Mercedes-Benz</option>
                                                <option value="BMW">BMW</option>
                                                <option value="Audi">Audi</option>
                                                <option value="Porsche">Porsche</option>
                                                <option value="Jaguar">Jaguar</option>
                                                <option value="Land Rover">Land Rover</option>
                                                <option value="Lexus">Lexus</option>
                                                <option value="Maserati">Maserati</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Model *</label>
                                            <input type="text" name="model" value={formData.model} onChange={handleInputChange} placeholder="e.g., E-Class" required />
                                        </div>

                                        <div className="form-group">
                                            <label>Year *</label>
                                            <input type="number" name="year" value={formData.year} onChange={handleInputChange} placeholder="e.g., 2020" min="1990" max="2025" required />
                                        </div>

                                        <div className="form-group">
                                            <label>Variant</label>
                                            <input type="text" name="variant" value={formData.variant} onChange={handleInputChange} placeholder="e.g., E 220d" />
                                        </div>

                                        <div className="form-group">
                                            <label>Fuel Type *</label>
                                            <select name="fuelType" value={formData.fuelType} onChange={handleInputChange} required>
                                                <option value="">Select Fuel Type</option>
                                                <option value="Petrol">Petrol</option>
                                                <option value="Diesel">Diesel</option>
                                                <option value="Electric">Electric</option>
                                                <option value="Hybrid">Hybrid</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Transmission *</label>
                                            <select name="transmission" value={formData.transmission} onChange={handleInputChange} required>
                                                <option value="">Select Transmission</option>
                                                <option value="Automatic">Automatic</option>
                                                <option value="Manual">Manual</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Condition & Specs */}
                            {currentStep === 2 && (
                                <div className="form-step">
                                    <h2 className="step-title">Condition & Specifications</h2>
                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label>Current Mileage (km) *</label>
                                            <input type="number" name="mileage" value={formData.mileage} onChange={handleInputChange} placeholder="e.g., 25000" required />
                                        </div>

                                        <div className="form-group">
                                            <label>Number of Owners *</label>
                                            <select name="owners" value={formData.owners} onChange={handleInputChange} required>
                                                <option value="1">1st Owner</option>
                                                <option value="2">2nd Owner</option>
                                                <option value="3">3rd Owner</option>
                                                <option value="4+">4+ Owners</option>
                                            </select>
                                        </div>

                                        <div className="form-group full-width">
                                            <label>Registration State *</label>
                                            <input type="text" name="registrationState" value={formData.registrationState} onChange={handleInputChange} placeholder="e.g., Maharashtra" required />
                                        </div>

                                        <div className="form-group">
                                            <label>Service History Available? *</label>
                                            <div className="radio-group">
                                                <label className="radio-label">
                                                    <input type="radio" name="serviceHistory" value="yes" checked={formData.serviceHistory === 'yes'} onChange={handleInputChange} />
                                                    <span>Yes</span>
                                                </label>
                                                <label className="radio-label">
                                                    <input type="radio" name="serviceHistory" value="no" checked={formData.serviceHistory === 'no'} onChange={handleInputChange} />
                                                    <span>No</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Accident History? *</label>
                                            <div className="radio-group">
                                                <label className="radio-label">
                                                    <input type="radio" name="accidentHistory" value="yes" checked={formData.accidentHistory === 'yes'} onChange={handleInputChange} />
                                                    <span>Yes</span>
                                                </label>
                                                <label className="radio-label">
                                                    <input type="radio" name="accidentHistory" value="no" checked={formData.accidentHistory === 'no'} onChange={handleInputChange} />
                                                    <span>No</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Photos */}
                            {currentStep === 3 && (
                                <div className="form-step">
                                    <h2 className="step-title">Upload Photos</h2>
                                    <p className="step-subtitle">Add 5-10 clear photos of your car (exterior, interior, dashboard)</p>

                                    <div className="photo-upload-area">
                                        <input
                                            type="file"
                                            id="photo-upload"
                                            multiple
                                            accept="image/*"
                                            onChange={handlePhotoUpload}
                                            style={{ display: 'none' }}
                                        />
                                        <label htmlFor="photo-upload" className="upload-label">
                                            <div className="upload-icon">📷</div>
                                            <p>Click to upload or drag and drop</p>
                                            <span>PNG, JPG up to 10MB each</span>
                                        </label>
                                    </div>

                                    {formData.photos.length > 0 && (
                                        <div className="photo-preview-grid">
                                            {formData.photos.map((photo, index) => (
                                                <div key={index} className="photo-preview">
                                                    <img src={photo} alt={`Car photo ${index + 1}`} />
                                                    <button type="button" className="remove-photo" onClick={() => removePhoto(index)}>×</button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Step 4: Contact Info */}
                            {currentStep === 4 && (
                                <div className="form-step">
                                    <h2 className="step-title">Contact Information</h2>
                                    <div className="form-grid">
                                        <div className="form-group full-width">
                                            <label>Full Name *</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" required />
                                        </div>

                                        <div className="form-group">
                                            <label>Phone Number *</label>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210" required />
                                        </div>

                                        <div className="form-group">
                                            <label>Email *</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required />
                                        </div>

                                        <div className="form-group">
                                            <label>City *</label>
                                            <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="e.g., Mumbai" required />
                                        </div>

                                        <div className="form-group">
                                            <label>Preferred Inspection Date</label>
                                            <input type="date" name="inspectionDate" value={formData.inspectionDate} onChange={handleInputChange} />
                                        </div>
                                    </div>

                                    <div className="form-summary">
                                        <h3>Summary</h3>
                                        <div className="summary-grid">
                                            <div><strong>Car:</strong> {formData.brand} {formData.model} {formData.year}</div>
                                            <div><strong>Mileage:</strong> {formData.mileage} km</div>
                                            <div><strong>Owners:</strong> {formData.owners}</div>
                                            <div><strong>Photos:</strong> {formData.photos.length} uploaded</div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="form-navigation">
                                {currentStep > 1 && (
                                    <button type="button" className="btn btn-secondary" onClick={prevStep}>
                                        ← Previous
                                    </button>
                                )}
                                {currentStep < totalSteps ? (
                                    <button type="button" className="btn btn-primary" onClick={nextStep}>
                                        Next →
                                    </button>
                                ) : (
                                    <button type="submit" className="btn btn-primary">
                                        Submit Request
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Why Sell to Us */}
            <section className="why-sell">
                <div className="container">
                    <h2 className="section-title">Why Sell to <span className="highlight">Empire Autos</span>?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">💰</div>
                            <h3>Best Price</h3>
                            <p>Get the maximum value for your luxury vehicle with our competitive pricing</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">⚡</div>
                            <h3>Quick Process</h3>
                            <p>From evaluation to payment in as little as 24 hours</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🛡️</div>
                            <h3>Trusted & Secure</h3>
                            <p>100% safe and transparent transactions with proper documentation</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🎯</div>
                            <h3>Free Inspection</h3>
                            <p>Professional inspection at your doorstep at no cost</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SellCarPage;
