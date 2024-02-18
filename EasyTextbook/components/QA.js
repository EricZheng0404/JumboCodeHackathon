import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const QAscreen = () => {
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = async () => {
    try {
      const formBody = new URLSearchParams({
        email: email,
        question: question,
      }).toString();
  
      const response = await fetch('https://script.google.com/macros/s/AKfycbwHXMZnOrfhUJ-jyojnnj9QuyskOBinJEMV5iX5UvGuppnE9j_ZaeCOdf2HkAvcyv1LBA/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
      });
  
      if (!response.ok) throw new Error('Network response was not ok.');
  
      // Assuming the server responds with JSON. Adjust if necessary.
      const data = await response.json();
  
      // Use window.alert for web environment
      window.alert('Your question has been submitted successfully!');
  
      // Clear the form fields
      setEmail('');
      setQuestion('');
    } catch (error) {
      console.error('Error:', error);
      // Use window.alert for error handling in web environment
      window.alert('There was a problem with your submission. Please try again.');
    }
  };
  

  // Placeholder for accordion items state (you might want to fetch this data or define it elsewhere)
  const [accordionItems, setAccordionItems] = useState([
    {
      title: 'How Important Are SAT Scores?',
      content: 'The weight placed on SAT scores varies from school to school. Colleges and universities also consider high school grade point average and academic transcript, letters of recommendation, interviews, and personal essays when deciding on admissions. In addition, virtually all U.S. colleges and universities will accept ACT scores in lieu of SAT scores. For more specific information about the weight of your scores, contact the admissions offices of the schools to which you will apply.',
      isOpen: false,
    },
    {
      title: 'When Should I Start Prepping?',
      content: "Give yourself 5 to 12 weeks to  prepare for the SAT . If you prep with us during the summer, we'll give you a  free full–length practice test  and wrap–up course session right before your test in the fall. Learn about our  SAT prep courses . And if you're confused about when to take the SAT, we can help. Learn more about  SAT dates .",
      isOpen: false,
    },
    {
      title: 'How Do I Register for the SAT?',
      content: "SAT registration deadlines fall approximately 5 weeks before each test date. To register by mail, fill out the registration form in the College Board's Bulletin for the SAT Program. You can get a free copy of this publication from your school counselor. Or you can call ETS at 609–771–7600 and they'll send you one free of charge. You can also register online at www.collegeboard.com.",
      isOpen: false,
    },
    // Add other accordion items here
  ]);

  // Function to toggle accordion item
  const toggleAccordionItem = (index) => {
    const newItems = [...accordionItems];
    newItems[index].isOpen = !newItems[index].isOpen;
    setAccordionItems(newItems);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Commonly Asked Questions</Text>
      {accordionItems.map((item, index) => (
        <View key={index} style={styles.accordionItem}>
          <TouchableOpacity style={styles.accordionHeader} onPress={() => toggleAccordionItem(index)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
          {item.isOpen && <Text style={styles.accordionContent}>{item.content}</Text>}
        </View>
      ))}
      <Text style={styles.title}>Ask Us a Question</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Question"
        multiline
        numberOfLines={4}
        value={question}
        onChangeText={setQuestion}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  accordionItem: {
    width: '100%',
    marginBottom: 10,
  },
  accordionHeader: {
    backgroundColor: '#e7e7e7',
    padding: 10,
  },
  accordionContent: {
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  input: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
});


export default QAscreen;
