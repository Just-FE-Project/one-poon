import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      height: {
        screen: 'calc(var(--vh)*100)'
      },
      minHeight: {
        screen: 'calc(var(--vh)*100)'
      },
      maxHeight: {
        screen: 'calc(var(--vh)*100)'
      },
      backgroundColor: {
        default: 'var(--color-basic-default)',
        'default-alt': 'var(--bg-default-alt)',
        'basic-w': 'var(--color-basic-w)',
        'basic-w50': 'var(--color-basic-w50)',
        'basic-b': 'var(--color-basic-b)',
        'basic-b-alt': 'var(--bg-basic-b-alt)',
        'basic-b-snackbar': 'var(--bg-basic-b-snackbar)',

        'gray-btn-common': 'var(--color-gray300)',
        'gray-btn-disabled': 'var(--bg-gray-btn-disabled)',
        'gray-btn-inact': 'var(--bg-gray-btn-inact)',
        'gray-btn-action': 'var(--bg-gray-btn-action)',
        'gray-ic-default': 'var(--bg-gray-ic-default)',
        'gray-ic-sub': 'var(--bg-gray-ic-sub)',
        'gray-ic-act': 'var(--bg-gray-ic-act)',

        'gray-input-search': 'var(--color-gray200)',
        'gray-input-fixed': 'var(--bg-gray-input-fixed)',

        'gray-act-surf': 'var(--bg-gray-act-surf)',
        'gray-inact-surf': 'var(--color-gray200)',
        'gray-cards': 'var(--bg-gray-cards)',
        'gray-chat-other': 'var(--color-gray200)',
        'gray-divider': 'var(--bg-gray-divider)',
        'gray-divider-10': 'var(--bg-gray-divider-10)',
        'gray-modal': 'var(--bg-gray-modal)',
        'gray-on-surf': 'var(--bg-gray-on-surf)',
        'gray-surf': 'var(--bg-gray-surf)',
        'gray-chips-alpha': 'var(--color-gray900-9)',

        'primary-normal': 'var(--color-primary500)',
        'primary-btn-common': 'var(--color-primary500)',
        'primary-checkbox': 'var(--color-primary500)',
        'primary-surf': 'var(--bg-primary-surf)',

        'red-normal': 'var(--color-red500)',
        'green-normal': 'var(--color-green500)',
        'blue-normal': 'var(--color-blue500)',

        'darkblue-hovered': 'var(--color-darkblue5)'
      },
      colors: {
        'gray-default': 'var(--text-gray-default)',
        'gray-disabled': 'var(--color-gray400)',
        'gray-placeholder': 'var(--color-gray400)',
        'gray-sub': 'var(--text-gray-sub)',
        'gray-caption': 'var(--text-gray-caption)',
        'gray-fixed': 'var(--text-gray-fixed)',
        'gray-input': 'var(--text-gray-input)',
        'gray-inact': 'var(--color-gray600)',
        'gray-btn-act': 'var(--color-gray500)',
        'primary-normal': 'var(--color-primary500)',
        'primary-on-surf': 'var(--text-primary-on-surf)',
        'primary-on-snackbar': 'var(--text-primary-on-snackbar)',
        'basic-w': 'var(--color-basic-w)',
        'basic-w-alt': 'var(--text-basic-w-alt)',
        'basic-b': 'var(--color-basic-b)',
        'basic-b-alt': 'var(--text-basic-b-alt)',
        'red-normal': 'var(--color-red500)',
        'green-normal': 'var(--color-green500)'
      },
      borderColor: {
        'gray-normal': 'var(--border-gray-normal)',
        'gray-default': 'var(--border-gray-default)',
        'gray-ic-default': 'var(--border-gray-ic-default)',
        'gray-ic-sub': 'var(--color-gray700)',
        'gray-ic-action': 'var(--border-gray-ic-action)',
        'gray-ic-disabled': 'var(--color-gray400)',
        'gray-input-active': 'var(--border-gray-input-active)',
        'basic-w': 'var(--color-basic-w)',
        default: 'var(--border-default)',
        'primary-normal': 'var(--color-primary500)',
        'red-normal': 'var(--color-red500)',
        'orange-normal': 'var(--color-orange500)'
      },
      margin: {
        'm-auto': '0 auto'
      }
    }
  },
  daisyui: {
    themes: ['pastel']
  },
  plugins: [require('daisyui')]
};
export default config;
