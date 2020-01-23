import HomeStore from "./HomeStore";
import data from "../../container/HomeContainer/data.json";

describe("HomeStore", () => {
	it("should handle FETCH_LIST_SUCCESS", () => {
		const store = new HomeStore();
		store.fetchItems(data);
		const expectedArray = [
			"Event 1",
			"Event 2",
			"Event 3",
			"Event 4",
			"Event 5",
			"Event 6",
			"Event 7",
		];
		var actualJSON = JSON.stringify(store.items);
		var expectedJSON = JSON.stringify(expectedArray);
		expect(expectedJSON).toEqual(actualJSON);
	});
});
