import { React, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { WidgetPreview } from 'react-native-android-widget';
import { Meal } from '../entity/Meal';
import moment from 'moment';
import { ShikdanWidget } from './ShikdanWidget';

export function ShikdanWidgetPreviewScreen() {
  const [datestring, setDatestring] = useState('');
  const [meals, setMeals] = useState([]);

  useEffect(async () => {
    const today = moment('2024-05-09').utc()
  
    setDatestring(today.local().format('YYYY-MM-DD'));
    setMeals(await Meal.fetchDaily(today));
  }, []);
  

  return (
    <View style={styles.container}>
      <WidgetPreview
        renderWidget={() => <ShikdanWidget currentDate={datestring} meals={meals}/>}
        // renderWidget={() => <ShikdanWidget />}
        width={320}
        height={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});