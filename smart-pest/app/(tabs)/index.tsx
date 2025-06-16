import { View, Text, SafeAreaView } from 'react-native';
import { sharedStyles } from '../styles/shared.styles';

export default function Home() {
  return (
    <SafeAreaView style={sharedStyles.container}>
      {/* Header */}
      <View style={sharedStyles.header}>
        <Text style={sharedStyles.headerText}>Pest Detection</Text>
      </View>

      {/* Main Body */}
      <View style={sharedStyles.body}>
        <Text style={sharedStyles.sectionTitle}>Welcome to Smart Pest Monitoring</Text>
        <Text style={sharedStyles.caption}>Home screen placeholder.</Text>
      </View>
    </SafeAreaView>
  );
}
