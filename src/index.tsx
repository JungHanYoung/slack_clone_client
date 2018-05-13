import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
	uri: 'http://localhost:4000'
});

const App = (
	<ApolloProvider client={client}>
		<Routes />
	</ApolloProvider>
);

ReactDOM.render(App, document.getElementById('root') as HTMLElement);
registerServiceWorker();
