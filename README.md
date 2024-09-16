# 🏋 My Gym App

## 🙋🏻‍♂️ User Stories

- **Progress Tracking**: I want to track my progress and see my overall time training.
- **Workout Sharing**: I want to be able to share my workouts with others.
- **Timers**: I want to add timers specifically to each set.
- **Exercise Hints**: I want to add hints to every exercise, including detailed descriptions such as execution, improvements, failures, and successes.
- **PR Tracking**: I want to see my Personal Records (PRs) and keep track of them.
- **Goal Setting**: I want to set goals, analyze my progress toward them, and identify areas where I am lacking.
- **Equipment Management**: I want to select the equipment used for every exercise and be able to add new equipment.
- **Video Upload**: I want to upload videos related to my exercise execution.
- **Advanced Statistics**: I want to see detailed stats like:
  - Predictions: How many trainings until I hit my goal, kg lifted, PRs, fitness levels.
  - Present facts: Time taken to reach a goal, number of failures, description of hints/improvements.
- **Workout Calendar**: I want a calendar that is:
  - Organizable
  - Replaceable
  - Deletable
  - Represents actual finished workouts
- **Unfinished/Skipped Workouts**: I want to see my unfinished workouts or skipped ones.
- **Manual Workout Completion**: I want the ability to check a workout as finished without starting it (in case I forget to start it at the beginning of the training).

## 🎯 Features

1. **Progress Tracking**: Track your overall training progress.
2. **Workout Sharing**: Share your workouts with others.
3. **Set-Specific Timers**: Add timers specifically to each exercise set.
4. **Exercise Hints**: Add hints and notes to every exercise.
5. **Training Duration Tracking**: Monitor your total training time.
6. **PR Tracking**: Keep track of Personal Records (PRs).
7. **Progress Dashboard**: Get an overall look at your progress.
8. **Goal Setting**: Set and track fitness goals.
9. **Goal Analysis**: Analyze progress toward your goals.
10. **Exercise Descriptions**: Add detailed descriptions for each exercise:
    - Execution
    - Improvements
    - Failures
    - Successes
11. **Future Training Hints**: Add hints for future training sessions.
12. **Equipment Management**: Select equipment used for every exercise and add new equipment.
13. **Video Uploads**: Upload and manage videos related to your exercise execution.
14. **Advanced Statistics**: View detailed stats and predictions:
    - Prediction tracking
    - Training goal predictions
    - Weight tracking
    - PR predictions
    - Fitness level predictions
    - Current statistics display
    - Goal completion analysis
    - Failure statistics
    - Description of hints/improvements
15. **Workout Calendar**: Manage your workout schedule:
    - Organizable schedule
    - Replaceable workouts
    - Deletable workouts
    - Visualization of completed workouts
16. **Unfinished/Skipped Workouts**: Track unfinished or skipped workouts.
17. **Manual Completion**: Mark workouts as completed manually.

## 🗃️ Feature Categories

### 1. Authentication and User Management

- User login and authentication
- Account management

### 2. Dashboard

- Overall progress dashboard
- PR (Personal Record) tracking

### 3. Progress Tracking and Statistics

- Progress tracking feature
- Advanced statistics feature:
  - Prediction tracking
  - Training prediction for goal achievement
  - Weight tracking
  - PR prediction
  - Fitness level prediction
  - Current statistics display
  - Goal completion analysis
  - Failure statistics
  - Description of hints/improvements

### 4. Goal-Setting and Analysis

- Goal-setting feature
- Goal progress analysis feature

### 5. Workout Planning and Execution

- Workout sharing functionality
- Set-specific timer feature
- Training duration tracking
- Exercise hint-adding feature
- Exercise description feature:
  - Detailed execution notes
  - Improvement tracking
  - Failure tracking
  - Success tracking
- Future training hint-adding feature
- Video upload feature for exercises

### 6. Equipment Management

- Equipment selection feature
- Equipment management feature

### 7. Calendar and Scheduling

- Workout calendar:
  - Organizable workout schedule
  - Workout replacement option
  - Workout deletion option
  - Visualization of completed workouts
- Unfinished/skipped workout tracking feature
- Manual workout completion option

## 🔀 Necessary Pages

### 1. Authentication and User Management

- `/login` - User login page
- `/signup` - User registration page
- `/account` - User account management page
- `/logout` - Log out the user  
  _Improvement_: Ensure user roles and permissions are managed effectively, if applicable.

### 2. Dashboard

- `/dashboard` - Main dashboard overview  
  _Improvement_: Consider having widgets or sections for quick access to recent workouts, goals, and progress highlights.

### 3. Progress Tracking and Statistics

- `/progress` - View progress tracking and stats
- `/statistics` - Advanced statistics and detailed insights  
  _Improvement_: Include options for users to customize which statistics they see and how they are displayed (e.g., graphs, tables).

### 4. Goal-Setting and Analysis

- `/goals` - Set and view goals
- `/goal-analysis` - Analyze progress toward goals  
  _Improvement_: Add features to set reminders or notifications for goal progress and achievements.

### 5. Workout Planning and Execution

- `/workouts` - View and manage workouts  
  **Filters**:
  - By date
  - By type (e.g., cardio, strength)
  - By status (e.g., completed, skipped, unfinished)  
    **Workout Details**:
  - `/workout/` - View details of a specific workout  
    **Integrated Features**:
    - Add and manage timers
    - Add and view hints for exercises
    - Upload and manage videos for exercises
    - Manual workout completion (mark as completed directly on this page)
  - `/workout/add` - Add a new workout
  - `/workout/edit/` - Edit a specific workout
  - `/workout/share/` - Generate and share a custom link for a workout  
    _Improvement_: Consider including a workout history or log to view past workout details and adjustments.

### 6. Equipment Management

- `/equipment` - View and manage equipment  
  **Filters**:
  - By type
  - By status (e.g., available, in use)
- `/equipment/add` - Add new equipment
- `/equipment/edit/` - Edit equipment details  
  _Improvement_: Include an equipment usage log or maintenance schedule if applicable.

### 7. Calendar and Scheduling

- `/calendar` - View and manage the workout calendar  
  **Filters**:
  - By date
  - By type (e.g., cardio, strength)
  - By status (e.g., completed, missed, unfinished)
- `/calendar/add` - Add a workout to the calendar
- `/calendar/edit/` - Edit a scheduled workout
- `/calendar/delete/` - Delete a scheduled workout  
  _Improvement_: Consider adding options for syncing with other calendar apps or setting up recurring workouts.

### 💭 Additional Considerations:

- **User Preferences**: Allow users to customize their dashboard, notifications, and workout views.
- **Search Functionality**: Implement search capabilities within `/workouts`, `/equipment`, and `/calendar` to quickly find items.

## 💡 Technology Decisions

- **Routing**: App Router
- **Styling**: Tailwind CSS + Styled Components
- **Remote State Management**: React Query
- **UI State Management**: Context API / Redux
- **Form Management**: React Hook Form
- **Other Tools**: date-fns, Ant Design, tip-tap, Zustand, react-icons, react-hot-toast, Recharts, Supabase, Postman, PDF Creator
- **Testing**: React Testing Library, Vitest
- **Patterns**: Compound Components Pattern, Reusable Components, Other Advanced Patterns (to be explored)
