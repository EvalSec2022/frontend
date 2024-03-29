import { extendTheme } from "@chakra-ui/react";

import { popoverAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle((props) => ({
	popper: {
		zIndex: 50,
	},
	content: {
		boxShadow: "lg",
		w: "330px",
		overflowY: "auto",
		overflowX: "hidden",
		maxHeight: "80vh",
		padding: "0",
	},
	body: {
		padding: "0",
	},
}));

const sizes = {
	xl: definePartsStyle({
		content: {
			w: "400px",
		},
	}),
	third: definePartsStyle({
		content: {
			w: "calc(100vw / 3)",
		},
	}),
	fit: definePartsStyle({
		content: {
			w: "fit-content",
		},
	}),
};

const rounded = definePartsStyle({
	content: {
		borderRadius: ".625rem",
		zIndex: 20,
	},
});

const variants = {
	rounded,
};

export const popoverTheme = defineMultiStyleConfig({
	baseStyle,
	variants,
	sizes,
});

export const theme = extendTheme({
	colors: {
		primary: {
			50: "#009d94",
			100: "#009d94",
			200: "#009d94",
			300: "#009d94",
			400: "#009d94",
			500: "#009d94",
			600: "#009d94",
			700: "#009d94",
			800: "#009d94",
			900: "#009d94",
		},
	},
	components: {
		Drawer: {
			sizes: {
				menu: {
					dialog: {
						maxWidth: "5rem",
						borderRadius: ".625rem",
						margin: "0.5rem",
						overflow: "hidden",
						paddingY: "0.5rem",
					},
				},
			},
		},
		Popover: popoverTheme,
	},
	fonts: {
		body: "Rubik, system-ui, sans-serif",
		heading: "Rubik, serif",
		mono: "Menlo, monospace",
	},
	fontSizes: {
		xs: "0.75rem",
		sm: "0.875rem",
		md: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
		"5xl": "3rem",
		"6xl": "3.75rem",
		"7xl": "4.5rem",
		"8xl": "6rem",
		"9xl": "8rem",
	},
	fontWeights: {
		hairline: 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900,
	},
	lineHeights: {
		normal: "normal",
		none: 1,
		shorter: 1.25,
		short: 1.375,
		base: 1.5,
		tall: 1.625,
		taller: "2",
		"3": ".75rem",
		"4": "1rem",
		"5": "1.25rem",
		"6": "1.5rem",
		"7": "1.75rem",
		"8": "2rem",
		"9": "2.25rem",
		"10": "2.5rem",
	},
	letterSpacings: {
		tighter: "-0.05em",
		tight: "-0.025em",
		normal: "0",
		wide: "0.025em",
		wider: "0.05em",
		widest: "0.1em",
	},
});
