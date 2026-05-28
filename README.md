# Refridge Mobile — Project Documentation

## 1. Project Overview

**Refridge Mobile** is a mobile application developed with React Native and Expo. The application supports meal planning and reduction of food waste by allowing users to manage ingredients stored in their refrigerator and receive recipe recommendations based on available products.

The project was created as a business-oriented mobile application focused on usability, intuitive interaction, and practical everyday functionality.

The main objective of the application is to:

- help users organize food ingredients,
- reduce unnecessary food waste,
- simplify meal planning,
- provide recipe recommendations based on available ingredients.

The application follows a modern frontend-oriented architecture with local state persistence and reusable component-based design.

---

# 2. Functional Scope

## 2.1 Core Features

### Ingredient Management

Users can:

- add ingredients to a virtual fridge,
- define quantity and measurement units,
- assign ingredient categories,
- assign custom emojis/icons,
- edit ingredient data,
- remove ingredients,
- sort ingredients,
- filter ingredients by category.

### Recipe Recommendation System

The application contains a built-in recipe recommendation engine.

Features include:

- matching recipes against currently available ingredients,
- calculating recipe match scores,
- displaying missing ingredients,
- suggesting recipes with the highest compatibility,
- filtering recipes by meal type.

### Saved Recipes

Users can:

- save favorite recipes,
- remove recipes from favorites,
- browse saved recipes separately.

### Navigation System

The application uses stack-based navigation and screen separation.

Main screens include:

- Landing screen,
- Main menu,
- Your fridge screen,
- Find recipe screen,
- Saved recipes screen,
- Recipe details modal,
- Add ingredient modal.

### Persistent Local Storage

The application stores selected user data locally using AsyncStorage.

Persisted data includes:

- fridge ingredients,
- saved recipes,
- application state.

### Animations and Gesture Support

The application implements modern UI interactions including:

- animated screen transitions,
- gesture handling,
- keyboard dismiss gestures,
- swipe interactions,
- smooth list animations.

---

# 3. Technology Stack

## 3.1 Main Technologies

| Technology              | Purpose                             |
| ----------------------- | ----------------------------------- |
| React Native            | Mobile application framework        |
| Expo                    | Development platform and runtime    |
| TypeScript              | Static typing and safer development |
| React Navigation        | Navigation management               |
| AsyncStorage            | Local data persistence              |
| React Native Reanimated | Advanced animations                 |
| Gesture Handler         | Gesture support                     |
| Lucide React Native     | Icon system                         |

---

# 4. Libraries and Dependencies

## 4.1 Production Dependencies

### Core Framework

- React 19
- React Native 0.81
- Expo SDK 54

### Navigation

- `@react-navigation/native`
- `@react-navigation/native-stack`
- `@react-navigation/bottom-tabs`

### Storage

- `@react-native-async-storage/async-storage`

### UI and Animation

- `react-native-reanimated`
- `react-native-gesture-handler`
- `react-native-safe-area-context`
- `react-native-screens`
- `react-native-svg`
- `lucide-react-native`

### Additional Utilities

- `react-native-worklets`
- `expo-font`
- `expo-status-bar`

### Development Dependencies

- TypeScript
- `@types/react`

---

# 5. Project Architecture

## 5.1 Folder Structure

```text
src/
├── components/
├── data/
├── hooks/
├── navigation/
├── screens/
├── state/
├── storage/
├── types/
├── utils/
└── theme.ts
```

---

## 5.2 Architecture Description

### components/

Contains reusable UI components used across the application.

Examples:

- Recipe cards,
- Filters,
- Layout components,
- Emoji picker,
- Application header.

### screens/

Contains complete application screens and views.

Each screen is responsible for:

- business logic,
- user interaction,
- rendering UI sections.

### navigation/

Responsible for:

- stack navigation,
- screen configuration,
- navigation types.

### state/

Contains global application state management.

The application uses React Context API for centralized state handling.

### storage/

Responsible for:

- saving data,
- loading persisted data,
- AsyncStorage integration.

### hooks/

Contains reusable custom React hooks.

Examples:

- swipe gesture handling,
- keyboard dismiss behavior.

### utils/

Contains helper algorithms and utility functions.

Main example:

- recipe matching and scoring logic.

### data/

Contains static application data.

Example:

- predefined recipes.

### types/

Contains TypeScript domain models and type definitions.

---

# 6. State Management

The project uses React Context API as the main state management solution.

The global application state includes:

- fridge ingredients,
- saved recipes,
- update operations,
- delete operations,
- persistence synchronization.

Advantages of this solution:

- lightweight architecture,
- low complexity,
- easy maintainability,
- no external state management dependency required.

---

# 7. User Interface Design

## 7.1 UI Characteristics

The interface was designed with emphasis on:

- simplicity,
- readability,
- mobile usability,
- smooth interaction,
- intuitive navigation.

The application uses:

- custom color themes,
- rounded UI elements,
- animated transitions,
- modern card-based layouts,
- emoji-enhanced categorization.

---

# 8. Recipe Matching Algorithm

The application includes a custom recipe scoring system.

## 8.1 Matching Logic

Recipes are evaluated based on:

- number of matching ingredients,
- number of missing ingredients,
- recipe preparation time,
- selected meal type filters.

Recipes with the highest score are displayed first.

This approach improves recommendation quality and user experience.

---

# 9. Persistence Layer

The persistence layer is implemented using AsyncStorage.

## 9.1 Stored Data

The application stores:

- ingredient lists,
- saved recipes,
- user-related application state.

## 9.2 Persistence Benefits

Benefits include:

- offline functionality,
- faster application startup,
- improved user experience,
- local-first architecture.

---

# 10. Responsive and Mobile Features

The application was developed specifically for mobile devices.

Implemented mobile-oriented features include:

- safe area support,
- gesture navigation,
- keyboard handling,
- animated scrolling,
- modal interactions,
- touch-optimized controls.

---

# 11. Application Flow

## 11.1 Typical User Flow

1. User opens the application.
2. User navigates to the fridge management screen.
3. User adds available ingredients.
4. User opens recipe recommendation screen.
5. Application calculates matching recipes.
6. User reviews recipe details.
7. User saves selected recipes.

---

# 12. Installation and Setup

## 12.1 Requirements

Required software:

- Node.js
- npm
- Expo CLI
- Android Studio or Expo Go mobile application

---

## 12.2 Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd Refridge-Mobile
```

Install dependencies:

```bash
npm install
```

---

## 12.3 Running the Application

Start the development server:

```bash
npm start
```

Run on Android:

```bash
npm run android
```

Run on iOS:

```bash
npm run ios
```

Run in web mode:

```bash
npm run web
```

---

# 13. Development Approach

The project was developed using:

- component-based architecture,
- reusable UI patterns,
- modular folder organization,
- TypeScript typing,
- separation of concerns.

The implementation prioritizes:

- maintainability,
- readability,
- scalability,
- frontend performance.

---

# Enjoy!
