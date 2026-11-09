import { View, Text, StyleSheet } from 'react-native';

// PROPS: lo que recibe cada contacto
type Props = {
  nombre: string;
  telefono: string;
};

export default function ContactItem({ nombre, telefono }: Props) {
  return (
    <View style={styles.item}>
      <Text style={styles.nombre}>👤 {nombre}</Text>
      <Text style={styles.telefono}>📞 {telefono}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  nombre: { fontSize: 18, fontWeight: 'bold', color: '#1B5E20' },
  telefono: { fontSize: 14, color: '#555555', marginTop: 4 },
});
