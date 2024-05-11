import React from 'react';
import moment from "moment";
import { ShikdanWidget } from './ShikdanWidget';
import { Meal } from '../entity/Meal';

const nameToWidget = {
  // Hello will be the **name** with which we will reference our widget.
  Shikdan: ShikdanWidget,
};

export async function widgetTaskHandler(props) {
  const widgetInfo = props.widgetInfo;
  const Widget = nameToWidget[widgetInfo.widgetName];

  if (widgetInfo.widgetName === 'Shikdan') {
    switch (props.widgetAction) {
      case 'WIDGET_ADDED':
      case 'WIDGET_UPDATE':
        const today = moment('2024-05-09').utc()

        const dateString = today.local().format('YYYY-MM-DD');
        const fetchedMeals = await Meal.fetchDaily(today);

        props.renderWidget(<Widget currentDate={dateString} meals={fetchedMeals} />);
        break;
  
      case 'WIDGET_RESIZED':
        // placeholder
        break;
  
      case 'WIDGET_DELETED':
        // placeholder
        break;
  
      case 'WIDGET_CLICK':
        // placeholder
        break;
  
      default:
        break;
    }

  }
}