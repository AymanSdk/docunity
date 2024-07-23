![Example Image](/public/assets/images/DocUnityMockUp.png)

<div align="center">
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=61DAFB" alt="next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">DocUnity A collaborative Markdown editor</h3>

## <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Links](#links)

## <a name="introduction">Introduction</a>

DocUnity is a sophisticated Markdown editor designed with collaboration at its core. Leveraging the power of Next.js for a seamless and responsive user interface, DocUnity ensures a smooth and intuitive user experience. Its real-time collaborative features are powered by DocUnity, enabling multiple users to edit documents simultaneously without any lag. TailwindCSS is utilized to style the application, providing a clean and modern aesthetic that enhances usability.

The primary objective of DocUnity is to demonstrate the developer's expertise in building robust, real-time environments. It highlights the ability to integrate various technologies to create a cohesive and impactful application. This project not only showcases technical proficiency in Next.js, DocUnity, and TailwindCSS but also emphasizes the importance of user experience and real-time collaboration in modern web development. The end result is a powerful tool that makes a lasting impression on users and collaborators alike.

## <a name="tech-stack">Tech Stack</a>

- Next.js
- TypeScript
- Liveblocks
- Lexical Editor
- ShadCN
- Tailwind CSS

## <a name="features">Features</a>

### Authentication

User authentication is handled through GitHub using NextAuth, providing secure sign-in/out and session management.

### Collaborative Text Editor

Multiple users can edit the same document simultaneously, with real-time updates.

### Documents Management

- **Create Documents**: Users can create new documents, which are automatically saved and listed.
- **Delete Documents**: Users can delete documents they own.
- **Share Documents**: Users can share documents via email or link with view/edit permissions.
- **List Documents**: All documents owned or shared with the user are displayed, featuring search and sorting functionalities.

### Comments

Users can add both inline and general comments, with threading available for discussions.

### Active Collaborators on Text Editor

The application shows active collaborators with real-time presence indicators.

### Notifications

Users receive notifications for document shares, new comments, and collaborator activities.

### Responsive Design

The application is fully responsive and works seamlessly across all devices.

Additionally, the application boasts many more features, including robust code architecture and reusability.

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/collaborative-editor.git
cd collaborative-editor
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

#Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
LIVEBLOCKS_SECRET_KEY=
```

Replace the placeholder values with your actual Clerk & LiveBlocks credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/) and [Liveblocks](liveblocks.io/) website.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="links">Links</a>

- DocUnity Demo Can be found [here](https://docunity.vercel.app/)
