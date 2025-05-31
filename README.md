# Test APP


## Prerequisites

Make sure you have installed the following on your system:

- PHP (>= 8.0 recommended)
- Composer
- Node.js (>= 16 recommended)
- npm or yarn
- A database server (MySQL, PostgreSQL, etc.)

# Install PHP dependencies
composer install

# Install Node dependencies
`npm install`
or
`yarn install`

# Copy env file
`cp .env.example .env`

# *** IMPORTANT: Create your database before running migrations ***
 Example (MySQL):
 - `mysql -u your_db_user -p`
 - `CREATE DATABASE your_database_name;`

Then update your .env file with the correct DB_DATABASE, DB_USERNAME, and DB_PASSWORD

# Generate application key
`php artisan key:generate`

# Run database migrations
`php artisan migrate`



# Run Laravel + React Inertia App
`composer run dev`
