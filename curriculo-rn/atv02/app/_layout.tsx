import { Tabs } from 'expo-router';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Platform } from 'react-native';

export default function TabLayout() {
  const tintColor = '#4a7a4a';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tintColor,
        tabBarStyle: styles.tabBar,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          title: 'Sobre/Tecnologias',
          tabBarIcon: ({ color, size }) => <Ionicons name="information-circle" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="academica"
        options={{
          title: 'Acadêmica',
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="book-reader" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profissional"
        options={{
          title: 'Profissional',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="briefcase" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="projetos"
        options={{
          title: 'Projetos',
          tabBarIcon: ({ color, size }) => <Ionicons name="folder-open" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="forca"
        options={{
          title: 'Jogo da Forca',
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="gamepad" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    paddingVertical: Platform.OS === 'ios' ? 0 : 10,
    height: Platform.OS === 'ios' ? 90 : 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#c0d4b5',
  },
  header: {
    backgroundColor: '#4a7a4a',
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
