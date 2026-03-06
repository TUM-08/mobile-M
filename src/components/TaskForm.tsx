/**
 * Componente de formulário de tarefas
 * Permite criar novas tarefas com título e descrição
 */

import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import type { TaskFormProps } from '../types';
import { colors, spacing, typography, borderRadius, shadows } from '../styles/theme';

function TaskForm({ 
  form, 
  onSubmit, 
  onChange, 
  submitting = false,
  editingTaskId = null,
  onCancelEdit
}: Readonly<TaskFormProps>) {
  return (
    // Container principal do formulário com sombra
    <View style={styles.container}>
      <Text style={styles.title}>
        {editingTaskId === null ? 'Adicionar Nova Tarefa' : 'Editar Tarefa'}
      </Text>
      
      {/* Campo de título (obrigatório) */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o título da tarefa..."
          value={form.title}
          onChangeText={(text) => onChange('title', text)} // Atualiza estado
          editable={!submitting} // Desabilita durante envio
        />
      </View>
      
  {/* Campo de título (obrigatório) */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder='Adicione uma descrição para a tarefa'
          value={form.description}
          onChangeText={(text) => onChange('description', text)}
          multiline // Permite múltiplas linhas
          numberOfLines={3} // Altura inicial
          editable={!submitting} // Desabilita durante envio
        />
      </View>