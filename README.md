# Laravel React Guest Book App

An example of Guest Book App.

# Built with
* Back-end: [Laravel](https://laravel.com)
* Front-end: [ReactJS](https://reactjs.org)
* Stylings: [Material UI](https://material-ui.com)
* DB: MySQL

## Set Up

#### Clone the repository:

```bash
git clone https://github.com/anna-nz/react-laravel-guestbook_app
```

#### cd into the folder:

```bash
cd react-laravel-guestbook_app
```

#### Install Javascript dependencies:

```bash
npm install
```

#### Set your db configuration in .env:

-   DB_DATABASE (your local database, i.e. "guestbook_db")
-   DB_USERNAME (your local db username, i.e. "root")
-   DB_PASSWORD (your local db password, i.e. "")
-   DB_PORT (your local port for sql, i.e. "8889" if you are using MAMP)
-   VITE_REACT_APP_SITE_KEY (for google reCAPTCHA v2)


#### Install PHP dependencies:

```bash
composer install
```

_If you don't have Composer installed, [instructions here](https://getcomposer.org/)._

#### Run the database migrations:

```bash
php artisan migrate
```

#### Run server:

```bash
php artisan serve
```

#### Compile scripts:

```bash
npm run dev
```

You can access the application at http://127.0.0.1:8000/
