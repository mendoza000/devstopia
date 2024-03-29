import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="es">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin={""}
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="font-dosis">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
