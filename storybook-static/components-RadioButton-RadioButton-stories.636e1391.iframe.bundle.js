'use strict'
;(self.webpackChunkcomponent_library =
  self.webpackChunkcomponent_library || []).push([
  [391],
  {
    './src/components/RadioButton/RadioButton.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => RadioButton_stories,
        })
      __webpack_require__('./node_modules/react/index.js')
      var styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js')
      const StyledRadioButton = styled_components_browser_esm.Ay.input`
  margin-right: 8px;
  cursor: ${(_ref) => {
    let { disabled } = _ref
    return disabled ? 'not-allowed' : 'pointer'
  }};
  opacity: ${(_ref2) => {
    let { disabled } = _ref2
    return disabled ? 0.6 : 1
  }};
`,
        RadioButton = (_ref3) => {
          let { label, value, onChange, checked, disabled = !1 } = _ref3
          return (0, jsx_runtime.jsxs)('label', {
            children: [
              (0, jsx_runtime.jsx)(StyledRadioButton, {
                type: 'radio',
                value,
                checked,
                onChange: () => onChange(value),
                disabled,
              }),
              label,
            ],
          })
        },
        RadioButton_RadioButton = RadioButton
      RadioButton.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'RadioButton',
        props: {
          label: { required: !0, tsType: { name: 'string' }, description: '' },
          value: { required: !0, tsType: { name: 'string' }, description: '' },
          onChange: {
            required: !0,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '(value: string) => void',
              signature: {
                arguments: [{ type: { name: 'string' }, name: 'value' }],
                return: { name: 'void' },
              },
            },
            description: '',
          },
          checked: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
          },
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
            defaultValue: { value: 'false', computed: !1 },
          },
        },
      }
      const RadioButton_stories = {
          title: 'Components/RadioButton',
          component: RadioButton_RadioButton,
          argTypes: {
            label: { control: 'text' },
            checked: { control: 'boolean' },
            disabled: { control: 'boolean' },
          },
        },
        Template = (args) =>
          (0, jsx_runtime.jsx)(RadioButton_RadioButton, { ...args }),
        Default = Template.bind({})
      Default.args = {
        label: 'Option 1',
        value: 'option1',
        checked: !1,
        disabled: !1,
        onChange: () => {},
      }
      const Disabled = Template.bind({})
      Disabled.args = {
        label: 'Option 1 (Disabled)',
        value: 'option1',
        checked: !1,
        disabled: !0,
        onChange: () => {},
      }
      const __namedExportsOrder = ['Default', 'Disabled']
      ;(Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: 'args => <RadioButton {...args} />',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource: 'args => <RadioButton {...args} />',
              ...Disabled.parameters?.docs?.source,
            },
          },
        })
    },
  },
])
//# sourceMappingURL=components-RadioButton-RadioButton-stories.636e1391.iframe.bundle.js.map
