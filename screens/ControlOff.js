import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const ControlOff = () => {
  return (
    <LinearGradient
      style={[styles.controlOff, styles.controlOffBorder]}
      locations={[0, 0.99]}
      colors={["#2a2d32", "#131313"]}
      useAngle={true}
      angle={180}
    >
      <View style={[styles.progressBar, styles.titlePosition]}>
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
        <Text style={[styles.c, styles.cFlexBox]}>20° C</Text>
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
          source={require("../assets/ellipse-stroke1.png")}
        />
      </View>
      <View style={styles.clipContent}>
        <View style={styles.mode}>
          <View style={styles.controlFlexBox}>
            <View style={[styles.icon, styles.controlFlexBox]}>
              <Text style={[styles.ac, styles.acTypo]}>Ac</Text>
              <View style={[styles.climateSetting, styles.climateLayout]}>
                <Image
                  style={[styles.climateSettingChild, styles.climateLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-811.png")}
                />
                <Text style={[styles.text, styles.acTypo]}>􀌁</Text>
                <View style={[styles.listBullet, styles.listBulletPosition]}>
                  <Text style={[styles.listBullet1, styles.listTypo]}>􀇥</Text>
                </View>
              </View>
            </View>
            <Image
              style={styles.sliderIcon}
              resizeMode="cover"
              source={require("../assets/slider.png")}
            />
          </View>
          <View style={[styles.fanControl, styles.controlFlexBox]}>
            <View style={[styles.icon, styles.controlFlexBox]}>
              <Text style={styles.light}>Light</Text>
              <View style={[styles.climateSetting, styles.climateLayout]}>
                <Image
                  style={[styles.climateSettingChild, styles.climateLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-811.png")}
                />
                <Text style={[styles.text, styles.acTypo]}>􀌁</Text>
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
          <View style={[styles.fanControl, styles.controlFlexBox]}>
            <View style={[styles.icon, styles.controlFlexBox]}>
              <Text style={[styles.ac, styles.acTypo]}>Heat</Text>
              <View style={[styles.climateSetting, styles.climateLayout]}>
                <Image
                  style={[styles.climateSettingChild, styles.climateLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-811.png")}
                />
                <Text style={[styles.text, styles.acTypo]}>􀌁</Text>
                <View style={[styles.listBullet, styles.listBulletPosition]}>
                  <Text
                    style={[styles.listBullet5, styles.listBullet5Position]}
                  >
                    􁃛
                  </Text>
                </View>
              </View>
            </View>
            <Image
              style={styles.sliderIcon}
              resizeMode="cover"
              source={require("../assets/slider2.png")}
            />
          </View>
          <View style={[styles.fanControl, styles.controlFlexBox]}>
            <View style={[styles.icon, styles.controlFlexBox]}>
              <Text style={[styles.ac, styles.acTypo]}>Auto</Text>
              <View style={[styles.climateSetting, styles.climateLayout]}>
                <Image
                  style={[styles.climateSettingChild, styles.climateLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-811.png")}
                />
                <Text style={[styles.text, styles.acTypo]}>􀌁</Text>
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
          <View style={[styles.fanControl, styles.controlFlexBox]}>
            <View style={[styles.icon, styles.controlFlexBox]}>
              <Text style={[styles.ac, styles.acTypo]}>Auto</Text>
              <View style={[styles.climateSetting, styles.climateLayout]}>
                <Image
                  style={[styles.climateSettingChild, styles.climateLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-811.png")}
                />
                <Text style={[styles.text, styles.acTypo]}>􀌁</Text>
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
          <View style={[styles.fanControl, styles.controlFlexBox]}>
            <View style={[styles.icon, styles.controlFlexBox]}>
              <Text style={[styles.ac, styles.acTypo]}>Auto</Text>
              <View style={[styles.climateSetting, styles.climateLayout]}>
                <Image
                  style={[styles.climateSettingChild, styles.climateLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-811.png")}
                />
                <Text style={[styles.text, styles.acTypo]}>􀌁</Text>
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
          <View style={[styles.fanControl, styles.controlFlexBox]}>
            <View style={[styles.icon, styles.controlFlexBox]}>
              <Text style={[styles.ac, styles.acTypo]}>Auto</Text>
              <View style={[styles.climateSetting, styles.climateLayout]}>
                <Image
                  style={[styles.climateSettingChild, styles.climateLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-811.png")}
                />
                <Text style={[styles.text, styles.acTypo]}>􀌁</Text>
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
          <View style={[styles.fanControl, styles.controlFlexBox]}>
            <View style={[styles.icon, styles.controlFlexBox]}>
              <Text style={[styles.ac, styles.acTypo]}>Auto</Text>
              <View style={[styles.climateSetting, styles.climateLayout]}>
                <Image
                  style={[styles.climateSettingChild, styles.climateLayout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-811.png")}
                />
                <Text style={[styles.text, styles.acTypo]}>􀌁</Text>
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
        <Text style={[styles.fanMode, styles.fanTypo]}>Fan Mode</Text>
        <Text style={[styles.fanSpeed, styles.fanTypo]}>Fan Speed</Text>
      </View>
      <View style={[styles.fastSetting, styles.cFlexBox]}>
        <View style={styles.parentFlexBox}>
          <Text style={[styles.text8, styles.text8Typo]}>􀆨</Text>
          <View style={[styles.group, styles.groupFlexBox]}>
            <Text style={[styles.text9, styles.textLayout3]}>􀆉</Text>
            <Text style={[styles.text10, styles.textFlexBox]}>{`0° `}</Text>
            <Text style={[styles.text11, styles.textFlexBox]}>􀆊</Text>
          </View>
          <Image
            style={styles.unionIcon}
            resizeMode="cover"
            source={require("../assets/union.png")}
          />
        </View>
        <View style={[styles.offParent, styles.parentFlexBox]}>
          <Text style={[styles.off, styles.offTypo]}>Off</Text>
          <View style={[styles.container, styles.groupFlexBox]}>
            <Text style={[styles.text12, styles.textLayout3]}>􀆉</Text>
            <Text style={[styles.text13, styles.textFlexBox]}>{`20° `}</Text>
            <Text style={[styles.text14, styles.textFlexBox]}>􀆊</Text>
          </View>
          <Text style={[styles.vent, styles.offTypo]}>Vent</Text>
        </View>
      </View>
      <View style={[styles.homeindicator, styles.listBullet5Position]}>
        <View style={[styles.homeIndicator, styles.titlePosition]} />
      </View>
      <View style={[styles.title, styles.controlFlexBox]}>
        <Text style={[styles.climate, styles.text8Typo]}>CLIMATE</Text>
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
            <Text style={styles.text15}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={[styles.backButton, styles.backLayout]}>
        <Image
          style={[styles.backButtonChild, styles.backLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-836.png")}
        />
        <Image
          style={[styles.backButtonItem, styles.listBulletPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-837.png")}
        />
        <Image
          style={[styles.backButtonItem, styles.listBulletPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-838.png")}
        />
        <Text style={[styles.text16, styles.textTypo]}>􀆉</Text>
      </View>
      <View style={[styles.setting, styles.backLayout]}>
        <Image
          style={[styles.backButtonChild, styles.backLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-836.png")}
        />
        <Image
          style={[styles.backButtonItem, styles.listBulletPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-837.png")}
        />
        <Image
          style={[styles.backButtonItem, styles.listBulletPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-838.png")}
        />
        <Text style={[styles.text17, styles.textTypo]}>􀣋</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  controlOffBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_21xl,
  },
  titlePosition: {
    left: "50%",
    position: "absolute",
  },
  rectangleViewLayout: {
    borderRadius: 529,
    position: "absolute",
  },
  cFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  ellipseIconLayout: {
    height: 192,
    width: 192,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  controlFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  acTypo: {
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.labelColorDarkSecondary,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
    textAlign: "center",
    fontWeight: "600",
  },
  climateLayout: {
    height: 50,
    width: 50,
  },
  listBulletPosition: {
    left: 6,
    top: 6,
    position: "absolute",
  },
  listTypo: {
    top: 8,
    color: Color.labelColorDarkSecondary,
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
    textAlign: "center",
    fontWeight: "600",
  },
  listBullet5Position: {
    right: 7,
    position: "absolute",
  },
  fanTypo: {
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    top: -2,
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
    fontWeight: "600",
    display: "none",
    position: "absolute",
  },
  text8Typo: {
    fontFamily: FontFamily.defaultRegularLargeTitle,
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    textAlign: "center",
  },
  groupFlexBox: {
    width: 129,
    marginLeft: 67,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textLayout3: {
    width: 10,
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  textFlexBox: {
    marginLeft: 27,
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  parentFlexBox: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_11xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  offTypo: {
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
    fontFamily: FontFamily.defaultBoldFootnote,
    letterSpacing: 0,
    textAlign: "center",
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
  backLayout: {
    height: 62,
    width: 62,
    position: "absolute",
  },
  textTypo: {
    top: 20,
    color: Color.labelColorDarkSecondary,
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
    textAlign: "center",
    fontWeight: "600",
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
  c: {
    height: "18.18%",
    width: "44.16%",
    top: "41.04%",
    left: "28.05%",
    fontSize: 29,
    fontFamily: FontFamily.montserratSemiBold,
    color: "#eee",
    opacity: 0,
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    fontWeight: "600",
    position: "absolute",
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
  },
  ac: {
    width: 41,
    color: Color.labelColorDarkSecondary,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  climateSettingChild: {
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    top: 14,
    left: 14,
    color: Color.labelColorDarkSecondary,
    display: "none",
    position: "absolute",
  },
  listBullet1: {
    right: 9,
    position: "absolute",
  },
  listBullet: {
    width: 38,
    height: 38,
  },
  climateSetting: {
    marginLeft: 10,
  },
  icon: {
    width: 101,
  },
  sliderIcon: {
    height: 15,
    marginLeft: 30,
    width: 193,
  },
  light: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_400,
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    letterSpacing: 0,
    textAlign: "center",
  },
  listBullet3: {
    right: 8,
    position: "absolute",
  },
  fanControl: {
    marginTop: 40,
  },
  listBullet5: {
    top: 8,
    color: Color.labelColorDarkSecondary,
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
    textAlign: "center",
    fontWeight: "600",
  },
  mode: {
    top: 9,
    left: 3,
    padding: Padding.p_11xl,
    position: "absolute",
  },
  fanMode: {
    left: 40,
  },
  fanSpeed: {
    left: 164,
  },
  clipContent: {
    top: 455,
    width: 390,
    height: 389,
    left: 0,
    position: "absolute",
  },
  text8: {
    width: 24,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  text9: {
    color: Color.labelColorDarkPrimary,
    justifyContent: "center",
    alignItems: "center",
    letterSpacing: 0,
    width: 10,
    textAlign: "center",
    display: "flex",
  },
  text10: {
    width: 55,
    lineHeight: 41,
    fontSize: FontSize.defaultRegularLargeTitle_size,
    marginLeft: 27,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    display: "flex",
  },
  text11: {
    width: 10,
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
    fontFamily: FontFamily.defaultBoldFootnote,
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
  off: {
    width: 24,
    color: Color.labelColorDarkPrimary,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  text12: {
    color: Color.labelColorDarkPrimary,
    justifyContent: "center",
    alignItems: "center",
    letterSpacing: 0,
    width: 10,
    textAlign: "center",
    display: "none",
  },
  text13: {
    width: 55,
    lineHeight: 41,
    fontSize: FontSize.defaultRegularLargeTitle_size,
    marginLeft: 27,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    display: "none",
  },
  text14: {
    width: 10,
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
    fontFamily: FontFamily.defaultBoldFootnote,
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
  offParent: {
    marginTop: 20,
  },
  fastSetting: {
    right: 0,
    bottom: -190,
    backgroundColor: Color.colorGray_500,
    borderColor: Color.labelColorDarkPrimary,
    borderWidth: 1,
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: Padding.p_xl,
    left: 0,
    position: "absolute",
    borderStyle: "solid",
    borderRadius: Border.br_21xl,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorDarkPrimary,
    width: 134,
    height: 5,
  },
  homeindicator: {
    bottom: 0,
    left: 8,
    height: 34,
  },
  climate: {
    textShadowColor: "rgba(255, 255, 255, 0.25)",
    textShadowOffset: {
      width: -3,
      height: -2,
    },
    textShadowRadius: 22,
    fontWeight: "600",
    fontFamily: FontFamily.defaultRegularLargeTitle,
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
  },
  title: {
    marginLeft: -52,
    top: 78,
    borderRadius: Border.br_31xl,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    left: "50%",
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -81.5,
    width: 164,
    height: 31,
    top: -2,
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
  text15: {
    top: 1,
    fontSize: FontSize.defaultBoldSubheadline_size,
    lineHeight: 20,
    height: 20,
    width: 54,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultBoldFootnote,
    letterSpacing: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "600",
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
  backButtonChild: {
    left: 0,
    top: 0,
  },
  backButtonItem: {
    height: 50,
    width: 50,
  },
  text16: {
    left: 25,
  },
  backButton: {
    top: 64,
    left: 30,
  },
  text17: {
    left: 20,
  },
  setting: {
    top: 63,
    right: 30,
  },
  controlOff: {
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

export default ControlOff;
