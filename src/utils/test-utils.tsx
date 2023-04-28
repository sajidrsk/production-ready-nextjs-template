import * as React from "react";
import { Provider as StoreProvider } from "react-redux";
import { render, RenderOptions } from "@testing-library/react";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { store } from "@/store";
import translationEnglish from "../../public/locales/en/common.json";

function initI18n() {
	i18n.use(initReactI18next).init({
		lng: "en",
		fallbackLng: "en",
		debug: false,
		interpolation: {
			escapeValue: false,
		},
		resources: {
			en: {
				translation: translationEnglish,
			},
		},
	});
}

const Providers = ({ children }: { children: React.ReactElement }) => {
	return <StoreProvider store={store}>{children}</StoreProvider>;
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
	render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender as render, initI18n };
