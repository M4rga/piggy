import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

export default function HeaderButton({ icon, size, goto }) {
  const navigation = useNavigation();
  return (
    <View style={{ marginHorizontal: 15 }}>
      <Icon
        name={icon}
        size={size}
        onPress={() => navigation.navigate({ name: goto })}
      />
    </View>
  );
}

HeaderButton.defaultProps = {
  icon: "chevron-left",
  size: 26,
  goto: "Home",
};
