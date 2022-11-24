// this file is generated by generate-exports-file.ts
// this is done to prevent runtime dependencies from making it's way into the build/start script of the manager
// the manager builder needs to know which dependencies are 'globalized' in the ui

export default {
  react: [
    'Children',
    'Component',
    'Fragment',
    'Profiler',
    'PureComponent',
    'StrictMode',
    'Suspense',
    '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED',
    'cloneElement',
    'createContext',
    'createElement',
    'createFactory',
    'createRef',
    'forwardRef',
    'isValidElement',
    'lazy',
    'memo',
    'useCallback',
    'useContext',
    'useDebugValue',
    'useEffect',
    'useImperativeHandle',
    'useLayoutEffect',
    'useMemo',
    'useReducer',
    'useRef',
    'useState',
    'version',
  ],
  'react-dom': [
    '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED',
    'createPortal',
    'findDOMNode',
    'flushSync',
    'hydrate',
    'render',
    'unmountComponentAtNode',
    'unstable_batchedUpdates',
    'unstable_createPortal',
    'unstable_renderSubtreeIntoContainer',
    'version',
  ],
  '@storybook/components': [
    'A',
    'ActionBar',
    'AddonPanel',
    'Badge',
    'Bar',
    'Blockquote',
    'Button',
    'Code',
    'DL',
    'Div',
    'DocumentWrapper',
    'FlexBar',
    'Form',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'HR',
    'IconButton',
    'IconButtonSkeleton',
    'Icons',
    'Img',
    'LI',
    'Link',
    'Loader',
    'OL',
    'P',
    'Placeholder',
    'Pre',
    'ResetWrapper',
    'ScrollArea',
    'Separator',
    'Spaced',
    'Span',
    'StorybookIcon',
    'StorybookLogo',
    'Symbols',
    'SyntaxHighlighter',
    'TT',
    'TabBar',
    'TabButton',
    'TabWrapper',
    'Table',
    'Tabs',
    'TabsState',
    'TooltipLinkList',
    'TooltipMessage',
    'TooltipNote',
    'UL',
    'WithTooltip',
    'WithTooltipPure',
    'Zoom',
    'codeCommon',
    'components',
    'createCopyToClipboardFunction',
    'getStoryHref',
    'interleaveSeparators',
    'nameSpaceClassNames',
    'resetComponents',
    'withReset',
  ],
  '@storybook/channels': ['Channel'],
  '@storybook/core-events': [
    'CHANNEL_CREATED',
    'CONFIG_ERROR',
    'CURRENT_STORY_WAS_SET',
    'DOCS_RENDERED',
    'FORCE_REMOUNT',
    'FORCE_RE_RENDER',
    'GLOBALS_UPDATED',
    'IGNORED_EXCEPTION',
    'NAVIGATE_URL',
    'PLAY_FUNCTION_THREW_EXCEPTION',
    'PRELOAD_ENTRIES',
    'PREVIEW_BUILDER_PROGRESS',
    'PREVIEW_KEYDOWN',
    'REGISTER_SUBSCRIPTION',
    'RESET_STORY_ARGS',
    'SELECT_STORY',
    'SET_CONFIG',
    'SET_CURRENT_STORY',
    'SET_GLOBALS',
    'SET_INDEX',
    'SET_STORIES',
    'SHARED_STATE_CHANGED',
    'SHARED_STATE_SET',
    'STORIES_COLLAPSE_ALL',
    'STORIES_EXPAND_ALL',
    'STORY_ARGS_UPDATED',
    'STORY_CHANGED',
    'STORY_ERRORED',
    'STORY_INDEX_INVALIDATED',
    'STORY_MISSING',
    'STORY_PREPARED',
    'STORY_RENDERED',
    'STORY_RENDER_PHASE_CHANGED',
    'STORY_SPECIFIED',
    'STORY_THREW_EXCEPTION',
    'STORY_UNCHANGED',
    'UPDATE_GLOBALS',
    'UPDATE_QUERY_PARAMS',
    'UPDATE_STORY_ARGS',
  ],
  '@storybook/router': [
    'BaseLocationProvider',
    'DEEPLY_EQUAL',
    'Link',
    'Location',
    'LocationProvider',
    'Match',
    'Route',
    'buildArgsParam',
    'deepDiff',
    'getMatch',
    'parsePath',
    'queryFromLocation',
    'queryFromString',
    'stringifyQuery',
    'useNavigate',
  ],
  '@storybook/theming': [
    'CacheProvider',
    'ClassNames',
    'Global',
    'ThemeProvider',
    'background',
    'color',
    'convert',
    'create',
    'createCache',
    'createGlobal',
    'createReset',
    'css',
    'darken',
    'ensure',
    'ignoreSsrWarning',
    'isPropValid',
    'jsx',
    'keyframes',
    'lighten',
    'styled',
    'themes',
    'typography',
    'useTheme',
    'withTheme',
  ],
  '@storybook/manager-api': [
    'ActiveTabs',
    'Consumer',
    'ManagerContext',
    'Provider',
    'addons',
    'combineParameters',
    'eventToShortcut',
    'merge',
    'mockChannel',
    'shortcutMatchesShortcut',
    'shortcutToHumanString',
    'types',
    'useAddonState',
    'useArgTypes',
    'useArgs',
    'useChannel',
    'useGlobalTypes',
    'useGlobals',
    'useParameter',
    'useSharedState',
    'useStoryPrepared',
    'useStorybookApi',
    'useStorybookState',
  ],
  '@storybook/addons': [
    'HooksContext',
    'addons',
    'applyHooks',
    'makeDecorator',
    'mockChannel',
    'types',
    'useArgs',
    'useCallback',
    'useChannel',
    'useEffect',
    'useGlobals',
    'useMemo',
    'useParameter',
    'useReducer',
    'useRef',
    'useState',
    'useStoryContext',
  ],
  '@storybook/client-logger': ['deprecate', 'logger', 'once', 'pretty'],
} as const;
