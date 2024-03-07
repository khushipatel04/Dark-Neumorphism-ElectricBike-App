import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const LockOpen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.lockopen}
      locations={[0, 0.99]}
      colors={["#2a2d32", "#161719"]}
      useAngle={true}
      angle={180}
    >
      <View style={[styles.statusbarIphone1313Pro, styles.iconLayout]}>
        <Image
          style={styles.notchIcon}
          resizeMode="cover"
          source={require("../assets/notch1.png")}
        />
        <View style={[styles.rightSide, styles.iconPosition]}>
          <Image
            style={[styles.batteryIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/battery2.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/wifi2.png")}
          />
          <Image
            style={[styles.mobileSignalIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/mobile-signal1.png")}
          />
        </View>
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={styles.text}>9:41</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.lock, styles.lockFlexBox]}
        onPress={() => navigation.navigate("LockClose")}
      >
        <Text style={[styles.lock1, styles.kmTypo]}>Lock</Text>
        <View style={[styles.frameParent, styles.groupChildLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/frame-3727.png")}
          />
          <View style={[styles.icon, styles.iconLayout]}>
            <Text style={[styles.text1, styles.text1Typo]}>􀎥</Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.title}>
        <View>
          <Text style={[styles.tesla, styles.text1Typo]}>Tesla</Text>
          <Text style={[styles.km, styles.kmTypo]}>􀺸 187 km</Text>
        </View>
      </View>
      <View style={[styles.button, styles.buttonLayout]}>
        <Image
          style={[styles.buttonChild, styles.buttonLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-8362.png")}
        />
        <Image
          style={styles.buttonItem}
          resizeMode="cover"
          source={require("../assets/ellipse-8371.png")}
        />
        <Image
          style={styles.buttonItem}
          resizeMode="cover"
          source={require("../assets/ellipse-8381.png")}
        />
        <Text style={[styles.text2, styles.kmTypo]}>􀣋</Text>
      </View>
      <Image
        style={styles.image51Icon}
        resizeMode="cover"
        source={require("../assets/image-51.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 44,
    position: "absolute",
  },
  iconPosition: {
    height: 11,
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  lockFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  kmTypo: {
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    textAlign: "center",
    fontFamily: FontFamily.defaultBoldFootnote,
    fontWeight: "600",
    letterSpacing: 0,
  },
  groupChildLayout: {
    height: 49,
    width: 49,
  },
  text1Typo: {
    fontFamily: FontFamily.defaultRegularLargeTitle,
    textAlign: "center",
    letterSpacing: 0,
  },
  buttonLayout: {
    height: 62,
    width: 62,
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    height: 31,
    display: "none",
    left: "50%",
    position: "absolute",
  },
  batteryIcon: {
    marginLeft: 8.95,
    width: 24,
    top: 0,
  },
  wifiIcon: {
    marginLeft: -11.35,
    width: 15,
    top: 0,
  },
  mobileSignalIcon: {
    marginLeft: -33.35,
    width: 17,
    top: 0,
  },
  rightSide: {
    marginLeft: 106.2,
    top: 17,
    width: 67,
  },
  text: {
    top: 1,
    fontSize: FontSize.defaultBoldSubheadline_size,
    lineHeight: 20,
    height: 20,
    textAlign: "center",
    fontFamily: FontFamily.defaultBoldFootnote,
    letterSpacing: 0,
    color: Color.labelColorDarkPrimary,
    fontWeight: "600",
    width: 54,
    left: 0,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    marginLeft: -171.5,
    top: 12,
  },
  statusbarIphone1313Pro: {
    right: 1,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  lock1: {
    display: "flex",
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    color: Color.labelColorDarkPrimary,
  },
  groupChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1: {
    top: 10,
    left: 9,
    fontSize: FontSize.defaultBoldTitle3_size,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.defaultRegularLargeTitle,
    position: "absolute",
  },
  icon: {
    top: 2,
    left: 2,
    width: 44,
  },
  frameParent: {
    marginLeft: 20,
  },
  lock: {
    marginLeft: -83.5,
    top: 637,
    backgroundColor: Color.colorGray_200,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    flexDirection: "row",
    justifyContent: "center",
    left: "50%",
    position: "absolute",
    borderRadius: Border.br_21xl,
  },
  tesla: {
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    color: Color.labelColorDarkPrimary,
  },
  km: {
    color: Color.labelColorDarkTertiary,
    marginTop: 8,
  },
  title: {
    top: 64,
    right: 0,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
    opacity: 0,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  buttonChild: {
    left: 0,
    top: 0,
  },
  buttonItem: {
    top: 6,
    left: 6,
    width: 50,
    height: 50,
    position: "absolute",
  },
  text2: {
    top: 20,
    left: 20,
    color: Color.labelColorDarkSecondary,
    position: "absolute",
  },
  button: {
    top: 65,
    left: 298,
  },
  image51Icon: {
    top: 251,
    left: 88,
    width: 200,
    height: 261,
    position: "absolute",
  },
  lockopen: {
    shadowColor: "rgba(0, 0, 0, 0.19)",
    shadowOffset: {
      width: 36,
      height: 40,
    },
    shadowRadius: 56,
    elevation: 56,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorGray_600,
    borderWidth: 2,
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
    borderRadius: Border.br_21xl,
  },
});

export default LockOpen;
