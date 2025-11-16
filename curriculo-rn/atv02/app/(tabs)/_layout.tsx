import { Tabs } from 'expo-router';
import React from 'react';

// Estas importações são do seu projeto e devem ser mantidas
import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      
      {/* 1. HOME (index.tsx) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      
      {/* 2. SOBRE (sobre/) */}
      <Tabs.Screen
        name="sobre"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.crop.square" color={color} />,
        }}
      />

      {/* 3. EXPERIÊNCIA ACADÊMICA (academica.tsx) */}
      <Tabs.Screen
        name="academica" // CORRIGIDO: Nome do arquivo criado
        options={{
          title: 'Acadêmica',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="book.fill" color={color} />,
        }}
      />

      {/* 4. EXPERIÊNCIA PROFISSIONAL (profissional.tsx) */}
      <Tabs.Screen
        name="profissional" // CORRIGIDO: Nome do arquivo criado
        options={{
          title: 'Profissional',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="briefcase.fill" color={color} />,
        }}
      />

      {/* 5. PROJETOS (projetos/) */}
      <Tabs.Screen
        name="projetos"
        options={{
          title: 'Projetos',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="folder.fill" color={color} />,
        }}
      />
      
      {/* 6. JOGO (forca/) */}
      <Tabs.Screen
        name="forca" // CORRIGIDO: Nome da pasta do jogo
        options={{
          title: 'Jogo',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="gamecontroller.fill" color={color} />,
        }}
      />
      
   
    </Tabs>
  );
}