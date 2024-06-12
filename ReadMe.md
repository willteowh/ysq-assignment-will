# YSQ Assignment, by Will T.

## Installation

### Backend (Laravel)

After git clone the project to the local, run terminal at the project directory, and navigate to Backend project folder with:

`cd backend`

Run installation with:

`composer install && php artisan key:generate`

Then, update your _.env_ file with your database configuration.

<code>
DB_DATABASE=your_db_name<br>
DB_USERNAME=your_db_username<br>
DB_PASSWORD=your_db_password<br>
</code>

Then, run php migration with database seeding

`php artisan migrate:refresh --seed`

Then, run storage link to serve resources (eg.: images) to public

`php artisan storage:link`

Lastly, serve the php application by

`php artisan serve`

By default, the URL and port should be _127.0.0.1:8000_

### Frontend (React)

Navigate to Frontend project folder with:

`cd frontend`

And run installation with:

`npm install`

After that, create `.env` based on `.env.example`, and fill in API key and API URL that defined during Laravel Installation

<code>
REACT_APP_API_URL=LARAVEL_API_ENDPOINT<br>
REACT_APP_STORAGE_URL=LARAVEL_STORAGE_ENDPOINT<br>

Next, serve the React application

`npm start`
