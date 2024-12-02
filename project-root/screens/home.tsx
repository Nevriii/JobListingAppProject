import React from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  
  const popularJobs = [
    "Virtual Assistant",
    "Graphic Designer",
    "Web Developer",
    "Data Analyst",
    "Content Writer"
  ];

  const jobFilter = [
    "All Jobs",
    "UI Designer",
    "FE Dev",
    "PM",
    "Graphics Designer",
    "Software Tester"
  ];

  return (
    <View>
      <Text style={styles.header}>Find Your Great Job!</Text>
      
      <View style={styles.container2}>
        <View style={styles.searchBoxContainer}>
          <Icon name="search" size={24} color="#ccc" style={styles.icon} />
          <TextInput
            style={styles.searchBox}
            placeholder="Search a Job"
            placeholderTextColor="#ccc"
          />
        </View>
        <Icon name="filter" size={50} color="#35340F" style={styles.filterIcon} />
      </View>

      <Text style={styles.mostpopularTitle}>Most Popular</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.mostpopularContainer}
      >
        {popularJobs.map((job, index) => (
          <View key={index} style={styles.mostpopularContainerContent}>
            <Text style={styles.mostpopularText}>{job}</Text>
            <Text style={styles.mostpopularTextLocation}>TIP - Cubao, QC</Text>
            <View style={styles.mostpopularTextRequirementsContainer}>
              <Text style={styles.mostpopularTextRequirements}>Full Time</Text>
              <Text style={styles.mostpopularTextRequirements}>Remote</Text>
              <Text style={styles.mostpopularTextRequirements}>Senior</Text>
              <Icon name="bookmark" size={35} color="#FFFFF" style={[styles.filterIcon, {paddingLeft:20}]} />
            </View>
          </View>
        ))}
      </ScrollView>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 5}}
      >
        {jobFilter.map((filterjob, index2) => (
          <View key={index2} style={styles.jobFilterContent}>
            <Text style={styles.jobFilterText}>{filterjob}</Text>
          </View>
        ))}
      </ScrollView>


    </View>
  );
};

const styles = StyleSheet.create({
  
  
  //----- HEADER ----- //
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 60,
  },
  container2: {
    flexDirection: 'row', // Aligns search bar and filter icon side by side
    alignItems: 'center', // Centers items vertically in the row
    justifyContent: 'space-between', // Adds space between the search bar and filter icon
    marginTop: 20,
  },
  searchBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    height: 50,
    flex: 1, // Allows the search box to take up remaining space
    marginRight: 10, // Adds spacing between search bar and filter icon
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
    alignSelf: 'center',
  },
  searchBox: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
  },
  filterIcon: {
    marginLeft: 10, // Optional: Adds a little spacing from the search bar
  },

  //----- Most Popular -----//

  mostpopularContainer: {
    flexDirection: 'row', // Align items horizontally
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 2
  },
  mostpopularContainerContent: {
    padding: 10,
    marginRight: 15, // Add spacing between the cards
    backgroundColor: '#35340F',
    borderRadius: 10,
    width: 270,
    height: 150,
    justifyContent: 'center', // Center the text inside the card
  },
  mostpopularTitle: {
    paddingTop: 20,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 10, // Add spacing between the title and the cards
  },
  mostpopularText: {
    color: '#FFBD59',
    fontSize: 15,
    textAlign: 'left',
  },
  mostpopularTextLocation: {
    color: '#FFBD59',
    fontSize: 12,
    textAlign: 'left',
    paddingTop: 5
  },
  mostpopularTextRequirementsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10
  },
  mostpopularTextRequirements: {
    color: '#00000',
    fontSize: 10,
    backgroundColor: '#FFBD59',
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },

  //----- Job Filter -----//

  jobFilterContainer: {
    paddingTop: 20,
    flexDirection: 'row', // Align items horizontally
    marginHorizontal: 2 , // Slight margin to prevent items from being too close to edges
  },
  jobFilterContent: {
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
    backgroundColor: '#35340F', // Box background
    borderRadius: 15, // Rounded corners
    marginRight: 10, // Space between boxes
    paddingHorizontal: 10, // Adjust padding for dynamic width
    paddingVertical: 4, // Reduced padding for less height
  },
  
  jobFilterText: {
    color: '#FFFFFF', // Text color
    fontSize: 13, // Font size for text
    textAlign: 'center', // Center text alignment
  },
  
  
  
});

export default HomeScreen;
