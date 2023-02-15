import { DireflowComponent } from 'direflow-component';
import App from './App';

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: 'widget-component'
  },
  properties: {
    componentTitle: 'Jobshot Widget',
    dataFakeId: "dataFakeId",
    dataTest: "dataTest",
    fakeId: "dataFakeId",
    test: "Test",
    id: "ID",
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
