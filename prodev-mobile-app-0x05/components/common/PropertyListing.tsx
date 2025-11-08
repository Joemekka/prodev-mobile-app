import { View, Text } from "react-native";
import PropertyListingCard from "@/components/common/PropertyListingCard";
import { useState } from "react";
import { PropertListing, PropertyListingProps } from "@/interfaces";
import { styles } from "@/styles/_joinstyle";

const PropertyListing = ({ listings }: PropertListing) => {
  return (
    <View
      style={{
        flex: 1,
        rowGap: 10,
      }}
    >
      {listings.map((listing, index) => (
        <PropertyListingCard {...listing} key={index} />
      ))}
    </View>
  );
};
export default PropertyListing;
