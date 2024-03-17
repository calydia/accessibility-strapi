const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = {
  async beforeUpdate(event) {
    const result = event.params.data;
    if (result) {
      const dom = new JSDOM(result.content);
      const doc = dom.window.document;

      // find all header tags in the document
      const headers = doc.querySelectorAll("h2, h3, h4");

      // table of contents list
      let toc = `<ul>`

      // max header node h6
      let lastNode = 6
      let childNode = false;

      const id = event.params.where.id;
      const locale = await getBeforeUpdateLocale(id);

      headers.forEach((header, index) => {
        // get current header node number i.e 1,2,...,6
        let currentNode = parseInt(header.nodeName.at(-1))

        let text = header.textContent
        .replace(/\s/g, "-")
        .replace(/[^A-Za-z-]/g, "")
        .toLowerCase();

        if (currentNode > lastNode || (currentNode == lastNode && childNode)) {
          toc = childNode ? toc : toc + "<li><ul>";
          toc += `<li><a href="#${text}">${header.textContent}</a></li>`;
          childNode = true;
        } else {
          toc = childNode ? toc + "</ul>" : toc;
          toc += `<li><a href="#${text}">${header.textContent}</a></li>`;
          childNode = false;
        }

        lastNode = currentNode;
        header.setAttribute("id", text);
      });

      // update content with updated headers
      event.params.data.content = dom.serialize();

      // assign generated toc to the field
      event.params.data.toc = toc += "</ul>"
    };
  },
};

async function getBeforeUpdateLocale(id) {
  const page = await strapi.service('api::page.page').findOne(id);

  if (page === null) {
    return null;
  }

  return page.locale;
}
