import { Html, Head, Main, NextScript } from "next/document";

export default function Document({ locale }: { locale: string }) {
	return (
		<Html lang={locale}>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
