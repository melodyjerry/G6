
import GraphEvent from '@antv/g-base/lib/event/graph-event';
import { IGraph } from './graph';
import { IItem } from './item';
import { IModelConfig } from "./model";

export enum G6Event {
  CLICK = 'click',
  MOUSEDOWN = 'mousedown',
  MOUDEUP = 'mouseup',
  DBLCLICK = 'dblclick',
  CONTEXTMENU = 'contextmenu',
  MOUSEENTER = 'mouseenter',
  MOUSEOUT = 'mouseout',
  MOUSEOVER = 'mouseover',
  MOUSEMOVE = 'mousemove',
  MOUSELEAVE = 'mouseleave',
  DRAGSTART = 'dragstart',
  DRAGEND = 'dragend',
  DRAG = 'drag',
  DRAGENTER = 'dragenter',
  DRAGLEAVE = 'dragleave',
  DDROP = 'drop',
  NODE_CLICK = 'node:click',
  EDGE_CLICK = 'edge:click',
  NODE_CONTEXTMENU = 'node:contextmenu',
  EDGE_CONTEXTMENU = 'edge:contextmenu',
  NODE_DBLCLICK = 'node:dblclick',
  EDGE_DBLCLICK = 'edge:dblclick',
  CANVAS_MOUSEDOWN = 'canvas:mousedown',
  CANVAS_MOUSEMOVE = 'canvas:mousemove',
  CANVAS_MOUSEUP = 'canvas:mouseup',
  CANVAS_CLICK = 'canvas:click',
  CANVAS_MOSUELEAVE = 'canvas:mouseleave',
  KEYUP = 'keyup',
  KEYDOWN = 'keydown'
}

type GetEvents = 'getEvents';
type ShouldBegin = 'shouldBegin';
type ShouldUpdate = 'shouldUpdate';
type ShouldEnd = 'shouldEnd'
type Bind = 'bind'
type Unbind = 'unbind'

type DefaultBehaviorType = IG6GraphEvent | string | number | object

export type IBehavior<U> = {
  [T in keyof U]:
  T extends GetEvents ? () => { [key in G6Event]?: string } :
  T extends ShouldBegin ? (cfg?: IModelConfig) => boolean :
  T extends ShouldEnd ? (cfg?: IModelConfig) => boolean :
  T extends ShouldUpdate ? (cfg?: IModelConfig) => boolean :
  T extends Bind ? (graph: IGraph) => void :
  T extends Unbind ? (graph: IGraph) => void :
  (...args: DefaultBehaviorType[]) => unknown;
}

export type IEvent = Record<G6Event, string>

export interface IG6GraphEvent extends GraphEvent {
  item: IItem;
}

export class G6GraphEvent extends GraphEvent implements IG6GraphEvent {
  public item: IItem
  constructor(type, event) {
    super(type, event)
    this.item = event.item
  }
}