import { ReactNode, createContext, useReducer, useContext, useCallback } from "react"
import { FONT_ALIGNMENT, FONT_COLOR } from "./enum"

type FontState = {
  alignment: keyof typeof FONT_ALIGNMENT
  bold: boolean
  underline: boolean
  italic: boolean
  size: number
  color: keyof typeof FONT_COLOR
}

type FontContextProps = {
  changeAlignment: (alignment: keyof typeof FONT_ALIGNMENT) => void
  changeBold: (bold: boolean) => void
  changeUnderline: (bold: boolean) => void
  changeItalic: (bold: boolean) => void
  changeSize: (size: number) => void
  changeColor: (color: keyof typeof FONT_COLOR) => void
} & FontState

type Props = {
  children: ReactNode
}

const initFontState: FontState = {
  alignment: FONT_ALIGNMENT.LEFT,
  bold: false,
  underline: false,
  italic: false,
  size: 30,
  color: FONT_COLOR.RED,
}

const defaultParam = {
  ...initFontState,
  changeAlignment: () => {},
  changeBold: () => {},
  changeUnderline: () => {},
  changeItalic: () => {},
  changeSize: () => {},
  changeColor: () => {},
}

export const FontContext = createContext<FontContextProps>(defaultParam)

export const FontAction = {
  CHANGE_ALIGNMENT: "CHANGE_ALIGNMENT",
  CHANGE_BOLD: "CHANGE_BOLD",
  CHANGE_UNDERLINE: "CHANGE_UNDERLINE",
  CHANGE_ITALIC: "CHANGE_ITALIC",
  CHANGE_SIZE: "CHANGE_SIZE",
  CHANGE_COLOR: "CHANGE_COLOR",
} as const

export const reducer = (state: FontState, action: any) => {
  switch (action.type) {
    case FontAction.CHANGE_ALIGNMENT: {
      const { alignment } = action.payload
      return {
        ...state,
        alignment,
      }
    }
    case FontAction.CHANGE_BOLD: {
      const { bold } = action.payload
      return {
        ...state,
        bold,
      }
    }
    case FontAction.CHANGE_UNDERLINE: {
      const { underline } = action.payload
      return {
        ...state,
        underline,
      }
    }
    case FontAction.CHANGE_ITALIC: {
      const { italic } = action.payload
      return {
        ...state,
        italic,
      }
    }
    case FontAction.CHANGE_SIZE: {
      const { size } = action.payload
      return {
        ...state,
        size,
      }
    }
    case FontAction.CHANGE_COLOR: {
      const { color } = action.payload
      return {
        ...state,
        color,
      }
    }
    default:
      throw new Error("Ação do reducer não encontrada")
  }
}

export const FontContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initFontState)
  const {
    alignment,
    bold,
    underline,
    italic,
    size,
    color,
  } = state

  const changeAlignment = useCallback((alignment: keyof typeof FONT_ALIGNMENT) => {
    dispatch({
      type: FontAction.CHANGE_ALIGNMENT,
      payload: { alignment },
    })
  }, [])

  const changeBold = useCallback((bold: boolean) => {
    dispatch({
      type: FontAction.CHANGE_BOLD,
      payload: { bold },
    })
  }, [])

  const changeUnderline = useCallback((underline: boolean) => {
    dispatch({
      type: FontAction.CHANGE_UNDERLINE,
      payload: { underline },
    })
  }, [])

  const changeItalic = useCallback((italic: boolean) => {
    dispatch({
      type: FontAction.CHANGE_ITALIC,
      payload: { italic },
    })
  }, [])

  const changeSize = useCallback((size: number) => {
    dispatch({
      type: FontAction.CHANGE_SIZE,
      payload: { size },
    })
  }, [])

  const changeColor = useCallback((color: string) => {
    dispatch({
      type: FontAction.CHANGE_COLOR,
      payload: { color },
    })
  }, [])

  return (
    <FontContext.Provider
      value={{
        alignment,
        changeAlignment,
        bold,
        changeBold,
        underline,
        changeUnderline,
        italic,
        changeItalic,
        size,
        changeSize,
        color,
        changeColor,
      }}
    >
      {children}
    </FontContext.Provider>
  )
}

export const useFontContext = () => useContext(FontContext)
