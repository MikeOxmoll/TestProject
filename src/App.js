/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';

 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import Post from './components/Post';
 import Header from './components/Header';
import FootBar from './components/FootBar';
 
 
 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
     
   };
 
   return (
     <View style={{flex:1}}>
        <Header/> 
        <ScrollView style={{marginLeft:5, marginRight:5}}>
            <Post
              // photoProfile= '../assets/images/user.png'
              photoProfile = {require('./assets/images/user.png')}
              title='I eat ass for a living'
              pseudo="Cheche"
              nom="Cherif"
            />
            <Post
              // photoProfile= '../assets/images/user.png'
              photoProfile = {require('./assets/images/user.png')}
              title='God i fucking hate this'
              pseudo="Cheche"
              nom="Cherif"
            />
            <Post
              // photoProfile= '../assets/images/user.png'
              photoProfile = {require('./assets/images/user.png')}
              title='Apples or Orange? A never ending debate'
              pseudo="Cheche"
              nom="Cherif"
            />

            <Post
              // photoProfile= '../assets/images/user.png'
              photoProfile = {require('./assets/images/user.png')}
              title='Im going to bash my head open with a fucking baseball bat. Then ill smash this screen and computer with it. Ive had enough of this bullshit. If react were a person id strangle them'
              pseudo="Cheche"
              nom="Cherif"
            />
            <Post
              // photoProfile= '../assets/images/user.png'
              photoProfile = {require('./assets/images/user.png')}
              title='It took him a month to finish the meal.'
              pseudo="Cheche"
              nom="Cherif"
            />
            <Post
              // photoProfile= '../assets/images/user.png'
              photoProfile = {require('./assets/images/user.png')}
              title='Quelquun a trouve le OnlyFans de Illie?'
              pseudo="Cheche"
              nom="Cherif"
            />

            <Post
              // photoProfile= '../assets/images/user.png'
              photoProfile = {require('./assets/images/user.png')}
              title='Je vais demarer le fdp qui ma noter en PSE'
              pseudo="Cheche"
              nom="Cherif"
            />
            <Post
              // photoProfile= '../assets/images/user.png'
              photoProfile = {require('./assets/images/user.png')}
              title='Vous etes chaud de faire patinage vendredi? Cest andy qui paye bien entendue'
              pseudo="Cheche"
              nom="Cherif"
            />
            <Post
              // photoProfile= '../assets/images/user.png'
              photoProfile = {require('./assets/images/user.png')}
              title='Apples or Orange? A never ending debate'
              pseudo="Cheche"
              nom="Cherif"
            />

            <Post
              // photoProfile= '../assets/images/user.png'
              photoProfile = {require('./assets/images/user.png')}
              title='I eat ass for a living'
              pseudo="Cheche"
              nom="Cherif"
            />
            <Post
              // photoProfile= '../assets/images/user.png'
              photoProfile = {require('./assets/images/user.png')}
              title='God i fucking hate this'
              pseudo="Cheche"
              nom="Cherif"
            />
            <Post
              // photoProfile= '../assets/images/user.png'
              photoProfile = {require('./assets/images/user.png')}
              title='Apples or Orange? A never ending debate'
              pseudo="Cheche"
              nom="Cherif"
            />

            <Post
              // photoProfile= '../assets/images/user.png'
              photoProfile = {require('./assets/images/user.png')}
              title='I eat ass for a living'
              pseudo="Cheche"
              nom="Cherif"
            />
            <Post
              // photoProfile= '../assets/images/user.png'
              photoProfile = {require('./assets/images/user.png')}
              title='God i fucking hate this'
              pseudo="Cheche"
              nom="Cherif"
            />
            <Post
              // photoProfile= '../assets/images/user.png'
              photoProfile = {require('./assets/images/user.png')}
              title='Apples or Orange? A never ending debate'
              pseudo="Cheche"
              nom="Cherif"
            />
        </ScrollView>
        <FootBar/>
     </View>
 
 
 
 
    
     // <SafeAreaView style={backgroundStyle}>
     //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
     //   <ScrollView
     //     contentInsetAdjustmentBehavior="automatic"
     //     style={backgroundStyle}>
     //     <Header />
     //     <View
     //       style={{
     //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
     //         flex: 1
     //       }}>
     //       <Section title="Step One">
     //         Edit <Text style={styles.highlight}>App.js</Text> to change this
     //         screen and then come back to see your edits.
     //       </Section>
     //       <Section title="See Your Changes">
     //         <ReloadInstructions />
     //       </Section>
     //       <Section title="Debug">
     //         <DebugInstructions />
     //       </Section>
     //       <Section title="Learn More">
     //         Read the docs to discover what to do next:
     //       </Section>
     //       <LearnMoreLinks />
     //     </View>
     //   </ScrollView>
     // </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 