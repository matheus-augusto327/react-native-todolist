import BouncyCheckbox from "react-native-bouncy-checkbox";
import React, { Dispatch, SetStateAction, useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from "./styles";

type Props = {
  text: string;
  onRemove: () => void;
  handleToggleCompleteTask: (arg0: boolean) => void;
};

export default function Task({
  text,
  onRemove,
  handleToggleCompleteTask,
}: Props) {
  const [checkboxState, setCheckboxState] = useState(false);

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        style={{ marginLeft: 16 }}
        fillColor="#1E6F9F"
        isChecked={checkboxState}
        text={text}
        disableBuiltInState
        onPress={() => [
          setCheckboxState(!checkboxState),
          handleToggleCompleteTask(checkboxState),
        ]}
      />
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Image source={require("../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
