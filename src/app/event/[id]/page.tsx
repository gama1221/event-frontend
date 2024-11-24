import Link from 'next/link';
import dotenv from 'dotenv';

if (typeof window === 'undefined') {
  dotenv.config();
}

const BASE_URL: string = 'http://localhost:4000/api/event';
const USER_REGISTRATION_URL: string = 'http://localhost:4000/api/users';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
}

interface EventPageProps {
  params: { id: string }; 
}

const EventPage = async ({ params }: EventPageProps) => {
  const { id } = params;

  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) {
      throw new Error('Event not found'); 
    }
    const event: Event = await res.json();

    // Component Render
    return (
      <div className="container mx-auto py-8">
        <div className="bg-green-500 text-white p-3 rounded-t-lg sm:rounded-t-none sm:rounded-r-lg">
          {event.title}
        </div>
        <p className="text-gray-700 mb-4">{event.description}</p>
        <p className="text-gray-600">
          <strong>Date:</strong> {event.date}
        </p>
        <p className="text-gray-600">
          <strong>Location:</strong> {event.location}
        </p>

        {/* Registration Form */}
        <form
          action={USER_REGISTRATION_URL}
          method="POST"
          className="mt-6 bg-gray-10 p-6 rounded-lg shadow-md max-w-lg mx-auto"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register your self for the Event</h2>
          <div className="mb-6">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
          >
            Register
          </button>
        </form>  

        <Link
          href="/events"
          className="mt-4 block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Back to Events
        </Link>
      </div>
    );
  } catch (error) {
    console.error('Error fetching event:', error);

    return (
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Event not found</h1>
        <p className="text-gray-600 mb-4">Sorry, the event you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/events"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Back to Events
        </Link>
      </div>
    );
  }
};

export default EventPage;
