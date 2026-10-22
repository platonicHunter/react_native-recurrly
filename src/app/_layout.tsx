// သင်၏ global.css ရှိရာ လမ်းကြောင်းအမှန်ကို ချိတ်ပေးပါ။ (ဥပမာ - "../global.css")
import "@/global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
}