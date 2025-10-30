import osAvatar from '../assets/avatars/os.webp'
import bensAvatar from '../assets/avatars/bens.webp'
import droAvatar from '../assets/avatars/dro.webp'
import terrorAvatar from '../assets/avatars/terror.webp'

export const PlayerKey = {
  OS: 'os',
  BENS: 'bens',
  DRO: 'dro',
  TERROR: 'terror',
} as const

export type PlayerId = typeof PlayerKey[keyof typeof PlayerKey]

export type Socials = {
  tiktok?: string
  youtube?: string
  discord?: string
}

export interface PlayerProfile {
  id: PlayerId
  name: string
  role: string
  description?: string
  socials?: Socials
  avatar: string
}

export const players: Record<PlayerId, PlayerProfile> = {
  [PlayerKey.OS]: {
    id: PlayerKey.OS,
    name: 'os',
    role: 'Trickliner',
    description: 'Convinced he looks like nettspend',
    socials: {
      youtube: 'https://www.youtube.com/@os_uk',
      tiktok: 'https://www.tiktok.com/@os_ukk',
    },
    avatar: osAvatar,
  },
  [PlayerKey.BENS]: {
    id: PlayerKey.BENS,
    name: 'BenS',
    role: 'Trickliner',
    description: 'Ragebait victim',
    socials: {
      tiktok: 'https://www.tiktok.com/@bens',
    },
    avatar: bensAvatar,
  },
  [PlayerKey.DRO]: {
    id: PlayerKey.DRO,
    name: 'Dro',
    role: 'Trickliner',
    description: 'Finally bought a PC',
    socials: {
      tiktok: 'https://www.tiktok.com/@dro',
    },
    avatar: droAvatar,
  },
  [PlayerKey.TERROR]: {
    id: PlayerKey.TERROR,
    name: 'Terror',
    role: 'Trickliner',
    description: 'The genius behind the \'Terror Slide\'',
    socials: {
      tiktok: 'https://www.tiktok.com/@terror'
    },
    avatar: terrorAvatar,
  },
}

export default players
