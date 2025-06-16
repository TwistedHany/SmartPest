import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { sharedStyles } from '../styles/shared.styles';

export default function Reports() {
  return (
    <SafeAreaView style={sharedStyles.container}>
      {/* Header */}
      <View style={sharedStyles.header}>
        <Text style={sharedStyles.headerText}>Reports</Text>
      </View>

      {/* Body */}
      <View style={sharedStyles.body}>
        <Text style={sharedStyles.sectionTitle}>Pest Detection Summary</Text>

        {/* Filter Buttons */}
        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 20 }}>
          {['Daily', 'Weekly', 'Monthly'].map((label) => (
            <TouchableOpacity
              key={label}
              style={{
                backgroundColor: '#1B5E20',
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: '#fff', fontWeight: '600' }}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Chart Placeholder */}
        <View
          style={{
            width: '100%',
            height: 200,
            borderRadius: 10,
            backgroundColor: '#e0e0e0',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <Text style={{ color: '#555' }}>Chart goes here</Text>
        </View>

        {/* Summary Placeholder */}
        <View
          style={{
            width: '100%',
            borderRadius: 10,
            backgroundColor: '#f1f8e9',
            padding: 16,
          }}
        >
          <Text style={{ fontWeight: '600', marginBottom: 5 }}>Summary</Text>
          <Text style={{ color: '#555' }}>
            Total detections this period: <Text style={{ fontWeight: 'bold' }}>N/A</Text>
          </Text>
          <Text style={{ color: '#555' }}>
            Most detected pest: <Text style={{ fontWeight: 'bold' }}>N/A</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
