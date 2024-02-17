import React from 'react';
import { View, Text } from 'react-native';

function ContactScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contact Screen</Text>
      <div>
        <PartnerForm />
      </div>
    </View>
  );
}

function PartnerForm() {
  return (
    <form>
        <label for="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname"></input><br/>
        <label for="number">Phone number:</label><br/>
        <input type="text" id="number" name="number"></input><br/>
        <label for="test">Studying for:</label>
        <select id="test" name="test">
            <option value="sat">SAT</option>
            <option value="psat">PSAT</option>
            <option value="gre">GRE</option>
        </select><br/>
        <input type="submit" value="Submit"></input>
    </form>
  );
}

export default ContactScreen;