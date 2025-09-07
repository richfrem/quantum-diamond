# Walkthrough: The Genesis Cycle in Action
**Version:** v16
**Project:** Exercise Tracking App

This document provides a detailed, step-by-step walkthrough of **Path B: The Guided Prototyping Session**, using a local-first strategy. It demonstrates how to rapidly build a high-quality prototype using a general-purpose AI assistant in your local IDE.

### **Iteration 1: The Spark & The Local Scaffold**

**1. The Spark (Human Intent):** "I need an app to log my workouts and the exercises I did."

**2. The Scaffold (Engaging the Full-Stack Scaffolder):**
*   **Human Prompt to Scaffolder:**
    > "Let's start a local-first exercise tracking app. Initialize a Vite+React+TypeScript project. Set up a simple Express server and use Prisma to manage a local SQLite database. Create a Prisma schema for `Workout`, `Exercise`, and `WorkoutSet` models, then provide the command to generate the first migration file. The server should have a mock API endpoint `/api/workouts`. The React UI should fetch from this endpoint and display a list of workout dates."

**3. What Emerges: A Professional Local Foundation**

*   **Artifact 1.1: Prisma Schema (`/prisma/schema.prisma`)**
    ```prisma
    generator client {
      provider = "prisma-client-js"
    }

    datasource db {
      provider = "sqlite"
      url      = "file:./dev.db"
    }

    model Workout {
      id            String       @id @default(cuid())
      workout_date  DateTime     @default(now())
      notes         String?
      sets          WorkoutSet[]
    }

    model Exercise {
      id    String       @id @default(cuid())
      name  String       @unique
      type  String? // e.g., 'Cardio', 'Strength'
      sets  WorkoutSet[]
    }

    model WorkoutSet {
      id            String    @id @default(cuid())
      workout       Workout   @relation(fields: [workoutId], references: [id])
      workoutId     String
      exercise      Exercise  @relation(fields: [exerciseId], references: [id])
      exerciseId    String
      reps          Int?
      weight_kg     Float?
      duration_min  Int?
    }
    ```
*   **Artifact 1.2: Express Server (`/server/index.js`)**
    ```javascript
    const express = require('express');
    const cors = require('cors');
    const app = express();
    const port = 3001;

    app.use(cors());
    app.use(express.json());

    // In a real implementation, this would use Prisma Client to fetch from the DB
    app.get('/api/workouts', (req, res) => {
      console.log('GET /api/workouts received');
      const mockWorkouts = [
        { id: '1', workout_date: new Date('2025-08-20'), notes: 'Chest day' },
        { id: '2', workout_date: new Date('2025-08-22'), notes: 'Leg day' },
      ];
      res.json(mockWorkouts);
    });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
    ```
*   **Artifact 1.3: React UI (`/src/pages/Index.tsx`)**
    ```tsx
    import { useEffect, useState } from 'react';

    interface Workout {
      id: string;
      workout_date: string;
      notes: string | null;
    }

    function App() {
      const [workouts, setWorkouts] = useState<Workout[]>([]);

      useEffect(() => {
        fetch('http://localhost:3001/api/workouts')
          .then((res) => res.json())
          .then((data) => setWorkouts(data));
      }, []);

      return (
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">My Workouts</h1>
          <ul>
            {workouts.map((workout) => (
              <li key={workout.id} className="mb-2 p-2 border rounded">
                <p>Date: {new Date(workout.workout_date).toLocaleDateString()}</p>
                <p>Notes: {workout.notes}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default App;
    ```