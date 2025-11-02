import { ref, onMounted } from 'vue'

export function useVideoBanner(videos: string[], intervalMs = 2000) {
  const currentVideo = ref(videos[0])
  let index = 0

  onMounted(() => {
    setInterval(() => {
      index = (index + 1) % videos.length
      currentVideo.value = videos[index]
    }, intervalMs)
  })

  return { currentVideo }
}
// this shit took way too long to make ngl