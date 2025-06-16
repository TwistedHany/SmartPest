import { Tabs } from 'expo-router';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#1B5E20',
        tabBarInactiveTintColor: '#999',
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#ddd',
          backgroundColor: '#fff',
        },
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'index') {
            return <Ionicons name="home" size={size} color={color} />;
          } else if (route.name === 'live') {
            return <MaterialIcons name="live-tv" size={size} color={color} />;
          } else if (route.name === 'alerts') {
            return <Ionicons name="notifications" size={size} color={color} />;
          } else if (route.name === 'reports') {
            return <Entypo name="bar-graph" size={size} color={color} />;
          }
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="live" options={{ title: 'Live Feed' }} />
      <Tabs.Screen name="alerts" options={{ title: 'Alerts' }} />
      <Tabs.Screen name="reports" options={{ title: 'Reports' }} />
    </Tabs>
  );
}
