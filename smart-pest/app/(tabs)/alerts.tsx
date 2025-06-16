import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { sharedStyles } from '../styles/shared.styles';
import { MaterialIcons } from '@expo/vector-icons';

const alertData = [
  { id: '1', type: 'Beetle detected', location: 'Field A', time: '5 min ago' },
  { id: '2', type: 'Caterpillar detected', location: 'Field B', time: '12 min ago' },
  { id: '3', type: 'Aphids detected', location: 'Field C', time: '25 min ago' },
];

export default function Alerts() {
  return (
    <SafeAreaView style={sharedStyles.container}>
      {/* Header */}
      <View style={sharedStyles.header}>
        <Text style={sharedStyles.headerText}>Alerts</Text>
      </View>

      {/* Body */}
      <View style={sharedStyles.body}>
        <Text style={sharedStyles.sectionTitle}>Recent Pest Detections</Text>

        <FlatList
          data={alertData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
              <MaterialIcons name="bug-report" size={24} color="orange" style={{ marginRight: 12 }} />
              <View>
                <Text style={{ fontWeight: 'bold' }}>{item.type}</Text>
                <Text style={{ color: '#555', fontSize: 12 }}>
                  {item.location} · {item.time}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
