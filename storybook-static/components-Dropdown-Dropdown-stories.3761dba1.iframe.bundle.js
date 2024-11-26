'use strict'
;(self.webpackChunkcomponent_library =
  self.webpackChunkcomponent_library || []).push([
  [215],
  {
    './src/components/Dropdown/Dropdown.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Dropdown_stories,
        })
      __webpack_require__('./node_modules/react/index.js')
      var styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js')
      const StyledSelect = styled_components_browser_esm.Ay.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  cursor: ${(_ref) => {
    let { disabled } = _ref
    return disabled ? 'not-allowed' : 'pointer'
  }};
  background-color: ${(_ref2) => {
    let { disabled } = _ref2
    return disabled ? '#f0f0f0' : 'white'
  }};
`,
        Dropdown = (_ref3) => {
          let { options, onChange, disabled = !1 } = _ref3
          return (0, jsx_runtime.jsx)(StyledSelect, {
            onChange: (e) => onChange(e.target.value),
            disabled,
            children: options.map((option, index) =>
              (0, jsx_runtime.jsx)(
                'option',
                { value: option.value, children: option.label },
                index
              )
            ),
          })
        },
        Dropdown_Dropdown = Dropdown
      Dropdown.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Dropdown',
        props: {
          options: {
            required: !0,
            tsType: {
              name: 'Array',
              elements: [
                {
                  name: 'signature',
                  type: 'object',
                  raw: '{ value: string; label: string }',
                  signature: {
                    properties: [
                      { key: 'value', value: { name: 'string', required: !0 } },
                      { key: 'label', value: { name: 'string', required: !0 } },
                    ],
                  },
                },
              ],
              raw: '{ value: string; label: string }[]',
            },
            description: '',
          },
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
          disabled: {
            required: !1,
            tsType: { name: 'boolean' },
            description: '',
            defaultValue: { value: 'false', computed: !1 },
          },
        },
      }
      const Dropdown_stories = {
          title: 'Components/Dropdown',
          component: Dropdown_Dropdown,
          argTypes: {
            options: { control: 'object' },
            disabled: { control: 'boolean' },
          },
        },
        Template = (args) =>
          (0, jsx_runtime.jsx)(Dropdown_Dropdown, { ...args }),
        Default = Template.bind({})
      Default.args = {
        options: [
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ],
        onChange: () => {},
        disabled: !1,
      }
      const Disabled = Template.bind({})
      Disabled.args = {
        options: [
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ],
        onChange: () => {},
        disabled: !0,
      }
      const __namedExportsOrder = ['Default', 'Disabled']
      ;(Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: 'args => <Dropdown {...args} />',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource: 'args => <Dropdown {...args} />',
              ...Disabled.parameters?.docs?.source,
            },
          },
        })
    },
  },
])
//# sourceMappingURL=components-Dropdown-Dropdown-stories.3761dba1.iframe.bundle.js.map
