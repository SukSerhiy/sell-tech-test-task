import { GroupsEntities } from '../../generated/graphql'

export interface Props {}

export type Entity = Exclude<GroupsEntities, GroupsEntities.Member>
