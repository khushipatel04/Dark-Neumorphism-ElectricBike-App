import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const ChargeSpeed = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.chargeSpeed1}
      locations={[0, 0.99]}
      colors={["#2a2d32", "#1d1d1d"]}
      useAngle={true}
      angle={180}
    >
      <Image
        style={[styles.neonBackgroundIcon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/neon-background2.png")}
      />
      <Text style={[styles.charging, styles.textTypo3]}>CHARGING</Text>
      <View style={[styles.battery, styles.batteryFlexBox]}>
        <Image
          style={styles.batteryIcon}
          resizeMode="cover"
          source={require("../assets/battery1.png")}
        />
        <View style={styles.view}>
          <View style={[styles.view1, styles.viewFlexBox]}>
            <Image
              style={styles.child}
              resizeMode="cover"
              source={require("../assets/vector-21.png")}
            />
            <Text style={[styles.text, styles.textTypo1]}>50%</Text>
          </View>
          <View style={[styles.view2, styles.viewFlexBox]}>
            <Image
              style={[styles.item, styles.innerLayout]}
              resizeMode="cover"
              source={require("../assets/vector-21.png")}
            />
            <Text style={[styles.text, styles.textTypo1]}>75%</Text>
          </View>
          <View style={[styles.view2, styles.viewFlexBox]}>
            <Image
              style={[styles.inner, styles.innerLayout]}
              resizeMode="cover"
              source={require("../assets/vector-211.png")}
            />
            <Text style={[styles.text2, styles.textTypo1]}>100%</Text>
          </View>
        </View>
        <View style={styles.slider}>
          <View style={styles.sliderChild} />
          <Image
            style={[styles.sliderItem, styles.sliderItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector-12.png")}
          />
        </View>
        <Text style={[styles.text2, styles.textTypo1]}>Set Charge Limit</Text>
      </View>
      <Text style={styles.text3}>
        <Text style={[styles.text4, styles.text4Typo]}>65</Text>
        <Text style={[styles.text5, styles.textTypo3]}>%</Text>
      </Text>
      <View style={[styles.button, styles.buttonLayout]}>
        <Image
          style={[styles.buttonChild, styles.buttonLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-836.png")}
        />
        <Image
          style={[styles.buttonItem, styles.leftIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-837.png")}
        />
        <Image
          style={[styles.buttonItem, styles.leftIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-838.png")}
        />
        <Text style={[styles.text6, styles.textTypo]}>􀆉</Text>
      </View>
      <View style={styles.statusbarIphone1313Pro}>
        <Image
          style={[styles.notchIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/notch1.png")}
        />
        <View style={[styles.rightSide, styles.iconPosition]}>
          <Image
            style={[styles.batteryIcon1, styles.iconPosition]}
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
            <Text style={styles.text7}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.modeDescription}>
        <View style={styles.row3FlexBox}>
          <Text style={[styles.mode, styles.textTypo3]}>
            Nearby Superchargers
          </Text>
          <Text style={[styles.text8, styles.textTypo3]}>􀆈</Text>
          <Pressable
            style={styles.leftIconLayout}
            onPress={() => navigation.navigate("ChargeSpeedWirhTableView")}
          >
            <Image
              style={[styles.leftArrowIconChild, styles.leftIconLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-8112.png")}
            />
            <Text style={[styles.text9, styles.textTypo]}>􀌁</Text>
            <View style={[styles.listBullet, styles.buttonItemPosition]}>
              <Text style={[styles.listBullet1, styles.textTypo3]}>􀆇</Text>
            </View>
          </Pressable>
        </View>
        <View style={[styles.row3, styles.row3FlexBox]}>
          <View
            style={[
              styles.teslaSuperchargerMontrealParent,
              styles.parentFlexBox,
            ]}
          >
            <Text
              style={[styles.teslaSuperchargerMontreal, styles.textTypo2]}
            >{`Tesla Supercharger -Montreal, QC `}</Text>
            <Text style={[styles.available, styles.kmTypo]}>
              <Text style={styles.text10}>2</Text>
              <Text style={styles.text11}>{` / `}</Text>
              <Text style={styles.available1}>4 available</Text>
            </Text>
          </View>
          <View style={[styles.frameParent, styles.parentFlexBox]}>
            <View style={styles.vectorParent}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/vector-13.png")}
              />
              <Text style={[styles.text12, styles.textTypo2]}>􀋦</Text>
            </View>
            <Text style={[styles.km, styles.kmTypo]}>1.7 Km</Text>
          </View>
        </View>
        <View style={[styles.row3, styles.row3FlexBox]}>
          <View
            style={[
              styles.teslaSuperchargerMontrealParent,
              styles.parentFlexBox,
            ]}
          >
            <Text
              style={[styles.teslaSuperchargerMontreal, styles.textTypo2]}
            >{`Tesla Supercharger -Mascouche, QC `}</Text>
            <Text style={[styles.available, styles.kmTypo]}>
              <Text style={styles.text10}>2</Text>
              <Text style={styles.text11}>{` / `}</Text>
              <Text style={styles.available1}>2 available</Text>
            </Text>
          </View>
          <View style={[styles.frameParent, styles.parentFlexBox]}>
            <View style={styles.vectorParent}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/vector-13.png")}
              />
              <Text style={[styles.text12, styles.textTypo2]}>􀋦</Text>
            </View>
            <Text style={[styles.km, styles.kmTypo]}>1.7 Km</Text>
          </View>
        </View>
      </View>
      <View style={[styles.button1, styles.buttonLayout]}>
        <Image
          style={[styles.buttonChild, styles.buttonLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-836.png")}
        />
        <Image
          style={[styles.buttonItem, styles.leftIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-837.png")}
        />
        <Image
          style={[styles.buttonItem, styles.leftIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-838.png")}
        />
        <Text style={[styles.text16, styles.textTypo]}>􀣋</Text>
      </View>
      <View style={[styles.tabBar, styles.tabBarPosition]}>
        <Image
          style={styles.tabBarChild}
          resizeMode="cover"
          source={require("../assets/rectangle-42.png")}
        />
        <View style={styles.frameInnerPosition}>
          <Image
            style={[styles.frameInner, styles.frameInnerPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-411.png")}
          />
          <Pressable
            style={[styles.motorcycle41Parent, styles.batteryFlexBox]}
            onPress={() => navigation.navigate("HomePage")}
          >
            <Image
              style={styles.motorcycle41}
              resizeMode="cover"
              source={require("../assets/motorcycle-4-1.png")}
            />
            <View style={styles.statsLayout}>
              <Image
                style={[styles.sizeGuideIcon, styles.innerLayout]}
                resizeMode="cover"
                source={require("../assets/size-guide2.png")}
              />
              <Text style={[styles.symbol, styles.statsLayout]}>􀋦</Text>
            </View>
            <View style={styles.statsLayout}>
              <Image
                style={[styles.sizeGuideIcon, styles.innerLayout]}
                resizeMode="cover"
                source={require("../assets/size-guide1.png")}
              />
              <Image
                style={[styles.tradeChild, styles.statsLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-803.png")}
              />
              <Text style={[styles.symbol1, styles.symbolTypo]}>􀄭</Text>
            </View>
            <View style={styles.statsLayout}>
              <Image
                style={[styles.sizeGuideIcon, styles.innerLayout]}
                resizeMode="cover"
                source={require("../assets/size-guide.png")}
              />
              <Text style={[styles.symbol2, styles.symbolTypo]}>􀎫</Text>
            </View>
            <View style={styles.statsLayout}>
              <Image
                style={[styles.sizeGuideIcon, styles.innerLayout]}
                resizeMode="cover"
                source={require("../assets/size-guide3.png")}
              />
              <Text style={[styles.symbol2, styles.symbolTypo]}>􀉪</Text>
            </View>
          </Pressable>
        </View>
        <View style={[styles.plusIcon, styles.plusIconLayout]}>
          <Image
            style={[styles.plusIconChild, styles.text17Position]}
            resizeMode="cover"
            source={require("../assets/ellipse-8081.png")}
          />
          <Text style={[styles.text17, styles.text17Position]}>􀅼</Text>
        </View>
      </View>
      <View style={[styles.homeindicator, styles.tabBarPosition]}>
        <View style={[styles.homeIndicator, styles.iconPosition1]} />
      </View>
      <Image
        style={styles.image55Icon}
        resizeMode="cover"
        source={require("../assets/image-55.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconPosition1: {
    left: "50%",
    position: "absolute",
  },
  textTypo3: {
    fontFamily: FontFamily.defaultRegularLargeTitle,
    letterSpacing: 0,
  },
  batteryFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
  },
  viewFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
    letterSpacing: 0,
  },
  innerLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  sliderItemLayout: {
    width: 24,
    top: 0,
  },
  text4Typo: {
    fontWeight: "700",
    color: Color.labelColorDarkPrimary,
  },
  buttonLayout: {
    height: 62,
    width: 62,
    position: "absolute",
  },
  leftIconLayout: {
    height: 50,
    width: 50,
  },
  textTypo: {
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    color: Color.labelColorDarkSecondary,
    fontFamily: FontFamily.defaultBoldFootnote,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
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
  buttonItemPosition: {
    left: 6,
    top: 6,
    position: "absolute",
  },
  row3FlexBox: {
    paddingHorizontal: 0,
    alignSelf: "stretch",
    paddingVertical: Padding.p_xl,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo2: {
    fontFamily: FontFamily.defaultBoldFootnote,
    textAlign: "center",
    letterSpacing: 0,
  },
  kmTypo: {
    marginTop: 2,
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
    textAlign: "center",
    letterSpacing: 0,
  },
  tabBarPosition: {
    bottom: 0,
    position: "absolute",
  },
  frameInnerPosition: {
    height: 78,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  statsLayout: {
    width: 44,
    height: 44,
  },
  symbolTypo: {
    fontSize: FontSize.size_3xl,
    width: 44,
    height: 44,
    top: 0,
    left: 0,
    fontFamily: FontFamily.defaultBoldFootnote,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  plusIconLayout: {
    height: 68,
    width: 68,
    marginLeft: -34,
  },
  text17Position: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  neonBackgroundIcon: {
    marginLeft: -313,
    top: 190,
    width: 308,
    height: 314,
  },
  charging: {
    marginLeft: -53,
    top: 82,
    textShadowColor: "rgba(255, 255, 255, 0.25)",
    textShadowOffset: {
      width: -3,
      height: -2,
    },
    textShadowRadius: 22,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
  },
  batteryIcon: {
    width: 274,
    height: 112,
  },
  child: {
    width: 0,
    height: 9,
  },
  text: {
    color: Color.labelColorDarkPrimary,
  },
  view1: {
    display: "none",
    justifyContent: "center",
  },
  item: {
    height: 9,
  },
  view2: {
    marginLeft: 35,
    justifyContent: "center",
  },
  inner: {
    opacity: 0.6,
    height: 9,
  },
  text2: {
    color: Color.labelColorDarkSecondary,
  },
  view: {
    justifyContent: "flex-end",
    flexDirection: "row",
    width: 273,
  },
  sliderChild: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorGray_300,
    left: 0,
    top: 6,
    height: 9,
    width: 273,
    position: "absolute",
  },
  sliderItem: {
    left: 191,
    borderRadius: Border.br_11xs,
    height: 18,
    position: "absolute",
  },
  slider: {
    height: 18,
    width: 273,
  },
  battery: {
    top: 287,
    height: 199,
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: 0,
    left: 30,
  },
  text4: {
    fontSize: FontSize.defaultRegularLargeTitle_size,
    lineHeight: 41,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    letterSpacing: 0,
    fontWeight: "700",
  },
  text5: {
    color: Color.labelColorDarkSecondary,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    letterSpacing: 0,
  },
  text3: {
    top: 302,
    left: 236,
    textAlign: "center",
    position: "absolute",
  },
  buttonChild: {
    top: 0,
    left: 0,
  },
  buttonItem: {
    left: 6,
    top: 6,
    position: "absolute",
  },
  text6: {
    left: 25,
    top: 20,
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
  },
  button: {
    top: 64,
    left: 30,
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    height: 31,
    display: "none",
  },
  batteryIcon1: {
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
  text7: {
    top: 1,
    fontSize: FontSize.defaultBoldSubheadline_size,
    lineHeight: 20,
    height: 20,
    display: "flex",
    width: 54,
    left: 0,
    fontFamily: FontFamily.defaultBoldFootnote,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontWeight: "600",
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
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  mode: {
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    letterSpacing: 0,
  },
  text8: {
    display: "none",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    letterSpacing: 0,
  },
  leftArrowIconChild: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  text9: {
    top: 14,
    left: 14,
    display: "none",
  },
  listBullet1: {
    top: 7,
    right: 7,
    color: Color.labelColorDarkSecondary,
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    letterSpacing: 0,
    position: "absolute",
  },
  listBullet: {
    width: 38,
    height: 38,
  },
  teslaSuperchargerMontreal: {
    alignSelf: "stretch",
    color: Color.labelColorDarkSecondary,
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
    fontFamily: FontFamily.defaultBoldFootnote,
    fontWeight: "600",
  },
  text10: {
    color: Color.labelColorDarkPrimary,
  },
  text11: {
    color: Color.labelColorDarkSecondary,
  },
  available1: {
    color: Color.labelColorDarkTertiary,
  },
  available: {
    alignSelf: "stretch",
  },
  teslaSuperchargerMontrealParent: {
    width: 160,
    justifyContent: "center",
  },
  frameChild: {
    left: 7,
    width: 21,
    height: 34,
    top: 0,
    position: "absolute",
  },
  text12: {
    top: 3,
    left: 11,
    color: Color.labelColorLightPrimary,
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
    fontFamily: FontFamily.defaultBoldFootnote,
    position: "absolute",
  },
  vectorParent: {
    width: 34,
    height: 34,
  },
  km: {
    width: 40,
    display: "flex",
    color: Color.labelColorDarkSecondary,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    width: 40,
    justifyContent: "center",
  },
  row3: {
    borderRadius: Border.br_31xl,
    display: "none",
  },
  modeDescription: {
    marginLeft: -169,
    top: 504,
    backgroundColor: Color.colorGray_100,
    width: 338,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_xl,
    alignItems: "center",
    left: "50%",
    position: "absolute",
    borderRadius: Border.br_21xl,
  },
  text16: {
    left: 20,
    top: 20,
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
  },
  button1: {
    top: 63,
    right: 30,
  },
  tabBarChild: {
    bottom: 15,
    left: 86,
    borderRadius: Border.br_7xl,
    height: 40,
    width: 40,
    position: "absolute",
  },
  frameInner: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  motorcycle41: {
    width: 33,
    height: 30,
  },
  sizeGuideIcon: {
    height: "63.64%",
    width: "63.64%",
    top: "18.18%",
    right: "18.18%",
    bottom: "18.18%",
    left: "18.18%",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
  },
  symbol: {
    display: "flex",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.defaultRegularLargeTitle,
    letterSpacing: 0,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    position: "absolute",
  },
  tradeChild: {
    borderRadius: Border.br_xl,
    top: 0,
    left: 0,
    position: "absolute",
  },
  symbol1: {
    fontWeight: "700",
    color: Color.labelColorDarkPrimary,
    display: "none",
  },
  symbol2: {
    display: "flex",
    color: Color.labelColorDarkSecondary,
  },
  motorcycle41Parent: {
    right: 22,
    bottom: 17,
    left: 16,
    flexDirection: "row",
  },
  plusIconChild: {
    marginTop: -34,
    height: 68,
    width: 68,
    marginLeft: -34,
  },
  text17: {
    marginTop: -21,
    marginLeft: -20,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.defaultBoldFootnote,
    textAlign: "center",
    letterSpacing: 0,
    fontWeight: "600",
  },
  plusIcon: {
    bottom: 62,
    left: "50%",
    position: "absolute",
  },
  tabBar: {
    height: 130,
    right: 0,
    bottom: 0,
    left: 0,
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
    left: 8,
    height: 34,
    right: 7,
  },
  image55Icon: {
    top: 101,
    left: 71,
    width: 250,
    height: 203,
    position: "absolute",
  },
  chargeSpeed1: {
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

export default ChargeSpeed;
