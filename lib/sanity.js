import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '07w1ymy0',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token:
    'skW9n8ImeOfp4ZI1cFkJs7nUxq9Kaw8BIXxoXXQEu3lCCAuHOeKC1gUnGt3fQvRDS0Pj6LJxtxz9q5aVjXegi53phkm6vDR3VemkwLwur4CPeTntDjs1FomlXuJMQBL4pPOEY5pfzFJpZgm4EztSnHybfwcfISWHHFknJYU4UlY0IJeRxN0P2', // or leave blank for una1uthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})
