# Employee Record Management System

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://employee-record-app.vercel.app)
![License](https://img.shields.io/badge/License-MIT-blue)

A full-stack employee management system built with Next.js, MongoDB, and NextAuth.js, featuring secure authentication and CRUD operations.

## Features

- 🔐 JWT Authentication using NextAuth.js
- 📝 CRUD Operations for employee records
- 🛡️ Role-Based Access Control (Admin/Staff)
- 📱 Responsive UI with Tailwind CSS
- 🔄 Server-Side Rendering (SSR)
- ✅ Form Validation with react-hook-form
- 📊 Pagination & Search functionality
- 📄 PDF Export of employee data
- 🚨 Error Boundaries & logging

## Technologies

**Frontend:**
- Next.js 14
- React 18
- Tailwind CSS
- react-hook-form
- react-error-boundary

**Backend:**
- Next.js API Routes
- MongoDB Atlas
- Mongoose ODM
- NextAuth.js
- Bcrypt.js

**DevOps:**
- Vercel Deployment
- GitHub Actions CI/CD
- Winston Logging

## Installation

1. **Clone Repository**
\`\`\`bash
git clone https://github.com/sittuk-kibet/employee-record-app.git
cd employee-record-app
2. **Install Dependencies**
\`\`\`bash
npm install


3. **Configure Environment**
\`\`\`bash
cp .env.example .env.local
\`\`\`
Update \`.env.local\` with your credentials:
\`\`\`env
MONGODB_URI="your_mongodb_connection_string"
NEXTAUTH_SECRET="your_random_secret_key"
NEXTAUTH_URL="http://localhost:3000"
\`\`\`

4. **Start Development Server**
\`\`\`bash
npm run dev
\`\`\`

## API Endpoints

| Method | Endpoint               | Description                 |
|--------|------------------------|-----------------------------|
| POST   | /api/auth/register     | User registration          |
| POST   | /api/auth/login        | User authentication        |
| GET    | /api/employees         | List all employees         |
| POST   | /api/employees         | Create new employee        |
| PUT    | /api/employees/[id]    | Update employee            |
| DELETE | /api/employees/[id]    | Delete employee            |

## Deployment

1. **Vercel Setup**
   - Import repository from GitHub
   - Add environment variables:
     - \`MONGODB_URI\`
     - \`NEXTAUTH_SECRET\`
     - \`NEXTAUTH_URL\`

2. **MongoDB Atlas Configuration**
   - Whitelist Vercel IP addresses
   - Create \`employee-records\` database
   - Create \`users\` and \`employees\` collections

## Usage

1. Register new users at \`/register\`
2. Login with credentials at \`/login\`
3. Manage employees through dashboard
4. Admin users can edit/delete records

## License

Distributed under the MIT License. See \`LICENSE\` for more information.

## Contact

Nathan Kibet  
[LinkedIn](https://linkedin.com/in/nathan-kibet)  
nkibet@gmail.com
