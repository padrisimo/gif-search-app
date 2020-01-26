export const getMasonryConfig = masonryConfig =>
  masonryConfig
    .map(c => ({
      columns: c.columns,
      imageWidth: c.imageWidth,
      gutter: c.gutter,
    }))
    .reverse()

export const getMasonryConfigExceptLast = masonryConfig => {
  const returnedMasonryConfig = getMasonryConfig(masonryConfig)

  return returnedMasonryConfig.slice(0, returnedMasonryConfig.length - 1)
}

export const getDefaultMasonryConfig = masonryConfig => {
  const returnedMasonryConfig = getMasonryConfig(masonryConfig)

  return returnedMasonryConfig[returnedMasonryConfig.length - 1]
}

export const getMediaBreakpoints = masonryConfig =>

  masonryConfig
    .map(c => c.mq && `(min-width: ${c.mq})`)
    .filter(i => i != null)
    .reverse()

export const getComponentWrapperWidth = masonryConfig =>
  masonryConfig.imageWidth * masonryConfig.columns +
  masonryConfig.gutter * (masonryConfig.columns - 1)
