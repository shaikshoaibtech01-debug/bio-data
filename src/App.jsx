import React, { useEffect, useState } from 'react';
import { User, Heart, GraduationCap, Briefcase, MapPin, Phone, Mail, Calendar } from 'lucide-react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showInterestForm, setShowInterestForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', mobile: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const bioData = {
    name: "Shaik Shoaib",
    photo: "https://i.postimg.cc/CL3ntt5B/shoaib.jpg",
    dateOfBirth: "07th October 2002",
    age: 23,
    height: "5'8\"",
    weight: "70kg",
    complexion: "Fair",
    bloodGroup: "B+",
    physicalStatus: "Normal",
    maritalStatus: "Never Married",
    motherTongue: "Hindi",
    religion: "Muslim",
    caste: "BCE",
    subCaste: "Shaik",
    currentAddress: "OMNI Hospitals | Best Multi Speciality Hospital in Kukatpally",
    permanentAddress: "Khammam",
    mobile: "+91 9985625409",
    email: "shaikshoaibreal@email.com",
    education: [
      { degree: "Degree in Computer Science", institution: "Kakatiya Institute of Technology", year: "2024", percentage: "7.5 CGPA" },
      { degree: "Senior Secondary (12th)", board: "Telangana Board", year: "2020", percentage: "92%" }
    ],
    occupation: "Software Engineer Training",
    company: "Google India Pvt. Ltd.",
    workLocation: "Gurgaon, Haryana",
    experience: "5 years",
    designation: "Senior Software Engineer Training",
    annualIncome: "₹25,00,000",
    aboutMe: "I am a down-to-earth person who believes in maintaining a perfect balance between traditional values and modern thinking. I'm passionate about my career and equally value family relationships. I enjoy exploring new places, trying different cuisines, and spending quality time with loved ones.",
    languagesKnown: ["Hindi", "English", "Telugu"],
    smokingHabits: "Never",
    drinkingHabits: "Never",
    trainingInfo: "Currently training in Python at 10000 Coders. Working part-time at OMNI Hospital. After training, I plan to join a software company and continue my software development journey."
  };

  const InfoItem = ({ label, value }) => (
    <div className="info-item">
      <span className="label">{label}:</span>
      <span className="value">{value}</span>
    </div>
  );

  const SectionCard = ({ title, icon: Icon, children }) => (
    <div className="section-card">
      <h2 className="section-title">
        <Icon size={24} /> {title}
      </h2>
      {children}
    </div>
  );

