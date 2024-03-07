import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const ChargeSpeedWirhTableView1 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.chargeSpeedWirhTableView}
      locations={[0, 0.99]}
      colors={["#2a2d32", "#1d1d1d"]}
      useAngle={true}
      angle={180}
    >
      <View style={styles.homeindicator}>
        <View style={[styles.homeIndicator, styles.chargingPosition]} />
      </View>
      <Text style={[styles.charging, styles.textTypo2]}>CHARGING</Text>
      <View style={styles.battery}>
        <Image
          style={styles.batteryIcon}
          resizeMode="cover"
          source={require("../assets/battery5.png")}
        />
        <View style={styles.view}>
          <View style={[styles.view1, styles.viewFlexBox]}>
            <Image
              style={styles.child}
              resizeMode="cover"
              source={require("../assets/vector-21.png")}
            />
            <Text style={[styles.text, styles.textFlexBox]}>50%</Text>
          </View>
          <View style={[styles.view2, styles.viewFlexBox]}>
            <Image
              style={[styles.item, styles.itemLayout]}
              resizeMode="cover"
              source={require("../assets/vector-211.png")}
            />
            <Text style={[styles.text1, styles.textFlexBox]}>75%</Text>
          </View>
          <View style={[styles.view2, styles.viewFlexBox]}>
            <Image
              style={styles.itemLayout}
              resizeMode="cover"
              source={require("../assets/vector-21.png")}
            />
            <Text style={[styles.text, styles.textFlexBox]}>100%</Text>
          </View>
        </View>
        <View style={styles.slider}>
          <View style={styles.sliderChild} />
          <Image
            style={[styles.sliderItem, styles.sliderItemLayout]}
            resizeMode="cover"
            source={require("../assets/vector-121.png")}
          />
        </View>
        <Text style={[styles.text1, styles.textFlexBox]}>Set Charge Limit</Text>
      </View>
      <Text style={styles.text3}>
        <Text style={[styles.text4, styles.textTypo2]}>65</Text>
        <Text style={[styles.text5, styles.textTypo2]}>%</Text>
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
          style={[styles.notchIcon, styles.chargingPosition]}
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
            <Text style={[styles.text7, styles.kmTypo]}>9:41</Text>
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
        <Text style={[styles.text8, styles.textTypo]}>􀣋</Text>
      </View>
      <View
        style={[
          styles.modeDescriptionWrapper,
          styles.neonBackgroundIconPosition,
        ]}
      >
        <View style={styles.modeDescription}>
          <View style={[styles.modeParent, styles.row3SpaceBlock]}>
            <Text style={[styles.mode, styles.textTypo2]}>
              Nearby Superchargers
            </Text>
            <Text style={[styles.text9, styles.textTypo2]}>􀆈</Text>
            <Pressable
              style={styles.leftIconLayout}
              onPress={() => navigation.navigate("ChargeSpeed")}
            >
              <Image
                style={[styles.leftArrowIconChild, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-8114.png")}
              />
              <Text style={[styles.text10, styles.textTypo]}>􀌁</Text>
              <View style={[styles.listBullet, styles.buttonItemPosition]}>
                <Text style={[styles.listBullet1, styles.textTypo2]}>􀆇</Text>
              </View>
            </Pressable>
          </View>
          <View style={[styles.row3, styles.rowFlexBox]}>
            <Text style={[styles.olaElectric27Container, styles.textFlexBox]}>
              <Text style={styles.olaElectric}>{`Ola Electric
`}</Text>
              <Text style={styles.available}>2/7 available</Text>
            </Text>
            <View style={styles.kmFlexBox}>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.frameChild}
                  resizeMode="cover"
                  source={require("../assets/vector-13.png")}
                />
                <Text style={[styles.text11, styles.textTypo1]}>􀋦</Text>
              </View>
              <Text style={[styles.km, styles.kmFlexBox]}>1.7 Km</Text>
            </View>
          </View>
          <View style={[styles.row3, styles.rowFlexBox]}>
            <Text style={[styles.olaElectric27Container, styles.textFlexBox]}>
              <Text style={styles.olaElectric}>{`Ola Electric
`}</Text>
              <Text style={styles.available}>2/7 available</Text>
            </Text>
            <View style={styles.kmFlexBox}>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.frameChild}
                  resizeMode="cover"
                  source={require("../assets/vector-13.png")}
                />
                <Text style={[styles.text11, styles.textTypo1]}>􀋦</Text>
              </View>
              <Text style={[styles.km, styles.kmFlexBox]}>1.7 Km</Text>
            </View>
          </View>
          <View style={[styles.row3, styles.rowFlexBox]}>
            <Text style={[styles.olaElectric27Container, styles.textFlexBox]}>
              <Text style={styles.olaElectric}>{`Ola Electric
`}</Text>
              <Text style={styles.available}>2/7 available</Text>
            </Text>
            <View style={styles.kmFlexBox}>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.frameChild}
                  resizeMode="cover"
                  source={require("../assets/vector-13.png")}
                />
                <Text style={[styles.text11, styles.textTypo1]}>􀋦</Text>
              </View>
              <Text style={[styles.km, styles.kmFlexBox]}>1.7 Km</Text>
            </View>
          </View>
          <View style={[styles.row3, styles.rowFlexBox]}>
            <Text style={[styles.olaElectric27Container, styles.textFlexBox]}>
              <Text style={styles.olaElectric}>{`Ola Electric
`}</Text>
              <Text style={styles.available}>2/7 available</Text>
            </Text>
            <View style={styles.kmFlexBox}>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.frameChild}
                  resizeMode="cover"
                  source={require("../assets/vector-13.png")}
                />
                <Text style={[styles.text11, styles.textTypo1]}>􀋦</Text>
              </View>
              <Text style={[styles.km, styles.kmFlexBox]}>1.7 Km</Text>
            </View>
          </View>
          <View style={[styles.row6, styles.rowFlexBox]} />
        </View>
      </View>
      <Image
        style={[styles.neonBackgroundIcon, styles.neonBackgroundIconPosition]}
        resizeMode="cover"
        source={require("../assets/neon-background2.png")}
      />
      <Image
        style={styles.image57Icon}
        resizeMode="cover"
        source={require("../assets/image-55.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  chargingPosition: {
    left: "50%",
    position: "absolute",
  },
  textTypo2: {
    fontFamily: FontFamily.defaultRegularLargeTitle,
    letterSpacing: 0,
  },
  viewFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  textFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  itemLayout: {
    maxWidth: "100%",
    height: 9,
    overflow: "hidden",
  },
  sliderItemLayout: {
    width: 24,
    top: 0,
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
  kmTypo: {
    display: "flex",
    fontFamily: FontFamily.defaultBoldFootnote,
    textAlign: "center",
    letterSpacing: 0,
  },
  neonBackgroundIconPosition: {
    height: 314,
    left: "50%",
    position: "absolute",
  },
  row3SpaceBlock: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    flexDirection: "row",
  },
  buttonItemPosition: {
    left: 6,
    top: 6,
    position: "absolute",
  },
  rowFlexBox: {
    borderRadius: Border.br_31xl,
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTypo1: {
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
  },
  kmFlexBox: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
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
    right: 7,
    bottom: 0,
    left: 8,
    height: 34,
    position: "absolute",
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
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
    color: Color.labelColorDarkPrimary,
  },
  view1: {
    display: "none",
  },
  item: {
    opacity: 0.6,
  },
  text1: {
    color: Color.labelColorDarkSecondary,
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
  },
  view2: {
    marginLeft: 35,
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
    left: 262,
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
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: -165,
    left: "50%",
    position: "absolute",
  },
  text4: {
    fontSize: FontSize.defaultRegularLargeTitle_size,
    lineHeight: 41,
    fontWeight: "700",
    color: Color.labelColorDarkPrimary,
  },
  text5: {
    color: Color.labelColorDarkSecondary,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    fontFamily: FontFamily.defaultRegularLargeTitle,
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
    width: 54,
    display: "flex",
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    color: Color.labelColorDarkPrimary,
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
    height: 44,
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  text8: {
    left: 20,
    top: 20,
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
  },
  button1: {
    top: 63,
    right: 30,
  },
  mode: {
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    fontFamily: FontFamily.defaultRegularLargeTitle,
  },
  text9: {
    display: "none",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    fontFamily: FontFamily.defaultRegularLargeTitle,
  },
  leftArrowIconChild: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  text10: {
    top: 14,
    left: 14,
    display: "none",
  },
  listBullet1: {
    top: 31,
    right: -16,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    color: Color.labelColorDarkSecondary,
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    position: "absolute",
  },
  listBullet: {
    width: 38,
    height: 38,
  },
  modeParent: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    justifyContent: "space-between",
    alignItems: "center",
  },
  olaElectric: {
    fontSize: FontSize.size_base,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
  },
  available: {
    fontSize: FontSize.size_sm,
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
  },
  olaElectric27Container: {
    color: Color.labelColorDarkPrimary,
  },
  frameChild: {
    left: 7,
    width: 21,
    top: 0,
    height: 34,
    position: "absolute",
  },
  text11: {
    top: 3,
    left: 11,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.defaultBoldFootnote,
    position: "absolute",
  },
  vectorParent: {
    width: 34,
    height: 34,
  },
  km: {
    marginTop: 2,
    display: "flex",
    fontFamily: FontFamily.defaultBoldFootnote,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.labelColorDarkSecondary,
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
    width: 40,
  },
  row3: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    flexDirection: "row",
  },
  row6: {
    height: 94,
  },
  modeDescription: {
    marginLeft: -169,
    top: 4,
    width: 338,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
    borderRadius: Border.br_21xl,
  },
  modeDescriptionWrapper: {
    top: 500,
    backgroundColor: Color.colorGray_100,
    width: 330,
    marginLeft: -165,
    height: 314,
    borderRadius: Border.br_21xl,
  },
  neonBackgroundIcon: {
    marginLeft: -313,
    top: 190,
    width: 308,
  },
  image57Icon: {
    top: 101,
    left: 71,
    width: 250,
    height: 203,
    position: "absolute",
  },
  chargeSpeedWirhTableView: {
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

export default ChargeSpeedWirhTableView1;
