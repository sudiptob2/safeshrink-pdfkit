import { expect, test } from '@playwright/test';

test.describe('PageIntro component', () => {
	test('should display correct texts', async ({ page }) => {
		await page.goto('/compress'); // replace with the actual URL where PageIntro is displayed

		const title = await page.textContent('.text-2xl');
		expect(title).toBe('Fast & Efficient PDF');

		const subtitle = await page.textContent('.text-xl.font-semibold');
		expect(subtitle).toBe('Compression');

		const description = await page.textContent('strong.text-tertiary-700');
		expect(description).toContain('PRIVACY.');
	});
});
