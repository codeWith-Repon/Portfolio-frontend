import Contact from '@/components/Public/Contact';
import React from 'react';


export const metadata = {
  title: 'Contact | Repon – Get in Touch',
  description:
    'Get in touch with Repon for web development projects, collaborations, or any tech-related inquiries. Fill out the contact form or connect directly via email and social platforms.',
};

const ContactPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Contact />
    </div>
  );
};

export default ContactPage;
