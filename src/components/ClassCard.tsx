import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text, Button, Chip } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Class, Level } from '../types';

interface ClassCardProps {
  classItem: Class;
  onQuickBook: (classId: string) => void;
  isBooking?: boolean;
}

const levelColors: Record<Level, { gradient: string[], text: string }> = {
  Beginner: { gradient: ['#4CAF50', '#66BB6A'], text: '#2E7D32' },
  Intermediate: { gradient: ['#FF9800', '#FFB74D'], text: '#E65100' },
  Advanced: { gradient: ['#F44336', '#EF5350'], text: '#C62828' },
};

export const ClassCard: React.FC<ClassCardProps> = ({ classItem, onQuickBook, isBooking }) => {
  return (
    <Card style={styles.card} elevation={8}>
      <LinearGradient
        colors={['#ffffff', '#f8f9fa']}
        style={styles.gradientBackground}
      >
        <Card.Content style={styles.content}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text variant="titleLarge" style={styles.className}>
                {classItem.name}
              </Text>
              <View style={styles.levelContainer}>
                <LinearGradient
                  colors={levelColors[classItem.level].gradient}
                  style={styles.levelGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text style={[styles.levelText, { color: '#fff' }]}>
                    {classItem.level}
                  </Text>
                </LinearGradient>
              </View>
            </View>
          </View>
          
          <View style={styles.badgesRow}>
            <View style={styles.popularBadge}>
              <Text style={styles.badgeText}>🔥 Most Booked</Text>
            </View>
            <View style={styles.newBadge}>
              <Text style={styles.badgeText}>✨ New</Text>
            </View>
          </View>

          <View style={styles.details}>
            <View style={styles.detailRow}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>👨🏫</Text>
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.label}>Instructor</Text>
                <Text style={styles.value}>{classItem.instructor}</Text>
              </View>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>⭐ 4.8</Text>
              </View>
            </View>
            <View style={styles.detailRow}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>🏢</Text>
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.label}>Center</Text>
                <Text style={styles.value}>{classItem.center}</Text>
              </View>
            </View>
          </View>

          <View style={styles.classInfo}>
            <View style={styles.infoTag}>
              <Text style={styles.infoText}>⏱️ 45 min</Text>
            </View>
            <View style={styles.infoTag}>
              <Text style={styles.infoText}>👥 12 spots</Text>
            </View>
            <View style={styles.availabilityTag}>
              <Text style={styles.availableText}>🟢 Available</Text>
            </View>
          </View>

          <View style={styles.timeSlot}>
            <Text style={styles.nextSlotLabel}>Next Slot</Text>
            <Text style={styles.nextSlotTime}>🕐 Today 6:00 PM</Text>
          </View>

          <View style={styles.actions}>
            {classItem.isBooked ? (
              <View style={styles.bookedContainer}>
                <Text style={styles.bookedText}>✓ Booked</Text>
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => onQuickBook(classItem.id)}
                disabled={isBooking}
                style={styles.bookButtonContainer}
              >
                <LinearGradient
                  colors={['#6366f1', '#8b5cf6']}
                  style={styles.bookButtonGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text style={styles.bookButtonText}>
                    {isBooking ? '⏳ Booking...' : '🚀 Quick Book'}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
          </View>
        </Card.Content>
      </LinearGradient>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: 'transparent',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  gradientBackground: {
    borderRadius: 20,
  },
  content: {
    padding: 20,
  },
  header: {
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  className: {
    flex: 1,
    fontWeight: '700',
    fontSize: 20,
    color: '#1f2937',
    marginRight: 12,
    lineHeight: 26,
  },
  levelContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  levelGradient: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  levelText: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  details: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e7ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 18,
  },
  detailContent: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  value: {
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '600',
  },
  badgesRow: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 8,
  },
  popularBadge: {
    backgroundColor: '#fef3c7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f59e0b',
  },
  newBadge: {
    backgroundColor: '#e0e7ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#6366f1',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#374151',
  },
  ratingContainer: {
    backgroundColor: '#fef3c7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  rating: {
    fontSize: 12,
    fontWeight: '600',
    color: '#d97706',
  },
  classInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    gap: 8,
  },
  infoTag: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    flex: 1,
  },
  infoText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#475569',
    textAlign: 'center',
  },
  availabilityTag: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    flex: 1,
  },
  availableText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#166534',
    textAlign: 'center',
  },
  timeSlot: {
    backgroundColor: '#f8fafc',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#6366f1',
  },
  nextSlotLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  nextSlotTime: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1f2937',
  },
  actions: {
    alignItems: 'stretch',
  },
  bookButtonContainer: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  bookButtonGradient: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  bookedContainer: {
    backgroundColor: '#dcfce7',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#bbf7d0',
  },
  bookedText: {
    color: '#166534',
    fontSize: 16,
    fontWeight: '700',
  },
});