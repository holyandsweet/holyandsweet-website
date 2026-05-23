import { type SchemaTypeDefinition } from 'sanity'
import kidsSeries from './kidsSeries'
import heroSlide from './heroSlide' // 1. Import it here

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [kidsSeries, heroSlide], // 2. Add it to the array
}
