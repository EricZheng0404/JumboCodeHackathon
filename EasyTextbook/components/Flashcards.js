import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import FlipCard from './FlipCard'; // Adjust the import path as needed

// Example data - in practice, this could be fetched from a server or local storage
const flashcards = {
  ACT: [{ 
    question: `Q: Iraqi artist Nazik Al-Malaika, celebrated as the first Arabic poet to write
     in free verse, didn’t reject traditional forms entirely; her poem “Elegy for a Woman of No
     Importance” consists of two ten-line stanzas and a standard number of syllables. Even in 
     this superficially traditional work, ______ Al-Malaika was breaking new ground by 
     memorializing an anonymous woman rather than a famous man. Which choice completes the 
     text with the most logical transition?

        A) in fact,
        B) though,
        C) therefore,
        D) moreover,`,
  answer: ` A: Choice B is the best answer. The passage’s first sentence establishes that although
    Al-Malaika is famous for her free verse poetry, she still made some use of traditional poetic
    forms, as in her work “Elegy for a Woman of No Importance.” The passage’s last sentence
    qualifies the point made in the passage’s first sentence by indicating that even when Al-Malaika  
    used traditional forms, as in “Elegy,” she challenged tradition, in this case by making an 
    “anonymous woman rather than a famous man” the subject of the poem. “Though” is the best transition
     for the passage’s last sentence because, along with “even,” it signals that AlMalaika subverted 
     traditional poetic forms even when she used them by, in this case, using a nontraditional subject
    for an elegy` }, 
    { question: `Q: According to Naomi Nakayama of the University of Edinburgh, the reason seeds from
     a dying dandelion appear to float in the air while ______ is that their porous plumes enhance drag,
    allowing the seeds to stay airborne long enough for the wind to disperse them throughout the 
    surrounding area. Which choice completes the text so that it conforms to the conventions of
     Standard English?

  A) falling,
  B) falling:
  C) falling;
  D) falling`, 
  answer: `A: Key Explanation: Choice D is the best answer. No punctuation is needed.`},
{question: `Q: Rabinal Achí is a precolonial Maya dance drama performed annually in Rabinal, 
  a town in the Guatemalan highlands. Based on events that occurred when Rabinal was a 
  city-state ruled by a king, ______ had once been an ally of the king but was later captured
  while leading an invading force against him. Which choice completes the text so that it 
  conforms to the conventions of Standard English?

  A) Rabinal Achí tells the story of K’iche’ Achí, a military leader who
  B) K’iche’ Achí, the military leader in the story of Rabinal Achí,
  C) there was a military leader, K’iche’ Achí, who in Rabinal Achí
  D) the military leader whose story is told in Rabinal Achí, K’iche’ Achí`, 
  answer: `A: Choice A is the best answer. This choice ensures that the introductory participial
   phrase “Based on events that occurred when Rabinal was a citystate ruled by a king” appears 
   immediately before the noun it modifies, “Rabinal Achí."`}, 
   
   {question: `Q: If f(x) = x + 7 and g(x) = 7x, what is the value of 4f(2) − g(2)?

  A) −5
  B) 1
  C) 22
  D) 28`, 
  answer: `A: Choice C is correct. The value of f (2) can be found by substituting 2 for x 
  in the given equation f (x) = x + 7, which yields f (2) = 2 + 7, or f (2) = 9. 
  The value of g(2) can be found by substituting 2 for x in the given equation g(x) = 7x, 
  which yields g(2) = 7(2), or g(2) = 14. The value of the expression 4f (2) − g(2) can be 
  found by substituting the corresponding values into the expression, which gives
  4(9) − 14. This expression is equivalent to 36 − 14, or 22`, }, 
  
  {question: `Q: The y-intercept of the graph of y = −6x − 32 in the xy-plane is (0, y). 
  What is the value of y ?`, 
  answer: `A: The correct answer is −32. It’s given that the y-intercept of the graph 
  of y = −6x − 32 is (0, y). Substituting 0 for x in this equation yields y = −6(0) − 32
  or y = −32. Therefore, the value of y that corresponds to the y-intercept of the graph 
  of y = −6x − 32 in the xy-plane is −32.`},
{question: `Q: Figure A and figure B are both regular polygons. The sum of the perimeter of 
figure A and the perimeter of figure B is 63 inches. The equation 3x + 6y = 63 represents 
this situation, where x is the number of sides of figure A and y is the number of sides
 of figure B. Which statement is the best interpretation of 6 in this context?

  A) Each side of figure B has a length of 6 inches.
  B) The number of sides of figure B is 6.
  C) Each side of figure A has a length of 6 inches.
  D) The number of sides of figure A is 6.`, 
  
  answer: `A: Choice A is correct. It’s given that figure A and figure B (not shown) are 
  both regular polygons and the sum of the perimeters of the two figures is 63 inches.
  It’s also given that x is the number of sides of figure A and y is the number of sides
  of figure B, and that the equation 3x + 6y = 63 represents this situation. Thus, 3x 
  and 6y represent the perimeters, in inches, of figure A and figure B, respectively. 
  Since 6y represents the perimeter, in inches, of figure B and y is the number of sides
  of figure B, it follows that each side of figure B has a length of 6 inches.`}],
  SAT: [{ question: 
    `Q: To dye wool, Navajo (Diné) weaver Lillie Taylor uses  plants and vegetables from 
    Arizona, where she lives. For example, she achieved the deep reds and browns featured
    in her 2003 rug In the Path of the Four Seasons by using Arizona dock roots, drying and 
    grinding them before mixing the powder with water to create a dye bath. To intensify the
    appearance of certain colors, Taylor also sometimes mixes in clay obtained from nearby soil.
    Which choice best states the main idea of the text?

    A) Reds and browns are not commonly featured in most of Taylor’s rugs.
     B) In the Path of the Four Seasons is widely acclaimed for its many colors and innovative
      weaving techniques.
  C) Taylor draws on local resources in the approach she uses to dye wool.
  D) Taylor finds it difficult to locate Arizona dock root in the desert.`,
   answer: `A: Choice C is the best answer. The passage focuses on the idea that the artist Lillie 
   Taylor uses resources such as plants and vegetables from where she lives in Arizona to make dyes 
   for wool. ` }, 
  { question: `Q: “Ghosts of the Old Year” is an early 1900s poem by James Weldon Johnson. In the 
  poem, the speaker describes experiencing an ongoing cycle of anticipation followed by regretful
   reflection: ______ Which quotation from “Ghosts of the Old Year” most effectively illustrates
   the claim?

  A) “The snow has ceased its fluttering flight, / The wind sunk to a whisper light, /
   An ominous stillness fills the night, / A pause—a hush.”
  B) “And so the years go swiftly by, / Each, coming, brings ambitions high, /
   And each, departing, leaves a sigh / Linked to the past.”
  C) “What does this brazen tongue declare, / That falling on the midnight air / 
  Brings to my heart a sense of care / Akin to fright?”
  D) “It tells of many a squandered day, / Of slighted gems and treasured clay, /
   Of precious stores not laid away, / Of fields unreaped.`,
   
   answer: `A: Choice B is the best answer. The quotation addresses both aspects of the
    claim: cycles of anticipation (“Each, coming, brings ambitions high”) and regretful 
    reflection (“And each, departing, leaves a sigh / Linked to the past”).` }, 
    {question: `Q: The following text is from F. Scott Fitzgerald’s 1925 novel The Great Gatsby.
    [Jay Gatsby] was balancing himself on the dashboard of  his car with that resourcefulness
     of movement that is so peculiarly American—that comes, I suppose, with the absence of 
     lifting work in youth and, even more, with the formless grace of our nervous, sporadic
      games. This  quality was continually breaking through his punctilious manner in the 
      shape of restlessness. As used in the text, what does the word “quality” most nearly mean?

  A) Characteristic
  B) Standard
  C) Prestige
  D) Accomplishment`,
  
  answer: `A: Choice A is the best answer. As used in the last sentence of the passage, “quality”
   refers to a trait or attribute (“characteristic”)—specifically, Jay Gatsby’s “resourcefulness of
    movement,” which manifested as restlessness.`}, 
{question: `Q: Many animals, including humans, must sleep, and sleep is known to have a role in 
everything from healing injuries to encoding information in long-term memory. But some scientists
 claim that, from an evolutionary standpoint, deep sleep for hours at a time leaves an animal so
  vulnerable that the known benefits of sleeping seem insufficient to explain why it became so
widespread in the animal kingdom. These scientists therefore imply that ______ 
Which choice most logically completes the text?

A) it is more important to understand how widespread prolonged deep sleep is than to understand its
function.
B) prolonged deep sleep is likely advantageous in ways that have yet to be discovered.
C) many traits that provide significant benefits for an animal also likely pose risks to that animal.
D) most traits perform functions that are hard to understand from an evolutionary standpoint.`,

answer: `A: Choice B is the best answer. The passage indicates that although scientists recognize that
sleep, which is widespread among animal species, has benefits, some scientists believe that deep, 
prolonged sleep is so risky from the perspective of animal species’ survival and well-being that 
there must be some so-farundiscovered advantage(s) to sleep to make it worthwhile from an evolutionary
 standpoint. `},
  {question: `Q: In recommending Bao Phi’s collection Sông I Sing, a librarian noted that pieces by the
   spoken-word poet don’t lose their ______ nature when printed: the language has the same pleasant 
   musical quality on the page as it does when performed by Phi. Which choice completes the text with 
   the most logical and precise word or phrase?

A) jarring
B) scholarly
C) melodic
D) personal`,
 answer: `A: Choice C is the best answer. “Melodic,” referring to a pleasant arrangement of sounds,
  effectively signals the later use in the passage of “pleasant musical quality” to refer to Phi’s
   spoken-word poetry when read rather than heard.`}],
  GRE: [{ question: `Q: In parts of the Arctic, the land grades into the landfast ice so
  that you can walk off the coast and not know you are over the hidden sea.
  
  (A) permanently
  (B) imperceptibly
  (C) irregularly
  (D) precariously
  (E) relentlessly `,
   answer: `A: The word that fills the blank has to characterize how the land grades into the ice in a way 
   that explains how you can walk off the coast and over the sea without knowing it. The word that
   does that is “imperceptibly” if the land grades imperceptibly into the ice, you might well not
   know that you had left the land. Describing the shift from land to ice as permanent, irregular,
    precarious or relentless would not help to explain how you would fail to know. Thus, the correct
     answer is Choice B (imperceptibly).` }, 
     { question: `Q: Although it does contain some pioneering ideas, one would hardly characterize the work as:

  A. orthodox
  B. eccentric
  C. original
  D. trifling
  E. conventional
  F. innovative`, 
  
  answer: `A: The word “Although” is a crucial signpost here. The work contains some pioneering ideas, but
  apparently it is not overall a pioneering work. Thus, the two words that could fill the blank
  appropriately are “original” and “innovative.” Note that “orthodox” and “conventional” are two
  words that are very similar in meaning, but neither one completes the sentence sensibly.
  Thus, the correct answer is Choice C (original) and Choice F (innovative).` },
  
  {question: `Q: It was her view that the country’s problems had been by foreign technocrats, so that
  to ask for such assistance again would be counterproductive.

  A. ameliorated
  B. ascertained
  C. diagnosed
  D. exacerbated
  E. overlooked
  F. worsened`, 
  answer: `A: The sentence relates a piece of reasoning, as indicated by the presence of “so that”: asking for
  the assistance of foreign technocrats would be counterproductive because of the effects such
  technocrats have had already. This means that the technocrats must have bad effects; i.e., they
  must have “exacerbated” or “worsened” the country’s problems.
  Thus, the correct answer is Choice D (exacerbated) and Choice F (worsened).`},
  
  {question: `Q: A certain jar contains 60 jelly beans — 22 white, 18 green, 11 yellow, 5 red, and 4 purple. If a
  jelly bean is to be chosen at random, what is the probability that the jelly bean will be neither
  red nor purple?

  A. 0.09
  B. 0.15
  C. 0.54
  D. 0.85
  E. 0.91`, 
  answer: `A: Since there are 5 red and 4 purple jelly beans in the jar, there are 51 that are neither red nor
  purple and the probability of selecting one of these is Since all of the answer choices are
  decimals, you must convert the fraction to its decimal equivalent, 0.85. Thus, the correct
  answer is Choice D, 0.85.`}],
};

const FlashcardPage = () => {
  const [selectedTest, setSelectedTest] = useState('ACT');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : 0);
  };

  const handleNext = () => {
    setCurrentIndex(prev => prev < flashcards[selectedTest].length - 1 ? prev + 1 : prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectorContainer}>
        <Button title="ACT" onPress={() => setSelectedTest('ACT')} />
        <Button title="SAT" onPress={() => setSelectedTest('SAT')} />
        <Button title="GRE" onPress={() => setSelectedTest('GRE')} />
      </View>
      <FlipCard 
        question={flashcards[selectedTest][currentIndex].question} 
        answer={flashcards[selectedTest][currentIndex].answer} 
      />
      <View style={styles.navigationContainer}>
        <Button title="Prev" onPress={handlePrev} />
        <Text>{currentIndex + 1} of {flashcards[selectedTest].length}</Text>
        <Button title="Next" onPress={handleNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '10%',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
  },
});

export default FlashcardPage;
