import { shallowMount } from '@vue/test-utils';
import landing from '../pages/landing';
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('landing.vue', () => {
    it('Landing title is dynamic', () => {
        const wrapper = shallowMount(landing);
        // when
        wrapper.setData({ mainMessage: 'test' });
        // then
        const title = wrapper.find('h1');
        expect(title.text()).toContain('test');
    });
    it("Let's go button is wordkin", () => {
        const wrapper = shallowMount(landing);
        wrapper.find('letsgoButton').trigger('click')
    })
});  