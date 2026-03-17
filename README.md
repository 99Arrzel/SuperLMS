# SuperLMS

A full-featured Learning Management System built with **Laravel**, **Vue.js**, **MySQL**, and **Redis**.

SuperLMS provides a straightforward yet capable platform for managing classrooms, assignments, forums, and grading -- supporting three distinct user roles out of the box.

---

## Features

### User Roles

Three built-in roles with scoped permissions:

- **Administrator** -- Full system access and user management
- **Teacher** -- Classroom creation, assignment grading, and file uploads
- **Student** -- Assignment submissions, forum participation, and grade viewing

### Classroom Management

Each classroom includes:

| Property | Description |
|---|---|
| Name | Classroom title |
| Description | Summary of the course |
| Image | Cover image for the classroom |
| Start Date | When the classroom opens |
| End Date | When the classroom closes |
| Extension | Optional deadline extension |
| Status | Active / inactive state |

### Assignments & Grading

- Classrooms contain **milestones** (goals/checkpoints)
- Milestones contain **assignments** and **forums**
- Assignments support **grading** and **multiple submissions with file attachments**
- Teachers can upload files to assignments as well
- All assignments and forums **expire on their due date** -- no late submissions

### Forums

- Rich-text support: **bold**, *italic*, ~~strikethrough~~, and text alignment
- Inline image embedding

### UI

- Light mode and Dark mode

---

## Installation

### Prerequisites

- **PHP** 8.1 or higher
- **MySQL**
- **Redis**
- **Git**
- **Node.js / npm**

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/99Arrzel/SuperLMS.git
   cd SuperLMS
   ```

2. **Create your environment file**

   Copy the example and fill in your database and Redis credentials:

   ```bash
   cp .env.example .env
   ```

   A minimal `.env` looks like this:

   ```env
   APP_ENV=production
   APP_DEBUG=false
   APP_NAME=SuperLMS
   APP_KEY=base64:YOUR_APP_KEY_HERE
   APP_URL=http://localhost:8080

   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=superlms
   DB_USERNAME=root
   DB_PASSWORD=your_password

   REDIS_HOST=127.0.0.1
   REDIS_PASSWORD=null
   REDIS_PORT=6379
   ```

   Generate an application key:

   ```bash
   php artisan key:generate
   ```

3. **Run database migrations**

   ```bash
   php artisan migrate
   ```

4. **Install and compile front-end assets**

   ```bash
   npm install && npm run production
   ```

5. **Start the application**

   If you are not using a dedicated HTTP server (e.g., Apache or Nginx):

   ```bash
   php artisan serve
   ```

   The app will be available at `http://localhost:8080` by default. The port may vary if 8080 is already in use.

---

## Default Credentials

| Username | Password |
|---|---|
| `admin` | `admin` |

> **Note:** Change these immediately in any non-local environment.

---

## Codebase Stats

| Layer | Lines of Code |
|---|---|
| JavaScript / Vue | 3,502 |
| Controllers | 1,226 |
| Models | 471 |
| Migrations | 651 |
| Routes | 95 |
| **Total** | **~5,945** |

---

## Tech Stack

- **Back-end:** Laravel (PHP 8.1+)
- **Front-end:** Vue.js
- **Database:** MySQL
- **Cache / Queues:** Redis
