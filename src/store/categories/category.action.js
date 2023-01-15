import { CATEGORY_ACTION_TYPES } from './category.types'

export const setCategories = (categories) => {
  return { type: CATEGORY_ACTION_TYPES.SET_CATEGORIES, payload: categories }
}