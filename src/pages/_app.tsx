import type { AppProps } from "next/app";
import { Provider as StoreProvider } from "react-redux";
import { appWithTranslation } from "next-i18next";
import { store } from "@/store";
import "../../dist/main.css";

function App({ Component, pageProps }: AppProps) {
	return (
		<StoreProvider store={store}>
			<Component {...pageProps} />
		</StoreProvider>
	);
}

export default appWithTranslation(App);
