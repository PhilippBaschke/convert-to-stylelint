# Conversion table for [scss-lint]
[scss-lint] comes with a **default configuration**. Settings and linters from the default configuration are marked accordingly in the table.

## Settings
Setting (with possible values) | Equivalent in stylelint
------------------------------ | -----------------------
**scss_files**<br>`'**/*.scss'` *default* | -
**exclude**<br>`'app/assets/stylesheets/plugins/**'` | **ignoreFiles**<br>`'app/assets/stylesheets/plugins/**'` or `array`
**plugin_directories**<br>`['.scss-linters']` *default* | **plugin**<br>`array`
**plugin_gems**<br>`[]` *default* | **plugin**<br>`array`
**severity**<br>`warning` *default*<br>`error` | **severity** (per rule)<br>`warning`<br>`error` *default*
**Linters**<br>`object` | **rules**<br>`object`

## Rules
Rule (with possible values) | Equivalent in stylelint
--------------------------- | -----------------------
**[BangFormat]** *enabled*<br>**`space_before_bang`**<br>`true` *default*<br>`false`<br><br>**`space_after_bang`**<br>`true`<br>`false` *default* | **[declaration-bang-space-before] / [declaration-bang-space-after]**<br>**`declaration-bang-space-before`**<br>`always`<br>`never`<br><br>**`declaration-bang-space-after`**<br>`always`<br>`never`
**[BemDepth]** *disabled*<br>**`max_elements`**<br>`number` *default: `1`* | -
**[BorderZero]** *enabled*<br>**`convention`**<br>`zero` *default*<br>`none` | -
**[ChainedClasses]** *disabled* | -
**[ColorKeyword]** *enabled* | **[color-named]** `never`
**[ColorVariable]** *enabled*<br><br> | **[declaration-use-variable]** `color`<br>(Plugin: [stylelint-declaration-use-variable][declaration-use-variable])
**[Comment]** *enabled*<br>**`allowed`**<br>`regex`<br><br>**`style`**<br>`silent` *default*<br>`loud` | -
**[Compass Linters]** *disabled*<br> | -
**[DebugStatement]** *enabled*<br> | -
**[DeclarationOrder]** *enabled*<br> | -
**[DisableLinterReason]** *disabled*<br> | **[stylelint-disable-reason]** `always-before`
**[DuplicateProperty]** *enabled*<br>**`ignore_consecutive`**<br>`false` *default*<br>`array` | **[declaration-block-no-duplicate-properties]**<br>**`ignore`**<br>`(option not set)` *default*<br>`consecutive-duplicates`
**[ElsePlacement]** *enabled*<br>**`style`**<br>`same_line` *default*<br>`new_line` | -
**[EmptyLineBetweenBlocks]** *enabled*<br>**`ignore_single_line_blocks`**<br>`true` *default*<br>`false`<br><br><br><br> | **[rule-nested-empty-line-before]** / **[rule-non-nested-empty-line-before]**<br><br>`always-multi-line`<br>`always`<br><br>**`except`**<br>`first-nested`
**[EmptyRule]** *enabled* | **[block-no-empty]** `true`
**[ExtendDirective]** *disabled*<br> | -
**[FinalNewline]** *enabled*<br>**`present`**<br>`true` *default*<br>`false` | **[no-missing-eof-newline]**<br><br>`true`<br>-
**[HexLength]** *enabled*<br>**`style`**<br>`short` *default*<br>`long` | **[color-hex-length]**<br><br>`short`<br>`long`
**[HexNotation]** *enabled*<br>**`style`**<br>`lowercase` *default*<br>`uppercase` | **[color-hex-case]**<br><br>`lower`<br>`upper`
**[HexValidation]** *enabled*<br> | **[color-no-invalid-hex]** `true`
**[IdSelector]** *enabled* | **[selector-no-id]** `true`
**[ImportantRule]** *enabled* | **[declaration-no-important]** `true`
**[ImportPath]** *enabled*<br>**`leading_underscore`**<br>`true`<br>`false` *default*<br><br>**`filename_extension`**<br>`true`<br>`false` *default* | -
**[Indentation]** *enabled*<br>**`allow_non_nested_indentation`**<br>`true`<br>`false` *default*<br><br>**`character`**<br>`tab`<br>`space` *default*<br><br>**`width`**<br>`number` *default: `2`* | **[indentation][stylelint-indentation]**<br>**`hierarchicalSelectors`**<br>`true`<br>`false`<br><br><br>`tab`<br>`number`<br><br><br>`number`
**[LeadingZero]** *enabled*<br>**`style`**<br>`exlude_zero` *default*<br>`include_zero` | **[number-leading-zero]**<br><br>`never`<br>`always`
**[MergeableSelector]** *enabled*<br>**`force_nesting`**<br>`true` *default*<br>`false`<br><br>**`whitelist`**<br>`array` | **[no-duplicate-selectors]** `true`<br>-<br><br><br><br>-<br><br>
**[NameFormat]** *enabled*<br>**`allow_leading_underscore`**<br>`true` *default*<br>`false`<br><br>**`convention`**<br>`hyphenated_lowercase` *default*<br>`camel_case`<br>`snake_case`<br>`regex`<br><br>**`convention_explanation`**<br>`string`<br><br>**`{type}_convention`**<br>*`see convention`*<br><br>**`{type}_convention_explanation`**<br>*`see convention_explanation`* | -
**[NestingDepth]** *enabled*<br>**`max_depth`**<br>`number` *default `3`*<br><br>**`ignore_parent_selectors`**<br>`true`<br>`false` *default* | **[max-nesting-depth]**<br><br>`number`<br><br>-<br><br><br>
**[PlaceholderInExtend]** *enabled*<br> | -
**[PrivateNamingConvention]** *disabled*<br>**`prefix`**<br>`string` *default `_`* | -
**[PropertyCount]** *disabled*<br>**`include_nested`**<br>`true`<br>`false`<br><br>**`max_properties`**<br>`number` | -
**[PropertySortOrder]** *enabled*<br>**`ignore_unspecified`**<br>`true`<br>`false` *default*<br><br>**`min_properties`**<br>`number` *default `2`*<br><br>**`order`**<br>`array`<br>`array with empty elements`<br>`nil` *default*<br>`concentric`<br>`recess`<br>`smacss`<br><br>**`separate_groups`**<br>`true`<br>`false` | **[declaration-block-properties-order]**<br>**`unspecified`**<br>`ignore`<br>`bottom`<br><br>-<br><br><br><br>`array`<br>`array of objects`<br>`alphabetical`<br>`array of objects` [concentric]<br>`arrray` [recess]<br>`array of objects` [smacss]<br><br>**`emptyLineBefore`**<br>`true`<br>`false`
**[PropertySpelling]** *enabled*<br> **`extra_properties`**<br>`array`<br><br>**`disabled_properties`**<br>`array` | -
**[PropertyUnits]** *enabled*<br>**`global`**<br>`array` *default `[all, units, ...]`*<br><br>**`properties`**<br>`object` *default `{}`* | **[unit-whitelist]** / **[property-unit-whitelist]**<br>**`unit-whitelist`**<br>`array`<br><br>**`property-unit-whitelist`**<br>`object`
**[PseudoElement]** *enabled*<br> | **[selector-pseudo-element-colon-notation]** `double`
**[QualifyingElement]** *enabled*<br>**`allow_element_with_attribute`**<br>`true`<br>`false` *default*<br><br>**`allow_element_with_class`**<br>`true`<br>`false` *default*<br><br>**`allow_element_with_id`**<br>`true`<br>`false` *default* | **[selector-no-qualifying-type]**<br>**`ignore`**<br>`array contains 'attribute'`<br>`array does not contain 'attribute'`<br><br>**`ignore`**<br>`array contains 'class'`<br>`array does not contain 'class'`<br><br>**`ignore`**<br>`array contains 'id'`<br>`array does not contain 'id'`
**[SelectorDepth]** *enabled*<br>**`max_depth`**<br>`number` *default `3`* | -
**[SelectorFormat]** *enabled*<br>**`convention`**<br>`hyphenated_lowercase` *default*<br>`snake_case`<br>`camel_case`<br>`strict_BEM`<br>`hyphenated_BEM`<br>`regex`<br><br>**`convention_explanation`**<br>`string`<br><br>**`ignored_names`**<br>`array`<br><br>**`ignored_types`**<br>`array`<br><br>**`{type}_convention`**<br>*`see convention`*<br><br>**`{type}_convention_explanation`**<br>*`see convention_explanation`* | **[selector-class-pattern]** / **[selector-id-pattern]**<br><br>`/[\-a-z0-9]/`<br>`/[_a-z0-9]/`<br>`/^[a-z][a-zA-Z0-9]*$/`<br>`/^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?((_[a-z0-9]([-]?[a-z0-9]+)*){2})?$/`<br>`/^((?:-{1,2}|_{2})?[a-z0-9]+(?:(?:-{1,2}|_{2})[a-z0-9]+)*)(?:-{1,2}|_{2})?$/`<br>`regex`<br><br>**`message`**<br>`string`<br><br>-<br><br><br><br>only use specific rules (`class` or `id`)<br><br><br>use specific rules (`class` or `id`)<br><br><br>use specific rules (`class` or `id`)
**[Shorthand]** *enabled*<br> **`allowed_shorthands`**<br>`array` *default `[1, 2, 3]`* | **[shorthand-property-no-redundant-values]** `true`<br>-<br><br>
**[SingleLinePerProperty]** *enabled*<br>**`allow_single_line_rule_sets`**<br>`true` *default*<br>`false` | **[declaration-block-semicolon-newline-after]**<br><br>`always-multi-line`<br>`always`
**[SingleLinePerSelector]** *enabled*<br> | **[selector-list-comma-newline-after]** `always`
**[SpaceAfterComma]** *enabled*<br>**`style`**<br>`one_space` *default*<br>`no_space`<br>`at_least_one_space` | **[function-comma-space-after]**<br><br>`always-single-line`<br>`never-single-line`<br>-
**[SpaceAfterPropertyColon]** *enabled*<br>**`style`**<br>`one_space` *default*<br>`no_space`<br>`at_least_one_space`<br>`one_space_or_newline`<br>`aligned`| **[declaration-colon-space-after]**<br><br>`always`<br>`never`<br>-<br>`always-single-line`<br>-
**[SpaceAfterPropertyName]** *enabled*<br> | **[declaration-colon-space-before]** `never`
**[SpaceAfterVariableColon]** *enabled*<br>**`style`**<br>`one_space` *default*<br>`no_space`<br>`at_least_one_space`<br>`one_space_or_newline` | -
**[SpaceAfterVariableName]** *enabled*<br>**`style`**<br>`one_space` *default*<br>`no_space`<br>`at_least_one_space`| -
**[SpaceAroundOperator]** *enabled*<br> | -
**[SpaceBeforeBrace]** *enabled*<br><br>**`allow_single_line_padding`**<br>`true`<br>`false` *default*<br><br>**`style`**<br>`space` *default*<br>`new_line` | **[block-opening-brace-newline-before]** / **[block-opening-brace-space-before]**<br>-<br><br><br><br><br>**block-opening-brace-space-before** `always`<br>**block-opening-brace-newline-before** `always-multi-line`
**[SpaceBetweenParens]** *enabled*<br>**`spaces`**<br>`number` *default `0`* | **[function-parentheses-space-inside]**<br><br>`0 => never` / `>0 => always`
**[StringQuotes]** *enabled*<br> **`style`**<br>`single_quotes` *default*<br>`double_quotes` | **[string-quotes]**<br><br>`single`<br>`double`
**[TrailingSemicolon]** *enabled*<br> | **[declaration-block-trailing-semicolon]** `always`
**[TrailingWhitespace]** *enabled*<br> | **[no-eol-whitespace]** `true`
**[TrailingZero]** *disabled*<br> | **[number-no-trailing-zeros]** `true`
**[TransitionAll]** *disabled*<br> | -
**[UnnecessaryMantissa]** *enabled*<br> | -
**[UnnecessaryParentReference]** *enabled*<br> | -
**[UrlFormat]** *enabled*<br> | -
**[UrlQuotes]** *enabled*<br> | **[function-url-quotes]** `single|double (use value from StringQuotes)`
**[VariableForProperty]** *disabled*<br>**`properties`**<br>`array` | -
**[VendorPrefix]** *enabled*<br><br><br><br><br>**`identifier_list`**<br>`base` *default*<br>`bourbon`<br>`array`<br><br>**`additional_identifiers`**<br>`array` *default `[]`*<br><br>**`excluded_identifiers`**<br>`array` *default `[]`* | **[property-no-vendor-prefix]** `true` / <br> **[selector-no-vendor-prefix]** `true` /<br>**[media-feature-name-no-vendor-prefix]** `true` /<br>**[at-rule-no-vendor-prefix]** `true` /<br>**[value-no-vendor-prefix]** `true`<br>-<br><br><br><br><br>-<br><br><br>-<br><br>
**[ZeroUnit]** *enabled*<br> | **[number-zero-length-no-unit]** `true`

