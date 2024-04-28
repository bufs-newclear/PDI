import React from 'react';
import { StyleSheet } from 'react-native';
import { FlexWidget, TextWidget, ImageWidget, ListWidget } from 'react-native-android-widget';
import { menus } from "../misc/Dummy";

const formatDate = (date) => {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) 
    month = '0' + month;
  if (day.length < 2) 
    day = '0' + day;

  return [year, month, day].join('-');
};

export function ShikdanWidget() {
  const currentDate = formatDate(new Date());
  // "employee" 타입을 제외합니다.
  const filteredMenus = menus.filter(menu => menu.type !== 'employee');

  return (
    <FlexWidget
      style={styles.widgetStyle}
    >
      <TextWidget text={currentDate} style={styles.dateStyle} />
      <TextWidget text={"학생식당"} style={styles.titleStyle} />

      <ListWidget style={styles.listStyle}>
        {filteredMenus.map((menu, index) => (
          <FlexWidget key={index} style={styles.flexWidgetStyle}>
            <TextWidget text={`- ${menu.name}`} style={{flexShrink: 0, ...styles.itemStyle}} />

            <FlexWidget style={styles.flexwidget}>
              <ImageWidget image={require('../assets/icons/heart.png')} imageWidth={15} imageHeight={15} marginHorizontal={8} />
              <TextWidget text={`${menu.likeCnt.like}`} style={{width: 30, textAlign: 'right', ...styles.itemStyle}} />
            </FlexWidget>
          </FlexWidget>
        ))}
      </ListWidget>
    </FlexWidget>
  );
}

const styles = StyleSheet.create({
  widgetStyle: {
    padding: 16,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    height: 'match_parent',
    width: 'match_parent',
    backgroundColor: '#A9E2F3',
  },
  dateStyle: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  titleStyle: {
    fontSize: 20,
    color: '#0000FF',
  },
  itemStyle: {
    fontSize: 20,
    color: '#333333',
    flex:1,
    fontWeight: 'bold',
  },
  listStyle: {
    height: 'match_parent',
    width: 'match_parent',
  },
  flexWidgetStyle: {
    flexDirection: 'row',
    alignItems: 'center',  // 항목을 세로 중심에 맞춤
    justifyContent: 'space-between',
    flexGrow: 0,
    width: 'match_parent',
    marginTop: 4,  // 각 메뉴 항목 사이의 간격
    marginHorizontal: 6,
  },
  flexwidget:{
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',  // 항목을 세로 중심에 맞춤
    flex: 1,
    flexBasis: 0, 
    
    // width: 120,
  },
  heartStyle: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  
});
