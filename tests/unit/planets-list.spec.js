import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import List from "@/components/planetas/List.vue";

describe("List.vue", () => {
  it("test title not be null", () => {
    const wrapper = shallowMount(List);
    expect(wrapper.find("#title")).to.not.be.null;
  });
  it("test exists h2", async () => {
    const wrapper = await shallowMount(List);
    expect(wrapper.find("h2")).to.not.be.null;
  });
  it("test h2 contains word planets", async () => {
    const wrapper = shallowMount(List);
    const h2 = wrapper.find("h2");
    expect(h2.text()).equal("Planetas");
  });
});
