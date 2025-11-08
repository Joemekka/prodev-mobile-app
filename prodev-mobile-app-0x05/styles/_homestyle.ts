import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  // MAIN CONTAINER
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },

  // SEARCH SECTION
  searchGroup: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  searchControl: {
    borderWidth: 0,
    paddingVertical: 4,
    color: "#666",
  },
  searchButton: {
    backgroundColor: "#FF385C", // Airbnb red-pink
    borderRadius: 50,
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },

  // FILTER SECTION
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    width: 72,
  },
  filterImage: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  filterText: {
    fontSize: 12,
    color: "#333",
  },

  // LISTINGS SECTION
  listingContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: 15,
  },

  // PAGINATION
  paginationContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 25,
  },
  showMoreButton: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 25,
    elevation: 1,
  },
  showMoreButtonText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
  },
});
export default styles;
