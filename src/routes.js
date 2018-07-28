import { StackNavigator } from 'react-navigation';

import Organization from 'pages/organizations';
import Issues from 'pages/issues';


const Routes = StackNavigator({
  Organization: { screen: Organization },
  Issues: { screen: Issues },

});

export default Routes;
