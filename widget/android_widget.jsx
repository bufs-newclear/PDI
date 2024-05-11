import { React, useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
      <Text style={{
        color: '#333',
        fontSize: 24,
        fontWeight: "bold",
        marginHorizontal: 14,
        marginBottom: 12,
        width: 'match_parent',

      }}>{
        "위젯 미리보기"
      }</Text>

      <WidgetPreview
        renderWidget={() => <ShikdanWidget currentDate={datestring} meals={meals}/>}
        // renderWidget={() => <ShikdanWidget />}
        width={320}
        height={200}
      />

      <Text style={{color: '#777', marginHorizontal: 14, marginTop: 6}}>{
        "홈 화면에 위젯을 추가하여 오늘의 식단을 더욱 편하게 확인하세요!"
      }</Text>
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