import { StyleSheet, ScrollView } from 'react-native';
// Componentes temáticos padrão do Expo
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view'; 

// Esta tela exibe sua formação acadêmica
export default function AcademicaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Título da Seção */}
      <ThemedView style={styles.sectionHeader}>
        <ThemedText type="title">📚 Formação Acadêmica</ThemedText>
      </ThemedView>

      {/* Card da Formação */}
      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Ciências da Computação</ThemedText>
        <ThemedView style={styles.details}>
          <ThemedText type="defaultSemiBold">Universidade Católica de Pernambuco</ThemedText>
          <ThemedText type="default">4° Período (cursando)</ThemedText>
        </ThemedView>
      </ThemedView>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15, // Espaçamento entre os elementos
  },
  sectionHeader: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  card: {
    padding: 15,
    borderRadius: 10,
    // Cor de fundo leve para o card
    backgroundColor: 'rgba(100, 100, 100, 0.05)', 
    gap: 5,
  },
  details: {
    marginTop: 5,
    gap: 3,
    backgroundColor: 'transparent', 
  },
});