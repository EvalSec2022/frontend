import "@/tailwind.css";
import { AppProvider } from "@/providers";

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
		<AppProvider>
			<Story />
		</AppProvider>
	),
];
