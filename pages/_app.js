import "../styles/globals.css";
import { Space_Grotesk } from "@next/font/google";

const space_grotesk = Space_Grotesk({
	subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
	return (
		<main className={`wrapper ${space_grotesk.className}`}>
			<Component {...pageProps} />
		</main>
	);
}

export default MyApp;