<!-- scss-lint rules -->
[BangFormat]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#bangformat
[BemDepth]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#bemdepth
[BorderZero]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#borderzero
[ChainedClasses]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#chainedclasses
[ColorKeyword]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#colorkeyword
[ColorVariable]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#colorvariable
[Comment]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#comment
[Compass Linters]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#compass-linters
[DebugStatement]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#debugstatement
[DeclarationOrder]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#declarationorder
[DisableLinterReason]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#disablelinterreason
[DuplicateProperty]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#duplicateproperty
[ElsePlacement]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#elseplacement
[EmptyLineBetweenBlocks]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#emptylinebetweenblocks
[EmptyRule]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#emptyrule
[ExtendDirective]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#extenddirective
[FinalNewline]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#finalnewline
[HexLength]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#hexlength
[HexNotation]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#hexnotation
[HexValidation]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#hexvalidation
[IdSelector]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#idselector
[ImportantRule]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#importantrule
[ImportPath]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#importpath
[Indentation]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#indentation
[LeadingZero]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#leadingzero
[MergeableSelector]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#mergeableselector
[NameFormat]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#nameformat
[NestingDepth]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#nestingdepth
[PlaceholderInExtend]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#placeholderinextend
[PrivateNamingConvention]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#privatenamingconvention
[PropertyCount]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#propertycount
[PropertySortOrder]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#propertysortorder
[PropertySpelling]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#propertyspelling
[PropertyUnits]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#propertyunits
[PseudoElement]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#pseudoelement
[QualifyingElement]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#qualifyingelement
[SelectorDepth]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#selectordepth
[SelectorFormat]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#selectorformat
[Shorthand]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#shorthand
[SingleLinePerProperty]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#singlelineperproperty
[SingleLinePerSelector]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#singlelineperselector
[SpaceAfterComma]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#spaceaftercomma
[SpaceAfterPropertyColon]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#spaceafterpropertycolon
[SpaceAfterPropertyName]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#spaceafterpropertyname
[SpaceAfterVariableColon]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#spaceaftervariablecolon
[SpaceAfterVariableName]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#spaceaftervariablename
[SpaceAroundOperator]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#spacearoundoperator
[SpaceBeforeBrace]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#spacebeforebrace
[SpaceBetweenParens]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#spacebetweenparens
[StringQuotes]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#stringquotes
[TrailingSemicolon]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#trailingsemicolon
[TrailingWhitespace]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#trailingwhitespace
[TrailingZero]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#trailingzero
[TransitionAll]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#transitionall
[UnnecessaryMantissa]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#unnecessarymantissa
[UnnecessaryParentReference]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#unnecessaryparentreference
[UrlFormat]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#urlformat
[UrlQuotes]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#urlquotes
[VariableForProperty]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#variableforproperty
[VendorPrefix]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#vendorprefix
[ZeroUnit]: https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md#zerounit

