import { DireflowComponent } from 'direflow-component';
import App from './App';

const component = document.querySelector('widget-component');
console.log('component', component.dataset.id)
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
