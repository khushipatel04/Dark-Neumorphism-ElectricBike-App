import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.homePage}
      locations={[0, 0.99]}
      colors={["#2a2d32", "#131313"]}
      useAngle={true}
      angle={180}
    >
      <View style={styles.clipContent}>
        <Image
          style={styles.neonBackgroundIcon}
          resizeMode="cover"
          source={require("../assets/neon-background.png")}
        />
        <View style={styles.neonBackground1} />
        <View style={[styles.middleIcon, styles.parentFlexBox]}>
          <View style={styles.lockLayout}>
            <Text style={[styles.text, styles.textFlexBox]}>􀎡</Text>
          </View>
          <Pressable
            style={[styles.climate, styles.lockLayout]}
            onPress={() => navigation.navigate("ControlOff")}
          >
            <Text style={[styles.text1, styles.textFlexBox]}>􁁌</Text>
          </Pressable>
          <Pressable
            style={[styles.climate, styles.lockLayout]}
            onPress={() => navigation.navigate("ChargeSpeed")}
          >
            <Text style={[styles.text2, styles.textFlexBox]}>􀋦</Text>
          </Pressable>
          <Image
            style={[styles.climate, styles.lockLayout]}
            resizeMode="cover"
            source={require("../assets/open.png")}
          />
        </View>
        <View style={[styles.controlContentWrapper, styles.middleIconPosition]}>
          <View style={[styles.controlContent, styles.tabBarPosition]}>
            <View style={[styles.control, styles.titleFlexBox]}>
              <Image
                style={styles.motorcycle51}
                resizeMode="cover"
                source={require("../assets/motorcycle-5-1.png")}
              />
              <View style={[styles.controlInner, styles.containerFlexBox]}>
                <View style={styles.controlParent}>
                  <Text style={[styles.control1, styles.textFlexBox]}>
                    Control
                  </Text>
                  <Text style={[styles.interior20C, styles.interior20Typo]}>
                    Interior 20° C
                  </Text>
                </View>
              </View>
              <View style={styles.lockLayout}>
                <Text style={[styles.text3, styles.textFlexBox]}>􀆊</Text>
              </View>
            </View>
            <View style={[styles.control, styles.titleFlexBox]}>
              <View style={[styles.parent, styles.parentFlexBox]}>
                <Text style={[styles.text4, styles.textFlexBox]}>􁁌</Text>
                <View style={styles.climateParent}>
                  <Text style={[styles.control1, styles.textFlexBox]}>
                    Climate
                  </Text>
                  <Text style={[styles.interior20C1, styles.interior20Typo]}>
                    Interior 20° C
                  </Text>
                </View>
              </View>
              <View style={styles.lockLayout}>
                <Text style={[styles.text3, styles.textFlexBox]}>􀆊</Text>
              </View>
            </View>
            <View style={[styles.control, styles.titleFlexBox]}>
              <View style={[styles.parent, styles.parentFlexBox]}>
                <Text style={[styles.text4, styles.textFlexBox]}>􀋒</Text>
                <View style={styles.climateParent}>
                  <Text style={[styles.control1, styles.textFlexBox]}>
                    Location
                  </Text>
                  <Text style={[styles.interior20C1, styles.interior20Typo]}>
                    81 rue St-Chales
                  </Text>
                </View>
              </View>
              <View style={styles.lockLayout}>
                <Text style={[styles.text3, styles.textFlexBox]}>􀆊</Text>
              </View>
            </View>
            <View style={[styles.control, styles.titleFlexBox]}>
              <View style={[styles.container, styles.containerFlexBox]}>
                <Text style={[styles.text4, styles.textFlexBox]}>􁁌</Text>
                <View style={styles.climateParent}>
                  <Text style={[styles.control1, styles.textFlexBox]}>
                    Security
                  </Text>
                  <Text style={[styles.interior20C, styles.interior20Typo]}>
                    Interior 20° C
                  </Text>
                </View>
              </View>
              <View style={styles.lockLayout}>
                <Text style={[styles.text3, styles.textFlexBox]}>􀆊</Text>
              </View>
            </View>
            <View style={[styles.control, styles.titleFlexBox]}>
              <View style={[styles.container, styles.containerFlexBox]}>
                <Text style={[styles.text4, styles.textFlexBox]}>􁁌</Text>
                <View style={styles.climateParent}>
                  <Text style={[styles.control1, styles.textFlexBox]}>
                    Security
                  </Text>
                  <Text style={[styles.interior20C, styles.interior20Typo]}>
                    Interior 20° C
                  </Text>
                </View>
              </View>
              <View style={styles.lockLayout}>
                <Text style={[styles.text3, styles.textFlexBox]}>􀆊</Text>
              </View>
            </View>
            <View style={[styles.control, styles.titleFlexBox]}>
              <View style={[styles.container, styles.containerFlexBox]}>
                <Text style={[styles.text4, styles.textFlexBox]}>􁁌</Text>
                <View style={styles.climateParent}>
                  <Text style={[styles.control1, styles.textFlexBox]}>
                    Security
                  </Text>
                  <Text style={[styles.interior20C, styles.interior20Typo]}>
                    Interior 20° C
                  </Text>
                </View>
              </View>
              <View style={styles.lockLayout}>
                <Text style={[styles.text3, styles.textFlexBox]}>􀆊</Text>
              </View>
            </View>
            <View style={[styles.control, styles.titleFlexBox]}>
              <View style={[styles.container, styles.containerFlexBox]}>
                <Text style={[styles.text4, styles.textFlexBox]}>􁁌</Text>
                <View style={styles.climateParent}>
                  <Text style={[styles.control1, styles.textFlexBox]}>
                    Security
                  </Text>
                  <Text style={[styles.interior20C, styles.interior20Typo]}>
                    Interior 20° C
                  </Text>
                </View>
              </View>
              <View style={styles.lockLayout}>
                <Text style={[styles.text3, styles.textFlexBox]}>􀆊</Text>
              </View>
            </View>
            <View style={[styles.control, styles.titleFlexBox]}>
              <View style={[styles.container, styles.containerFlexBox]}>
                <Text style={[styles.text4, styles.textFlexBox]}>􁁌</Text>
                <View style={styles.climateParent}>
                  <Text style={[styles.control1, styles.textFlexBox]}>
                    Security
                  </Text>
                  <Text style={[styles.interior20C, styles.interior20Typo]}>
                    Interior 20° C
                  </Text>
                </View>
              </View>
              <View style={styles.lockLayout}>
                <Text style={[styles.text3, styles.textFlexBox]}>􀆊</Text>
              </View>
            </View>
            <View style={[styles.control, styles.titleFlexBox]}>
              <View style={[styles.container, styles.containerFlexBox]}>
                <Text style={[styles.text4, styles.textFlexBox]}>􁁌</Text>
                <View style={styles.climateParent}>
                  <Text style={[styles.control1, styles.textFlexBox]}>
                    Security
                  </Text>
                  <Text style={[styles.interior20C, styles.interior20Typo]}>
                    Interior 20° C
                  </Text>
                </View>
              </View>
              <View style={styles.lockLayout}>
                <Text style={[styles.text3, styles.textFlexBox]}>􀆊</Text>
              </View>
            </View>
            <View style={[styles.control, styles.titleFlexBox]}>
              <View style={[styles.container, styles.containerFlexBox]}>
                <Text style={[styles.text4, styles.textFlexBox]}>􁁌</Text>
                <View style={styles.climateParent}>
                  <Text style={[styles.control1, styles.textFlexBox]}>
                    Security
                  </Text>
                  <Text style={[styles.interior20C, styles.interior20Typo]}>
                    Interior 20° C
                  </Text>
                </View>
              </View>
              <View style={styles.lockLayout}>
                <Text style={[styles.text3, styles.textFlexBox]}>􀆊</Text>
              </View>
            </View>
            <View style={[styles.control, styles.titleFlexBox]}>
              <View style={[styles.container, styles.containerFlexBox]}>
                <Text style={[styles.text4, styles.textFlexBox]}>􁁌</Text>
                <View style={styles.climateParent}>
                  <Text style={[styles.control1, styles.textFlexBox]}>
                    Security
                  </Text>
                  <Text style={[styles.interior20C, styles.interior20Typo]}>
                    Interior 20° C
                  </Text>
                </View>
              </View>
              <View style={styles.lockLayout}>
                <Text style={[styles.text3, styles.textFlexBox]}>􀆊</Text>
              </View>
            </View>
            <View style={[styles.control, styles.titleFlexBox]}>
              <View style={[styles.container, styles.containerFlexBox]}>
                <Text style={[styles.text4, styles.textFlexBox]}>􁁌</Text>
                <View style={styles.climateParent}>
                  <Text style={[styles.control1, styles.textFlexBox]}>
                    Security
                  </Text>
                  <Text style={[styles.interior20C, styles.interior20Typo]}>
                    Interior 20° C
                  </Text>
                </View>
              </View>
              <View style={styles.lockLayout}>
                <Text style={[styles.text3, styles.textFlexBox]}>􀆊</Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={styles.image54Icon}
          resizeMode="cover"
          source={require("../assets/image-54.png")}
        />
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
          <Text style={[styles.text26, styles.textTypo]}>􀉪</Text>
        </View>
        <View style={[styles.homeindicator, styles.titlePosition]}>
          <View style={[styles.homeIndicator, styles.plusIconPosition]} />
        </View>
      </View>
      <View style={[styles.tabBar, styles.tabBarPosition]}>
        <Image
          style={styles.tabBarChild}
          resizeMode="cover"
          source={require("../assets/rectangle-42.png")}
        />
        <View style={[styles.vectorParent, styles.frameChildPosition]}>
          <Image
            style={[styles.frameChild, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <View style={styles.motorcycle31Parent}>
            <Image
              style={styles.motorcycle51}
              resizeMode="cover"
              source={require("../assets/motorcycle-3-1.png")}
            />
            <Pressable
              style={styles.lockLayout}
              onPress={() => navigation.navigate("ChargeSpeed")}
            >
              <Image
                style={[styles.sizeGuideIcon, styles.frameChildLayout]}
                resizeMode="cover"
                source={require("../assets/size-guide.png")}
              />
              <Text style={[styles.symbol, styles.symbolPosition]}>􀋦</Text>
            </Pressable>
            <View style={styles.lockLayout}>
              <Image
                style={[styles.sizeGuideIcon, styles.frameChildLayout]}
                resizeMode="cover"
                source={require("../assets/size-guide1.png")}
              />
              <Image
                style={[styles.tradeChild, styles.lockLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-803.png")}
              />
              <Text style={[styles.symbol1, styles.symbol1Typo]}>􀄭</Text>
            </View>
            <View style={styles.lockLayout}>
              <Image
                style={[styles.sizeGuideIcon, styles.frameChildLayout]}
                resizeMode="cover"
                source={require("../assets/size-guide2.png")}
              />
              <Text style={[styles.symbol, styles.symbolPosition]}>􀎫</Text>
            </View>
            <View style={styles.lockLayout}>
              <Image
                style={[styles.sizeGuideIcon, styles.frameChildLayout]}
                resizeMode="cover"
                source={require("../assets/size-guide3.png")}
              />
              <Text style={[styles.symbol, styles.symbolPosition]}>􀉪</Text>
            </View>
          </View>
        </View>
        <View style={[styles.plusIcon, styles.plusIconLayout]}>
          <Image
            style={[styles.plusIconChild, styles.text27Position]}
            resizeMode="cover"
            source={require("../assets/ellipse-808.png")}
          />
          <Text style={[styles.text27, styles.text27Position]}>􀅼</Text>
        </View>
      </View>
      <LinearGradient
        style={[styles.topNav, styles.parentFlexBox]}
        locations={[0, 0.73, 1]}
        colors={["#292c31", "#292c31", "rgba(41, 44, 49, 0)"]}
        useAngle={true}
        angle={180}
      >
        <Text style={[styles.olaElectric, styles.symbol1Typo]}>
          Ola Electric
        </Text>
      </LinearGradient>
      <View style={[styles.title, styles.titlePosition]}>
        <View style={styles.title1}>
          <Text style={[styles.interior20C1, styles.interior20Typo]}>
            􀺸 187 km
          </Text>
        </View>
        <View style={[styles.profil, styles.profilLayout]}>
          <Image
            style={[styles.profilChild, styles.profilLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-26.png")}
          />
          <Text style={[styles.text28, styles.textTypo]}>􀓤</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  lockLayout: {
    height: 44,
    width: 44,
  },
  middleIconPosition: {
    right: 29,
    left: 30,
    position: "absolute",
  },
  tabBarPosition: {
    right: 0,
    position: "absolute",
  },
  titleFlexBox: {
    paddingHorizontal: Padding.p_11xl,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  containerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  interior20Typo: {
    fontFamily: FontFamily.defaultBoldFootnote,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  buttonLayout: {
    height: 62,
    width: 62,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "700",
    left: 18,
    textAlign: "center",
    fontFamily: FontFamily.defaultRegularLargeTitle,
    letterSpacing: 0,
    position: "absolute",
  },
  titlePosition: {
    left: 8,
    position: "absolute",
  },
  plusIconPosition: {
    left: "50%",
    position: "absolute",
  },
  frameChildPosition: {
    height: 78,
    bottom: 0,
    right: 0,
    left: 0,
  },
  frameChildLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  symbolPosition: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.defaultBoldFootnote,
    height: 44,
    width: 44,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  symbol1Typo: {
    color: Color.labelColorDarkPrimary,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0,
  },
  plusIconLayout: {
    height: 68,
    width: 68,
    marginLeft: -34,
  },
  text27Position: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  profilLayout: {
    height: 61,
    width: 100,
  },
  neonBackgroundIcon: {
    top: 145,
    left: 39,
    width: 308,
    height: 265,
    position: "absolute",
  },
  neonBackground1: {
    top: 372,
    backgroundColor: "rgba(86, 204, 242, 0.31)",
    width: 330,
    height: 92,
    display: "none",
    left: 30,
    position: "absolute",
  },
  text: {
    left: 11,
    color: Color.labelColorDarkTertiary,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    textAlign: "center",
    letterSpacing: 0,
    top: 10,
    position: "absolute",
  },
  text1: {
    left: 9,
    color: Color.labelColorDarkTertiary,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    textAlign: "center",
    letterSpacing: 0,
    top: 10,
    position: "absolute",
  },
  climate: {
    marginLeft: 38,
  },
  text2: {
    left: 12,
    color: Color.labelColorDarkTertiary,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    textAlign: "center",
    letterSpacing: 0,
    top: 10,
    position: "absolute",
  },
  middleIcon: {
    top: 415,
    borderRadius: Border.br_31xl,
    backgroundColor: "#27282a",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 20,
    elevation: 20,
    height: 74,
    padding: Padding.p_11xl,
    flexDirection: "row",
    justifyContent: "center",
    right: 29,
    left: 30,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 36,
      height: 40,
    },
  },
  motorcycle51: {
    width: 33,
    height: 30,
  },
  control1: {
    color: Color.labelColorDarkSecondary,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    textAlign: "center",
    letterSpacing: 0,
  },
  interior20C: {
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.labelColorDarkSecondary,
    display: "none",
  },
  controlParent: {
    width: 108,
  },
  controlInner: {
    width: 184,
  },
  text3: {
    left: 14,
    color: Color.labelColorDarkQuaternary,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    textAlign: "center",
    letterSpacing: 0,
    top: 10,
    position: "absolute",
  },
  control: {
    alignSelf: "stretch",
    paddingVertical: Padding.p_xl,
  },
  text4: {
    color: Color.labelColorDarkTertiary,
    fontFamily: FontFamily.defaultRegularLargeTitle,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.defaultBoldTitle3_size,
    textAlign: "center",
    letterSpacing: 0,
  },
  interior20C1: {
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    fontFamily: FontFamily.defaultBoldFootnote,
    color: Color.labelColorDarkTertiary,
  },
  climateParent: {
    marginLeft: 10,
    width: 108,
  },
  parent: {
    width: 145,
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    width: 131,
  },
  controlContent: {
    paddingTop: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    top: 0,
    borderRadius: Border.br_21xl,
    right: 0,
  },
  controlContentWrapper: {
    top: 544,
    backgroundColor: Color.colorGray_500,
    borderColor: Color.labelColorDarkPrimary,
    borderWidth: 1,
    height: 807,
    borderStyle: "solid",
    right: 29,
    borderRadius: Border.br_21xl,
  },
  image54Icon: {
    top: 105,
    left: 13,
    width: 359,
    height: 305,
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
  text26: {
    top: 17,
    fontSize: FontSize.size_5xl,
    color: Color.labelColorDarkTertiary,
  },
  button: {
    top: 50,
    left: 309,
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
    right: 6,
    height: 34,
    bottom: 0,
  },
  clipContent: {
    width: 389,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  tabBarChild: {
    bottom: 15,
    left: 16,
    borderRadius: Border.br_7xl,
    width: 40,
    height: 40,
    position: "absolute",
  },
  frameChild: {
    height: 78,
    bottom: 0,
    right: 0,
    left: 0,
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
  },
  symbol: {
    display: "flex",
    color: Color.labelColorDarkSecondary,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_3xl,
  },
  tradeChild: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  symbol1: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.defaultBoldFootnote,
    height: 44,
    width: 44,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
    display: "none",
  },
  motorcycle31Parent: {
    right: 22,
    bottom: 17,
    left: 22,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  vectorParent: {
    position: "absolute",
  },
  plusIconChild: {
    marginTop: -34,
    height: 68,
    width: 68,
    marginLeft: -34,
  },
  text27: {
    marginTop: -21,
    marginLeft: -20,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.defaultBoldFootnote,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  plusIcon: {
    bottom: 62,
    left: "50%",
    position: "absolute",
  },
  tabBar: {
    height: 130,
    bottom: 0,
    left: 0,
  },
  olaElectric: {
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_5xl,
  },
  topNav: {
    top: 55,
    left: 26,
    height: 27,
    paddingBottom: Padding.p_3xs,
    position: "absolute",
    backgroundColor: "transparent",
  },
  title1: {
    height: 57,
  },
  profilChild: {
    right: 0,
    position: "absolute",
    top: 0,
  },
  text28: {
    fontSize: FontSize.defaultRegularLargeTitle_size,
    lineHeight: 41,
    color: Color.labelColorLightSecondary,
    top: 10,
    display: "none",
  },
  profil: {
    display: "none",
  },
  title: {
    top: 78,
    width: 168,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_11xl,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  homePage: {
    shadowColor: "rgba(0, 0, 0, 0.19)",
    shadowRadius: 56,
    elevation: 56,
    borderColor: Color.colorGray_600,
    borderWidth: 2,
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    overflow: "hidden",
    height: 844,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 36,
      height: 40,
    },
    borderRadius: Border.br_21xl,
  },
});

export default HomePage;
