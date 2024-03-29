import "@/tailwind.css";
import { AppProvider } from "@/providers";
import { BrowserRouter } from "react-router-dom";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
export const decorators = [
	(Story) => (
		<BrowserRouter>
			<AppProvider>
				<Story />
			</AppProvider>
		</BrowserRouter>
	),
];
