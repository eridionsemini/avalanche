module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    plugins: ['simple-import-sort', 'react-hooks', "@typescript-eslint", "prettier"],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    ['^(react$|react-native$)'],
                    ['^\\u0000'],
                    ['^@?\\w'],
                    ['^(root|context|hoc|hooks|models|screens|pages|types|utils|store|lists|navi|firebase)(/.*|$)'],
                    ['^(components)(/.*|$)'],
                    ['^(apollo)(/.*|$)'],
                    ['^(queries)(/.*|$)'],
                    ['^(mutations)(/.*|$)'],
                    ['^(cons|general-types)(/.*|$)'],
                    ['^(data)(/.*|$)'],
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    ['^(styles)(/.*|$)'],
                    ['^(assets)(/.*|$)'],
                    ['^\\u0000'],
                ],
            },
        ],
        'sort-imports': 'off',
        "@typescript-eslint/strict-boolean-expressions": [
            2,
            {
                "allowString": false,
                "allowNumber": false
            }
        ]
    },
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 6,
        project: ["tsconfig.json"]
    },
    parser: '@typescript-eslint/parser',
    ignorePatterns: ["src/**/*.test.ts", "src/frontend/generated/*"]
}
