import React from "react";
import { Text, StyleSheet, SectionList, TouchableOpacity } from "react-native";
import LibrarySectionHeader from "./LibrarySectionHeader";

import PropTypes from "prop-types";
import LibrarySectionRow from "./LibrarySectionRow";

const LibraryList = ({ data, onLibraryRow = article => {} }) => {
  data[1].data = data[1].data.slice(0, 10); // TODO: Remove this
  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => `${index}`}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => onLibraryRow(item)}>
          <LibrarySectionRow item={item} index={index} />
        </TouchableOpacity>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <LibrarySectionHeader title={title} />
      )}
    />
  );
};

const styles = StyleSheet.create({});

LibraryList.propTypes = {
  data: PropTypes.array,
  onLibraryRow: PropTypes.func
};

export default LibraryList;
