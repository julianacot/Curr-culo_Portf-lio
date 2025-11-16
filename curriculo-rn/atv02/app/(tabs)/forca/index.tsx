import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const palavras = [
  'GIRAFA', 'ACENDER', 'AFILHADO', 'BASQUETE', 'CONTEXTO', 'DESALMADO',
  'ESFIRRA', 'IMPACTO', 'OFTALMOLOGISTA', 'QUARENTENA', 'REPORTAGEM', 
  'SINO', 'VICERA', 'AMENDOIM', 'MANJERICÃO', 'MENTA', 'MOEDA', 'PNEUMONIA',
  'TRILOGIA', 'ZEBRA', 'XADREZ', 'YAKUZA', 'WIFI', 'VAGABUNDO', 'UTOPIA',
  'TATUAGEM', 'SABONETE', 'RINOCERONTE', 'QUIMICA', 'PTERODATILO', 'ORGANOGRAMA'
];


export default function Forca() {
  const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
  const [palavra] = useState(palavraAleatoria);
  const [tentativas, setTentativas] = useState(6);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [letrasCorretas, setLetrasCorretas] = useState([]);

  const verificarLetra = (letra) => {
    if (letrasErradas.includes(letra) || letrasCorretas.includes(letra) || tentativas <= 0 || venceu) return;

    if (palavra.includes(letra)) {
      setLetrasCorretas([...letrasCorretas, letra]);
    } else {
      setLetrasErradas([...letrasErradas, letra]);
      setTentativas(prev => prev - 1);
    }
  };

  const palavraExibida = palavra
    .split('')
    .map((letra) => (letrasCorretas.includes(letra) ? letra : '_'))
    .join(' ');

  const venceu = palavraExibida.replace(/ /g, '') === palavra;
  const perdeu = tentativas <= 0;

  useEffect(() => {
    if (venceu) {
      Alert.alert("Parabéns!", "Você venceu!", [{ text: "OK" }]);
    }
  }, [venceu]);

  useEffect(() => {
    if (perdeu) {
      Alert.alert("Game Over", `Você perdeu! A palavra era ${palavra}`, [{ text: "OK" }]);
    }
  }, [perdeu]);

  const handleReiniciar = () => {
    router.replace('/forca');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <ThemedText type="title" style={styles.titulo}>
        Jogo da Forca
      </ThemedText>

      <View style={styles.forca}>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Erros: {6 - tentativas} / 6</Text>
        </View>
      </View>

      <ThemedText type="subtitle" style={styles.palavraExibida}>
        {palavraExibida}
      </ThemedText>

      <ThemedText style={styles.statusTexto}>
        Tentativas restantes: {tentativas}
      </ThemedText>

      <ThemedText style={styles.statusTexto}>
        Letras erradas: {letrasErradas.join(', ')}
      </ThemedText>

      <View style={styles.teclado}>
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letra) => {
          const desativado =
            letrasErradas.includes(letra) ||
            letrasCorretas.includes(letra) ||
            perdeu ||
            venceu;

          return (
            <TouchableOpacity
              key={letra}
              style={[styles.botao, desativado && styles.botaoDesativado]}
              onPress={() => verificarLetra(letra)}
              disabled={desativado}
            >
              <Text style={styles.botaoTexto}>{letra}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.botoesAcao}>
        <TouchableOpacity style={styles.botaoReiniciar} onPress={handleReiniciar}>
          <Text style={styles.botaoTextoAcao}>Reiniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoHome} onPress={() => router.replace('/')}>
          <Text style={styles.botaoTextoAcao}>Home</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f3017',
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  titulo: {
    color: '#b8f7a9ff',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 32,
    fontWeight: 'bold',
  },
  forca: {
    marginVertical: 20,
    height: 250,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    width: '80%',
    height: '100%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#aff0a9ff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#07220d',
  },
  placeholderText: {
    color: '#86f08fff',
    fontSize: 18,
  },
  palavraExibida: {
    color: '#86f08fff',
    fontSize: 30,
    marginVertical: 15,
    letterSpacing: 8,
  },
  statusTexto: {
    color: '#aff0a9ff',
    fontSize: 18,
    marginVertical: 5,
    textAlign: 'center',
  },
  teclado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 400,
    marginVertical: 20,
    gap: 8,
  },
  botao: {
    backgroundColor: '#50a060',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
    minWidth: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoDesativado: {
    backgroundColor: '#1f5027',
    opacity: 0.5,
  },
  botaoTexto: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botoesAcao: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 15,
  },
  botaoReiniciar: {
    backgroundColor: '#d9534f',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    minWidth: 120,
    alignItems: 'center',
  },
  botaoHome: {
    backgroundColor: '#337ab7',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    minWidth: 120,
    alignItems: 'center',
  },
  botaoTextoAcao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
