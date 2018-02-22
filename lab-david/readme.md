## Stand-alone Vanilla REST API
### Current operations supported:
- POST: /api/car {make, model, year}
  - Places a new Car object into storage.
- GET: /api/car
  - Returns an array of ids currently in storage.
- GET: /api/car?id={id}
  - Returns the Car object associated with the id.
- DELETE: /api/car?id={id}
  - Deletes the Car object associated with the id from storage.