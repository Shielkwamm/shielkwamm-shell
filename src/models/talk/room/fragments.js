import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment RoomSimple on Room {
    _id
    name
    slug
  }`
)

registerFragment(`
  fragment RoomBase on Room {
    ...RoomSimple
    createdAt
    level
    maxLevel
    currentExpPoints
    totalExpPoints
    zork
    bwam
    _sh_
    vibe
    currentMusicUrl
    currentMusicTitle
    description
    isActive
    isFeatured
    messageDelay
    areDJMessagesMuted
    areCannonMessagesMuted
  }
`)

registerFragment(`
  fragment RoomsList on Room {
    ...RoomBase
    colorScheme {
      ...ColorSchemeBase
    }
    roomI18ns {
      ...RoomI18nsBase
    }
    roomHandles {
      ...RoomHandlesWithCurrenciesBase
    }
  }
`)

// especial

registerFragment(`
  fragment RoomOperator on Room {
    _id
    roomHandles {
      _id
      handle {
        _id
        name
        inventory
        mood
        connectionStatus
        handleCurrencies {
          _id
          mood
          amount
          note
          currency {
            glyph
          }
        }
      }
    }
    roomI18ns {
      _id
      i18n {
        _id
        glyphSet
      }
    }
  }
`)