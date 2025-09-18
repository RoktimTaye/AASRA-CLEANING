import React from 'react';
import box1Image from '../assets/Box1.jpg';
import box2Image from '../assets/Box2.jpg';
import box3Image from '../assets/Box3.jpg';

const servicesData = [
  // {
  //   image: box1Image,
  //   alt: "Cleaning service for students or employees",
  //   title: "STUDENT/EMPLOYEE - (1 person & 2 person : 599rs & 999rs/monthly)"
  // },
  // {
  //   image: box2Image,
  //   alt: "Family cleaning package",
  //   title: "FAMILY - (1 person & 2 person : 599rs & 999rs/monthly)"
  // },
  // {
  //   image: box3Image,
  //   alt: "Cleaning for hotels, guesthouses, or homestays",
  //   title: "HOTEL/GUESTHOUSE/HOMESTAY - (1 person & 2 person : 599rs & 999rs/monthly)"
  // }

  {
    image: box1Image,
    alt: "Laundry plan for students and bachelors",
    title: "STUDENTS & BACHELOR - Starting @ ₹499/monthly for 40 clothes"
  },
  {
    image: box2Image,
    alt: "Family laundry packages with multiple options",
    title: "FAMILY PACKAGES - Starting @ ₹999/month for 80 clothes. 3 plans available."
  },
  {
    image: box3Image,
    alt: "Bulk laundry service for hotels and homestays",
    title: "HOTEL & HOMESTAY - Coming soon..."
  }
];

const Services = () => {
  const whatsappNumber = '9531468479'; // Your WhatsApp number

  const handleServiceClick = (serviceName) => {
    const message = `Hello AASRA CLEANING, I'm interested in your "${serviceName}" service. Please provide more details.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=91${whatsappNumber}&text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="section services" id="services">
      <h2>Our Services</h2>
      <div className="gallery">
        {servicesData.map((service, index) => (
          <div 
            className="gallery-item" 
            key={index} 
            onClick={() => handleServiceClick(service.title)}
          >
            <img src={service.image} alt={service.alt} />
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;