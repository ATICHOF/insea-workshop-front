import { ApolloProvider } from "@apollo/client";

import NormalizeCSS from "../styles/Normalize";
import GlobalStyle from "../styles/GlobalStyle";
import { useApollo } from "../lib/apolloClient";

function MyApp({ Component, pageProps }) {
	const apolloClient = useApollo(pageProps);

	return (
		<>
			<NormalizeCSS />
			<GlobalStyle />
			<ApolloProvider client={apolloClient}>
				<Component {...pageProps} />
			</ApolloProvider>
		</>
	);
}

export default MyApp;
