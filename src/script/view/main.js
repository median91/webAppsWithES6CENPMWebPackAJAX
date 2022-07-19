import '../component/c-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const cListElement = document.querySelector("c-list");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchc(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult =  results => {
        cListElement.cs = results;
    };

    const fallbackResult = message => {
        cListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
