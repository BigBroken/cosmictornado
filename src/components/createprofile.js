
import React, {
  AppRegistry,
  Component,
  PickerIOS,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../actions/actions'
import Search from './search';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    // Check if user is authenticated. If so, redirect somewhere...
    this.props.navigator.push({
      name: 'Search',
      component: Search
    });
  }

  handleChangeZip() {
    console.log('Zip Changed!');
  }

  render() {
    console.log('CreateProfile this.props: ', this.props);
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="steelblue"
          barStyle="light-content"
        />
        <View style={styles.titlebar}>
          <Text style={styles.titlebarText}>BitVigor</Text>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.pageTitle}>Create Your Profile</Text>

          <Text style={styles.fieldLabel}>Name</Text> 
          <TextInput
            style={styles.fieldInput}
            value='Hao H'
          />

          <Text style={styles.fieldLabel}>Age</Text>
          <TextInput 
            style={styles.fieldInput}
            value='28'
            //onChangeText={this.handleChangeZip.bind(this)}
          />

          <Text style={styles.fieldLabel}>Gender</Text>
          {/*Add logic for PickerIOS*/}
          <TextInput 
            style={styles.fieldInput}
            value='Curious'
            //onChangeText={this.handleChangeZip.bind(this)}
          />

          <Text style={styles.fieldLabel}>Zip Code</Text>
          <TextInput 
            style={styles.fieldInput}
            value='94101'
            onChangeText={this.handleChangeZip.bind(this)}
          />
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'azure',
  },
  titlebar: {
    flex: 8,
    paddingTop: 30,
    backgroundColor: 'steelblue',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  titlebarText: {
    color: 'white',
    fontSize: 22,
  },
  fieldContainer: {
    flex: 82,
    margin: 20,
    padding: 20, 
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  pageTitle: {
    alignSelf: 'center',
    fontSize: 28,
    color: 'navy',
    marginBottom: 20,
  },
  fieldLabel: {
    fontSize: 18,
    color: 'black',
  },
  fieldInput: {
    height: 40, 
    padding: 5,
    color: 'lightslategray',
    borderColor: 'gray', 
    borderWidth: 1,
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 10,
    alignSelf: 'stretch',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems:'center',
  },
  button: {
    padding: 12,
    width: 250,
    height: 50,
    backgroundColor: 'cadetblue',  // cadetblue
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

function mapStateToProps(state) {
  return state; 
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile); 