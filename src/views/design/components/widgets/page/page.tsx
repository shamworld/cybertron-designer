import React from 'react';
import WidgetSchema from '@/interface/schema/widget/widget.schema';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import style from './index.less';

export interface PageWidgetProps {
  schema: WidgetSchema;
}

export default class PageWidget extends React.Component<PageWidgetProps, any> {
  constructor(props: PageWidgetProps) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.setState({
      items: this.getItems(10)
    });
  }

  getItems = count =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
      id: `item-${k}`,
      content: `item ${k}`
    }));

  getItemStyle = (provided, snapshot) => {
    console.log('get item style: ', provided, snapshot);
    return {};
  };

  getListStyle = (snapshot) => {
    return {};
  };

  onDragEnd = ($event: any) => {
    console.log('$event on drag end: ', $event);
  };

  renderDraggableItem = (item) => {
    return (provided, snapshot) => {
      return (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={this.getItemStyle(provided, snapshot)}
        >
          {item.content}
        </div>
      );
    };
  };

  renderDraggable = () => {
    const { items } = this.state;
    console.log('render draggable: ', items);
    return items.map((item, index) => {
      return (
        <Draggable draggableId={item.id} index={index} key={item.id}>
          {this.renderDraggableItem(item)}
        </Draggable>
      );
    });
  };

  renderDroppable = (provided, snapshot) => {
    console.log('render droppable');
    return (
      <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        style={this.getListStyle(snapshot)}
      >
        {this.renderDraggable()}
      </div>
    );
  };

  render() {
    const { schema } = this.props;
    const { items } = this.state;
    // console.log('render page: ', schema);
    console.log('items in line 91: ', items);
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId={schema.id}>
          {this.renderDroppable}
        </Droppable>
      </DragDropContext>
    );
  }
}
