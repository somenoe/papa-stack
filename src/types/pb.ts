/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Productions = "productions",
	Test = "test",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum ProductionsTypeOptions {
	"ขาว" = "ขาว",
	"ไข่" = "ไข่",
	"ก้าม" = "ก้าม",
	"กุลาดำ" = "กุลาดำ",
	"ปลา" = "ปลา",
	"หมึก" = "หมึก",
}
export type ProductionsRecord = {
	amount?: number
	image?: string
	size?: string
	type?: ProductionsTypeOptions
}

export type TestRecord<Tfield3 = unknown> = {
	field1?: IsoDateString
	field2?: RecordIdString
	field3?: null | Tfield3
	field?: boolean
}

export enum UsersRoleOptions {
	"owner" = "owner",
	"manager" = "manager",
	"seller" = "seller",
	"operater" = "operater",
}
export type UsersRecord = {
	avatar?: string
	name?: string
	role?: UsersRoleOptions[]
}

// Response types include system fields and match responses from the PocketBase API
export type ProductionsResponse<Texpand = unknown> = Required<ProductionsRecord> & BaseSystemFields<Texpand>
export type TestResponse<Tfield3 = unknown, Texpand = unknown> = Required<TestRecord<Tfield3>> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	productions: ProductionsRecord
	test: TestRecord
	users: UsersRecord
}

export type CollectionResponses = {
	productions: ProductionsResponse
	test: TestResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'productions'): RecordService<ProductionsResponse>
	collection(idOrName: 'test'): RecordService<TestResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
