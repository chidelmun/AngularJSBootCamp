import {style, animate, transition, state, trigger} from '@angular/core';
import { AnimationEntryMetadata } from '@angular/core';

export class Animations {
  static styleStart = style({ transform: 'translateX(-100%)', opacity: 0 });
  static styleCurrent = style({ transform: 'translateX(0)', opacity: 1 });
  static styleEnd = style({ transform: 'translateX(100%)', opacity: 0 });

  static page:AnimationEntryMetadata  =
    trigger('routeAnimation', [
      state('*', Animations.styleCurrent ),
      transition('void => *', [ Animations.styleStart, animate('2.5s ease-in-out') ] ),
      transition('* => void', animate('2.5s ease-in-out', Animations.styleEnd))
    ]);
}