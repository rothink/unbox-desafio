import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import List from "@/components/planetas/List";

describe("List", () => {
  it("renders h2 tag", () => {
    const wrapper = shallowMount(List);
    expect(wrapper.find("#title").value).equal("Planetas");
  });
});
