import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: "i745u79y",
    dataset: 'production',
    apiVersion: '2022-05-07',
    useCdn: true,
    token: "sk1bGbcbIDHtTVxY2fAxkx1FPkUIzpwbczNvFGAGDL4S2loYVSOpkjirXrn45V98sofjx2ANXCzMqq5Glwz8eQ253q5eJGJHLUX9HgJaBEEBjqkNzMejJXKvrMo7yz1arXrmmSq5Qu63YBVMSNYmL0boGIs2GWpoztIukuYSc2EWfghbVhzQ",
});

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)