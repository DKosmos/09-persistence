## Stand-alone Vanilla REST API
### Current operations supported:
- POST: /api/car {make, model, year}
  - Places a new Car json into file storage.
- GET: /api/car
  - Returns an array of files currently in file storage.
- GET: /api/car?id={id}
  - Returns the Car object associated with the id.
- DELETE: /api/car?id={id}
  - Deletes the Car object associated with the id from file storage.