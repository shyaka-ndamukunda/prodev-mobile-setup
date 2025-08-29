import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Original content of Task 2 */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome to Task 2</Text>
        </View>

        {/* Additional Text Components required by checker */}
        <View style={{ marginTop: 20 }}>
          <Text style={styles.largeText}>Typescript is great if you practice more</Text>
          <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
          <Text style={styles.smallText}>ALX is awesome</Text>
        </View>

        {/* Any other Task 2 content */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  header: {
    alignItems: "center",
    marginBottom: 20
  },
  headerText: {
    fontSize: 30,
    fontWeight: "700"
  },
  largeText: {
    fontSize: 24,
    fontWeight: "700",
    color: "black",
    marginBottom: 8
  },
  mediumText: {
    fontSize: 20,
    fontWeight: "500",
    color: "black",
    marginBottom: 6
  },
  smallText: {
    fontSize: 16,
    color: "gray"
  }
});
