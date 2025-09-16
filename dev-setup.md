# Development Setup

## Quick Commands

### Start Development Server
```bash
npx expo start
```

### Platform-Specific Launch
```bash
# iOS Simulator
npx expo start --ios

# Android Emulator  
npx expo start --android

# Web Browser
npx expo start --web
```

### Clear Cache (if needed)
```bash
npx expo start --clear
```

## Project Structure Overview

```
class-browser/
├── App.tsx                 # Main app with navigation
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ClassCard.tsx   # Individual class card
│   │   ├── FilterBar.tsx   # Filter controls
│   │   ├── EmptyState.tsx  # No results state
│   │   ├── LoadingSpinner.tsx # Loading indicator
│   │   └── index.ts        # Component exports
│   ├── screens/            # Main screens
│   │   ├── HomeScreen.tsx  # Class browsing
│   │   ├── ProfileScreen.tsx # User profile
│   │   └── index.ts        # Screen exports
│   ├── types/              # TypeScript definitions
│   │   └── index.ts        # App interfaces
│   └── data/               # Mock data
│       └── mockData.ts     # Sample data
├── assets/                 # App icons and images
├── README.md              # Main documentation
├── DEMO.md               # Demo instructions
└── package.json          # Dependencies
```

## Key Technologies

- **Expo SDK 54**: Development platform
- **React Native 0.81**: Mobile framework  
- **TypeScript**: Type safety
- **React Navigation 7**: Navigation system
- **React Native Paper 5**: Material Design UI
- **React Hooks**: State management

## Development Tips

### Hot Reload
- Save any file to see changes instantly
- Shake device or press `Cmd+D` (iOS) / `Cmd+M` (Android) for dev menu

### Debugging
- Use React DevTools for component inspection
- Console logs appear in terminal
- Use Flipper for advanced debugging

### Common Issues
- **Metro bundler cache**: Clear with `--clear` flag
- **iOS Simulator**: Ensure Xcode is updated
- **Android Emulator**: Check Android Studio setup

### Code Style
- TypeScript strict mode enabled
- Component-based architecture
- Functional components with hooks
- Material Design principles