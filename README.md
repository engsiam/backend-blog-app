# Blog Application

This is a Node.js-based blog application with the following features:

- User registration and login.
- Email verification using Nodemailer.
- CRUD operations (Create, Read, Update, Delete) for blog posts.
- Image upload for blog posts.
- Search functionality for blog posts.
- Secured API routes with middleware to prevent unauthorized access.

## Features

1. **User Authentication:**
   - User registration with email and password.
   - Email verification using a unique verification link sent via Nodemailer.
   - Only verified users can log in and create/edit blogs.

2. **Blog CRUD Operations:**
   - Users can create, read, update, and delete their own blog posts.
   - Blog posts contain title, description, and an optional image.

3. **Image Upload:**
   - Uses `Multer` to handle image uploads for blog posts.

4. **Search:**
   - Allows users to search for blog posts based on title or description.
   
5. **Category Management:**
   - Users can categorize blog posts and search for blogs by category.

6. **Tag Search:**
   - Allows users to search blog posts by tags.

7. **Secured API Routes:**
   - Middleware (`secureApi`) protects routes, ensuring only authorized users can perform specific actions (e.g., deleting a blog post).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/blog-app.git
