const svgToDataUri = require('mini-svg-data-uri')

const colors = require('tailwindcss/colors')
const {
    default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['selector'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            fontSize: {
                xs: '10px', // Overline
                sm: '12px', // Caption
                base: '14px', // Body 2 / Subtitle 2
                lg: '16px', // Body 1 / Subtitle 1
                xl: '20px', // H6
                '2xl': '24px', // H5
                '3xl': '34px', // H4
                '4xl': '48px', // H3
                '5xl': '60px', // H2
                '6xl': '96px', // H1
            },
            fontWeight: {
                light: 300,
                regular: 400,
                medium: 500,
            },
            keyframes: {
                moveHorizontal: {
                    '0%': {
                        transform: 'translateX(-50%) translateY(-10%)',
                    },
                    '50%': {
                        transform: 'translateX(50%) translateY(10%)',
                    },
                    '100%': {
                        transform: 'translateX(-50%) translateY(-10%)',
                    },
                },
                moveInCircle: {
                    '0%': {
                        transform: 'rotate(0deg)',
                    },
                    '50%': {
                        transform: 'rotate(180deg)',
                    },
                    '100%': {
                        transform: 'rotate(360deg)',
                    },
                },
                moveVertical: {
                    '0%': {
                        transform: 'translateY(-50%)',
                    },
                    '50%': {
                        transform: 'translateY(50%)',
                    },
                    '100%': {
                        transform: 'translateY(-50%)',
                    },
                },
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                first: 'moveVertical 30s ease infinite',
                second: 'moveInCircle 20s reverse infinite',
                third: 'moveInCircle 40s linear infinite',
                fourth: 'moveHorizontal 40s ease infinite',
                fifth: 'moveInCircle 20s ease infinite',
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            colors: {
                'cod-gray': {
                    50: '#f6f6f6',
                    100: '#e7e7e7',
                    200: '#d1d1d1',
                    300: '#b0b0b0',
                    400: '#888888',
                    500: '#6d6d6d',
                    600: '#5d5d5d',
                    700: '#4f4f4f',
                    800: '#454545',
                    900: '#3d3d3d',
                    950: '#121212',
                    darker: '#0e0e0e',
                    darkest: '#0b0b0b',
                },
                starship: {
                    50: '#fafde9',
                    100: '#f4fcc5',
                    200: '#eef98f',
                    300: '#e9f54f',
                    400: '#edf237',
                    500: '#e1dd11',
                    600: '#c2b00c',
                    700: '#9b810d',
                    800: '#806613',
                    900: '#6d5316',
                    950: '#3f2c09',
                },
                'dodger-blue': {
                    50: '#edfaff',
                    100: '#d7f2ff',
                    200: '#b9ebff',
                    300: '#88e0ff',
                    400: '#50ccff',
                    500: '#28b0ff',
                    600: '#068fff',
                    700: '#0a7aeb',
                    800: '#0f61be',
                    900: '#135495',
                    950: '#11335a',
                },
                lima: {
                    50: '#f0ffee',
                    100: '#d9ffd7',
                    200: '#b5ffb2',
                    300: '#7aff76',
                    400: '#38f533',
                    500: '#0ede09',
                    600: '#04bf00',
                    700: '#069104',
                    800: '#0b710a',
                    900: '#0a5d0b',
                    950: '#003401',
                },
                danger: {
                    50: '#fef2f3',
                    100: '#ffe1e3',
                    200: '#ffc9cc',
                    300: '#fea3a9',
                    400: '#fb6e77',
                    500: '#f3404b',
                    600: '#e0222e',
                    700: '#c91a25',
                    800: '#9c1820',
                    900: '#811b21',
                    950: '#46090d',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            screens: {
                phone: '37.5em',
                'tab-port': '56.25em',
                'tab-land': '75em',
                'particular-small-laptop': '98.5em',
                laptop: '112.5em',
                'big-desktop': '120em',
            },
            boxShadow: {
                input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        addVariablesForColors,
        function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'bg-grid': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                    'bg-grid-small': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                    'bg-dot': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
                        )}")`,
                    }),
                },
                {
                    values: flattenColorPalette(theme('backgroundColor')),
                    type: 'color',
                }
            )
        },
    ],
}
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme('colors'))
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    )

    addBase({
        ':root': newVars,
    })
}
