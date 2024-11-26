'use strict'
;(self.webpackChunkcomponent_library =
  self.webpackChunkcomponent_library || []).push([
  [623],
  {
    './src/components/Table/Table.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Table_stories,
        })
      __webpack_require__('./node_modules/react/index.js')
      var styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js')
      const StyledTable = styled_components_browser_esm.Ay.table`
  width: 100%;
  border-collapse: collapse;
  cursor: ${(_ref) => {
    let { disabled } = _ref
    return disabled ? 'not-allowed' : 'default'
  }};
  opacity: ${(_ref2) => {
    let { disabled } = _ref2
    return disabled ? 0.6 : 1
  }};
`,
        Table = (_ref3) => {
          let { children, disabled = !1 } = _ref3
          return (0, jsx_runtime.jsx)(StyledTable, { disabled, children })
        },
        Table_Table = Table
      Table.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Table',
        props: {
          children: {
            required: !0,
            tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
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
      const StyledTableHeader = styled_components_browser_esm.Ay.thead`
  background-color: #f5f5f5;
  opacity: ${(_ref) => {
    let { disabled } = _ref
    return disabled ? 0.6 : 1
  }};
`,
        TableHeader = (_ref2) => {
          let { children, disabled = !1 } = _ref2
          return (0, jsx_runtime.jsx)(StyledTableHeader, { disabled, children })
        },
        Table_TableHeader = TableHeader
      TableHeader.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'TableHeader',
        props: {
          children: {
            required: !0,
            tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
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
      const StyledTableRow = styled_components_browser_esm.Ay.tr`
  border-bottom: 1px solid #ddd;
  opacity: ${(_ref) => {
    let { disabled } = _ref
    return disabled ? 0.6 : 1
  }};
`,
        TableRow = (_ref2) => {
          let { children, disabled = !1 } = _ref2
          return (0, jsx_runtime.jsx)(StyledTableRow, { disabled, children })
        },
        Table_TableRow = TableRow
      TableRow.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'TableRow',
        props: {
          children: {
            required: !0,
            tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
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
      const StyledTableCell = styled_components_browser_esm.Ay.td`
  padding: 12px;
  border: 1px solid #ddd;
  opacity: ${(_ref) => {
    let { disabled } = _ref
    return disabled ? 0.6 : 1
  }};
`,
        TableCell = (_ref2) => {
          let { children, disabled = !1 } = _ref2
          return (0, jsx_runtime.jsx)(StyledTableCell, { disabled, children })
        },
        Table_TableCell = TableCell
      TableCell.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'TableCell',
        props: {
          children: {
            required: !0,
            tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
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
      const StyledTableFooter = styled_components_browser_esm.Ay.tfoot`
  background-color: #f5f5f5;
  text-align: left;
`,
        TableFooter = (_ref) => {
          let { children } = _ref
          return (0, jsx_runtime.jsx)(StyledTableFooter, { children })
        },
        Table_TableFooter = TableFooter
      TableFooter.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'TableFooter',
        props: {
          children: {
            required: !0,
            tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
            description: '',
          },
        },
      }
      const Table_stories = {
          title: 'Components/Table',
          component: Table_Table,
          argTypes: { disabled: { control: 'boolean' } },
        },
        Template = (args) =>
          (0, jsx_runtime.jsxs)(Table_Table, {
            ...args,
            children: [
              (0, jsx_runtime.jsx)(Table_TableHeader, {
                children: (0, jsx_runtime.jsxs)(Table_TableRow, {
                  children: [
                    (0, jsx_runtime.jsx)(Table_TableCell, {
                      children: 'Header 1',
                    }),
                    (0, jsx_runtime.jsx)(Table_TableCell, {
                      children: 'Header 2',
                    }),
                  ],
                }),
              }),
              (0, jsx_runtime.jsxs)('tbody', {
                children: [
                  (0, jsx_runtime.jsxs)(Table_TableRow, {
                    children: [
                      (0, jsx_runtime.jsx)(Table_TableCell, {
                        children: 'Row 1, Cell 1',
                      }),
                      (0, jsx_runtime.jsx)(Table_TableCell, {
                        children: 'Row 1, Cell 2',
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsxs)(Table_TableRow, {
                    children: [
                      (0, jsx_runtime.jsx)(Table_TableCell, {
                        children: 'Row 2, Cell 1',
                      }),
                      (0, jsx_runtime.jsx)(Table_TableCell, {
                        children: 'Row 2, Cell 2',
                      }),
                    ],
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)(Table_TableFooter, {
                children: (0, jsx_runtime.jsxs)(Table_TableRow, {
                  children: [
                    (0, jsx_runtime.jsx)(Table_TableCell, {
                      children: 'Footer 1',
                    }),
                    (0, jsx_runtime.jsx)(Table_TableCell, {
                      children: 'Footer 2',
                    }),
                  ],
                }),
              }),
            ],
          }),
        Default = Template.bind({})
      Default.args = { disabled: !1 }
      const Disabled = Template.bind({})
      Disabled.args = { disabled: !0 }
      const __namedExportsOrder = ['Default', 'Disabled']
      ;(Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              'args => <Table {...args}>\r\n    <TableHeader>\r\n      <TableRow>\r\n        <TableCell>Header 1</TableCell>\r\n        <TableCell>Header 2</TableCell>\r\n      </TableRow>\r\n    </TableHeader>\r\n    <tbody>\r\n      <TableRow>\r\n        <TableCell>Row 1, Cell 1</TableCell>\r\n        <TableCell>Row 1, Cell 2</TableCell>\r\n      </TableRow>\r\n      <TableRow>\r\n        <TableCell>Row 2, Cell 1</TableCell>\r\n        <TableCell>Row 2, Cell 2</TableCell>\r\n      </TableRow>\r\n    </tbody>\r\n    <TableFooter>\r\n      <TableRow>\r\n        <TableCell>Footer 1</TableCell>\r\n        <TableCell>Footer 2</TableCell>\r\n      </TableRow>\r\n    </TableFooter>\r\n  </Table>',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                'args => <Table {...args}>\r\n    <TableHeader>\r\n      <TableRow>\r\n        <TableCell>Header 1</TableCell>\r\n        <TableCell>Header 2</TableCell>\r\n      </TableRow>\r\n    </TableHeader>\r\n    <tbody>\r\n      <TableRow>\r\n        <TableCell>Row 1, Cell 1</TableCell>\r\n        <TableCell>Row 1, Cell 2</TableCell>\r\n      </TableRow>\r\n      <TableRow>\r\n        <TableCell>Row 2, Cell 1</TableCell>\r\n        <TableCell>Row 2, Cell 2</TableCell>\r\n      </TableRow>\r\n    </tbody>\r\n    <TableFooter>\r\n      <TableRow>\r\n        <TableCell>Footer 1</TableCell>\r\n        <TableCell>Footer 2</TableCell>\r\n      </TableRow>\r\n    </TableFooter>\r\n  </Table>',
              ...Disabled.parameters?.docs?.source,
            },
          },
        })
    },
  },
])
//# sourceMappingURL=components-Table-Table-stories.2a1a3c3a.iframe.bundle.js.map
