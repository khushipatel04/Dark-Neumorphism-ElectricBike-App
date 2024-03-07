import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const ControlOn = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.controlOn, styles.controlOnBorder]}
      locations={[0, 0.99]}
      colors={["#2a2d32", "#131313"]}
      useAngle={true}
      angle={180}
    >
      <Image
        style={styles.neonBackgroundIcon}
        resizeMode="cover"
        source={require("../assets/neon-background1.png")}
      />
      <View style={styles.progressBar}>
        <View style={[styles.progressBarChild, styles.rectangleViewLayout]} />
        <Image
          style={styles.progressBarItem}
          resizeMode="cover"
          source={require("../assets/ellipse-821.png")}
        />
        <Image
          style={styles.progressBarInner}
          resizeMode="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <LinearGradient
          style={styles.rectangleLineargradient}
          locations={[0, 1]}
          colors={["#31363e", "#7b8087"]}
          useAngle={true}
          angle={-47.05}
        />
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
        <View style={styles.num}>
          <Text style={styles.text}>{`0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22`}</Text>
        </View>
        <Image
          style={styles.ellipse820Stroke}
          resizeMode="cover"
          source={require("../assets/ellipse-820-stroke.png")}
        />
        <Image
          style={[styles.ellipseStrokeIcon, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-stroke.png")}
        />
        <Image
          style={styles.ellipseIconLayout}
          resizeMode="cover"
          source={require("../assets/ellipse-stroke2.png")}
        />
      </View>
      <View style={styles.clipContent}>
        <View style={styles.mode}>
          <View style={[styles.acControl, styles.textFlexBox]}>
            <View style={[styles.icon, styles.textFlexBox]}>
              <Text style={[styles.ac, styles.acTypo]}>Ac</Text>
              <Pressable
                style={[styles.leftArrowIcon, styles.itemIconLayout]}
                onPress={() => navigation.navigate("ControlOff")}
              >
                <Image
                  style={[
                    styles.leftArrowIconChild,
                    styles.homeIndicatorLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-8111.png")}
                />
                <Text style={[styles.text1, styles.acTypo]}>􀌁</Text>
                <View style={[styles.listBullet, styles.listBulletPosition]}>
                  <Text style={[styles.listBullet1, styles.listTypo]}>􀇥</Text>
                </View>
              </Pressable>
            </View>
            <Image
              style={styles.sliderIcon}
              resizeMode="cover"
              source={require("../assets/slider.png")}
            />
          </View>
          <View style={[styles.fanControl, styles.textFlexBox]}>
            <View style={[styles.icon, styles.textFlexBox]}>
              <Text style={styles.light}>Light</Text>
              <View style={[styles.leftArrowIcon, styles.itemIconLayout]}>
                <Image
                  style={[styles.leftArrowIconItem, styles.itemIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-811.png")}
                />
                <Text style={[styles.text1, styles.acTypo]}>􀌁</Text>
                <View style={[styles.listBullet, styles.listBulletPosition]}>
                  <Text style={[styles.listBullet3, styles.listTypo]}>􀇤</Text>
                </View>
              </View>
            </View>
            <Image
              style={styles.sliderIcon}
              resizeMode="cover"
              source={require("../assets/slider1.png")}
            />
          </View>
          <View style={[styles.fanControl, styles.textFlexBox]}>
            <View style={[styles.icon, styles.textFlexBox]}>
              <Text style={[styles.ac, styles.acTypo]}>Heat</Text>
              <View style={[styles.leftArrowIcon, styles.itemIconLayout]}>
                <Image
                  style={[styles.leftArrowIconItem, styles.itemIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-811.png")}
                />
                <Text style={[styles.text1, styles.acTypo]}>􀌁</Text>
                <View style={[styles.listBullet, styles.listBulletPosition]}>
                  <Text style={[styles.listBullet5, styles.listTypo]}>􁃛</Text>
                </View>
              </View>
            </View>
            <Image
              style={styles.sliderIcon}
              resizeMode="cover"
              source={require("../assets/slider2.png")}
            />
          </View>
          <View style={[styles.fanControl, styles.textFlexBox]}>
            <View style={[styles.icon, styles.textFlexBox]}>
              <Text style={[styles.ac, styles.acTypo]}>Auto</Text>
              <View style={[styles.leftArrowIcon, styles.itemIconLayout]}>
                <Image
                  style={[styles.leftArrowIconItem, styles.itemIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-811.png")}
                />
                <Text style={[styles.text1, styles.acTypo]}>􀌁</Text>
                <View style={[styles.listBullet, styles.listBulletPosition]}>
                  <Text style={[styles.listBullet3, styles.listTypo]}>􀐱</Text>
                </View>
              </View>
            </View>
            <Image
              style={styles.sliderIcon}
              resizeMode="cover"
              source={require("../assets/slider3.png")}
            />
          </View>
          <View style={[styles.fanControl, styles.textFlexBox]}>
            <View style={[styles.icon, styles.textFlexBox]}>
              <Text style={[styles.ac, styles.acTypo]}>Auto</Text>
              <View style={[styles.leftArrowIcon, styles.itemIconLayout]}>
                <Image
                  style={[styles.leftArrowIconItem, styles.itemIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-811.png")}
                />
                <Text style={[styles.text1, styles.acTypo]}>􀌁</Text>
                <View style={[styles.listBullet, styles.listBulletPosition]}>
                  <Text style={[styles.listBullet3, styles.listTypo]}>􀐱</Text>
                </View>
              </View>
            </View>
            <Image
              style={styles.sliderIcon}
              resizeMode="cover"
              source={require("../assets/slider3.png")}
            />
          </View>
          <View style={[styles.fanControl, styles.textFlexBox]}>
            <View style={[styles.icon, styles.textFlexBox]}>
              <Text style={[styles.ac, styles.acTypo]}>Auto</Text>
              <View style={[styles.leftArrowIcon, styles.itemIconLayout]}>
                <Image
                  style={[styles.leftArrowIconItem, styles.itemIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-811.png")}
                />
                <Text style={[styles.text1, styles.acTypo]}>􀌁</Text>
                <View style={[styles.listBullet, styles.listBulletPosition]}>
                  <Text style={[styles.listBullet3, styles.listTypo]}>􀐱</Text>
                </View>
              </View>
            </View>
            <Image
              style={styles.sliderIcon}
              resizeMode="cover"
              source={require("../assets/slider3.png")}
            />
          </View>
          <View style={[styles.fanControl, styles.textFlexBox]}>
            <View style={[styles.icon, styles.textFlexBox]}>
              <Text style={[styles.ac, styles.acTypo]}>Auto</Text>
              <View style={[styles.leftArrowIcon, styles.itemIconLayout]}>
                <Image
                  style={[styles.leftArrowIconItem, styles.itemIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-811.png")}
                />
                <Text style={[styles.text1, styles.acTypo]}>􀌁</Text>
                <View style={[styles.listBullet, styles.listBulletPosition]}>
                  <Text style={[styles.listBullet3, styles.listTypo]}>􀐱</Text>
                </View>
              </View>
            </View>
            <Image
              style={styles.sliderIcon}
              resizeMode="cover"
              source={require("../assets/slider3.png")}
            />
          </View>
          <View style={[styles.fanControl, styles.textFlexBox]}>
            <View style={[styles.icon, styles.textFlexBox]}>
              <Text style={[styles.ac, styles.acTypo]}>Auto</Text>
              <View style={[styles.leftArrowIcon, styles.itemIconLayout]}>
                <Image
                  style={[styles.leftArrowIconItem, styles.itemIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-811.png")}
                />
                <Text style={[styles.text1, styles.acTypo]}>􀌁</Text>
                <View style={[styles.listBullet, styles.listBulletPosition]}>
                  <Text style={[styles.listBullet3, styles.listTypo]}>􀐱</Text>
                </View>
              </View>
            </View>
            <Image
              style={styles.sliderIcon}
              resizeMode="cover"
              source={require("../assets/slider3.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.fastSetting, styles.fastSettingPosition]}>
        <View style={styles.parentFlexBox}>
          <Pressable onPress={() => navigation.navigate("ControlOff")}>
            <Text style={[styles.text9, styles.text9Typo]}>􀆨</Text>
          </Pressable>
          <View style={[styles.group, styles.groupFlexBox]}>
            <Text style={[styles.text10, styles.textTypo2]}>􀆉</Text>
            <View style={styles.num1}>
              <Text style={[styles.text11, styles.textTypo1]}>0°</Text>
            </View>
            <Text style={[styles.text12, styles.textTypo2]}>􀆊</Text>
          </View>
          <Image
            style={styles.unionIcon}
            resizeMode="cover"
            source={require("../assets/union.png")}
          />
        </View>
        <View style={[styles.onParent, styles.parentFlexBox]}>
          <Text style={[styles.on, styles.onTypo]}>On</Text>
          <View style={[styles.container, styles.groupFlexBox]}>
            <Text style={[styles.text13, styles.textTypo2]}>􀆉</Text>
            <Text style={[styles.text14, styles.textTypo1]}>{`20° `}</Text>
            <Text style={[styles.text15, styles.textTypo2]}>􀆊</Text>
          </View>
          <Text style={[styles.vent, styles.onTypo]}>Vent</Text>
        </View>
      </View>
      <View style={[styles.homeindicator, styles.fastSettingPosition]}>
        <View style={[styles.homeIndicator, styles.homeIndicatorLayout]} />
      </View>
      <View style={[styles.title, styles.textFlexBox]}>
        <Text style={[styles.climate, styles.text9Typo]}>CLIMATE</Text>
      </View>
      <View style={styles.statusbarIphone1313Pro}>
        <Image
          style={styles.notchIcon}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.rightSide, styles.iconPosition]}>
          <Image
            style={[styles.batteryIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.mobileSignalIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/mobile-signal.png")}
          />
        </View>
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={styles.text16}>9:41</Text>
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
          style={[styles.buttonItem, styles.listBulletPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-837.png")}
        />
        <Image
          style={[styles.buttonItem, styles.listBulletPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-838.png")}
        />
        <Text style={[styles.text17, styles.textTypo]}>􀆉</Text>
      </View>
      <View style={[styles.button1, styles.buttonLayout]}>
        <Image
          style={[styles.buttonChild, styles.buttonLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-836.png")}
        />
        <Image
          style={[styles.buttonItem, styles.listBulletPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-837.png")}
        />
        <Image
          style={[styles.buttonItem, styles.listBulletPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-838.png")}
        />
        <Text style={[styles.text18, styles.textTypo]}>􀣋</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  controlOnBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_21xl,
  },
  rectangleViewLayout: {
    borderRadius: 529,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 192,
    width: 192,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  acTypo: {
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.labelColorDarkSecondary,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    textAlign: "center",
    letterSpacing: 0,
  },
  itemIconLayout: {
    height: 50,
    width: 50,
  },
  homeIndicatorLayout: {
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  listBulletPosition: {
    left: 6,
    top: 6,
    position: "absolute",
  },
  listTypo: {
    top: 8,
    fontFamily: FontFamily.defaultBoldFootnote,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  fastSettingPosition: {
    bottom: 0,
    position: "absolute",
  },
  text9Typo: {
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    textAlign: "center",
    fontFamily: FontFamily.defaultRegularLargeTitle,
    letterSpacing: 0,
  },
  groupFlexBox: {
    width: 129,
    marginLeft: 67,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo2: {
    width: 10,
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultBoldFootnote,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0,
  },
  textTypo1: {
    fontSize: FontSize.defaultRegularLargeTitle_size,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    letterSpacing: 0,
  },
  parentFlexBox: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_11xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  onTypo: {
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
    fontFamily: FontFamily.defaultBoldFootnote,
    textAlign: "center",
    letterSpacing: 0,
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
    position: "absolute",
  },
  textTypo: {
    top: 20,
    color: Color.labelColorDarkSecondary,
    fontFamily: FontFamily.defaultBoldFootnote,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  neonBackgroundIcon: {
    top: 699,
    left: 187,
    width: 308,
    height: 314,
    position: "absolute",
  },
  progressBarChild: {
    height: "108.31%",
    width: "108.31%",
    top: "-4.21%",
    right: "-2.91%",
    bottom: "-4.1%",
    left: "-5.4%",
    backgroundColor: Color.colorDarkslategray_200,
    display: "none",
  },
  progressBarItem: {
    left: 12,
    borderRadius: 933,
    width: 168,
    height: 168,
    top: 12,
    position: "absolute",
  },
  progressBarInner: {
    height: "76.52%",
    width: "85.3%",
    top: "21.35%",
    right: "14.18%",
    bottom: "2.13%",
    left: "0.52%",
    borderRadius: 264,
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLineargradient: {
    height: "79.32%",
    width: "79.32%",
    top: "9.87%",
    right: "11.32%",
    bottom: "10.81%",
    left: "9.35%",
    borderRadius: Border.br_78xl,
    opacity: 0.18,
    display: "none",
    position: "absolute",
    backgroundColor: "transparent",
  },
  rectangleView: {
    height: "61.92%",
    width: "61.92%",
    top: "19.22%",
    right: "18.86%",
    bottom: "18.86%",
    left: "19.22%",
    backgroundColor: Color.colorDarkslategray_100,
  },
  text: {
    left: -1,
    fontSize: FontSize.size_35xl,
    color: Color.colorDimgray,
    width: 64,
    textAlign: "center",
    fontFamily: FontFamily.defaultRegularLargeTitle,
    letterSpacing: 0,
    lineHeight: 45,
    top: 0,
    position: "absolute",
  },
  num: {
    height: "22.34%",
    width: "32.21%",
    top: "38.96%",
    right: "33.51%",
    bottom: "38.7%",
    left: "34.29%",
    position: "absolute",
    overflow: "hidden",
  },
  ellipse820Stroke: {
    top: -26,
    left: -26,
    width: 244,
    height: 244,
    display: "none",
    position: "absolute",
  },
  ellipseStrokeIcon: {
    display: "none",
  },
  progressBar: {
    marginLeft: -95,
    top: 223,
    height: 193,
    width: 193,
    left: "50%",
    position: "absolute",
  },
  ac: {
    width: 41,
    display: "flex",
    color: Color.labelColorDarkSecondary,
    justifyContent: "center",
    alignItems: "center",
  },
  leftArrowIconChild: {
    height: 50,
    width: 50,
    left: 0,
    top: 0,
  },
  text1: {
    top: 14,
    left: 14,
    color: Color.labelColorDarkSecondary,
    display: "none",
    position: "absolute",
  },
  listBullet1: {
    right: 9,
    color: Color.labelColorDarkPrimary,
  },
  listBullet: {
    width: 38,
    height: 38,
  },
  leftArrowIcon: {
    marginLeft: 10,
  },
  icon: {
    width: 101,
    flexDirection: "row",
    alignItems: "center",
  },
  sliderIcon: {
    height: 15,
    marginLeft: 30,
    width: 193,
  },
  acControl: {
    flexDirection: "row",
    alignItems: "center",
  },
  light: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_400,
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    textAlign: "center",
    letterSpacing: 0,
  },
  leftArrowIconItem: {
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  listBullet3: {
    right: 8,
    color: Color.labelColorDarkSecondary,
  },
  fanControl: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  listBullet5: {
    right: 7,
    color: Color.labelColorDarkSecondary,
  },
  mode: {
    top: 9,
    left: 3,
    padding: Padding.p_11xl,
    position: "absolute",
  },
  clipContent: {
    top: 455,
    width: 390,
    height: 389,
    left: 0,
    position: "absolute",
  },
  text9: {
    width: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text10: {
    display: "flex",
  },
  text11: {
    top: -1,
    left: 27,
    textAlign: "right",
    lineHeight: 45,
    fontSize: FontSize.defaultRegularLargeTitle_size,
    position: "absolute",
  },
  num1: {
    height: 43,
    marginLeft: 27,
    width: 62,
    overflow: "hidden",
  },
  text12: {
    marginLeft: 27,
    display: "flex",
  },
  group: {
    marginLeft: 67,
  },
  unionIcon: {
    width: 21,
    height: 22,
    marginLeft: 67,
  },
  on: {
    width: 24,
    color: Color.labelColorDarkPrimary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text13: {
    display: "none",
  },
  text14: {
    lineHeight: 41,
    width: 55,
    marginLeft: 27,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    display: "none",
  },
  text15: {
    marginLeft: 27,
    display: "none",
  },
  container: {
    height: 41,
    marginLeft: 67,
  },
  vent: {
    marginLeft: 67,
    color: Color.labelColorDarkSecondary,
  },
  onParent: {
    marginTop: 20,
  },
  fastSetting: {
    right: 0,
    backgroundColor: Color.colorGray_500,
    borderColor: Color.labelColorDarkPrimary,
    borderWidth: 1,
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    borderStyle: "solid",
    borderRadius: Border.br_21xl,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    backgroundColor: Color.labelColorDarkPrimary,
    width: 134,
    height: 5,
    left: "50%",
  },
  homeindicator: {
    left: 8,
    height: 34,
    right: 7,
  },
  climate: {
    textShadowColor: "rgba(255, 255, 255, 0.25)",
    textShadowOffset: {
      width: -3,
      height: -2,
    },
    textShadowRadius: 22,
    color: Color.labelColorDarkPrimary,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
  },
  title: {
    marginLeft: -52,
    top: 78,
    borderRadius: Border.br_31xl,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    flexDirection: "row",
    alignItems: "center",
    left: "50%",
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
  text16: {
    top: 1,
    fontSize: FontSize.defaultBoldSubheadline_size,
    lineHeight: 20,
    height: 20,
    width: 54,
    color: Color.labelColorDarkPrimary,
    display: "flex",
    fontFamily: FontFamily.defaultBoldFootnote,
    fontWeight: "600",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    textAlign: "center",
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
    left: 1,
    height: 44,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  buttonChild: {
    left: 0,
    top: 0,
  },
  buttonItem: {
    height: 50,
    width: 50,
  },
  text17: {
    left: 25,
  },
  button: {
    top: 64,
    left: 30,
  },
  text18: {
    left: 20,
  },
  button1: {
    top: 63,
    right: 30,
  },
  controlOn: {
    shadowColor: "rgba(0, 0, 0, 0.19)",
    shadowOffset: {
      width: 36,
      height: 40,
    },
    shadowRadius: 56,
    elevation: 56,
    shadowOpacity: 1,
    borderColor: Color.colorGray_600,
    borderWidth: 2,
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default ControlOn;
