import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export const LoadingSpinner: React.FC = () => {
  const pulseAnim = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, [pulseAnim]);

  return (
    <LinearGradient
      colors={['#f8fafc', '#e2e8f0']}
      style={styles.container}
    >
      <Animated.View 
        style={[
          styles.spinnerContainer,
          { transform: [{ scale: pulseAnim }] }
        ]}
      >
        <LinearGradient
          colors={['#6366f1', '#8b5cf6']}
          style={styles.spinnerGradient}
        >
          <ActivityIndicator size="large" color="#ffffff" />
        </LinearGradient>
      </Animated.View>
      <Text variant="titleMedium" style={styles.text}>
        🏅 Loading amazing classes...
      </Text>
      <Text variant="bodyMedium" style={styles.subtext}>
        Get ready for your next workout!
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  spinnerContainer: {
    marginBottom: 32,
    borderRadius: 40,
    overflow: 'hidden',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
  },
  spinnerGradient: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#374151',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtext: {
    color: '#6b7280',
    textAlign: 'center',
    fontWeight: '500',
  },
});