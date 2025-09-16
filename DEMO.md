# Demo Instructions

## Quick Start
```bash
npx expo start
```

## Demo Flow (1-2 minutes)

### 1. App Launch & Loading (10 seconds)
- App starts with loading spinner for 1.5 seconds
- Shows "Loading classes..." message
- Transitions to class list

### 2. Browse Classes (20 seconds)
- Scroll through 8 different classes
- Notice different levels (Beginner/Intermediate/Advanced) with color coding
- Observe clean card design with instructor and center information

### 3. Filter Functionality (30 seconds)
- **Level Filtering**: Tap "Beginner" chip → see only beginner classes
- **Instructor Filtering**: Tap "Instructor" dropdown → select "Sarah Johnson"
- **Combined Filters**: Show classes that match both criteria
- **Clear Filters**: Tap "Clear" button to reset

### 4. Empty State (10 seconds)
- Set filters that return no results (e.g., Advanced + specific instructor)
- Show empty state with "No Classes Found" message
- Demonstrate "Clear Filters" button

### 5. Booking Flow (30 seconds)
- **Success Case**: Tap "Quick Book" → immediate UI update → success toast
- **Failure Case**: Keep tapping until you get a failure (15% chance) → rollback + error toast
- Show booked state (button changes to "Booked" and becomes disabled)

### 6. Profile Screen (20 seconds)
- Navigate to Profile tab
- Show user information display
- Tap "Edit Name" → modal opens
- Change name → save → see updated name in profile
- Show all user details (mobile, credits, city, join date)

## Key Features to Highlight

### Visual Design
- ✅ Modern Material Design with React Native Paper
- ✅ Color-coded difficulty levels
- ✅ Clean card-based layout
- ✅ Smooth animations and transitions

### User Experience
- ✅ Optimistic updates for immediate feedback
- ✅ Error handling with rollback
- ✅ Clear loading and empty states
- ✅ Intuitive filter system

### Technical Implementation
- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ Efficient FlatList rendering
- ✅ Local state management

## Screen Recording Tips

1. **Portrait Mode**: Record in portrait for mobile app feel
2. **Smooth Interactions**: Tap deliberately, don't rush
3. **Show Both Success/Failure**: Demonstrate booking reliability
4. **Highlight Filters**: Show how filters work together
5. **Profile Editing**: Demonstrate the name editing flow

## Testing Scenarios

### Booking Success Rate
- Expected: ~85% success, 15% failure
- Test: Tap "Quick Book" 10 times, expect 1-2 failures

### Filter Combinations
- Level only: Works ✅
- Instructor only: Works ✅
- Both filters: Works ✅
- No results: Shows empty state ✅

### Profile Editing
- Edit name: Persists during session ✅
- Cancel edit: Reverts changes ✅
- Empty name: Validation needed (future enhancement)

## Performance Notes
- App loads in ~1.5 seconds
- Smooth scrolling with FlatList
- Instant filter responses
- No memory leaks or crashes