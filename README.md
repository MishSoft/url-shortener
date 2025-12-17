# 🚀 Modern URL Shortener

A high-performance, full-stack URL shortening application built with **Next.js 15**, **Prisma**, and **PostgreSQL**. 
## ✨ Features

* **Instant Shortening:** Generate unique short codes for any long URL.
* **Visit Tracking:** Real-time analytics that count how many times each link has been accessed.
* **Automatic Redirects:** Seamless redirection from short codes to original destinations using Next.js Dynamic Routes.
* **Responsive Design:** Clean and modern user interface built with Tailwind CSS.
* **Serverless Ready:** Optimized for deployment on Vercel with Neon PostgreSQL.

## 🛠 Tech Stack

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **Database:** [PostgreSQL](https://www.postgresql.org/) (Hosted on [Neon.tech](https://neon.tech/))
* **ORM:** [Prisma](https://www.prisma.io/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## 🚀 Getting Started

### 1. Clone the repository

git clone [https://github.com/your-username/url-shortener.git](https://github.com/your-username/url-shortener.git)
cd url-shortener
2. Install dependencies
Bash

npm install
3. Environment Setup
Create a .env file in the root directory and add your database connection string:

კოდის ნაწყვეტი

DATABASE_URL="postgresql://user:password@ep-cool-darkness-123456.aws.neon.tech/neondb?sslmode=require"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
4. Database Migration
Push your Prisma schema to the cloud database:

Bash

npx prisma db push
5. Run the Application
Bash

npm run dev
📂 Project Structure
/app - Contains all pages and API routes.

/app/[shortcode] - Handles dynamic redirection logic.

/lib/prisma.ts - Singleton instance for Prisma Client.

/prisma/schema.prisma - Database models for URLs and visits.
