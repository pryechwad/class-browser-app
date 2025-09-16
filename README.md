# Class Browser - React Native Expo App

A modern React Native application built with Expo and TypeScript for browsing and booking fitness classes.

## Features

### 🏠 Home Screen (Browse Classes)
- **Class Listings**: Display classes with name, level, instructor, and center
- **Smart Filters**: Filter by level (chips) and instructor (dropdown)
- **Quick Booking**: One-tap booking with optimistic updates
- **Realistic Booking**: 15% failure rate with automatic rollback
- **Loading States**: Smooth loading spinner on app start
- **Empty States**: Clear messaging when no classes match filters

### 👤 Profile Screen
- **User Information**: Avatar, name, mobile, credits, city, join date
- **Editable Name**: Inline editing with modal dialog
- **Local Storage**: Changes persist during app session
- **Clean Design**: Card-based layout with modern styling

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (Mac) or Android Emulator

### Installation

1. **Clone and navigate to the project**:
   ```bash
   cd class-browser
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npx expo start
   ```

4. **Run on device/simulator**:
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Scan QR code with Expo Go app on physical device

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ClassCard.tsx   # Individual class display card
│   ├── FilterBar.tsx   # Filter controls (level chips, instructor dropdown)
│   ├── EmptyState.tsx  # No results state
│   └── LoadingSpinner.tsx # Loading indicator
├── screens/            # Main application screens
│   ├── HomeScreen.tsx  # Class browsing and booking
│   └── ProfileScreen.tsx # User profile management
├── types/              # TypeScript type definitions
│   └── index.ts        # App-wide interfaces
└── data/               # Mock data and constants
    └── mockData.ts     # Sample classes and user data
```

## Design Choices & Trade-offs

### 🎨 UI/UX Decisions
- **Modern Gradient Design**: Beautiful linear gradients throughout the app for visual appeal
- **Custom Color Palette**: Carefully chosen indigo/purple theme with excellent contrast
- **Enhanced Typography**: Bold, readable fonts with proper weight hierarchy
- **Micro-interactions**: Subtle animations and hover effects for better user experience
- **Icon Integration**: Meaningful emojis and icons to enhance visual communication
- **Card Elevation**: Strategic use of shadows and elevation for depth
- **Bottom Navigation**: Attractive tab bar with custom styling and icons
- **Optimistic Updates**: Immediate UI feedback for better perceived performance

### 🔧 Technical Decisions
- **TypeScript**: Strong typing for better development experience and fewer runtime errors
- **Expo Linear Gradient**: Native gradient support for beautiful visual effects
- **Custom Theme**: Centralized design system with React Native Paper theming
- **Animated Components**: React Native Animated API for smooth micro-interactions
- **Local State Management**: React hooks sufficient for app scope, avoiding Redux complexity
- **Mock Data**: Realistic sample data structure ready for API integration
- **Component Composition**: Small, focused components for maintainability

### ⚡ Performance Considerations
- **FlatList**: Efficient rendering for class lists with built-in virtualization
- **Gradient Optimization**: Strategic use of LinearGradient to avoid performance issues
- **Native Animations**: Hardware-accelerated animations using useNativeDriver
- **Minimal Re-renders**: Careful state management to prevent unnecessary updates
- **Optimized Images**: Avatar placeholders and emoji icons instead of heavy assets

### 🚀 Future Enhancements
- **API Integration**: Replace mock data with real backend calls
- **Persistent Storage**: AsyncStorage for user preferences and booking history
- **Push Notifications**: Class reminders and booking confirmations
- **Advanced Filters**: Date/time, location radius, class type
- **Booking History**: Track past and upcoming classes

## Key Features Demo

### Booking Flow
1. **Success Case** (85% probability):
   - Tap "Quick Book" → Immediate UI update → Success toast
2. **Failure Case** (15% probability):
   - Tap "Quick Book" → Immediate UI update → Rollback + Error toast

### Filter System
- **Level Filters**: Toggle chips for Beginner/Intermediate/Advanced
- **Instructor Filter**: Dropdown menu with all available instructors
- **Clear Filters**: One-tap reset when filters are active
- **Empty State**: Helpful message and clear action when no results

### Profile Management
- **View Mode**: Clean display of user information
- **Edit Mode**: Modal dialog for name editing
- **Validation**: Basic input validation and error handling

## Dependencies

### Core
- **expo**: ~54.0.7 - Development platform
- **react**: 19.1.0 - UI library
- **react-native**: 0.81.4 - Mobile framework

### Navigation & UI
- **@react-navigation/native**: ^7.1.17 - Navigation system
- **react-native-paper**: ^5.14.5 - Material Design components
- **expo-linear-gradient**: Latest - Beautiful gradient backgrounds
- **react-native-safe-area-context**: ~5.6.0 - Safe area handling

### Development
- **typescript**: ~5.9.2 - Type checking
- **@types/react**: ~19.1.0 - React type definitions

## Testing the App

1. **Loading State**: Observe 1.5-second loading spinner on app start
2. **Class Browsing**: Scroll through the class list
3. **Filtering**: 
   - Tap level chips to filter by difficulty
   - Use instructor dropdown to filter by teacher
   - Verify "Clear Filters" functionality
4. **Booking**: 
   - Tap "Quick Book" multiple times to see both success and failure cases
   - Observe optimistic updates and rollbacks
5. **Profile**: 
   - Navigate to Profile tab
   - Edit name using the "Edit Name" button
   - Verify changes persist during session

## Troubleshooting

### Common Issues
- **Metro bundler issues**: Clear cache with `npx expo start --clear`
- **iOS Simulator not opening**: Ensure Xcode is installed and updated
- **Android emulator issues**: Verify Android Studio setup and AVD configuration

### Development Tips
- Use `npx expo install` instead of `npm install` for Expo-compatible packages
- Check Expo documentation for platform-specific considerations
- Use React DevTools for debugging component state

---

Built with ❤️ using Expo, React Native, and TypeScript