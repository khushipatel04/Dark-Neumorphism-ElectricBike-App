import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const LockClose = () => {
  return (
    <LinearGradient
      style={[styles.lockclose, styles.lockBg]}
      locations={[0, 0.3, 0.57, 1]}
      colors={["#292c31", "#000", "#000", "#292929"]}
      useAngle={true}
      angle={180}
    >
      <Image
        style={styles.neonBackgroundIcon}
        resizeMode="cover"
        source={require("../assets/neon-background4.png")}
      />
      <View style={[styles.title, styles.lockFlexBox]}>
        <Text style={styles.modelS}>Model 3</Text>
      </View>
      <View style={[styles.statusbarIphone1313Pro, styles.buttonChildPosition]}>
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
            source={require("../assets/wifi1.png")}
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
      <View style={[styles.button, styles.buttonLayout]}>
        <Image
          style={[styles.buttonChild, styles.buttonLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-836.png")}
        />
        <Image
          style={styles.buttonItem}
          resizeMode="cover"
          source={require("../assets/ellipse-837.png")}
        />
        <Image
          style={styles.buttonItem}
          resizeMode="cover"
          source={require("../assets/ellipse-838.png")}
        />
        <Text style={[styles.text1, styles.text1Typo]}>􀣋</Text>
      </View>
      <LinearGradient
        style={[styles.lock, styles.lockFlexBox]}
        locations={[0, 1]}
        colors={["#17171c", "#18191b"]}
        useAngle={true}
        angle={-85.59}
      >
        <Text style={[styles.unlock, styles.text1Typo]}>Unlock</Text>
        <View style={[styles.button1, styles.buttonLayout]}>
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
          <Text style={[styles.text2, styles.textPosition]}>􀎡</Text>
        </View>
      </LinearGradient>
      <Image
        style={styles.image49Icon}
        resizeMode="cover"
        source={require("../assets/image-49.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  lockBg: {
    backgroundColor: "transparent",
    borderRadius: Border.br_21xl,
  },
  lockFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  buttonChildPosition: {
    left: 0,
    top: 0,
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
  buttonLayout: {
    height: 62,
    width: 62,
  },
  text1Typo: {
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    fontFamily: FontFamily.defaultBoldFootnote,
    fontWeight: "600",
    letterSpacing: 0,
  },
  textPosition: {
    left: 20,
    textAlign: "center",
    position: "absolute",
  },
  neonBackgroundIcon: {
    top: 313,
    left: 58,
    width: 274,
    height: 204,
    display: "none",
    position: "absolute",
  },
  modelS: {
    fontSize: 40,
    lineHeight: 41,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.defaultRegularLargeTitle,
    letterSpacing: 0,
    color: Color.labelColorDarkPrimary,
  },
  title: {
    marginLeft: -75,
    top: 376,
    opacity: 0,
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    height: 31,
    left: "50%",
    display: "none",
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
    fontFamily: FontFamily.defaultBoldFootnote,
    fontWeight: "600",
    width: 54,
    left: 0,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
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
    height: 44,
    overflow: "hidden",
  },
  buttonChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  buttonItem: {
    top: 6,
    left: 6,
    width: 50,
    height: 50,
    position: "absolute",
  },
  text1: {
    top: 20,
    color: Color.labelColorDarkSecondary,
    left: 20,
    textAlign: "center",
    position: "absolute",
  },
  button: {
    top: 63,
    right: 30,
    position: "absolute",
  },
  unlock: {
    textAlign: "right",
    display: "flex",
    width: 56,
    color: Color.labelColorDarkPrimary,
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    alignItems: "center",
  },
  text2: {
    top: 19,
    fontSize: FontSize.defaultBoldTitle3_size,
    lineHeight: 24,
    fontWeight: "600",
    left: 20,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    letterSpacing: 0,
  },
  button1: {
    marginLeft: 20,
  },
  lock: {
    marginLeft: -90,
    top: 637,
    height: 77,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    backgroundColor: "transparent",
    borderRadius: Border.br_21xl,
  },
  image49Icon: {
    top: 185,
    left: 82,
    width: 227,
    height: 392,
    position: "absolute",
  },
  lockclose: {
    shadowColor: "rgba(0, 0, 0, 0.19)",
    shadowOffset: {
      width: 36,
      height: 40,
    },
    shadowRadius: 56,
    elevation: 56,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LockClose;
