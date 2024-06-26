# Issue Tracker

This is an Issue Tracker application built with Next.js, TypeScript, Prisma, MySQL, RadixUI, TailwindCSS, Zod, and NextAuth with Google provider. The application allows users to create, assign, update, filter, and sort issues.

## Features

- **User Authentication**: Secure login using Google provider via NextAuth.
- **Issue Management**: Authorized users can create issues, and admins can assign issues to users and update issue statuses.
- **Markdown Support**: Use React Markdown Editor to create and edit issue descriptions with markdown syntax.
- **Filtering and Sorting**: Easily filter and sort issues based on different criteria.

## Tech Stack

- **Frontend**: Next.js, TypeScript, RadixUI, TailwindCSS
- **Backend**: Prisma, MySQL
- **Authentication**: NextAuth with Google provider
- **Validation**: Zod
- **Deployment**: Database on Railway, application on Vercel

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/issue-tracker.git
   cd issue-tracker

2. **Install dependencies:**

   ```bash
   npm install

3. **Set up environment variables:**

   ```bash
   DATABASE_URL=mysql://user:password@host:port/database
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

3. **Run the application:**

   ```bash
   npm run dev
## Usage

- **Sign In**: Sign in using your Google account.
- **Create Issue**: Authorized users can create a new issue by filling out the issue form.
- **AAssign Issue**: Admins can assign issues to users.
- **Update Status**: Update the status of an issue as it progresses.
- **Edit Description**: Use the React Markdown Editor to format and edit issue descriptions.
- **Filter and Sort**: Use the filter and sort options to manage and view issues efficiently.

## Live Demo

Check out the live application [here](https://issue-tracker-nine-kappa.vercel.app/).