import React, { useState } from 'react';
import { View, Button } from 'react-native';

const NameInputScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  const onPressEnter = (projectNumber) => {
    if (projectNumber === 9) {
      navigation.navigate("Calculator");
    } else {
      navigation.navigate(`Project${projectNumber}`, { name });
    }
  };

  return (
    <View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Project 1" onPress={() => onPressEnter(1)} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Project 2" onPress={() => onPressEnter(2)} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Project 3" onPress={() => onPressEnter(3)} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Project 4" onPress={() => onPressEnter(4)} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Project 5" onPress={() => onPressEnter(5)} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Project 6" onPress={() => onPressEnter(6)} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Project 7" onPress={() => onPressEnter(7)} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Project 8" onPress={() => onPressEnter(8)} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button title="Calculator" onPress={() => onPressEnter(9)} />
      </View>
    </View>
  );
};

export default NameInputScreen;
