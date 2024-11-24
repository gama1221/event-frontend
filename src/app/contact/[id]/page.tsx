// app/contact/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';

const ContactPage = () => {
  const { id } = useParams(); // Get the dynamic id from the URL

  return (
    <div>
      <h1>Contact Page</h1>
      <p>Contact ID: {id}</p>
    </div>
  );
};

export default ContactPage;