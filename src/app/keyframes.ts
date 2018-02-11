import { keyframes, style} from '@angular/animations';

export const fadeOutDown = [
  style({opacity: 1, offset: 0}),
  style({transform: 'translate3d(0, 50%, 0)', opacity: 0, offset: 1}),
]