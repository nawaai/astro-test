.DEFAULT_GOAL := help

help:
	@echo "Available targets:"
	@echo "  build   - Build the project using Astro"
	@echo "  preview - Preview the built project"
	@echo "  dev     - Start the development server"
	@echo "  help    - Show this help message"

build:
	bunx --bun astro build

preview: build
	bunx --bun astro preview

dev:
	bunx --bun astro dev
