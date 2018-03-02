exports.build = function(title, pagetitle, content, tableheader, tablecontent) {  
  return ['<!doctype html>',
  '<html lang="en">',
  '<head>',
  '<meta charset="utf-8">',
  '<link rel="stylesheet" href="/assets/style.css" />',
  '<link rel="stylesheet" href="https://ismdj.scdn5.secure.raxcdn.com/static/libsass/plfpl/dist/css/plfpl.css">',
  '</head>',
  '<body>',
  '<title>{title}</title>',
  '<h1>{pagetitle}</h1>',
  '<div>',
  '<p>{content}</p>',

  '<table class="ism-table">',
  '<thead>{tableheader}</thead>',
  '<tbody>{tablecontent}</tbody>',							
  '</table>',
  '</div>',
  '</body>']
  .join('')
  .replace(/{title}/g, title)
  .replace(/{pagetitle}/g, pagetitle)
  .replace(/{content}/g, content)
  .replace(/{tableheader}/g, tableheader)
  .replace(/{tablecontent}/g, tablecontent);
};