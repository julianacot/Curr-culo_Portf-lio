import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView>
        <ThemedText type="title">Sobre</ThemedText>
        <ThemedText type="default">Este é o meu currículo / portfólio feito com React Native + Expo.</ThemedText>
        <ThemedText type="subtitle">Tecnologias / Módulos usados</ThemedText>
        <ThemedText>{`• React
• React Native
• Expo
• Expo Router (file-based routing)
• expo-av (áudio)
• expo-image
• expo-linking
• react-navigation (tabs)
• react-native-reanimated
• outros pacotes utilitários usados no projeto`}</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
});
