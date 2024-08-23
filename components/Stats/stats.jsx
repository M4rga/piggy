import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];

export default function Stats() {
  return (
    <View className=" flex-1 justify-center items-center ">
      <Text>Stats</Text>
      <PieChart data={data} donut />
    </View>
  );
}
