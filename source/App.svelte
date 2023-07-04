<script lang="ts">
	import {
		bold,
		italicize,
		underline,
		bulletize,
		wrapUrl,
	} from "./utilities/text";

	const titleFormat = {
		bold: true,
		italics: false,
		underline: false,
	};

	let bulletType = "•";
	let titleInput: HTMLInputElement = null!;
	let contentTextArea: HTMLTextAreaElement = null!;
	let resultTextArea: HTMLTextAreaElement = null!;

	function formatAndCopy(): void {
		let result = "";
		let contentValue = contentTextArea.value.trim();
		const titleValue = titleInput.value.trim();

		if (titleValue !== "") result = formatTitle(titleValue);

		if (contentValue !== "") {
			contentValue = wrapUrl(contentValue);
			result += `\n${bulletize(contentValue, bulletType)}`;
		}

		copyTextToClipboard(result.trimStart());
	}

	function clear(): void {
		titleInput.value = "";
		contentTextArea.value = "";
		resultTextArea.value = "";
	}

	function formatTitle(text: string): string {
		if (titleFormat.bold) text = bold(text);
		if (titleFormat.italics) text = italicize(text);
		if (titleFormat.underline) text = underline(text);

		return text;
	}

	function copyTextToClipboard(text: string): void {
		resultTextArea.value = text;
		resultTextArea.select();
		window.navigator.clipboard.writeText(text);
	}
</script>

<!-- ========================== CONTENT ========================== -->
<h1>Bulletizer for Discord</h1>

<details>
	<summary class="white-space-nowrap">
		<h2>Configuration</h2>
	</summary>

	<div class="configurations">
		<section>
			<h3>Title</h3>
			<label class="white-space-nowrap">
				<input
					bind:checked={titleFormat.bold}
					type="checkbox"
					name="bold"
				/>
				Bold
			</label>
			<label class="white-space-nowrap">
				<input
					bind:checked={titleFormat.italics}
					type="checkbox"
					name="italics"
				/>
				Italics
			</label>
			<label class="white-space-nowrap">
				<input
					bind:checked={titleFormat.underline}
					type="checkbox"
					name="underline"
				/>
				Underline
			</label>
		</section>

		<section>
			<h3>Content</h3>
			<label class="white-space-nowrap">
				Bullet
				<select bind:value={bulletType} class="select bullet-select">
					<option>•</option>
					<option>❯</option>
					<option>»</option>
				</select>
			</label>
		</section>
	</div>
</details>

<main class="display-flex">
	<section class="input-section">
		<h2>Input</h2>
		<div class="display-flex">
			<input
				bind:this={titleInput}
				type="text"
				class="text-input"
				placeholder="Title"
				autocomplete="off"
			/>
			<textarea
				bind:this={contentTextArea}
				class="text-input"
				placeholder="Content"
				rows="5"
			/>
			<div class="input-section-buttons display-flex">
				<button class="button" on:click={formatAndCopy}>
					Format & Copy
				</button>
				<button class="button" on:click={clear}>Clear</button>
			</div>
		</div>
	</section>

	<section class="output-section display-flex">
		<h2>Output</h2>
		<textarea bind:this={resultTextArea} class="text-input" rows="5" />
	</section>
</main>

<footer>Copyright © 2020-2023 Shane4368</footer>

<!-- ========================== STYLE ========================== -->
<style>
	summary h2 {
		display: inline-block;
		margin: 0;
	}

	.configurations .bullet-select {
		padding: 0;
	}

	main.display-flex {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	main > section {
		flex: 1 1 300px;
	}

	main input[type="text"] {
		display: block;
		width: 100%;
		box-sizing: border-box;
	}

	main textarea {
		display: block;
		width: 100%;
		min-height: 100px;
		resize: vertical;
		box-sizing: border-box;
	}

	main .input-section > .display-flex {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	main .input-section-buttons.display-flex {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	main .output-section.display-flex {
		display: flex;
		flex-direction: column;
	}

	main .output-section textarea {
		flex-grow: 1;
	}

	.white-space-nowrap {
		white-space: nowrap;
	}
</style>
