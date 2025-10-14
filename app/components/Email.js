import emailjs from 'emailjs-com';

function sendNotification({ sender, text }) {
  emailjs.send(
    'service_0z9ojd5',      // Your Service ID from EmailJS
    'YOUR_TEMPLATE_ID',     // Your Template ID from EmailJS
    {
      sender: sender,
      text: text,
    },
    'YOUR_USER_ID'          // Your User ID from EmailJS
  )
  .then((result) => {
    console.log('Email sent!', result.text);
  }, (error) => {
    console.error('Failed to send email:', error.text);
  });
}