import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "../constants";
import { Link, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";

export default function Join() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="keyboard-backspace" size={24} color="black" />
        </TouchableOpacity>
        <Link href="/signin">
          <Text>Sign In</Text>
        </Link>
      </View>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join Now!</Text>
        <Text style={styles.subText}>Create a new account</Text>
      </View>
      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Full name</Text>
          <TextInput style={styles.formControl} />
        </View>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput style={styles.formControl} />
        </View>
        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              style={styles.passwordControl}
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <MaterialIcons
                name={passwordVisible ? "visibility" : "visibility-off"}
                size={24}
                color="#7B7B7B"
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Have an account?</Text>
        <Link href="/signin">
          <Text style={styles.signupSubTitleText}>Sign In</Text>
        </Link>
      </View>
    </View>
  );
}