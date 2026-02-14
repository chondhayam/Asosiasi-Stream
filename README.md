## Setup for Collaborators

### 1. Clone Repository
\`\`\`bash
git clone https://github.com/chondhayam/Asosiasi-Stream.git
cd Asosiasi-Stream/backend
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Setup Database

Create PostgreSQL database and user:
\`\`\`sql
CREATE USER yourname WITH PASSWORD 'yourpassword';
ALTER USER yourname CREATEDB;
CREATE DATABASE asosiasi_dev OWNER yourname;
\`\`\`

### 4. Create Environment File

Create `.env` file in `backend/` folder:
\`\`\`env
PORT=3000
NODE_ENV=development
DB_USER=yourname
DB_HOST=localhost
DB_NAME=asosiasi_dev
DB_PASSWORD=yourpassword
DB_PORT=5432
\`\`\`

⚠️ **NEVER commit `.env` to git!**

### 5. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

Server will run on: http://localhost:3000
