import { View, Text, SafeAreaView } from 'react-native';
import { sharedStyles } from '../styles/shared.styles';

export default function LiveFeed() {
  return (
    <SafeAreaView style={sharedStyles.container}>
      {/* Header */}
      <View style={sharedStyles.header}>
        <Text style={sharedStyles.headerText}>Live Feed</Text>
      </View>

      {/* Main Body */}
      <View style={sharedStyles.body}>
        <Text style={sharedStyles.sectionTitle}>Live Infrared Camera Feed</Text>
        <Text style={sharedStyles.caption}>Camera not connected. Waiting for stream...</Text>
      </View>
    </SafeAreaView>
  );
}
