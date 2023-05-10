import { IdSchema } from './schemas/id.js';
import {
	packedUserLiteSchema,
	packedUserDetailedNotMeOnlySchema,
	packedMeDetailedOnlySchema,
	packedUserDetailedNotMeSchema,
	packedMeDetailedSchema,
	packedUserDetailedSchema,
	packedUserSchema,
} from './schemas/user.js';
import { packedNoteSchema } from './schemas/note.js';
import { packedUserListSchema } from './schemas/user-list.js';
import { packedAppSchema } from './schemas/app.js';
import { packedNotificationSchema } from './schemas/notification.js';
import { packedDriveFileSchema } from './schemas/drive-file.js';
import { packedDriveFolderSchema } from './schemas/drive-folder.js';
import { packedFollowingSchema } from './schemas/following.js';
import { packedMutingSchema } from './schemas/muting.js';
import { packedRenoteMutingSchema } from './schemas/renote-muting.js';
import { packedBlockingSchema } from './schemas/blocking.js';
import { packedNoteReactionSchema } from './schemas/note-reaction.js';
import { packedHashtagSchema } from './schemas/hashtag.js';
import { packedPageSchema } from './schemas/page.js';
import { packedNoteFavoriteSchema } from './schemas/note-favorite.js';
import { packedChannelSchema } from './schemas/channel.js';
import { packedAntennaSchema } from './schemas/antenna.js';
import { packedClipSchema } from './schemas/clip.js';
import { packedFederationInstanceSchema } from './schemas/federation-instance.js';
import { packedQueueCountSchema } from './schemas/queue.js';
import { packedGalleryPostSchema } from './schemas/gallery-post.js';
import { packedEmojiDetailedSchema, packedEmojiSimpleSchema } from './schemas/emoji.js';
import { packedFlashSchema } from './schemas/flash.js';
import type { JSONSchema7, JSONSchema7Definition, GetDef, GetRefs, GetKeys, UnionToArray } from 'schema-type';

export const refs = {
	UserLite: packedUserLiteSchema,
	UserDetailedNotMeOnly: packedUserDetailedNotMeOnlySchema,
	MeDetailedOnly: packedMeDetailedOnlySchema,
	UserDetailedNotMe: packedUserDetailedNotMeSchema,
	MeDetailed: packedMeDetailedSchema,
	UserDetailed: packedUserDetailedSchema,
	User: packedUserSchema,

	UserList: packedUserListSchema,
	App: packedAppSchema,
	Note: packedNoteSchema,
	NoteReaction: packedNoteReactionSchema,
	NoteFavorite: packedNoteFavoriteSchema,
	Notification: packedNotificationSchema,
	DriveFile: packedDriveFileSchema,
	DriveFolder: packedDriveFolderSchema,
	Following: packedFollowingSchema,
	Muting: packedMutingSchema,
	RenoteMuting: packedRenoteMutingSchema,
	Blocking: packedBlockingSchema,
	Hashtag: packedHashtagSchema,
	Page: packedPageSchema,
	Channel: packedChannelSchema,
	QueueCount: packedQueueCountSchema,
	Antenna: packedAntennaSchema,
	Clip: packedClipSchema,
	FederationInstance: packedFederationInstanceSchema,
	GalleryPost: packedGalleryPostSchema,
	EmojiSimple: packedEmojiSimpleSchema,
	EmojiDetailed: packedEmojiDetailedSchema,
	Flash: packedFlashSchema,
} as const satisfies { [x: string]: JSONSchema7Definition };

type Refs = typeof refs[keyof typeof refs];

export type References = [
    typeof IdSchema,
    ...UnionToArray<Refs>,
];

export type Packed<x extends GetKeys<References, 'https://misskey-hub.net/api/schemas/'>> = GetDef<References, x, 'https://misskey-hub.net/api/schemas/'>;
export type Def<x extends GetKeys<References>> = GetDef<References, x>;

export type PackedNote = Packed<'Note'>;
export type PackedUser = Packed<'User'>;
export type DefNote = Def<'https://misskey-hub.net/api/schemas/Note'>;
let renote: PackedNote['reply'];