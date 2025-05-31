# Install PHP dependencies
composer install

# Install Node dependencies
npm install
# or
yarn install

# Run Vite dev server to compile assets
npm run dev
# or
yarn dev

# Copy env file
cp .env.example .env

# *** IMPORTANT: Create your database before running migrations ***
# Example (MySQL):
# mysql -u your_db_user -p
# CREATE DATABASE pets_db;

# Then update your .env file with the correct DB_DATABASE, DB_USERNAME, and DB_PASSWORD

# Generate application key
php artisan key:generate

# Run database migrations
php artisan migrate



# Run Laravel development server
php artisan serve
