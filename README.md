#  FinacPlus Music Library – Frontend Intern Assignment

This is a React-based Music Library project built as part of the FinacPlus Frontend Internship assignment. It showcases core frontend skills such as modular architecture (Micro Frontends), role-based access control, and efficient data manipulation using JavaScript functions.

##  Live Demo

-  [Main App (Container)](https://finacplus-assignment-music-library.vercel.app)
-  [Micro Frontend (Music Library)](https://finacplus-assignment-music-library.vercel.app)

##  Tech Stack

- React + Vite
- Tailwind CSS
- Module Federation (Vite plugin)
- Context API for Auth and Role Management
- JavaScript (map, filter, reduce)
- Deployment: Vercel

##  Micro Frontend Architecture

This project uses **Module Federation** to implement a micro frontend setup:

- **Main App**: Acts as the container, hosts the shell of the application.
- **Music Library**: A separate app that is loaded dynamically into the main app.

###  Features

-  Clean UI listing of songs
-  Filter, Sort, and Group by:
  - Album
  - Artist
  - Title
-  Uses `map`, `filter`, and `reduce` for data operations
-  Role-based Access:
  - **admin**: Can view, add, and delete songs
  - **user**: Can only view and filter songs
-  UI dynamically updates based on role

##  Demo Credentials

Use the following credentials during login:

- **Admin**
  - Username: `admin`
  - Password: `password123`

- **User**
  - Username: `user`
  - Password: `password123`

Credentials are mocked and stored in memory for demo purposes.

##  How to Run Locally

### Clone the Repositories

```bash
git clone https://github.com/Yashkumarverma623/finacplus-assignment-music-library.git
cd finacplus-assignment-music-library
```



###  Run Music Library (Micro Frontend)

```bash
cd music-library
npm install
npm run dev
```


##  Deployment Strategy

Both the main app and the micro frontend are deployed separately using **Vercel**. The main app dynamically loads the music library at runtime using Module Federation, allowing independent builds and deployments.

##  Notes

- State management is handled using `useState` and `Context API`.
- Role-based access is achieved via a mocked JWT stored in `localStorage`.
- UI is responsive and styled using Tailwind CSS.
- No backend server is required — everything runs on the frontend.

##  License

This project is built for educational purposes as part of an internship assignment.
