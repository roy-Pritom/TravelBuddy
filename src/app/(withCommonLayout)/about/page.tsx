import Image from 'next/image';
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            Our mission is to provide the best service to our customers with a commitment to quality and excellence. We strive to exceed expectations by delivering innovative solutions tailored to meet the unique needs of each client. Our dedicated team works tirelessly to ensure that every project is completed with the utmost professionalism and attention to detail. We believe in building lasting relationships based on trust, transparency, and mutual respect. Through continuous improvement and a customer-centric approach, we aim to be a leader in our industry, setting the standard for excellence and integrity.
            </p>
        </section>

        {/* Team Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image className="w-24 h-24 rounded-full mx-auto mb-4" src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1716731583~exp=1716735183~hmac=2a083e28236e08e1704a2356cf8940d039d3cfc4ee14296d52a2e0ec5e5370a0&w=996" alt="Team Member 1" width={400} height={400} />
              <h3 className="text-xl font-bold text-gray-900">John Doe</h3>
              <p className="text-gray-700">CEO & Founder</p>
            </div>
            <div className="text-center">
              <Image className="w-24 h-24 rounded-full mx-auto mb-4" src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1716731943~exp=1716735543~hmac=9740fd84506346ece6452a3f1d8f592271c541994439e0f2b9cae36797f2fffc&w=740" alt="Team Member 2" width={400} height={400}/>
              <h3 className="text-xl font-bold text-gray-900">Jane Smith</h3>
              <p className="text-gray-700">Chief Marketing Officer</p>
            </div>
            <div className="text-center">
              <Image className="w-24 h-24 rounded-full mx-auto mb-4" src="https://img.freepik.com/free-photo/fashionable-young-woman-standing-front-blue-backdrop_23-2148204718.jpg?t=st=1716731765~exp=1716735365~hmac=9f10ad8fd66a661ef1cf715cc62ec63664bf4f3ccfdc090af0fb193bcaf0bf38&w=740" alt="Team Member 3" width={400} height={400} />
              <h3 className="text-xl font-bold text-gray-900">Bob Johnson</h3>
              <p className="text-gray-700">Chief Technology Officer</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-4">We love to hear from you! You can reach us at:</p>
          <ul className="text-lg text-gray-700 space-y-2">
            <li>Email: <a href="mailto:info@example.com" className="text-blue-500">wandermate@info.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a></li>
            <li>
              Social Media:
              <div className="flex space-x-4 mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a>
              </div>
            </li>
          </ul>
        </section>
        
      </div>
    </div>
  );
};

export default AboutUs;
