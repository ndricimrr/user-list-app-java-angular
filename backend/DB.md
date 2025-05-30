# User Management API

This document outlines the endpoints for managing users in the application. It includes details for retrieving all users, adding a new user, and deleting a user by ID.

## Endpoints

### 1. GET - Retrieve All Users

**URL:**
http://localhost:8080/api/users/

**Method:**
GET

**Response Example:**

```json
[
  {
    "id": 1,
    "name": "John",
    "surname": "Doe",
    "dob": "1990-01-01",
    "gender": "Male"
  },
  {
    "id": 2,
    "name": "Jane",
    "surname": "Doe",
    "dob": "1992-05-15",
    "gender": "Female"
  }
]
```

**Description:**
Retrieves a list of all users from the database.

---

### 2. POST - Add a New User

**URL:**
http://localhost:8080/api/users/add

**Method:**
POST

**Request Body:**

```json
{
  "name": "John",
  "surname": "Doe",
  "dob": "1990-01-01",
  "gender": "Male"
}
```

**Response Example:**

```json
{
  "id": 1,
  "name": "John",
  "surname": "Doe",
  "dob": "1990-01-01",
  "gender": "Male"
}
```

**Description:**
Adds a new user to the database. The `id` field will be automatically generated by the database.

---

### 3. DELETE - Delete a User by ID

**URL:**
http://localhost:8080/api/users/delete/{id}
Replace `{id}` with the actual user ID you want to delete. For example, to delete the user with ID 1:
http://localhost:8080/api/users/delete/1

**Method:**
DELETE

**Request Body:**
None required.

**Response:**

- **Success**: The server responds with a `204 No Content` status code if the user was successfully deleted.
- **Failure**: If the user with the specified ID does not exist, a `404 Not Found` error may be returned.

**Description:**
Deletes a user from the database by their ID.

---

## Summary

- **GET** `/api/users/`: Retrieve all users.
- **POST** `/api/users/add`: Add a new user.
- **DELETE** `/api/users/delete/{id}`: Delete a user by ID.