<!-- stylelint rules -->
[declaration-bang-space-before]: https://github.com/stylelint/stylelint/blob/master/src/rules/declaration-bang-space-before/README.md
[declaration-bang-space-after]: https://github.com/stylelint/stylelint/blob/master/src/rules/declaration-bang-space-after/README.md
[color-named]: https://github.com/stylelint/stylelint/blob/master/src/rules/color-named/README.md
[declaration-use-variable]: https://github.com/sh-waqar/stylelint-declaration-use-variable
[stylelint-disable-reason]: https://github.com/stylelint/stylelint/blob/master/src/rules/stylelint-disable-reason/README.md
[declaration-block-no-duplicate-properties]: https://github.com/stylelint/stylelint/blob/master/src/rules/declaration-block-no-duplicate-properties/README.md
[rule-nested-empty-line-before]: https://github.com/stylelint/stylelint/blob/master/src/rules/rule-nested-empty-line-before/README.md
[rule-non-nested-empty-line-before]: https://github.com/stylelint/stylelint/blob/master/src/rules/rule-non-nested-empty-line-before/README.md
[block-no-empty]: https://github.com/stylelint/stylelint/blob/master/src/rules/block-no-empty/README.md
[no-missing-eof-newline]: https://github.com/stylelint/stylelint/blob/master/src/rules/no-missing-eof-newline/README.md
[color-hex-length]: https://github.com/stylelint/stylelint/blob/master/src/rules/color-hex-length/README.md
[color-hex-case]: https://github.com/stylelint/stylelint/blob/master/src/rules/color-hex-case/README.md
[color-no-invalid-hex]: https://github.com/stylelint/stylelint/blob/master/src/rules/color-no-invalid-hex/README.md
[selector-no-id]: https://github.com/stylelint/stylelint/blob/master/src/rules/selector-no-id/README.md
[declaration-no-important]: https://github.com/stylelint/stylelint/blob/master/src/rules/declaration-no-important/README.md
[stylelint-indentation]: https://github.com/stylelint/stylelint/blob/master/src/rules/indentation/README.md
[number-leading-zero]: https://github.com/stylelint/stylelint/blob/master/src/rules/number-leading-zero/README.md
[no-duplicate-selectors]: https://github.com/stylelint/stylelint/blob/master/src/rules/no-duplicate-selectors/README.md
[max-nesting-depth]: https://github.com/stylelint/stylelint/blob/master/src/rules/max-nesting-depth/README.md
[declaration-block-properties-order]: https://github.com/stylelint/stylelint/blob/master/src/rules/declaration-block-properties-order/README.md
[concentric]: https://github.com/brigade/scss-lint/blob/master/data/property-sort-orders/concentric.txt
[recess]: https://github.com/brigade/scss-lint/blob/master/data/property-sort-orders/recess.txt
[smacss]: https://github.com/brigade/scss-lint/blob/master/data/property-sort-orders/smacss.txt
[unit-whitelist]: https://github.com/stylelint/stylelint/blob/master/src/rules/unit-whitelist/README.md
[property-unit-whitelist]: https://github.com/stylelint/stylelint/blob/master/src/rules/property-unit-whitelist/README.md
[selector-pseudo-element-colon-notation]: https://github.com/stylelint/stylelint/blob/master/src/rules/selector-pseudo-element-colon-notation/README.md
[selector-no-qualifying-type]: https://github.com/stylelint/stylelint/blob/master/src/rules/selector-no-qualifying-type/README.md
[selector-class-pattern]: https://github.com/stylelint/stylelint/blob/master/src/rules/selector-class-pattern/README.md
[selector-id-pattern]: https://github.com/stylelint/stylelint/blob/master/src/rules/selector-id-pattern/README.md
[shorthand-property-no-redundant-values]: https://github.com/stylelint/stylelint/blob/master/src/rules/shorthand-property-no-redundant-values/README.md
[declaration-block-semicolon-newline-after]: https://github.com/stylelint/stylelint/blob/master/src/rules/declaration-block-semicolon-newline-after/README.md
[selector-list-comma-newline-after]: https://github.com/stylelint/stylelint/blob/master/src/rules/selector-list-comma-newline-after/README.md
[function-comma-space-after]: https://github.com/stylelint/stylelint/blob/master/src/rules/function-comma-space-after/README.md
[declaration-colon-space-after]: https://github.com/stylelint/stylelint/blob/master/src/rules/declaration-colon-space-after/README.md
[declaration-colon-space-before]: https://github.com/stylelint/stylelint/blob/master/src/rules/declaration-colon-space-before/README.md
[block-opening-brace-space-before]: https://github.com/stylelint/stylelint/blob/master/src/rules/block-opening-brace-space-before/README.md
[block-opening-brace-newline-before]: https://github.com/stylelint/stylelint/blob/master/src/rules/block-opening-brace-newline-before/README.md
[function-parentheses-space-inside]: https://github.com/stylelint/stylelint/blob/master/src/rules/function-parentheses-space-inside/README.md
[string-quotes]: https://github.com/stylelint/stylelint/blob/master/src/rules/string-quotes/README.md
[declaration-block-trailing-semicolon]: https://github.com/stylelint/stylelint/blob/master/src/rules/declaration-block-trailing-semicolon/README.md
[no-eol-whitespace]: https://github.com/stylelint/stylelint/blob/master/src/rules/no-eol-whitespace/README.md
[number-no-trailing-zeros]: https://github.com/stylelint/stylelint/blob/master/src/rules/number-no-trailing-zeros/README.md
[function-url-quotes]: https://github.com/stylelint/stylelint/blob/master/src/rules/function-url-quotes/README.md
[property-no-vendor-prefix]: https://github.com/stylelint/stylelint/blob/master/src/rules/property-no-vendor-prefix/README.md
[selector-no-vendor-prefix]: https://github.com/stylelint/stylelint/blob/master/src/rules/selector-no-vendor-prefix/README.md
[media-feature-name-no-vendor-prefix]: https://github.com/stylelint/stylelint/blob/master/src/rules/media-feature-name-no-vendor-prefix/README.md
[at-rule-no-vendor-prefix]: https://github.com/stylelint/stylelint/blob/master/src/rules/at-rule-no-vendor-prefix/README.md
[value-no-vendor-prefix]: https://github.com/stylelint/stylelint/blob/master/src/rules/value-no-vendor-prefix/README.md
[number-zero-length-no-unit]: https://github.com/stylelint/stylelint/blob/master/src/rules/number-zero-length-no-unit/README.md

<!-- General links -->
[scss-lint]: https://github.com/brigade/scss-lint
