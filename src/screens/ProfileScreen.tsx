import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { 
  Appbar, 
  Card, 
  Text, 
  Avatar, 
  Button, 
  TextInput, 
  Portal, 
  Dialog 
} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { mockUser } from '../data/mockData';
import { User } from '../types';

export const ProfileScreen: React.FC = () => {
  const [user, setUser] = useState<User>(mockUser);
  const [editDialogVisible, setEditDialogVisible] = useState(false);
  const [editedName, setEditedName] = useState(user.name);

  const handleSaveName = () => {
    setUser({ ...user, name: editedName });
    setEditDialogVisible(false);
  };

  const handleCancelEdit = () => {
    setEditedName(user.name);
    setEditDialogVisible(false);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.headerGradient}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>👤 My Profile</Text>
          <Text style={styles.headerSubtitle}>Manage your account</Text>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content}>
        <Card style={styles.profileCard} elevation={8}>
          <LinearGradient
            colors={['#ffffff', '#f8fafc']}
            style={styles.profileGradient}
          >
            <Card.Content style={styles.cardContent}>
              <View style={styles.avatarSection}>
                <View style={styles.avatarContainer}>
                  <LinearGradient
                    colors={['#6366f1', '#8b5cf6']}
                    style={styles.avatarGradient}
                  >
                    <Text style={styles.avatarText}>
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </Text>
                  </LinearGradient>
                </View>
                <Text variant="headlineMedium" style={styles.userName}>
                  {user.name}
                </Text>
                <TouchableOpacity
                  onPress={() => setEditDialogVisible(true)}
                  style={styles.editButtonContainer}
                >
                  <LinearGradient
                    colors={['#6366f1', '#8b5cf6']}
                    style={styles.editButtonGradient}
                  >
                    <Text style={styles.editButtonText}>✏️ Edit Name</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </Card.Content>
          </LinearGradient>
        </Card>

        <Card style={styles.detailsCard} elevation={6}>
          <LinearGradient
            colors={['#ffffff', '#f1f5f9']}
            style={styles.detailsGradient}
          >
            <Card.Content>
              <LinearGradient
                colors={['#ffd700', '#ffb347', '#ff8c00']}
                style={styles.goldPassHeader}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.goldPassOverlay}>
                  <View style={styles.goldPassContent}>
                    <View style={styles.crownContainer}>
                      <Text style={styles.crownIcon}>👑</Text>
                    </View>
                    <Text style={styles.goldPassTitle}>FitClass GOLD</Text>
                    <Text style={styles.goldPassSubtitle}>Elite Membership</Text>
                    <View style={styles.goldBadge}>
                      <Text style={styles.goldBadgeText}>✨ PREMIUM ✨</Text>
                    </View>
                    <View style={styles.perksRow}>
                      <View style={styles.perkItem}>
                        <Text style={styles.perkIcon}>♾️</Text>
                        <Text style={styles.perkText}>Unlimited</Text>
                      </View>
                      <View style={styles.perkItem}>
                        <Text style={styles.perkIcon}>🏆</Text>
                        <Text style={styles.perkText}>Priority</Text>
                      </View>
                      <View style={styles.perkItem}>
                        <Text style={styles.perkIcon}>🔥</Text>
                        <Text style={styles.perkText}>Exclusive</Text>
                      </View>
                    </View>
                    <View style={styles.validityContainer}>
                      <Text style={styles.validityText}>Valid until Dec 2024</Text>
                    </View>
                  </View>
                  <View style={styles.goldPattern}>
                    <Text style={styles.patternText}>✨✨✨</Text>
                  </View>
                </View>
              </LinearGradient>
              
              <View style={styles.statsContainer}>
                <TouchableOpacity style={styles.statCardContainer}>
                  <LinearGradient colors={['#6366f1', '#8b5cf6']} style={styles.statCard}>
                    <Text style={styles.statIcon}>🎆</Text>
                    <Text style={styles.statNumber}>{user.credits}</Text>
                    <Text style={styles.statLabel}>Credits</Text>
                    <Text style={styles.statSubtext}>Available</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.statCardContainer}>
                  <LinearGradient colors={['#10b981', '#059669']} style={styles.statCard}>
                    <Text style={styles.statIcon}>🏅</Text>
                    <Text style={styles.statNumber}>15</Text>
                    <Text style={styles.statLabel}>Classes</Text>
                    <Text style={styles.statSubtext}>Completed</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.statCardContainer}>
                  <LinearGradient colors={['#f59e0b', '#d97706']} style={styles.statCard}>
                    <Text style={styles.statIcon}>🔥</Text>
                    <Text style={styles.statNumber}>7</Text>
                    <Text style={styles.statLabel}>Streak</Text>
                    <Text style={styles.statSubtext}>Days</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              
              <View style={styles.membershipDetails}>
                <View style={styles.benefitRow}>
                  <Text style={styles.benefitIcon}>✓</Text>
                  <Text style={styles.benefitText}>Unlimited class bookings</Text>
                </View>
                <View style={styles.benefitRow}>
                  <Text style={styles.benefitIcon}>✓</Text>
                  <Text style={styles.benefitText}>Priority booking access</Text>
                </View>
                <View style={styles.benefitRow}>
                  <Text style={styles.benefitIcon}>✓</Text>
                  <Text style={styles.benefitText}>Exclusive premium classes</Text>
                </View>
                <View style={styles.benefitRow}>
                  <Text style={styles.benefitIcon}>✓</Text>
                  <Text style={styles.benefitText}>Free cancellation anytime</Text>
                </View>
              </View>
              
              <View style={styles.memberInfo}>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Mobile</Text>
                  <Text style={styles.infoValue}>{user.mobile}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Location</Text>
                  <Text style={styles.infoValue}>{user.city}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Member Since</Text>
                  <Text style={styles.infoValue}>{user.joinedDate}</Text>
                </View>
              </View>
            </Card.Content>
          </LinearGradient>
        </Card>
      </ScrollView>

      <Portal>
        <Dialog visible={editDialogVisible} onDismiss={handleCancelEdit} style={styles.dialog}>
          <Dialog.Title style={styles.dialogTitle}>Edit Name</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Full Name"
              value={editedName}
              onChangeText={setEditedName}
              mode="outlined"
              style={styles.textInput}
              outlineColor="#6366f1"
              activeOutlineColor="#8b5cf6"
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleCancelEdit} textColor="#6b7280">
              Cancel
            </Button>
            <TouchableOpacity onPress={handleSaveName} style={styles.saveButtonContainer}>
              <LinearGradient
                colors={['#6366f1', '#8b5cf6']}
                style={styles.saveButtonGradient}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
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
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  profileCard: {
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  profileGradient: {
    borderRadius: 20,
  },
  cardContent: {
    padding: 28,
  },
  avatarSection: {
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 20,
    borderRadius: 50,
    overflow: 'hidden',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  avatarGradient: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 36,
    fontWeight: '800',
    color: '#ffffff',
  },
  userName: {
    marginBottom: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1f2937',
  },
  editButtonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  editButtonGradient: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  editButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  detailsCard: {
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  detailsGradient: {
    borderRadius: 20,
  },
  sectionTitle: {
    marginBottom: 20,
    fontWeight: '700',
    color: '#1f2937',
    fontSize: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCardContainer: {
    flex: 1,
    marginHorizontal: 4,
  },
  statCard: {
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  statIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.9)',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  statSubtext: {
    fontSize: 10,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  goldPassHeader: {
    marginHorizontal: -20,
    marginTop: -20,
    paddingHorizontal: 20,
    paddingVertical: 32,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  goldPassOverlay: {
    position: 'relative',
  },
  goldPassContent: {
    alignItems: 'center',
    zIndex: 2,
  },
  crownContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  crownIcon: {
    fontSize: 28,
  },
  goldPassTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1a1a1a',
    marginBottom: 4,
    letterSpacing: 2,
    textShadowColor: 'rgba(255, 255, 255, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  goldPassSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d2d2d',
    marginBottom: 16,
    letterSpacing: 1,
    textShadowColor: 'rgba(255, 255, 255, 0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  goldBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    marginBottom: 12,
  },
  goldBadgeText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1a1a1a',
    letterSpacing: 1.5,
  },
  validityContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  validityText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#ffffff',
  },
  goldPattern: {
    position: 'absolute',
    top: 10,
    right: 20,
    opacity: 0.3,
  },
  patternText: {
    fontSize: 20,
    color: '#ffffff',
  },
  perksRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 12,
    paddingHorizontal: 20,
  },
  perkItem: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    minWidth: 70,
  },
  perkIcon: {
    fontSize: 16,
    marginBottom: 2,
  },
  perkText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  membershipDetails: {
    marginBottom: 20,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  benefitIcon: {
    fontSize: 16,
    color: '#10b981',
    fontWeight: '800',
    marginRight: 12,
    width: 20,
  },
  benefitText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  memberInfo: {
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 14,
    color: '#1f2937',
    fontWeight: '600',
  },
  creditsContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  creditsValue: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  dialog: {
    borderRadius: 20,
  },
  dialogTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1f2937',
  },
  textInput: {
    marginBottom: 8,
    backgroundColor: '#f9fafb',
  },
  saveButtonContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    marginLeft: 8,
  },
  saveButtonGradient: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});