import type { JSONSchema7Reference } from 'json-schema-to-ts';

export const packedAntennaSchema = {
	$id: '/schemas/Antenna',

	type: 'object',
	properties: {
		id: {
			type: 'string',
			format: 'id',
		},
		createdAt: {
			type: 'string',
			format: 'date-time',
		},
		name: {
			type: 'string',
		},
		keywords: {
			type: 'array',
			items: {
				type: 'array',
				items: {
					type: 'string',
				},
			},
		},
		excludeKeywords: {
			type: 'array',
			items: {
				type: 'array',
				items: {
					type: 'string',
				},
			},
		},
		src: {
			type: 'string',
			enum: ['home', 'all', 'users', 'list'],
		},
		userListId: {
			oneOf: [{
				type: 'string',
				format: 'id',
			}, {
				type: 'null',
			}],
		},
		users: {
			type: 'array',
			items: {
				type: 'string',
			},
		},
		caseSensitive: {
			type: 'boolean',
			default: false,
		},
		notify: {
			type: 'boolean',
		},
		withReplies: {
			type: 'boolean',
			default: false,
		},
		withFile: {
			type: 'boolean',
		},
		isActive: {
			type: 'boolean',
		},
		hasUnreadNote: {
			type: 'boolean',
			default: false,
		},
	},
	required: [
		'id',
		'createdAt',
		'name',
		'keywords',
		'excludeKeywords',
		'src',
		'userListId',
		'users',
		'caseSensitive',
		'notify',
		'withReplies',
		'withFile',
		'isActive',
		'hasUnreadNote',
	],
} as const satisfies JSONSchema7Reference;
