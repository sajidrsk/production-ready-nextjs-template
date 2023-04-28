import HomePage from "@/pages";
import { initI18n, render } from "@/utils/test-utils";

describe("Home Page", () => {
	it("tests if Home Page is render ", () => {
		initI18n();
		const { getByText } = render(<HomePage />);
		expect(getByText("Welcome and Start your project without worrying the configuration.")).toBeTruthy();
	});
});
