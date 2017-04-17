import { Dimensions, StyleSheet, Image } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

var iconDimension = 14;

if (DEVICE_WIDTH >= 375) {
  iconDimension = 16;
}

if (DEVICE_WIDTH >= 414) {
  iconDimension = 18;
}

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: '#f7f7f7',
  },
  monthContainer: {
    width: DEVICE_WIDTH,
  },
  calendarControls: {
    flexDirection: 'row',
  },
  controlButton: {
  },
  controlButtonText: {
    margin: 10,
    // fontSize: 15,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    margin: 10,
  },
  calendarHeading: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  dayHeading: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 5,
  },
  weekendHeading: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 5,
    color: '#cccccc',
  },
  weekRow: {
    flexDirection: 'row',
  },
  dayButton: {
    alignItems: 'center',
    padding: 5,
    width: DEVICE_WIDTH / 7,
    borderTopWidth: 1,
    borderTopColor: '#e9e9e9',
  },
  dayButtonFiller: {
    padding: 5,
    width: DEVICE_WIDTH / 7,
  },
  day: {
    fontSize: 16,
    alignSelf: 'center',
  },
  eventIndicatorFiller: {
    marginTop: 3,
    borderColor: 'transparent',
    width: 4,
    height: 4,
    borderRadius: 2,
  },
  eventIndicator: {
    backgroundColor: '#cccccc',
  },
  dayCircleFiller: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  currentDayCircle: {
    backgroundColor: 'red',
  },
  currentDayText: {
    color: 'red',
  },
  selectedDayCircle: {
    backgroundColor: 'black',
  },
  hasEventCircle: {
  },
  hasEventText: {
  },
  selectedDayText: {
    color: 'white',
    fontWeight: 'bold',
  },
  weekendDayText: {
    color: '#cccccc',
  },
  leftBorderLine:{
    borderLeftWidth: DEVICE_WIDTH >= 414 ? 1 : 0.5,
    borderLeftColor: '#e4e4e4',
    borderStyle: 'solid'
  },

  // event title
  eventTitle: {
    fontSize:8,
    color:'#33b1ff', 
    position: 'absolute', 
    bottom: DEVICE_WIDTH <= 320 ? 3 : 5, 
    left: 0, 
    right: 0, 
    textAlign: 'center'
  },
  eventLabel: {
    padding: 1,
    backgroundColor:'#faca1c',
    borderRadius:2,
    top:2,
    right:2,
    position:'absolute'
  },
  eventLabelText: {
    fontSize:8,
    color:'#fff',
  },
  dayWrapper: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'relative',
  },
  iconCircle: {
    width: iconDimension,
    height: iconDimension,
    resizeMode: Image.resizeMode.contain,
    position: 'absolute',
    right: 2,
    top: 2
  }
});

export default styles;
