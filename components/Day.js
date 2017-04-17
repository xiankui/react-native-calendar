import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
} from 'react-native';

import styles from './styles';

export default class Day extends Component {
  static defaultProps = {
    customStyle: {},
  }

  static propTypes = {
    caption: PropTypes.any,
    customStyle: PropTypes.object,
    filler: PropTypes.bool,
    event: PropTypes.object,
    isSelected: PropTypes.bool,
    isToday: PropTypes.bool,
    isWeekend: PropTypes.bool,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    showEventIndicators: PropTypes.bool,
  }

  dayCircleStyle = (isWeekend, isSelected, isToday, event,isFirst) => {
    const { customStyle } = this.props;
    const dayCircleStyle = [styles.dayCircleFiller, customStyle.dayCircleFiller];
      if(isFirst){
          dayCircleStyle.push(styles.leftBorderLine) 
      }

    if (isSelected && !isToday) {
      dayCircleStyle.push(styles.selectedDayCircle, customStyle.selectedDayCircle);
    } else if (isSelected && isToday) {
      dayCircleStyle.push(styles.currentDayCircle, customStyle.currentDayCircle);
    }

    if (event) {
      dayCircleStyle.push(styles.hasEventCircle, customStyle.hasEventCircle, event.hasEventCircle)
    }
    return dayCircleStyle;
  }

  dayTextStyle = (isWeekend, isSelected, isToday, event) => {
    const { customStyle } = this.props;
    const dayTextStyle = [styles.day, customStyle.day];

    if (isToday && !isSelected) {
      dayTextStyle.push(styles.currentDayText, customStyle.currentDayText);
    } else if (isToday || isSelected) {
      dayTextStyle.push(styles.selectedDayText, customStyle.selectedDayText);
    } else if (isWeekend) {
      dayTextStyle.push(styles.weekendDayText, customStyle.weekendDayText);
    }

    if (event) {
      dayTextStyle.push(styles.hasEventText, customStyle.hasEventText, event.hasEventText)
    }
    return dayTextStyle;
  }

  render() {
    let { caption, customStyle } = this.props;
    const {
      filler,
      event,
      isWeekend,
      isSelected,
      isToday,
      showEventIndicators,
      isFirst,
      holidayMode, // holidayMode: false/true
      holidaySelected,
    } = this.props;

    return filler
    ? (
        <TouchableWithoutFeedback>
          <View style={[styles.dayButtonFiller, customStyle.dayButtonFiller]}>
            <Text style={[styles.day, customStyle.day]} />
          </View>
        </TouchableWithoutFeedback>
      )
    : (
      <TouchableOpacity onPress={this.props.onPress} onLongPress={this.props.onLongPress}>
        <View style={[styles.dayButton, customStyle.dayButton]}>
          <View style={this.dayCircleStyle(isWeekend, isSelected, isToday, event,isFirst)}>
            {event ?
                ( // 有标注（带团日或休息日）
                  event.type === 1 ? 
                  ( // 带团日
                    holidayMode ? 
                      <View style={styles.dayWrapper}>
                        <View style={[styles.eventLabel, {backgroundColor: '#33b1ff'}]}><Text style={styles.eventLabelText}>团</Text></View>
                        <Text style={[this.dayTextStyle(isWeekend, isSelected, isToday, event), {color: '#ccc'}]}>{caption}</Text>
                        <Text style={[styles.eventTitle, {color: '#ccc'}]}>{event.eventTitle}</Text>
                      </View>
                      : 
                      <View style={styles.dayWrapper}>
                        <View style={[styles.eventLabel, {backgroundColor: '#33b1ff'}]}><Text style={styles.eventLabelText}>团</Text></View>
                        <Text style={[this.dayTextStyle(isWeekend, isSelected, isToday, event)]}>{caption}</Text>
                        <Text style={styles.eventTitle}>{event.eventTitle}</Text>
                    </View>
                  ) : ( // 休息日
                    holidayMode ? 
                      <View style={styles.dayWrapper}>
                        <View style={styles.eventLabel}><Text style={styles.eventLabelText}>休</Text></View>
                        <Text style={[this.dayTextStyle(isWeekend, isSelected, isToday, event), {color: '#ccc'}]}>{caption}</Text>
                      </View>
                      : 
                      <View style={styles.dayWrapper}>
                        <View style={styles.eventLabel}><Text style={styles.eventLabelText}>休</Text></View>
                        <Text style={this.dayTextStyle(isWeekend, isSelected, isToday, event)}>{caption}</Text>
                      </View>
                  )
                )
                :
                ( // 普通日子
                  holidayMode ?
                  (
                    holidaySelected ?
                    <View style={styles.dayWrapper}>
                      <Text style={this.dayTextStyle(isWeekend, isSelected, isToday, event)}>{caption}</Text>
                      <Image style={styles.iconCircle} source={require('../icon-circle-true.png')} /> 
                    </View>
                    :
                    <View style={styles.dayWrapper}>
                      <Text style={this.dayTextStyle(isWeekend, isSelected, isToday, event)}>{caption}</Text>
                      <Image style={styles.iconCircle} source={require('../icon-circle.png')} /> 
                    </View>
                  )
                  :
                  <Text style={this.dayTextStyle(isWeekend, isSelected, isToday, event)}>{caption}</Text>
                )
            }
          </View>
          {showEventIndicators &&
            <View style={[
              styles.eventIndicatorFiller,
              customStyle.eventIndicatorFiller,
              event && styles.eventIndicator,
              event && customStyle.eventIndicator,
              event && event.eventIndicator]}
            />
          }
        </View>
      </TouchableOpacity>
    );
  }
}
