import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Contador() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count -1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
        <Text>Você clicou {count} vezes</Text>
        <Button title="Aumentar" onPress={incrementCount} />
        <Button title="Decrementar" onPress={decrementCount}/>
        <Button title="Reiniciar" onPress={resetCount} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredContent: {
    alignItems: 'center',
  },
});

export default Contador;
