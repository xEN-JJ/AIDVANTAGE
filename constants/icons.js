import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default {
  home: (props) => (
    <Ionicons name="home-outline" size={22} color={"#222"} {...props} />
  ),
  profile: (props) => (
    <AntDesign name="user" size={22} color={"#222"} {...props} />
  ),
  myApplication: (props) => (
    <MaterialCommunityIcons
      name="file-outline"
      size={22}
      color={"#222"}
      {...props}
    />
  ),
  filter: (props) => (
    <MaterialCommunityIcons name="tune" size={22} color={"#222"} {...props} />
  ),
  pluscircle: (props) => (
    <AntDesign name="pluscircle" size={22} color="black" {...props} />
  ),
};
