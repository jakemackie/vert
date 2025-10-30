import osAvatar from '../assets/avatars/os.webp'
import bensAvatar from '../assets/avatars/bens.webp'
import droAvatar from '../assets/avatars/dro.webp'
import terrorAvatar from '../assets/avatars/terror.webp'
import uncAvatar from '../assets/avatars/unc.webp'
import sireAvatar from '../assets/avatars/sire.webp'
import pavementAvatar from '../assets/avatars/pavement.webp'
import cloudyboiAvatar from '../assets/avatars/cloudyboi.webp'
import stainAvatar from '../assets/avatars/stain.webp'
import slitAvatar from '../assets/avatars/slit.webp'
import dj4yAvatar from '../assets/avatars/dj4y.webp'

export const PlayerKey = {
  OS: 'os',
  BENS: 'bens',
  DRO: 'dro',
  TERROR: 'terror',
  UNC: 'unc',
  SIRE: 'sire',
  PAVEMENT: 'pavement',
  CLOUDYBOI: 'cloudyboi',
  STAIN: 'stain',
  SLIT: 'slit',
  DJ: 'dj4y',
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
  [PlayerKey.UNC]: {
    id: PlayerKey.UNC,
    name: 'Uncle Drew',
    role: 'Trickliner / Uncle',
    description: 'If you\'re gonna hit a clip, hit the whole clip, and don\'t fall at the end',
    socials: {
      tiktok: 'https://www.tiktok.com/@skate.unc'
    },
    avatar: uncAvatar
  },
  [PlayerKey.SIRE]: {
    id: PlayerKey.SIRE,
    name: 'sire',
    role: 'Swaggiest Trickliner',
    description: 'you all suck',
    socials: {
      tiktok: 'https://www.tiktok.com/@.siree'
    },
    avatar: sireAvatar
  },
  [PlayerKey.PAVEMENT]: {
    id: PlayerKey.PAVEMENT,
    name: 'Pavement',
    role: 'Trickliner',
    description: 'I really like skate.',
    socials: {
      tiktok: 'https://www.tiktok.com/@.riddance'
    },
    avatar: pavementAvatar
  },
  [PlayerKey.CLOUDYBOI]: {
    id: 'cloudyboi',
    name: 'Cloudy',
    role: 'Trickliner',
    description: 'console gamer',
    socials: {
      tiktok: 'https://www.tiktok.com/@cloudyboi'
    },
    avatar: cloudyboiAvatar
  },
  [PlayerKey.STAIN]: {
    id: 'stain',
    name: 'stain',
    role: 'Trickliner',
    description: 'I just rap ngl',
    socials: {
      tiktok: 'https://www.tiktok.com/@stain5990'
    },
    avatar: stainAvatar
  },
  [PlayerKey.SLIT]: {
    id: 'slit',
    name: 'Slit',
    role: 'Trickliner',
    description: 'Im better',
    socials: {
      tiktok: 'https://www.tiktok.com/@x7slit'
    },
    avatar: slitAvatar
  },
  [PlayerKey.DJ]: {
    id: 'dj4y',
    name: 'dj4y',
    role: 'Trickliner',
    description: 'Store clips are banned',
    socials: {
      tiktok: 'https://www.tiktok.com/@dj4y'
    },
    avatar: dj4yAvatar
  }
}

export default players
