
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <p className="text-xl font-semibold mb-2">Page Not Found ⚠️</p>
      <p className="text-gray-600 mb-8">We could not find the page you are looking for.</p>
      <Link to="/" className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-500 transition duration-300">
        Go back to Home
      </Link>
      <div className="mt-8">
        {/* SVG or image of a frustrated person with "ERROR" speech bubbles can go here */}
      </div>
    </div>
  );
};

export default ErrorPage;
