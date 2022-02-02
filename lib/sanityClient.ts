import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'qnopyj7a',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skRnJ7UtQGlyUmPZfRU4kpJ8htFRN5HOJN520RMS1TUf8XfXgFbRxWcOnmQAiZeRoh2fUPfVVhMJKrpWKLgXguQ6xxQezGmmFSUk8x1K4RDSOHmE34HmnSAZPz6N5Orbcmjbx9FPnK0KjsDRozFM8k7qiZAAIa3LEsp5QgX2Q75bHGx4EK6I',
  useCdn: false,
})
