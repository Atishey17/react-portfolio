// import React, { useState } from 'react';
// import { Linkedin, Mail, Github } from "lucide-react";

// function Contact() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false); // New state for success message

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Replace this with your actual form submission logic
//       const formData = { name, email, message };

//       console.log('Form Submitted:', formData);

//       // Show the success message after submission
//       setSuccess(true);

//       // Hide the success message after 3 seconds
//       setTimeout(() => {
//         setSuccess(false);
//       }, 3000);

//     } catch (error) {
//       console.error('Error submitting form:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-10 relative bg-slate-200 rounded-lg">
//       <h2 className=" text-center text-4xl font-bold mb-4">Contact Me</h2>

//       {/* Links to Social Media */}
//       <div className="flex gap-6 mb-10">
//         <a href="https://www.linkedin.com/in/atishey17/" target="_blank" rel="noopener noreferrer">
//           <Linkedin size={40} className="hover:text-blue-500 transition-colors duration-300" />
//         </a>
//         <a href="mailto:atisheyj74@gmail.com">
//           <Mail size={40} className="hover:text-red-500 transition-colors duration-300" />
//         </a>
//         <a href="https://github.com/Atishey17" target="_blank" rel="noopener noreferrer">
//           <Github size={40} className="hover:text-black-700 transition-colors duration-300" />
//         </a>
//       </div>

//       {/* Contact Me Form */}
//       <div className="bg-white p-6 rounded-lg shadow-lg hover">
//         <h3 className="text-2xl mb-4">Message me 😄</h3>
//         <form onSubmit={handleSubmit}>
//           {/* Name */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-2">Your Name</label>
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full border rounded-md p-2"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-2">Your Email</label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border rounded-md p-2"
//               required
//             />
//           </div>

//           {/* Message */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-2">Your Message</label>
//             <textarea
//               placeholder="Type your message here..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="w-full border rounded-md p-2 h-32"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="mt-6 flex justify-end">
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50"
//             >
//               {loading ? 'Submitting...' : 'Submit'}
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Success Message */}
//       {success && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="p-6 bg-green-500 text-white rounded-lg shadow-lg animate-success-message">
//             <h4 className="text-3xl font-bold mb-2">Message Sent Successfully!</h4>
//             <p className="text-lg">Thank you for reaching out. I'll get back to you soon!</p>
//           </div>
//         </div>
//       )}

//       {/* CSS for Animation */}
//       <style jsx>{`
//         .animate-success-message {
//           animation: popUp 0.5s ease-in-out, fadeOut 3s ease-out forwards;
//         }

//         @keyframes popUp {
//           0% {
//             transform: scale(0);
//             opacity: 0;
//           }
//           50% {
//             transform: scale(1.2);
//             opacity: 1;
//           }
//           100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }

//         @keyframes fadeOut {
//           0%, 90% {
//             opacity: 1;
//           }
//           100% {
//             opacity: 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Contact;

import React, { useState } from 'react';
import { Linkedin, Mail, Github } from "lucide-react";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); // New state for success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace this with your actual form submission logic
      const formData = { name, email, message };

      console.log('Form Submitted:', formData);

      // Show the success message after submission
      setSuccess(true);

      // Hide the success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 relative bg-slate-200 rounded-lg">
      <h2 className=" text-center text-4xl font-bold mb-4">Contact Me</h2>

      {/* Links to Social Media */}
      <div className="flex gap-6 mb-10">
        <a href="https://www.linkedin.com/in/atishey17/" target="_blank" rel="noopener noreferrer">
          <Linkedin size={40} className="hover:text-blue-500 transition-colors duration-300" />
        </a>
        <a href="mailto:atisheyj74@gmail.com">
          <Mail size={40} className="hover:text-red-500 transition-colors duration-300" />
        </a>
        <a href="https://github.com/Atishey17" target="_blank" rel="noopener noreferrer">
          <Github size={40} className="hover:text-black-700 transition-colors duration-300" />
        </a>

        {/* Button for Resume */}
        <button
          onClick={() => window.open('https://drive.google.com/file/d/1zYFPHR6SQ-2B8jG0jddNZoe2RtcgK8iY/view?usp=sharing', '_blank')}
          className="bg-blue-500 hover:bg-gray-300 text-white text-center font-bold py-2 px-4 rounded-md flex items-center"
        >
          <span className="mr-2">Resume</span>
        </button>

      </div>

      {/* Contact Me Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover">
        <h3 className="text-2xl mb-4">Message me 😄</h3>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md p-2"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Your Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md p-2"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Your Message</label>
            <textarea
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border rounded-md p-2 h-32"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>

      {/* Success Message */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="p-6 bg-green-500 text-white rounded-lg shadow-lg animate-success-message">
            <h4 className="text-3xl font-bold mb-2">Message Sent Successfully!</h4>
            <p className="text-lg">Thank you for reaching out. I'll get back to you soon!</p>
          </div>
        </div>
      )}

      {/* CSS for Animation */}
      <style jsx>{`
        .animate-success-message {
          animation: popUp 0.5s ease-in-out, fadeOut 3s ease-out forwards;
        }

        @keyframes popUp {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          0%, 90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;
