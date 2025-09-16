import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Dimensions, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

interface SplashScreenProps {
  onFinish: () => void;
}

const { width, height } = Dimensions.get('window');

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const scaleAnim = React.useRef(new Animated.Value(0.8)).current;
  const slideAnim = React.useRef(new Animated.Value(50)).current;

  useEffect(() => {
    const animation = Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(1200),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]);

    animation.start(() => {
      onFinish();
    });
  }, []);

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2', '#f093fb']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [
              { scale: scaleAnim },
              { translateY: slideAnim }
            ],
          },
        ]}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logoIcon}>🏋️♀️</Text>
          <Text style={styles.appName}>FitClass</Text>
          <Text style={styles.tagline}>Your Fitness Journey Starts Here</Text>
        </View>
        
        <View style={styles.illustrationContainer}>
          <Image
            source={{ uri: 'https://png.pngtree.com/png-clipart/20230824/original/pngtree-couple-in-meditation-man-woman-picture-image_8453155.png' }}
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logoIcon: {
    fontSize: 80,
    marginBottom: 20,
  },
  appName: {
    fontSize: 48,
    fontWeight: '900',
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    fontFamily: 'System',
  },
  tagline: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginTop: 8,
    letterSpacing: 1,
  },
  illustrationContainer: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustration: {
    width: 200,
    height: 200,
    tintColor: 'rgba(255, 255, 255, 0.8)',
  },
});