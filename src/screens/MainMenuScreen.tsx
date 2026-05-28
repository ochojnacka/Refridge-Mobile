import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import Reanimated, { ZoomIn } from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";
import { ScreenContainer } from "../components/Layout";
import { RootStackParamList } from "../navigation/types";
import { useHeaderConfig } from "../navigation/RootNavigator";
import { COLORS, RADIUS, SHADOW } from "../theme";

type Props = NativeStackScreenProps<RootStackParamList, "MainMenu">;

function MenuButton({
  label,
  text,
  imageUrl,
  onPress,
}: {
  label: string;
  text: string;
  imageUrl: string;
  onPress: () => void;
}) {
  return (
    <Reanimated.View entering={ZoomIn}>
      <Pressable 
        onPress={onPress} 
        style={({ pressed }) => [styles.menuButton, pressed ? styles.pressed : undefined]}
      >
        <View style={styles.menuButtonLeft}>
          <Text style={styles.menuButtonLabel}>{label}</Text>
          <Text style={styles.menuButtonText}>{text}</Text>
        </View>

        <View style={styles.menuButtonMediaSlot}>
          <Image source={{ uri: imageUrl }} style={styles.menuButtonMediaImage} />
        </View>
      </Pressable>
    </Reanimated.View>
  );
}

export function MainMenuScreen({ navigation }: Props) {
  const { setConfig } = useHeaderConfig();

  useFocusEffect(
    React.useCallback(() => {
      setConfig({});
    }, [setConfig])
  );

  return (
    <ScreenContainer scroll={false}>
      <View style={styles.buttons}>
        <MenuButton
          label="your fridge"
          text="check and manage ingredients"
          imageUrl="https://cdn-icons-png.flaticon.com/512/3873/3873189.png"
          onPress={() => navigation.navigate("YourFridge", { transition: "forward" })}
        />
        <MenuButton
          label="find a recipe"
          text="see what you can cook today"
          imageUrl="https://cdn-icons-png.flaticon.com/512/5403/5403020.png"
          onPress={() => navigation.navigate("YourFridge", { transition: "forward" })}
        />
        <MenuButton
          label="saved recipes"
          text="open your favorite picks"
          imageUrl="https://cdn-icons-png.flaticon.com/512/707/707711.png"
          onPress={() => navigation.navigate("YourFridge", { transition: "forward" })}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 56,
    gap: 44,
    flexDirection: "column",
    alignItems: "center",
  },
  menuButton: {
    width: 311,
    height: 160,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.surface,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    ...SHADOW.soft,
  },
  menuButtonLeft: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "stretch",
    overflow: "hidden",
  },
  menuButtonLabel: {
    fontSize: 24,
    lineHeight: 25,
    letterSpacing: 2.4,
    color: COLORS.primary,
    textTransform: "lowercase",
    textAlign: "center",
    fontWeight: "600",
  },
  menuButtonText: {
    marginTop: 10,
    fontSize: 18,
    lineHeight: 22,
    color: COLORS.primary,
    textTransform: "lowercase",
    textAlign: "left",
  },
  menuButtonMediaSlot: {
    width: 120,
    height: 160,
    overflow: "hidden",
    backgroundColor: COLORS.surfaceWarm,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: RADIUS.card,
    borderBottomRightRadius: RADIUS.card,
    borderLeftWidth: 2,
    borderLeftColor: COLORS.accent,
  },
  menuButtonMediaImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    padding: 12,
    alignSelf: "center",
  },
  pressed: {
    opacity: 0.82,
  },
});
