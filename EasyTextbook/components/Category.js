// Import necessary components from React Native
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Linking } from 'react-native';

const CategoriesScreen = () => {
  // Define the sections and their resources
  const sections = [
    {
      name: "Reading",
      subsections: ["Big Picture Questions", "Detail Questions", "Inference", "Vocabulary in Context", "Function", "Author Technique", "Evidence Support", "Data interpretation"],
      resources: ["https://blog.prepscholar.com/big-picture-questions-in-sat-reading-strategies-tips", "https://blog.prepscholar.com/little-picture-questions-in-sat-reading", "https://blog.prepscholar.com/inference-questions-on-sat-reading-6-strategies", "https://blog.prepscholar.com/vocab-in-context-questions-and-strategies-for-sat-reading", "https://blog.prepscholar.com/function-questions-on-sat-reading-5-strategies-with-practice", "https://blog.prepscholar.com/author-technique-questions-in-sat-reading", "https://blog.prepscholar.com/command-of-evidence-sat-reading", "https://blog.prepscholar.com/data-graphics-sat-reading-and-writing"]
    },
    {
      name: "Writing",
      subsections: ["Command of Evidence", "Words in Context", "Expression of Ideas", "Standard English Conventions"],
      resources: ["https://www.khanacademy.org/test-prep/sat-reading-and-writing/x0d47bcec73eb6c4b:foundations/x0d47bcec73eb6c4b:command-of-evidence-textual/a/command-of-evidence-textual-lesson", "https://www.khanacademy.org/test-prep/sat-reading-and-writing/x0d47bcec73eb6c4b:foundations/x0d47bcec73eb6c4b:words-in-context/a/words-in-context-lesson", "https://satsuite.collegeboard.org/media/pdf/official-sat-study-guide-writing-language-expression-ideas.pdf", "https://www.usnews.com/education/blogs/college-admissions-playbook/articles/how-to-practice-writing-conventions-for-act-sat"]
    },
    {
      name: "Math",
      subsections: ["Heart of Algebra", "Problem Solving and Data Analysis", "Passport to Advanced Math", "Additional Topics in Math"],
      resources: ["https://blog.prepscholar.com/heart-of-algebra-sat-math", "https://blog.prepscholar.com/problem-solving-and-data-analysis-sat-math", "https://satsuite.collegeboard.org/media/pdf/official-sat-study-guide-passport-advanced-math.pdf", "https://satsuite.collegeboard.org/media/pdf/official-sat-study-guide-additional-topics-math.pdf"]
    },
  ];

  // Function to render each subsection
  const renderSubsection = (subsection, index, resources) => (
    <TouchableOpacity key={index} style={styles.subsectionItem} onPress={() => Linking.openURL(resources[index])}>
      <Text style={styles.subsectionLink}>{subsection}</Text>
    </TouchableOpacity>
  );

  // Function to render each section
  const renderSection = (section) => (
    <View key={section.name} style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{section.name}</Text>
      {section.subsections.map((subsection, index) => renderSubsection(subsection, index, section.resources))}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {sections.map(renderSection)}
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center', // Center the content
    height: 200
  },
  sectionContainer: {
    width: '100%', // Take full width to respect the padding
    marginBottom: 30,
    alignItems: 'center', // Center the section titles
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  subsectionItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#e7e7e7', // Slightly darker background for contrast
    borderRadius: 10,
    marginBottom: 10,
    width: '40%', // Ensure full width for easier tapping
  },
    subsectionLink: {
      fontSize: 16,
      color: '#007bff', // Hyperlink-like color
      textDecorationLine: 'underline', // Underline to suggest it's clickable
      textAlign: 'center', // Center the text
    },
  });
  
  export default CategoriesScreen;