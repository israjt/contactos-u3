import { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import ContactItem from './ContactItem';

export default function ContactList() {
  // ESTADO: la lista de contactos
  const [contactos, setContactos] = useState([
    { id: '1', nombre: 'Ana López', telefono: '0991111111' },
    { id: '2', nombre: 'Carlos Pérez', telefono: '0992222222' },
  ]);

  // Agrega un contacto nuevo (estático)
  const agregarContacto = () => {
    const nuevo = {
      id: String(contactos.length + 1),
      nombre: 'Contacto ' + (contactos.length + 1),
      telefono: '09900000' + (contactos.length + 1),
    };
    setContactos([...contactos, nuevo]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mis Contactos 📒</Text>
      <Button title="Agregar contacto" color="#2E7D32" onPress={agregarContacto} />
      <FlatList
        style={styles.lista}
        data={contactos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactItem nombre={item.nombre} telefono={item.telefono} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E8F5E9', padding: 24, paddingTop: 60 },
  titulo: { fontSize: 26, fontWeight: 'bold', color: '#1B5E20', textAlign: 'center', marginBottom: 16 },
  lista: { marginTop: 16 },
});
