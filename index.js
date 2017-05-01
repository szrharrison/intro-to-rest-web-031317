const app = "I don't do much.";

// Routes
GET      /newsletters                     # Show all newsletters
POST     /newsletters                     # Create a new newsletter
GET      /newsletters/new                 # Render the form for creating a new newsletter
GET      /newsletters/:id/edit            # Render the form for editing a newsletter
GET      /newsletters/:id                 # Show a specific newsletter
PATCH    /newsletters/:id                 # Update a newsletter
DELETE   /newsletters/:id                 # Delete a newsletter

// Nested Routes
GET      /newsletters/:id/entries         # Show all entries for a newsletter
POST     /newsletters/:id/entries         # Create a new newsletter entry
GET      /newsletters/:id/entries/new     # Render the form for creating a new entry
GET      /entries/:id/edit                # Render the form for editing an entry
GET      /entries/:id                     # Show a specific entry
PATCH    /entries/:id                     # Update an entry
DELETE   /entries/:id                     # Delete an entry
