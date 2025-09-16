import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, Animated } from 'react-native';
import { Appbar, Snackbar, Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Class, Filters } from '../types';
import { mockClasses, instructors } from '../data/mockData';
import { ClassCard, FilterBar, EmptyState, LoadingSpinner } from '../components';

export const HomeScreen: React.FC = () => {
  const [classes, setClasses] = useState<Class[]>([]);
  const [filteredClasses, setFilteredClasses] = useState<Class[]>([]);
  const [filters, setFilters] = useState<Filters>({ level: null, instructor: null });
  const [loading, setLoading] = useState(true);
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const toastAnim = React.useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setClasses(mockClasses);
      setFilteredClasses(mockClasses);
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    let filtered = classes;
    
    if (filters.level) {
      filtered = filtered.filter(c => c.level === filters.level);
    }
    
    if (filters.instructor) {
      filtered = filtered.filter(c => c.instructor === filters.instructor);
    }
    
    setFilteredClasses(filtered);
  }, [classes, filters]);

  const handleQuickBook = async (classId: string) => {
    setBookingId(classId);
    
    // Optimistic update
    const updatedClasses = classes.map(c => 
      c.id === classId ? { ...c, isBooked: true } : c
    );
    setClasses(updatedClasses);

    // Simulate booking with 15% failure rate
    setTimeout(() => {
      const isSuccess = Math.random() > 0.15;
      const bookedClass = classes.find(c => c.id === classId);
      
      if (isSuccess && bookedClass) {
        const successMessages = [
          `🎉 Amazing! You're all set for ${bookedClass.name}!`,
          `💪 Great choice! ${bookedClass.name} with ${bookedClass.instructor} awaits!`,
          `🔥 Booked! Get ready to crush ${bookedClass.name}!`,
          `✨ Perfect! Your spot in ${bookedClass.name} is secured!`,
          `🚀 Awesome! ${bookedClass.instructor} is excited to see you!`,
        ];
        const randomMessage = successMessages[Math.floor(Math.random() * successMessages.length)];
        setToastMessage(randomMessage);
        setIsSuccess(true);
      } else {
        // Rollback on failure
        const rolledBackClasses = classes.map(c => 
          c.id === classId ? { ...c, isBooked: false } : c
        );
        setClasses(rolledBackClasses);
        const failureMessages = [
          '😔 Oops! Class is full. Try another time slot!',
          '⚠️ Booking failed. The class might be at capacity.',
          '🔄 Something went wrong. Please try again!',
          '📱 Network issue. Check your connection and retry.',
        ];
        const randomFailure = failureMessages[Math.floor(Math.random() * failureMessages.length)];
        setToastMessage(randomFailure);
        setIsSuccess(false);
      }
      
      showToast();
      setBookingId(null);
    }, 1000);
  };

  const handleFiltersChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({ level: null, instructor: null });
  };

  const showToast = () => {
    setToastVisible(true);
    Animated.sequence([
      Animated.timing(toastAnim, {
        toValue: 50,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.delay(2500),
      Animated.timing(toastAnim, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setToastVisible(false);
    });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.headerGradient}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Everything fitness</Text>
          <Text style={styles.headerSubtitle}>book classes in <Text style={styles.highlightText}>seconds</Text></Text>
          <View style={styles.illustrationContainer}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png' }}
              style={styles.illustrationImage}
              resizeMode="contain"
            />
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140051.png' }}
              style={styles.illustrationImage}
              resizeMode="contain"
            />
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png' }}
              style={styles.illustrationImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.taglineRow}>
            <View style={styles.taglineBadge}>
              <Text style={styles.taglineText}>🏅 Premium Classes</Text>
            </View>
            <View style={styles.taglineBadge}>
              <Text style={styles.taglineText}>⚡ Instant Booking</Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      <FilterBar
        filters={filters}
        instructors={instructors}
        onFiltersChange={handleFiltersChange}
        onClearFilters={handleClearFilters}
      />

      <LinearGradient
        colors={['#f8fafc', '#e2e8f0']}
        style={styles.contentBackground}
      >
        {filteredClasses.length === 0 ? (
          <EmptyState onClearFilters={handleClearFilters} />
        ) : (
          <FlatList
            data={filteredClasses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ClassCard
                classItem={item}
                onQuickBook={handleQuickBook}
                isBooking={bookingId === item.id}
              />
            )}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />
        )}
      </LinearGradient>

      {toastVisible && (
        <Animated.View
          style={[
            styles.toast,
            {
              transform: [{ translateY: toastAnim }],
              backgroundColor: isSuccess ? '#10b981' : '#ef4444',
            },
          ]}
        >
          <Text style={styles.toastText}>{toastMessage}</Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  headerGradient: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: '900',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: -1,
    fontFamily: 'System',
  },
  headerSubtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 0.3,
    fontFamily: 'System',
  },
  highlightText: {
    color: '#fbbf24',
    fontWeight: '700',
    fontFamily: 'System',
  },
  taglineRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  taglineBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  taglineText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
  },
  illustrationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 16,
  },
  illustrationImage: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 30,
    padding: 8,
  },
  contentBackground: {
    flex: 1,
  },
  listContent: {
    paddingVertical: 12,
  },
  toast: {
    position: 'absolute',
    top: 0,
    left: 16,
    right: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  toastText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});