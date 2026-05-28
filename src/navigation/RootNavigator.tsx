import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { createContext, useContext, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View } from "react-native";
import { Refrigerator, UtensilsCrossed, Heart } from "lucide-react-native";
import { AddToFridgeModal } from "../screens/AddToFridgeModal";
import { RecipeModal } from "../screens/RecipeModal";
import { FindRecipeScreen } from "../screens/FindRecipeScreen";
import { LandingScreen } from "../screens/LandingScreen";
import { MainMenuScreen } from "../screens/MainMenuScreen";
import { SavedRecipesScreen } from "../screens/SavedRecipesScreen";
import { YourFridgeScreen } from "../screens/YourFridgeScreen";
import { AppHeader } from "../components/AppHeader";
import { RootStackParamList } from "./types";
import { COLORS } from "../theme";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

interface HeaderConfig {
  title?: string;
  onBack?: () => void;
}

const HeaderContext = createContext<{
  config: HeaderConfig;
  setConfig: (config: HeaderConfig) => void;
}>({
  config: {},
  setConfig: () => {},
});

export function useHeaderConfig() {
  return useContext(HeaderContext);
}

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopColor: COLORS.surface,
          borderTopWidth: 1,
          height: 80,
          flexDirection: "row",
          alignItems: "top",
          paddingTop: 10,
        },
        tabBarActiveTintColor: COLORS.accentStrong,
        tabBarInactiveTintColor: COLORS.surfaceMuted,
        tabBarLabelStyle: {
          fontSize: 11,
          marginTop: -4,
          textTransform: "lowercase",
        },
      }}
    >
      <Tab.Screen
        name="YourFridge"
        component={YourFridgeScreen}
        options={{
          tabBarLabel: "your fridge",
          tabBarIcon: ({ color }) => <Refrigerator size={24} color={color} strokeWidth={1.5} />,
        }}
      />
      <Tab.Screen
        name="FindRecipe"
        component={FindRecipeScreen}
        options={{
          tabBarLabel: "find recipe",
          tabBarIcon: ({ color }) => <UtensilsCrossed size={24} color={color} strokeWidth={1.5} />,
        }}
      />
      <Tab.Screen
        name="SavedRecipes"
        component={SavedRecipesScreen}
        options={{
          tabBarLabel: "saved",
          tabBarIcon: ({ color }) => <Heart size={24} color={color} strokeWidth={1.5} />,
        }}
      />
    </Tab.Navigator>
  );
}

function NavigatorContent() {
  const { config } = useHeaderConfig();

  return (
    <View style={{ flex: 1 }}>
      <AppHeader title={config.title} onBack={config.onBack} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="MainMenu" component={MainMenuScreen} />
        <Stack.Screen name="YourFridge" component={TabsNavigator} />
        <Stack.Screen
          name="AddToFridge"
          component={AddToFridgeModal}
          options={{
            presentation: "transparentModal",
            contentStyle: { backgroundColor: "transparent" },
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="RecipeDetails"
          component={RecipeModal}
          options={{
            presentation: "transparentModal",
            contentStyle: { backgroundColor: "transparent" },
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </View>
  );
}

export function RootNavigator() {
  const [headerConfig, setHeaderConfig] = useState<HeaderConfig>({});

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeaderContext.Provider value={{ config: headerConfig, setConfig: setHeaderConfig }}>
        <NavigationContainer>
          <NavigatorContent />
        </NavigationContainer>
      </HeaderContext.Provider>
    </GestureHandlerRootView>
  );
}
