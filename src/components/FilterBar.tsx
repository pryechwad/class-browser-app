import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Menu, Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Level, Filters } from '../types';

interface FilterBarProps {
  filters: Filters;
  instructors: string[];
  onFiltersChange: (filters: Filters) => void;
  onClearFilters: () => void;
}

const levels: Level[] = ['Beginner', 'Intermediate', 'Advanced'];

const levelEmojis = {
  Beginner: '🌱',
  Intermediate: '🔥',
  Advanced: '⚡',
};

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  instructors,
  onFiltersChange,
  onClearFilters,
}) => {
  const [instructorMenuVisible, setInstructorMenuVisible] = useState(false);

  const handleLevelFilter = (level: Level) => {
    onFiltersChange({
      ...filters,
      level: filters.level === level ? null : level,
    });
  };

  const handleInstructorFilter = (instructor: string) => {
    onFiltersChange({
      ...filters,
      instructor: filters.instructor === instructor ? null : instructor,
    });
    setInstructorMenuVisible(false);
  };

  const hasActiveFilters = filters.level || filters.instructor;

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        <View style={styles.filtersRow}>
          {levels.map((level) => (
            <TouchableOpacity
              key={level}
              onPress={() => handleLevelFilter(level)}
              style={styles.filterChip}
            >
              <View style={[
                styles.chipContent,
                filters.level === level ? styles.selectedChip : styles.unselectedChip
              ]}>
                <Text style={styles.chipEmoji}>{levelEmojis[level]}</Text>
                <Text style={[
                  styles.chipText,
                  filters.level === level ? styles.selectedText : styles.unselectedText
                ]}>
                  {level}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
          
          <Menu
            visible={instructorMenuVisible}
            onDismiss={() => setInstructorMenuVisible(false)}
            contentStyle={styles.menuContent}
            anchor={
              <TouchableOpacity
                onPress={() => setInstructorMenuVisible(true)}
                style={styles.filterChip}
              >
                <View style={[
                  styles.chipContent,
                  styles.instructorChip,
                  filters.instructor ? styles.selectedChip : styles.unselectedChip
                ]}>
                  <Text style={styles.chipEmoji}>👨‍🏫</Text>
                  <Text style={[
                    styles.chipText,
                    filters.instructor ? styles.selectedText : styles.unselectedText
                  ]}>
                    {filters.instructor || 'Instructor'}
                  </Text>
                  <Text style={[
                    styles.dropdownIcon,
                    filters.instructor ? styles.selectedText : styles.unselectedText
                  ]}>
                    ▼
                  </Text>
                </View>
              </TouchableOpacity>
            }
          >
            {instructors.map((instructor) => (
              <Menu.Item
                key={instructor}
                onPress={() => handleInstructorFilter(instructor)}
                title={instructor}
                titleStyle={styles.menuItemText}
              />
            ))}
          </Menu>

          {hasActiveFilters && (
            <TouchableOpacity onPress={onClearFilters} style={styles.clearButton}>
              <LinearGradient
                colors={['#ef4444', '#dc2626']}
                style={styles.clearGradient}
              >
                <Text style={styles.clearText}>✕</Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  filtersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  filterChip: {
    borderRadius: 25,
  },
  chipContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    minHeight: 44,
  },
  selectedChip: {
    backgroundColor: '#6366f1',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  unselectedChip: {
    backgroundColor: '#f8fafc',
    borderWidth: 1.5,
    borderColor: '#e2e8f0',
  },
  instructorChip: {
    minWidth: 120,
  },
  chipEmoji: {
    fontSize: 16,
    marginRight: 6,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '600',
  },
  selectedText: {
    color: '#ffffff',
  },
  unselectedText: {
    color: '#475569',
  },
  dropdownIcon: {
    fontSize: 10,
    marginLeft: 4,
  },
  clearButton: {
    borderRadius: 22,
    overflow: 'hidden',
  },
  clearGradient: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  menuContent: {
    borderRadius: 16,
    marginTop: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  menuItemText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
});