export interface Channel {
  id: string
  title: string
  description: string
  channelName: string
  channelDescription: string
  profilePath?: string
  bannerPath?: string
  joinedDate: string
  collectionType: string
  mainPlaylist?: string
  longVideosPlaylist?:string
  shortsPlaylist?:string
  livesPlaylist?:string
  playlistCount: number
}

export interface Config {
  mainColor: string
  secondaryColor: string
}

export interface Author {
  channelId: string
  channelTitle: string
  channelDescription: string
  channelJoinedDate: string
  profilePath?: string
  bannerPath?: string
}

export enum CollectionType {
  Playlist = 'playlist',
  Video = 'video',
  Channel = 'channel'
}
