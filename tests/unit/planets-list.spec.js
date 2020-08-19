import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import List from "@/components/planetas/List.vue";

describe("List", () => {
  it("renders h2 tag", () => {
    const wrapper = shallowMount(List);
    expect(wrapper.find("h2").text()).equal("Planetas");
  });
});
