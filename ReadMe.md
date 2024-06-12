# YSQ Assignment by Will T.

## Installation

### Backend (Laravel)

1. Clone the project repository to your local machine:

   ```bash
   git clone <project_repository_url>
   ```

2. Navigate to the backend project folder:

   ```bash
   cd backend
   ```

3. Install dependencies and generate the application key:

   ```bash
   composer install
   php artisan key:generate
   ```

4. Update the `.env` file with your database configuration:

   ```env
   DB_DATABASE=your_db_name
   DB_USERNAME=your_db_username
   DB_PASSWORD=your_db_password
   ```

5. Run database migration with seeding:

   ```bash
   php artisan migrate:refresh --seed
   ```

6. Create a symbolic link to serve resources (e.g., images) to the public:

   ```bash
   php artisan storage:link
   ```

7. Serve the PHP application:

   ```bash
   php artisan serve
   ```

   The default URL and port should be `127.0.0.1:8000`.

### Frontend (React)

1. Navigate to the frontend project folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`, and fill in the API key and API URL defined during Laravel installation:

   ```env
   REACT_APP_API_URL=LARAVEL_API_ENDPOINT
   REACT_APP_STORAGE_URL=LARAVEL_STORAGE_ENDPOINT
   ```

   The default URL and port should be `127.0.0.1:8000/api` and `127.0.0.1:8000/storage` respectively.

4. Serve the React application:

   ```bash
   npm start
   ```
