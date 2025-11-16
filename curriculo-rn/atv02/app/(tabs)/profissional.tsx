import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view'; 

// Esta tela exibe o foco profissional e a trajetória de desenvolvimento
export default function ProfissionalScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Título da Seção */}
      <ThemedView style={styles.sectionHeader}>
        <ThemedText type="title">💼 Trajetória Profissional e Foco</ThemedText>
      </ThemedView>

      {/* Card que destaca o foco em estudo e projetos */}
      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Foco Acadêmico e Desenvolvimento</ThemedText>
        
        <ThemedView style={styles.details}>
          <ThemedText type="defaultSemiBold">Busca por Excelência Técnica</ThemedText>
          <ThemedText type="default">Período: 2023 – Atual</ThemedText>
          
          <ThemedText style={styles.description}>
            Estudante do curso de Ciências da Computação. Estou na minha segunda formação e esse curso vem sendo bem desafiador para mim.
            No momento estou me aprofundando em desenvolvimento web, explorando tecnologias como React, Next.js.
            Apesar das dificuldades, cada avanço, por menor que seja, me motiva a continuar aprendendo.
          </ThemedText>
        </ThemedView>
      </ThemedView>
      

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15,
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
  description: {
    marginTop: 8,
    lineHeight: 20,
    color: '#666', 
  },
});