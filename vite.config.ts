import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()],

	server: {
		// Set `host: true` if inside GitHub Codespaces to listen on all addresses,
		// see https://vitejs.dev/config/server-options.html#server-host
		host: !!process.env.CODESPACES
	}
});
