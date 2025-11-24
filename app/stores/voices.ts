import type { GetPostsData } from '~/interfaces/posts.interface'

export const useVoiceStore = defineStore('voice-store', {
	state: () => ({
		posts: [] as GetPostsData['posts'],
		likesState: {} as Record<number, {liked: boolean, disliked: boolean}>,
	}),
	actions: {
		async fetchVoice(postId: number, voice: string) {
			const config = useRuntimeConfig()
			let data;
			if (voice === 'like') {
				
				data = await $fetch(
					`${config.public.postsurl}/posts/${postId}/like`
					,{
						method: 'POST',
						
					}
				)
			} else if (voice === 'dislike') {
				data = await $fetch(
					`${config.public.postsurl}/posts/${postId}/dislike`,
					{
						method: 'POST',
					}
				)
			
			}
			const updatedPost = data.posts || data
			this.posts = this.posts.map(p => (p.id === postId ? updatedPost : p))
		},
		async fetch() {
			const config = useRuntimeConfig()
			try {
				const  data  = await $fetch<GetPostsData>(
					`${config.public.postsurl}/posts`
				)
				this.posts = data.posts
			} catch (error) {
				console.log(error)
			}
		},
		async toggle(postId: number, type: 'like' | 'dislike') {
			if(!this.likesState[postId]){
				this.likesState[postId] = {liked: false, disliked: false}
			}
			const state = this.likesState[postId]
			if (type === 'like') {
				if (state.liked) return
				if (state.disliked) {
					return
				}
				state.liked = true
				await this.fetchVoice(postId, 'like')
			}

			if (type === 'dislike') {
				if (state.disliked) return
				if (state.liked) {
					return
				}
				state.disliked = true
				await this.fetchVoice(postId, 'dislike')
			}
		},
	},
})
