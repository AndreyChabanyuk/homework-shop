export const useVoiceStore = defineStore('voice-store', {
	state: () => ({
		like: 6,
		dislike: 2,
		liked: false,
		disliked: false,
	}),
	actions: {
		toggle(type: 'like' | 'dislike') {
			if (type === 'like') {
				if (this.liked) return
				if (this.disliked) {
					this.disliked = false
					this.dislike--
				}
				this.liked = true
				this.like++
			}

			if (type === 'dislike') {
				if (this.disliked) return
				if (this.liked) {
					this.liked = false
					this.like--
				}
				this.disliked = true
				this.dislike++
			}
		},
	},
})
