# Installation

To install the necessary dependencies, run:

```bash
npm install
```

# Start API

To start the API, run:

```bash
npm start
```

# Routes

- **GET** `/api/v1/products`: Get all products.
- **GET** `/api/v1/products/:id`: Get a specific product by ID.
- **POST** `/api/v1/products`: Create a new product.
- **PUT** `/api/v1/products/:id`: Update a product by ID.
- **DELETE** `/api/v1/products/:id`: Delete a product by ID.
- **PUT gallery-images** `/api/v1/products/gallery-images/:id`: Update gallery images of a product by ID.
- **GET featured products** `/api/v1/products/get/featured/:count`: Get a specified number of featured products.
- **GET products count** `/api/v1/products/get/count`: Get the total count of products.

# Orders

- **GET** `/api/v1/orders`: Get all orders.
- **GET** `/api/v1/orders/:id`: Get a specific order by ID.
- **POST** `/api/v1/orders`: Create a new order.
- **PUT** `/api/v1/orders/:id`: Update an order by ID.
- **DELETE** `/api/v1/orders/:id`: Delete an order by ID.
- **GET orders count** `/api/v1/orders/get/count`: Get the total count of orders.

# Users

- **GET** `/api/v1/users`: Get all users.
- **GET** `/api/v1/users/:id`: Get a specific user by ID.
- **POST** `/api/v1/users`: Create a new user.
- **PUT** `/api/v1/users/:id`: Update a user by ID.
- **DELETE** `/api/v1/users/:id`: Delete a user by ID.
- **GET users count** `/api/v1/users/get/count`: Get the total count of users.

# Register

- **POST** `/api/v1/users/register`: Register a new user.

# Login User

- **POST** `/api/v1/users/login`: Login a user.
