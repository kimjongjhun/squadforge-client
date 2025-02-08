# SquadForge

**SquadForge** is a web application designed to help users create balanced teams from a set of players, using a CSV file or manual input. The app allows for the generation of teams based on player averages, group codes, family codes, and friend codes, ensuring fair and even distribution while maintaining group dynamics.

---

## Features

- **CSV Upload**: Upload a CSV file containing player names, groups, averages, and other relevant data to generate balanced teams.
- **Manual Input**: Manually add players and their associated group, family, and friend codes to create teams.
- **Balanced Teams**: Automatically generates balanced teams by considering average sums, group representation, and family/friend codes.
- **Group Management**: Add, delete, and assign/unassign members from groups.
- **Family Management**: Add, delete, and assign/unassign family members.
- **Friend Management**: Add, delete, and assign/unassign friends to ensure even representation on teams.
- **Client-Side Data Storage**: Data is kept locally using browser storage for privacy and convenience.

---

## Getting Started

1. **Clone the Repo**:  
   Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/squadforge.git
   cd squadforge
   ```

2. **Install Dependencies**:  
   Install the necessary dependencies using npm:

   ```bash
   npm install
   ```

3. **Start the Development Server**:  
   Run the app locally to start developing:

   ```bash
   npm start
   ```

   Your app will be available at `http://localhost:3000`.

---

## How It Works

1. **Player Data**:  
   Players' names, averages, and codes (group, family, and friend) are entered into the app, either by uploading a CSV file or manually inputting the data.
2. **Team Generation**:  
   SquadForge generates balanced teams based on:

   - Players’ averages, ensuring an even distribution of skills.
   - Group codes, ensuring each group is represented fairly in each team.
   - Family codes, ensuring no two family members are on the same team.
   - Friend codes, ensuring that friends are placed together on the same team (if applicable).

3. **Team Management**:  
   You can manage the groups, families, and friend codes by adding, deleting, and assigning members.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material UI**: A popular React UI framework for building clean and responsive designs.
- **Local Storage**: Data is saved on the client side using the browser’s local storage.
