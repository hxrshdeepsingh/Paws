# Account API Endpoints

## Create User Account

Creates a new user account.

- **URL**: `/api/account/create`
- **Method**: `POST`
- **Request Body**:
  - `username`: User's username.
  - `email`: User's email address.
  - `password`: User's password.

## Login Account

Logs in to an existing user account.

- **URL**: `/api/account/login`
- **Method**: `POST`
- **Request Body**:
  - `email`: User's email address.
  - `password`: User's password.

## Get User Profile Info

Retrieves the profile information of a user.

- **URL**: `/api/account/profile`
- **Method**: `GET`
- **Request Parameters**:
  - `userId`: ID of the user whose profile information is to be retrieved.

# Posts API Endpoints

## Get All Posts

Retrieves all posts.

- **URL**: `/api/posts/all`
- **Method**: `GET`

## Get Posts by IDs

Retrieves posts by their IDs.

- **URL**: `/api/posts/post`
- **Method**: `GET`
- **Request Parameters**:
  - `postId`: IDs of the posts to be retrieved.

## Create Post

Creates a new post.

- **URL**: `/api/posts/create`
- **Method**: `POST`
- **Request Body**:
  - `userId`: ID of the user creating the post.
  - `_id`: ID of the post.
