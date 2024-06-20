import React from 'react';
import StyledHeading from '../components/styledHeading';

const FAQ = () => {
  const faqs = [
    {
      question: "What do I need to get started with FPV drones?",
      answer: "To get started, you will need an FPV drone, a transmitter (controller), FPV goggles or a monitor, batteries, a charger, and optionally, a GPS module for advanced features."
    },
    {
      question: "What is the difference between analog and digital FPV systems?",
      answer: "Analog FPV systems transmit video signals with lower latency but lower image quality. Digital FPV systems offer higher image quality but may have slightly higher latency."
    },
    {
      question: "How far can an FPV drone fly?",
      answer: "The range of an FPV drone depends on the transmitter and receiver, the environment, and the drone's battery life. Typical ranges are between 1km and 4km."
    },
    {
      question: "What safety precautions should I take when flying FPV drones?",
      answer: "Always fly in open areas away from people and buildings, keep your drone within line of sight, and follow local regulations and guidelines."
    },
    {
      question: "Can I get replacement parts for my drone?",
      answer: "Yes, we offer a wide range of replacement parts for our drones. Check our parts section or contact our support team for assistance."
    },
    {
      question: "Do you offer technical consultation?",
      answer: "Yes, we provide free technical consultation for the first 3 months after your purchase to help you get the most out of your FPV drone."
    }
  ];

  return (
    <div className=" px-20 py-8 bg-gray-950">
         <StyledHeading bg_text="FAQ" fg_text="FAQ" />
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 text-white rounded-lg bg-zinc-800 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
