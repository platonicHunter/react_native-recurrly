import { Text, View } from "react-native";

export default function Index() {
  return (
    // Tailwind classes များကို အသုံးပြုထားပါသည်
    <View className="flex-1 items-center justify-center bg-teal-600">
      <Text className="text-3xl font-extrabold text-white mb-2">
        🎉 အောင်မြင်ပါသည်
      </Text>
      <Text className="text-lg font-medium text-teal-100 mt-2">
        NativeWind နဲ့ Tailwind CSS ချိတ်ဆက်မှု အလုပ်လုပ်နေပါပြီ။
      </Text>
      <View className="mt-6 px-6 py-3 bg-white rounded-full shadow-md">
        <Text className="text-teal-800 font-bold">
          Start building your app!
        </Text>
      </View>
    </View>
  );
}