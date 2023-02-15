import { DireflowComponent } from 'direflow-component';
import App from './App';

const component = document.querySelector('widget-component');
var type   = component.getAttribute('data-fakeid');
console.log('component', type)
export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: 'widget-component'
  },
  plugins: [
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['Advent Pro', 'Noto Sans JP'],
        },
      },
    },
  ],
});
