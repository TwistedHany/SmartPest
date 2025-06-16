import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';

import { styles } from './styles/home.styles';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Pest Detection</Text>
      </View>

      {/* Main Body (empty for now) */}
      <View style={styles.body}></View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Ionicons name="home" size={24} color="#1B5E20" />
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <MaterialIcons name="live-tv" size={24} color="#1B5E20" />
          <Text style={styles.navText}>Live Feed</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="notifications" size={24} color="#1B5E20" />
          <Text style={styles.navText}>Alerts</Text>
        </View>
        <View style={styles.navItem}>
          <Entypo name="bar-graph" size={24} color="#1B5E20" />
          <Text style={styles.navText}>Reports</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
