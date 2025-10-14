import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: 'What is the New Zealand Permanent Residency (PR)?',
      answer: 'New Zealand Permanent Residency allows you to live, work, and study in New Zealand indefinitely. After holding a PR, you can access many benefits, including healthcare and social security.',
    },
    {
      question: 'How can I apply for New Zealand PR?',
      answer: `
        <ul>
          <li>You can apply through various pathways including:
            <ul>
              <li>Skilled Migrant Category (points-based system)</li>
              <li>Residence from Work visa</li>
              <li>Family sponsorship</li>
              <li>Investor or Entrepreneur visas</li>
            </ul>
          </li>
        </ul>
      `
    },
    {
      question: 'What are the eligibility criteria for New Zealand PR under the Skilled Migrant Category?',
      answer: `
        <ul>
          <li>Key eligibility requirements include:
            <ul>
              <li>Age under 56 years</li>
              <li>Relevant work experience and qualifications in demand</li>
              <li>English language proficiency</li>
              <li>Health and character requirements</li>
              <li>Minimum points score based on age, experience, and qualifications</li>
            </ul>
          </li>
        </ul>
      `
    },
    {
      question: 'Can international students apply for PR in New Zealand?',
      answer: 'Yes, international students who have completed eligible qualifications and gained relevant work experience can apply for PR through pathways like the Skilled Migrant Category or Residence from Work visa.',
    },
    {
      question: 'What types of student visas are available for New Zealand?',
      answer: `
        <ul>
          <li>New Zealand offers different student visas such as:
            <ul>
              <li>Student Visa (for full-time study)</li>
              <li>Visitor Visa (for short courses less than 3 months)</li>
              <li>Post-study Work Visa (after graduation for work experience)</li>
            </ul>
          </li>
        </ul>
      `
    },
    {
      question: 'How long can I stay in New Zealand on a Visitor Visa?',
      answer: 'Visitor visas typically allow stays of up to 6 months for tourism, visiting family, or short-term business activities. Extensions can be applied for in some cases.',
    },
    {
      question: 'Do I need to know English to apply for a New Zealand visa?',
      answer: 'English language proficiency is required for most visa categories, especially for skilled migrant and student visas. You may need to take approved tests like IELTS or TOEFL.',
    },
    {
      question: 'Can I work while studying in New Zealand?',
      answer: 'Yes, most student visas allow you to work up to 20 hours per week during the academic year and full-time during scheduled breaks.',
    },
    {
      question: 'How do I apply for a New Zealand visa?',
      answer: `
        <ul>
          <li>Applications are mostly submitted online via the Immigration New Zealand website.</li>
          <li>You will need to provide supporting documents such as passport, proof of funds, health checks, and police certificates.</li>
          <li>Processing times vary depending on visa type and individual circumstances.</li>
        </ul>
      `
    },
    {
      question: 'Can I bring my family with me to New Zealand?',
      answer: 'Yes, many visa categories allow you to bring your spouse or dependent children. They may also be eligible to work or study while in New Zealand.',
    },
    {
      question: 'What is the pathway from visitor visa to PR in New Zealand?',
      answer: 'Visitor visas do not directly lead to PR. To apply for PR, you need to qualify under relevant visa categories like Skilled Migrant, Work to Residence, or Family Sponsorship.',
    },
    {
      question: 'Are there any health requirements for New Zealand visas?',
      answer: 'Yes, applicants must meet health requirements including medical examinations and sometimes chest X-rays to ensure they do not pose a public health risk.',
    },
    {
      question: 'How long does the New Zealand PR process usually take?',
      answer: 'Processing times vary but typically take several months to over a year depending on the visa pathway and applicant’s documentation.',
    },
  ];

  return (
    <div className="w-full px-4 text-2xl py-10 relative z-10 " style={{ fontFamily: 'Times New Roman' }}>
      <h2 className="text-center text-3xl font-bold mb-8">Planning to Move to New Zealand? Here’s What You Need to Know!</h2>

      {/* Decorative line */}
      <div className="flex justify-center items-center mb-8">
        <div className="w-20 h-1 bg-green-600"></div>
        <div className="w-4 h-1 bg-green-600 mx-2"></div>
        <div className="w-2 h-1 bg-green-600 mx-1"></div>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto" style={{ fontFamily: 'Times New Roman' }}>
        {questions.map((item, index) => (
          <div key={index} className="border border-green-500 p-5 mb-4 rounded-lg shadow-md bg-white">
            <div
              className="flex justify-between items-center cursor-pointer"
              style={{ fontFamily: 'Times New Roman' }}
              onClick={() => toggleAnswer(index)}
            >
              <span className="text-lg font-bold">{item.question}</span>
              <span className="text-green-500">{openIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
            </div>
            {openIndex === index && (
              <div
                className="faq-answer mt-2 text-black text-lg"
                style={{ fontFamily: 'Times New Roman' }}
                dangerouslySetInnerHTML={{ __html: item.answer }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
