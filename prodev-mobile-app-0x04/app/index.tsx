import { ImageBackground, View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO, HEROLOGOGREEN } from "../constants";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        resizeMode="cover"
        style={styles.backgroundImageContainer}
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Cooking made easy</Text>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              Discover delicious recipes and cooking tips,
            </Text>
            <Text style={styles.titleSubText}>
              tailored to your taste.
            </Text>
          </View>
        </View>
        <View style={styles.buttonGroup}>
          <Link href="/join" asChild>
            <TouchableOpacity style={styles.buttonPrimary}>
              <Text style={styles.buttonPrimaryText}>Join Now</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/signin" asChild>
            <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.buttonSecondaryText}>Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <View style={styles.buttonGroupSubText}>
          <Text style={styles.titleSubText}>
            Join as a guest
          </Text>
          <Image source={HEROLOGOGREEN} />
        </View>
      </ImageBackground>
    </View>
  );
}