const handleFormSubmit = (e) => {
  e.preventDefault();

  // Create a message from the form data
  const message = `Hello, I am interested in the marriage proposal.
Name: ${formData.name}
Mobile: ${formData.mobile}
Message: ${formData.message}`;

  // WhatsApp URL (replace YOUR_NUMBER with your full number including country code, e.g., 919985625409)
  const whatsappURL = `https://wa.me/9985625409?text=${encodeURIComponent(message)}`;

  // Open WhatsApp link in a new tab
  window.open(whatsappURL, '_blank');

  // Optional: reset form
  setFormData({ name: '', mobile: '', message: '' });
  setFormSubmitted(true);

  // Close modal after 2 seconds
  setTimeout(() => {
    setShowInterestForm(false);
    setFormSubmitted(false);
  }, 2000);
};


  return (
    <div className="page">
      <style>{`
        .page {
          font-family: Arial, sans-serif;
          background: linear-gradient(to bottom right, #ffe4e6, #fff5f7, #ffe4e6);
          padding: 20px;
        }
        .header-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          margin-bottom: 20px;
          overflow: hidden;
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? 0 : 20}px);
          transition: all 1s ease;
        }
        .header-top {
          background: linear-gradient(to right, #ec4899, #f43f5e);
          color: white;
          padding: 40px 20px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 20px;
        }
        .photo {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 4px solid white;
          overflow: hidden;
          flex-shrink: 0;
        }
        .photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .header-info h1 {
          font-size: 32px;
          margin: 0 0 10px 0;
        }
        .quick-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 10px;
          background: #fff0f5;
          padding: 20px;
        }
        .quick-box {
          background: white;
          border-radius: 10px;
          padding: 10px;
          text-align: center;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        }
        .section-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          padding: 20px;
          margin-bottom: 20px;
        }
        .section-title {
          font-size: 20px;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 2px solid #fecdd3;
          padding-bottom: 5px;
          color: #333;
        }
        .info-item {
          display: flex;
          justify-content: space-between;
          padding: 6px 0;
          border-bottom: 1px solid #f1f1f1;
        }
        .info-item:last-child {
          border-bottom: none;
        }
        .label {
          font-weight: 600;
          color: #666;
        }
        .value {
          color: #333;
        }
        .about {
          margin-top: 15px;
          padding: 15px;
          background: #fff0f5;
          border-radius: 10px;
          line-height: 1.5;
        }
        .footer {
          background: white;
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          margin-top: 20px;
        }
        .contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          margin: 5px;
          border-radius: 25px;
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: transform 0.3s;
        }
        .contact-btn:hover {
          transform: scale(1.05);
        }
        .phone-btn { background: linear-gradient(to right, #ec4899, #f43f5e); }
        .mail-btn { background: linear-gradient(to right, #3b82f6, #6366f1); }

        /* Interest Form Modal */
        .interest-btn {
          background: #10b981;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 25px;
          cursor: pointer;
          font-size: 16px;
          transition: transform 0.3s;
        }
        .interest-btn:hover {
          transform: scale(1.05);
        }
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          opacity: ${showInterestForm ? 1 : 0};
          pointer-events: ${showInterestForm ? 'auto' : 'none'};
          transition: opacity 0.3s;
        }
        .modal-content {
          background: white;
          border-radius: 12px;
          width: 90%;
          max-width: 400px;
          padding: 20px;
          transform: ${showInterestForm ? 'translateY(0)' : 'translateY(-50px)'};
          transition: transform 0.3s;
        }
        .modal-content h3 {
          margin-top: 0;
        }
        .modal-content input, .modal-content textarea {
          width: 100%;
          padding: 10px;
          margin: 8px 0;
          border-radius: 6px;
          border: 1px solid #d1d5db;
        }
        .modal-content button {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 10px;
        }
        .success-msg {
          color: green;
          font-weight: bold;
          margin-top: 10px;
        }
      `}</style>

      {/* Header */}
      <div className="header-card">
        <div className="header-top">
          <div className="photo">
            <img src={bioData.photo} alt="Profile" />
          </div>
          <div className="header-info">
            <h1>{bioData.name}</h1>
            <p><Calendar size={18} /> {bioData.age} years • {bioData.dateOfBirth}</p>
            <p><Briefcase size={18} /> {bioData.occupation}</p>
            <p><MapPin size={18} /> Hyderabad</p>
            <p><Heart size={18} /> {bioData.maritalStatus}</p>
          </div>
        </div>
        <div className="quick-info">
          <div className="quick-box"><b>Height</b><br />{bioData.height}</div>
          <div className="quick-box"><b>Religion</b><br />{bioData.religion}</div>
          <div className="quick-box"><b>Education</b><br />BSc</div>
          <div className="quick-box"><b>Occupation</b><br />{bioData.occupation}</div>
        </div>
      </div>

      {/* Personal Info */}
      <SectionCard title="Personal Information" icon={User}>
        <InfoItem label="Full Name" value={bioData.name} />
        <InfoItem label="Date of Birth" value={bioData.dateOfBirth} />
        <InfoItem label="Age" value={`${bioData.age} years`} />
        <InfoItem label="Height" value={bioData.height} />
        <InfoItem label="Weight" value={bioData.weight} />
        <InfoItem label="Complexion" value={bioData.complexion} />
        <InfoItem label="Blood Group" value={bioData.bloodGroup} />
        <InfoItem label="Marital Status" value={bioData.maritalStatus} />
        <InfoItem label="Mother Tongue" value={bioData.motherTongue} />
        <InfoItem label="Religion" value={bioData.religion} />
        <InfoItem label="Caste" value={bioData.caste} />
        <InfoItem label="Sub Caste" value={bioData.subCaste} />
        <InfoItem label="Languages Known" value={bioData.languagesKnown.join(", ")} />
        <div className="about">
          <h3>About Me</h3>
          <p>{bioData.aboutMe}</p>
        </div>
      </SectionCard>

      {/* Training & Future Plans */}
      <SectionCard title="Training & Future Plans" icon={GraduationCap}>
        <div className="about">
          <p>{bioData.trainingInfo}</p>
          <button className="interest-btn" onClick={() => setShowInterestForm(true)}>Press Here if Interested</button>
        </div>
      </SectionCard>

      {/* Contact */}
      <SectionCard title="Contact Information" icon={Phone}>
        <InfoItem label="Mobile" value={bioData.mobile} />
        <InfoItem label="Email" value={bioData.email} />
        <InfoItem label="Current Address" value={bioData.currentAddress} />
        <InfoItem label="Permanent Address" value={bioData.permanentAddress} />
      </SectionCard>

      {/* Interest Form Modal */}
      <div className="modal-overlay">
        <div className="modal-content">
          <h3>Contact Me</h3>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={(e) => setFormData({...formData, mobile: e.target.value})}
              required
            />
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
            <button type="submit">Submit</button>
            {formSubmitted && <div className="success-msg">Form submitted successfully!</div>}
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <h3>For Marriage Proposal & Further Information</h3>
        <a href={`tel:${bioData.mobile}`} className="contact-btn phone-btn">
          <Phone size={18} /> {bioData.mobile}
        </a>
        <a href={`mailto:${bioData.email}`} className="contact-btn mail-btn">
          <Mail size={18} /> {bioData.email}
        </a>
        <p>Interested families are welcome to contact for further discussion</p>
      </div>
    </div>
  );
};

export default App;
