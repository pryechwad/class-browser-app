import { Class, User } from '../types';

export const mockClasses: Class[] = [
  {
    id: '1',
    name: 'Morning Yoga Flow',
    level: 'Beginner',
    instructor: 'Sarah Johnson',
    center: 'Downtown Wellness Center',
  },
  {
    id: '2',
    name: 'Advanced Pilates',
    level: 'Advanced',
    instructor: 'Mike Chen',
    center: 'Elite Fitness Studio',
  },
  {
    id: '3',
    name: 'HIIT Cardio Blast',
    level: 'Intermediate',
    instructor: 'Emma Davis',
    center: 'PowerFit Gym',
  },
  {
    id: '4',
    name: 'Meditation & Mindfulness',
    level: 'Beginner',
    instructor: 'David Wilson',
    center: 'Zen Wellness Center',
  },
  {
    id: '5',
    name: 'CrossFit Training',
    level: 'Advanced',
    instructor: 'Alex Rodriguez',
    center: 'Iron Box Gym',
  },
  {
    id: '6',
    name: 'Gentle Stretching',
    level: 'Beginner',
    instructor: 'Lisa Thompson',
    center: 'Harmony Health Club',
  },
  {
    id: '7',
    name: 'Power Yoga',
    level: 'Intermediate',
    instructor: 'Sarah Johnson',
    center: 'Downtown Wellness Center',
  },
  {
    id: '8',
    name: 'Strength Training',
    level: 'Intermediate',
    instructor: 'Mike Chen',
    center: 'Elite Fitness Studio',
  },
];

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  mobile: '+1 (555) 123-4567',
  credits: 8,
  city: 'New York',
  joinedDate: 'January 2024',
};

export const instructors = Array.from(new Set(mockClasses.map(c => c.instructor))).sort();