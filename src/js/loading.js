import ImagesLoaded from 'imagesloaded'

export default (progress, always) => {
  const il = new ImagesLoaded('main')
  let [loadingState, processCount] = [0, 0]

  il.on('progress', instance => {
    processCount++
    loadingState = processCount / instance.images.length
    progress(loadingState)
  })

  il.on('done', () => always(true))
  il.on('fail', () => always(false))
}
