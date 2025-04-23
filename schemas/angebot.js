export default {
  name: 'angebot',
  type: 'document',
  title: 'Angebot',
  fields: [
    { name: 'firmenname', type: 'string', title: 'Firmenname' },
    { name: 'ort', type: 'string', title: 'Ort' },
    { name: 'crefoScore', type: 'number', title: 'Crefo Score' },
    { name: 'preis', type: 'number', title: 'Preis in €' },
    { name: 'beschreibung', type: 'text', title: 'Beschreibung' },
    { name: 'veroeffentlicht', type: 'boolean', title: 'Veroeffentlicht' }
  ]
};
