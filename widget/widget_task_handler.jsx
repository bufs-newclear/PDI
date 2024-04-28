import React from 'react';
import { ShikdanWidget } from './ShikdanWidget';

const nameToWidget = {
  // Hello will be the **name** with which we will reference our widget.
  Shikdan: ShikdanWidget,
};

export async function widgetTaskHandler(props) {
  const widgetInfo = props.widgetInfo;
  const Widget =
    nameToWidget[widgetInfo.widgetName];

  switch (props.widgetAction) {
    case 'WIDGET_ADDED':
      props.renderWidget(<Widget />);
      break;

    case 'WIDGET_UPDATE':
      props.renderWidget(<Widget />);
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