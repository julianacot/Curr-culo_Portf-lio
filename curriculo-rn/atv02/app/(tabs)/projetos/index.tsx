import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function Projetos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView>
        <ThemedText type="title">Projetos</ThemedText>
        <ThemedText type="default">Aqui estão alguns projetos que eu desenvolvi.</ThemedText>
        <ThemedText type="subtitle">Jogo</ThemedText>
        <ThemedText>O Jogo da Forca está integrado diretamente neste app na rota /jogo.</ThemedText>
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
