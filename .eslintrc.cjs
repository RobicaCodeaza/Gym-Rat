import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import vitest from 'eslint-plugin-vitest'
import jestDom from 'eslint-plugin-jest-dom'
import testingLibrary from 'eslint-plugin-testing-library'

export default {
    ignorePatterns: ['dist', 'build'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'plugin:vitest/recommended',
        'plugin:jest-dom/recommended',
        // 'plugin:testing-library/react',
    ],
    overrides: [
        {
            files: ['**/*.{ts,tsx}'],
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: __dirname,
            },
            settings: {
                react: {
                    version: 'detect',
                },
            },
            plugins: [
                'testing-library',
                'react-hooks',
                'react-refresh',
                'react',
                // 'vitest',
                // 'jest-dom',
            ],
            rules: {
                //-----------------------------------------
                //React Hooks Rules
                ...reactHooks.configs.recommended.rules,
                'react-refresh/only-export-components': 'off',
                //-----------------------------------------

                //-----------------------------------------
                // React Plugin Rules
                ...react.configs.recommended.rules,
                ...react.configs['jsx-runtime'].rules,
                'react/react-in-jsx-scope': 'off',
                'react/jsx-no-target-blank': 'off',
                //-----------------------------------------

                //-----------------------------------------
                //TypeScript Rules
                '@typescript-eslint/no-misused-promises': 'off',
                '@typescript-eslint/consistent-type-definitions': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/no-duplicate-type-constituents': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/no-unsafe-argument': 'off',
                //-----------------------------------------

                //-----------------------------------------
                //Vitest Rules
                'vitest/expect-expect': 'off',
                //-----------------------------------------

                //-----------------------------------------
                //testingLibraryReact Rules

                'testing-library/await-async-events': [
                    'error',
                    { eventModule: 'userEvent' },
                ],
                'testing-library/await-async-queries': 'error',
                'testing-library/await-async-utils': 'error',
                'testing-library/no-dom-import': ['error', 'react'],
                'testing-library/no-global-regexp-flag-in-query': 'error',
                'testing-library/no-manual-cleanup': 'error',
                'testing-library/no-node-access': 'error',
                'testing-library/no-promise-in-fire-event': 'error',
                'testing-library/no-unnecessary-act': 'error',
                'testing-library/no-wait-for-multiple-assertions': 'error',
                'testing-library/no-wait-for-side-effects': 'error',
                'testing-library/no-wait-for-snapshot': 'error',
                'testing-library/prefer-find-by': 'error',
                'testing-library/prefer-presence-queries': 'error',
                'testing-library/prefer-query-by-disappearance': 'error',
                //-----------------------------------------
            },
        },
    ],
}
