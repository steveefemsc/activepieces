import {
  Property,
  createAction,
} from '@activepieces/pieces-framework';

export const replace = createAction({
  description: 'Replaces all instances of any word, character or phrase in text, with another word, character or phrase.',
  displayName: 'Replace',
  name: 'replace',
  props: {
    text: Property.ShortText({
      displayName: 'Text',
      required: true,
    }),
    searchValue: Property.ShortText({
      displayName: 'Search Value',
      description: 'Can be regex expression or plain text.',
      required: true,
      validators: [],
    }),
    replaceValue: Property.ShortText({
      displayName: 'Replace Value',
      required: true
    }),
  },
  run: async (ctx) => {
    const expression = RegExp(ctx.propsValue.searchValue);
    return ctx.propsValue.text.replaceAll(
      expression,
      ctx.propsValue.replaceValue || ''
    );
  },
});
