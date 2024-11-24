// src/app/page.tsx (Home Page)
import Events from "@/components/Events"; // Import Events component
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">
        Welcome to Baccaum Event Management System!
      </h1>
      {/* Call to Action Section */}
      <div className="bg-[#16a34a] text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Looking to Host an Event?
        </h2>
        <p className="text-lg mb-4">
          Ready to create an unforgettable experience? Our event management system makes it easy to plan and execute your next big event.
        </p>
        <div className="flex space-x-4">
          <Link
            href="/event"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
          Create Event
          </Link>
          <Link
            href="/contact"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Contact Us for Event Details
          </Link>
          <Link
            href="/contact"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Contact Us for Event Details
          </Link>
        </div> 
      </div>
      {/* Render Events Component */}
      <Events />
    </div>
  );
}
