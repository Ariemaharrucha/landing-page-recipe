import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <p className="text-4xl font-semibold text-orange-600 mb-8">Page Not Found</p>
      <Button className="mb-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold">
        <Link to="/">Go to Homepage</Link>
      </Button>
    </div>
  );
};
