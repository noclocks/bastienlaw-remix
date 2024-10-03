// This is a 'catch-all' route that will match any URL that hasn't already been matched by another route.
// Navigate to the Home (index) route to see this route in action.

import { redirect } from "@remix-run/react";

// Provide a `loader` function to handle the data fetching for this route.
export const loader = async () => {
  // Redirect to the home page
  return redirect('/');
};
