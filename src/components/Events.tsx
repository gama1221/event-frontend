"use client"; // Client-side component
import Link from "next/link";
import { useEffect, useState } from "react";
import dotenv from 'dotenv';
dotenv.config(); // Loads the .env file

// Format event date function
export function formatEventDate(date: string) {
  return new Date(date).toISOString().replace("T", " ").replace("Z", "");
}

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Register for this event
  // const registerForEvent = (id: string) => {
  //   alert("Event ID:"+ id);
  // };
  const base_url: string = process.env.BASE_URL || 'http://localhost:4000/api/event';
  // Fetch events from the backend API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(base_url); // Update with your actual API URL
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        console.log(data);
        setEvents(data);
      } catch {
        setError("There was an error fetching the events.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []); // Empty array ensures that this runs only once when the component mounts

  // Display loading spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
      </div>
    );
  }
  // Display error message
  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }
  // Render events list
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upcoming Events</h2>
      <ul className="space-y-6">
        {events.map((event: { id: string; title: string; date: string; description: string; banner: string }) => (
          <li
            key={event.id}
            className="flex flex-col sm:flex-row border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <div
                className="w-full sm:w-1/3 h-64 bg-cover bg-center rounded-t-lg sm:rounded-l-lg"
                style={{ backgroundImage: `url(/images/addisfilm.jpeg)` }}
                // style={{ backgroundImage: `url(${event.banner})` }}
              >
              <div className="w-full h-full bg-black bg-opacity-50 rounded-t-lg sm:rounded-l-lg"></div>
            </div>
            {/* Event Details Section */}
            <div className="w-full sm:w-2/3 p-4">
              <div className="bg-green-500 text-white p-3 rounded-t-lg sm:rounded-t-none sm:rounded-r-lg">
                <h3 className="text-xl font-bold">{event.title}</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-700">{event.description}
                  <a
                    href="/contact"
                    className="text-blue-500 hover:bg-blue-600 transition duration-300 hover:text-white"
                  >{
                    event.description.length >=500?" Readmore...":""
                  }                  
                  </a>
                </p>
                <p className="text-gray-600 mt-2">
                  <i className="text-blue-500 font-bold">Start Date:</i>{" "}
                  {formatEventDate(event.date)}
                </p>
                {/* <button 
                  onClick={() => registerForEvent(event.id)} 
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Register for this event
                </button> */}
                <Link
                  href={`/event/${event.id}`}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Register for this event
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
