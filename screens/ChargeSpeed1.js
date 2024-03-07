import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ChargeSpeed1 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.chargeSpeed2}
      locations={[0, 0.99]}
      colors={["#2a2d32", "#1d1d1d"]}
      useAngle={true}
      angle={180}
    >
      <Image
        style={[styles.teslaIcon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/tesla.png")}
      />
      <Image
        style={[styles.neonBackgroundIcon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/neon-background3.png")}
      />
      <View style={styles.locationDescription}>
        <View style={[styles.row1, styles.rowSpaceBlock]}>
          <View style={styles.teslaSuperchargerMascoucheParent}>
            <Text
              style={[styles.teslaSuperchargerMascouche, styles.textTypo3]}
            >{`Tesla Supercharger -Mascouche, QC `}</Text>
            <Text style={[styles.available, styles.availableTypo]}>
              <Text style={styles.text}>2</Text>
              <Text style={styles.available1}> / 2 available</Text>
            </Text>
          </View>
          <View style={[styles.frameParent, styles.kmLayout]}>
            <View style={styles.vectorParent}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/vector-13.png")}
              />
              <Text style={[styles.text1, styles.textTypo3]}>􀋦</Text>
            </View>
            <Text style={[styles.km, styles.kmLayout]}>1.7 Km</Text>
          </View>
        </View>
        <View style={[styles.row2, styles.rowSpaceBlock]}>
          <View style={styles.teslaSuperchargerMascoucheParent}>
            <Text
              style={[styles.teslaSuperchargerMascouche, styles.textTypo3]}
            >{`Tesla Supercharger -Montreal, QC `}</Text>
            <Text style={[styles.available, styles.availableTypo]}>
              <Text style={styles.text}>2</Text>
              <Text style={styles.available1}> / 4 available</Text>
            </Text>
          </View>
          <View style={[styles.frameParent, styles.kmLayout]}>
            <View style={styles.vectorParent}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/vector-13.png")}
              />
              <Text style={[styles.text1, styles.textTypo3]}>􀋦</Text>
            </View>
            <Text style={[styles.km, styles.kmLayout]}>1.7 Km</Text>
          </View>
        </View>
      </View>
      <View style={[styles.chargeStatus, styles.rowSpaceBlock]}>
        <Text style={[styles.openChargePort, styles.textTypo2]}>
          OPEN CHARGE PORT
        </Text>
      </View>
      <View style={[styles.chargeStatus1, styles.batteryPosition]}>
        <Text style={[styles.openChargePort1, styles.textTypo1]}>
          OPEN CHARGE PORT
        </Text>
        <Text style={[styles.text4, styles.textTypo1]}>􀎥</Text>
      </View>
      <View style={[styles.leftArrow, styles.leftLayout]}>
        <Image
          style={[styles.leftArrowChild, styles.leftLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-261.png")}
        />
        <View style={[styles.leftArrow1, styles.homeLayout]}>
          <Text style={[styles.text5, styles.textPosition]}>􀆉</Text>
        </View>
      </View>
      <Text style={[styles.charging, styles.textTypo2]}>CHARGING</Text>
      <View style={[styles.battery, styles.batteryPosition]}>
        <Image
          style={styles.batteryIcon}
          resizeMode="cover"
          source={require("../assets/battery3.png")}
        />
        <View style={styles.view}>
          <View style={[styles.view1, styles.viewFlexBox]}>
            <Image
              style={styles.child}
              resizeMode="cover"
              source={require("../assets/vector-21.png")}
            />
            <Text style={[styles.text6, styles.textTypo3]}>50%</Text>
          </View>
          <View style={[styles.view2, styles.viewFlexBox]}>
            <Image
              style={[styles.item, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector-211.png")}
            />
            <Text style={[styles.text7, styles.textTypo3]}>75%</Text>
          </View>
          <View style={[styles.view2, styles.viewFlexBox]}>
            <Image
              style={[styles.inner, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector-21.png")}
            />
            <Text style={[styles.text6, styles.textTypo3]}>100%</Text>
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
        <Text style={[styles.text7, styles.textTypo3]}>Set Charge Limit</Text>
      </View>
      <Text style={styles.text9}>
        <Text style={[styles.text10, styles.text10Typo]}>65</Text>
        <Text style={[styles.text11, styles.textTypo2]}>%</Text>
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
        <Text style={[styles.text12, styles.textTypo]}>􀆉</Text>
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
            <Text style={styles.text13}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={[styles.modeDescription, styles.rowSpaceBlock]}>
        <View style={styles.row3FlexBox}>
          <Text style={[styles.openChargePort, styles.textTypo2]}>
            Nearby Superchargers
          </Text>
          <Text style={[styles.text14, styles.textTypo2]}>􀆈</Text>
          <Pressable
            style={styles.leftIconLayout}
            onPress={() => navigation.navigate("ChargeSpeedWirhTableView1")}
          >
            <Image
              style={[styles.leftArrowIconChild, styles.leftIconLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-8113.png")}
            />
            <Text style={[styles.text15, styles.textPosition]}>􀌁</Text>
            <View style={[styles.listBullet, styles.buttonItemPosition]}>
              <Text style={styles.listBullet1}>􀆇</Text>
            </View>
          </Pressable>
        </View>
        <View style={[styles.row3, styles.row3FlexBox]}>
          <View style={styles.teslaSuperchargerMascoucheParent}>
            <Text
              style={[styles.teslaSuperchargerMontreal1, styles.textTypo3]}
            >{`Tesla Supercharger -Montreal, QC `}</Text>
            <Text style={[styles.available4, styles.availableTypo]}>
              <Text style={styles.text}>2</Text>
              <Text style={styles.available1}>{` / `}</Text>
              <Text style={styles.available5}>4 available</Text>
            </Text>
          </View>
          <View style={[styles.frameParent, styles.kmLayout]}>
            <View style={styles.vectorParent}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/vector-13.png")}
              />
              <Text style={[styles.text1, styles.textTypo3]}>􀋦</Text>
            </View>
            <Text style={[styles.km2, styles.kmLayout]}>1.7 Km</Text>
          </View>
        </View>
        <View style={[styles.row3, styles.row3FlexBox]}>
          <View style={styles.teslaSuperchargerMascoucheParent}>
            <Text
              style={[styles.teslaSuperchargerMontreal1, styles.textTypo3]}
            >{`Tesla Supercharger -Mascouche, QC `}</Text>
            <Text style={[styles.available4, styles.availableTypo]}>
              <Text style={styles.text}>2</Text>
              <Text style={styles.available1}>{` / `}</Text>
              <Text style={styles.available5}>2 available</Text>
            </Text>
          </View>
          <View style={[styles.frameParent, styles.kmLayout]}>
            <View style={styles.vectorParent}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/vector-13.png")}
              />
              <Text style={[styles.text1, styles.textTypo3]}>􀋦</Text>
            </View>
            <Text style={[styles.km2, styles.kmLayout]}>1.7 Km</Text>
          </View>
        </View>
      </View>
      <View style={[styles.tabBar, styles.tabPosition]}>
        <Image
          style={[styles.tabBarChild, styles.tabLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-42.png")}
        />
        <View style={styles.vectorParent2Position}>
          <Image
            style={[styles.rectangleIcon, styles.vectorParent2Position]}
            resizeMode="cover"
            source={require("../assets/rectangle-412.png")}
          />
          <View style={[styles.frameParent1, styles.leftArrow1Position]}>
            <View style={styles.homeParent}>
              <View style={[styles.home, styles.homeLayout]}>
                <Image
                  style={[styles.sizeGuideIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/size-guide3.png")}
                />
                <Text style={[styles.symbol, styles.symbolTypo]}>􀎟</Text>
              </View>
              <Image
                style={styles.tesla24x241x1Icon}
                resizeMode="cover"
                source={require("../assets/tesla24x241x-1.png")}
              />
              <View style={styles.frameChild4Layout} />
            </View>
            <View style={[styles.stats, styles.homeLayout]}>
              <Image
                style={[styles.sizeGuideIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/size-guide2.png")}
              />
              <Text style={[styles.symbol1, styles.symbolTypo]}>􀙊</Text>
            </View>
            <View style={[styles.stats, styles.homeLayout]}>
              <Image
                style={[styles.sizeGuideIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/size-guide1.png")}
              />
              <Image
                style={[styles.tradeChild, styles.homeLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-803.png")}
              />
              <Text style={[styles.symbol, styles.symbolTypo]}>􀄭</Text>
            </View>
            <View style={[styles.stats, styles.homeLayout]}>
              <Image
                style={[styles.sizeGuideIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/size-guide.png")}
              />
              <Text style={[styles.symbol1, styles.symbolTypo]}>􀎫</Text>
            </View>
            <View style={[styles.stats, styles.homeLayout]}>
              <Image
                style={[styles.sizeGuideIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/size-guide3.png")}
              />
              <Text style={[styles.symbol1, styles.symbolTypo]}>􀉪</Text>
            </View>
          </View>
        </View>
        <View style={[styles.plusIcon, styles.plusIconLayout]}>
          <Image
            style={[styles.plusIconChild, styles.text22Position]}
            resizeMode="cover"
            source={require("../assets/ellipse-8082.png")}
          />
          <Text style={[styles.text22, styles.text22Position]}>􀅼</Text>
        </View>
      </View>
      <View style={[styles.ellipseParent, styles.buttonLayout]}>
        <Image
          style={[styles.buttonChild, styles.buttonLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-8362.png")}
        />
        <Image
          style={[styles.buttonItem, styles.leftIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-8371.png")}
        />
        <Image
          style={[styles.buttonItem, styles.leftIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-8381.png")}
        />
        <Text style={[styles.text23, styles.textTypo]}>􀣋</Text>
      </View>
      <View style={styles.tabPosition}>
        <Image
          style={[styles.tabBarItem, styles.tabLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-42.png")}
        />
        <View style={styles.vectorParent2Position}>
          <Image
            style={[styles.rectangleIcon, styles.vectorParent2Position]}
            resizeMode="cover"
            source={require("../assets/rectangle-413.png")}
          />
          <View style={[styles.frameParent1, styles.leftArrow1Position]}>
            <Image
              style={styles.motorcycle42}
              resizeMode="cover"
              source={require("../assets/motorcycle-4-1.png")}
            />
            <View style={[styles.stats, styles.homeLayout]}>
              <Image
                style={[styles.sizeGuideIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/size-guide4.png")}
              />
              <Text style={[styles.symbol5, styles.homeLayout]}>􀋦</Text>
            </View>
            <View style={[styles.homeGroup, styles.homeLayout]}>
              <View style={[styles.home, styles.homeLayout]}>
                <Image
                  style={[styles.sizeGuideIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/size-guide5.png")}
                />
                <Text style={[styles.symbol, styles.symbolTypo]}>􀎟</Text>
              </View>
              <View style={[styles.frameChild4, styles.frameChild4Layout]} />
            </View>
            <View style={[styles.stats, styles.homeLayout]}>
              <Image
                style={[styles.sizeGuideIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/size-guide6.png")}
              />
              <Image
                style={[styles.tradeChild, styles.homeLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-8031.png")}
              />
              <Text style={[styles.symbol, styles.symbolTypo]}>􀄭</Text>
            </View>
            <View style={[styles.stats, styles.homeLayout]}>
              <Image
                style={[styles.sizeGuideIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/size-guide7.png")}
              />
              <Text style={[styles.symbol1, styles.symbolTypo]}>􀎫</Text>
            </View>
            <View style={[styles.stats, styles.homeLayout]}>
              <Image
                style={[styles.sizeGuideIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/size-guide3.png")}
              />
              <Text style={[styles.symbol1, styles.symbolTypo]}>􀉪</Text>
            </View>
          </View>
        </View>
        <View style={[styles.plusIcon, styles.plusIconLayout]}>
          <Image
            style={[styles.plusIconChild, styles.text22Position]}
            resizeMode="cover"
            source={require("../assets/ellipse-8081.png")}
          />
          <Text style={[styles.text22, styles.text22Position]}>􀅼</Text>
        </View>
      </View>
      <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View>
      <Image
        style={styles.image56Icon}
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
  rowSpaceBlock: {
    paddingVertical: Padding.p_xl,
    alignItems: "center",
  },
  textTypo3: {
    fontFamily: FontFamily.defaultBoldFootnote,
    letterSpacing: 0,
  },
  availableTypo: {
    marginTop: 2,
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldFootnote_size,
  },
  kmLayout: {
    width: 40,
    alignItems: "center",
  },
  textTypo2: {
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    fontFamily: FontFamily.defaultRegularLargeTitle,
  },
  batteryPosition: {
    marginLeft: -165,
    justifyContent: "space-between",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  textTypo1: {
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  leftLayout: {
    height: 60,
    width: 100,
    position: "absolute",
  },
  homeLayout: {
    width: 44,
    height: 44,
  },
  textPosition: {
    left: 14,
    textAlign: "center",
    color: Color.labelColorDarkSecondary,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  viewFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  sliderItemLayout: {
    width: 24,
    top: 0,
  },
  text10Typo: {
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
    top: 20,
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    textAlign: "center",
    color: Color.labelColorDarkSecondary,
    fontFamily: FontFamily.defaultBoldFootnote,
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
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  tabPosition: {
    height: 130,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  tabLayout: {
    height: 40,
    borderRadius: Border.br_7xl,
    bottom: 15,
    width: 40,
    position: "absolute",
  },
  vectorParent2Position: {
    height: 78,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  leftArrow1Position: {
    left: 22,
    position: "absolute",
  },
  symbolTypo: {
    fontSize: FontSize.size_3xl,
    left: 0,
    height: 44,
    width: 44,
    textAlign: "center",
    top: 0,
    fontFamily: FontFamily.defaultBoldFootnote,
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  plusIconLayout: {
    height: 68,
    width: 68,
    marginLeft: -34,
  },
  text22Position: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  frameChild4Layout: {
    height: 4,
    width: 27,
    backgroundColor: Color.labelColorDarkPrimary,
    marginTop: 6,
  },
  teslaIcon: {
    marginLeft: -194,
    top: 141,
    width: 388,
    height: 254,
    display: "none",
  },
  neonBackgroundIcon: {
    marginLeft: -148,
    top: 139,
    width: 308,
    height: 314,
  },
  teslaSuperchargerMascouche: {
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
    fontFamily: FontFamily.defaultBoldFootnote,
    alignSelf: "stretch",
  },
  text: {
    color: Color.labelColorDarkPrimary,
  },
  available1: {
    color: Color.labelColorDarkSecondary,
  },
  available: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  teslaSuperchargerMascoucheParent: {
    width: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  frameChild: {
    left: 7,
    width: 21,
    top: 0,
    height: 34,
    position: "absolute",
  },
  text1: {
    top: 3,
    left: 11,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
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
    display: "flex",
    color: Color.labelColorDarkSecondary,
    marginTop: 2,
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldFootnote_size,
    textAlign: "left",
  },
  frameParent: {
    justifyContent: "center",
  },
  row1: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_xl,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 330,
    borderRadius: Border.br_31xl,
  },
  row2: {
    marginTop: 20,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_xl,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 330,
    borderRadius: Border.br_31xl,
  },
  locationDescription: {
    top: 589,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    justifyContent: "center",
    alignItems: "center",
    left: 30,
    display: "none",
    position: "absolute",
    borderRadius: Border.br_21xl,
  },
  openChargePort: {
    fontFamily: FontFamily.defaultRegularLargeTitle,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontWeight: "600",
    letterSpacing: 0,
  },
  chargeStatus: {
    marginLeft: -126,
    top: 410,
    borderTopLeftRadius: Border.br_12xs,
    borderTopRightRadius: Border.br_11xl,
    borderBottomRightRadius: Border.br_12xs,
    borderBottomLeftRadius: Border.br_11xl,
    borderColor: Color.labelColorDarkPrimary,
    borderWidth: 1,
    width: 252,
    paddingHorizontal: Padding.p_31xl,
    flexDirection: "row",
    justifyContent: "center",
    display: "none",
    left: "50%",
    position: "absolute",
    borderStyle: "solid",
  },
  openChargePort1: {
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontWeight: "600",
    letterSpacing: 0,
  },
  text4: {
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  chargeStatus1: {
    top: 440,
    backgroundColor: "#181818",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    width: 330,
    display: "none",
    borderRadius: Border.br_21xl,
  },
  leftArrowChild: {
    left: 100,
    top: 0,
  },
  text5: {
    top: 10,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
  },
  leftArrow1: {
    top: 8,
    height: 44,
    left: 22,
    position: "absolute",
    overflow: "hidden",
  },
  leftArrow: {
    left: -6,
    top: 64,
    display: "none",
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
    fontFamily: FontFamily.defaultRegularLargeTitle,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontWeight: "600",
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
  text6: {
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  view1: {
    display: "none",
  },
  item: {
    opacity: 0.6,
    height: 9,
  },
  text7: {
    color: Color.labelColorDarkSecondary,
    textAlign: "left",
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
    fontFamily: FontFamily.defaultBoldFootnote,
  },
  view2: {
    marginLeft: 35,
  },
  inner: {
    height: 9,
  },
  view: {
    justifyContent: "flex-end",
    width: 273,
    flexDirection: "row",
  },
  sliderChild: {
    borderRadius: Border.br_6xl,
    backgroundColor: "rgba(22, 23, 23, 0.5)",
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
  },
  text10: {
    fontSize: FontSize.defaultRegularLargeTitle_size,
    lineHeight: 41,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    letterSpacing: 0,
  },
  text11: {
    fontFamily: FontFamily.defaultRegularLargeTitle,
    color: Color.labelColorDarkSecondary,
    fontWeight: "600",
    letterSpacing: 0,
  },
  text9: {
    top: 302,
    left: 236,
    textAlign: "center",
    position: "absolute",
  },
  buttonChild: {
    left: 0,
    top: 0,
  },
  buttonItem: {
    left: 6,
    top: 6,
    position: "absolute",
  },
  text12: {
    left: 25,
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
  text13: {
    top: 1,
    fontSize: FontSize.defaultBoldSubheadline_size,
    lineHeight: 20,
    height: 20,
    width: 54,
    left: 0,
    display: "flex",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.defaultBoldFootnote,
    fontWeight: "600",
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
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
    height: 44,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  text14: {
    fontFamily: FontFamily.defaultRegularLargeTitle,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontWeight: "600",
    letterSpacing: 0,
    display: "none",
  },
  leftArrowIconChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  text15: {
    top: 14,
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    fontFamily: FontFamily.defaultBoldFootnote,
    display: "none",
  },
  listBullet1: {
    top: 7,
    right: 7,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    textAlign: "center",
    color: Color.labelColorDarkSecondary,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  listBullet: {
    width: 38,
    height: 38,
  },
  teslaSuperchargerMontreal1: {
    textAlign: "center",
    color: Color.labelColorDarkSecondary,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
    fontFamily: FontFamily.defaultBoldFootnote,
    alignSelf: "stretch",
  },
  available5: {
    color: Color.labelColorDarkTertiary,
  },
  available4: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  km2: {
    display: "flex",
    textAlign: "center",
    color: Color.labelColorDarkSecondary,
    marginTop: 2,
    fontFamily: FontFamily.defaultBoldFootnote,
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldFootnote_size,
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
    left: "50%",
    position: "absolute",
    borderRadius: Border.br_21xl,
  },
  tabBarChild: {
    left: 16,
  },
  rectangleIcon: {
    maxWidth: "100%",
    overflow: "hidden",
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
    fontWeight: "700",
    color: Color.labelColorDarkPrimary,
    display: "none",
  },
  home: {
    height: 44,
    display: "none",
  },
  tesla24x241x1Icon: {
    height: 24,
    marginTop: 6,
    width: 24,
    overflow: "hidden",
  },
  homeParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  symbol1: {
    display: "flex",
    color: Color.labelColorDarkSecondary,
  },
  stats: {
    height: 44,
  },
  tradeChild: {
    borderRadius: Border.br_xl,
    left: 0,
    height: 44,
    top: 0,
    position: "absolute",
  },
  frameParent1: {
    right: 22,
    bottom: 17,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  plusIconChild: {
    marginTop: -34,
    height: 68,
    width: 68,
    marginLeft: -34,
  },
  text22: {
    marginTop: -21,
    marginLeft: -20,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    fontFamily: FontFamily.defaultBoldFootnote,
    letterSpacing: 0,
    fontWeight: "600",
  },
  plusIcon: {
    bottom: 62,
    left: "50%",
    position: "absolute",
  },
  tabBar: {
    display: "none",
  },
  text23: {
    left: 20,
  },
  ellipseParent: {
    right: 30,
    top: 64,
  },
  tabBarItem: {
    left: 86,
  },
  motorcycle42: {
    width: 33,
    height: 30,
  },
  symbol5: {
    left: 0,
    height: 44,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    display: "flex",
    textAlign: "center",
    top: 0,
    fontWeight: "600",
    letterSpacing: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  frameChild4: {
    display: "none",
  },
  homeGroup: {
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    backgroundColor: Color.labelColorDarkPrimary,
    left: "50%",
    position: "absolute",
  },
  homeindicator: {
    left: 8,
    bottom: 0,
    right: 7,
    height: 34,
    position: "absolute",
  },
  image56Icon: {
    top: 101,
    left: 71,
    width: 250,
    height: 203,
    position: "absolute",
  },
  chargeSpeed2: {
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
    borderStyle: "solid",
    borderRadius: Border.br_21xl,
  },
});

export default ChargeSpeed1;
