import { SiteClient} from 'datocms-client';

export default async function requestReceiver(request, response) {

  if(request.method === 'POST') {
    const TOKEN = 'a231c3150403a16173380d83a198c3';
    const client = new SiteClient(TOKEN);
  
    const record = await client.items.create({
      itemType: "971978",
      ...request.body,
      //title: "Comunidade de Teste",
      //imageUrl: "https://github.com/guilhermewatanabe.png",
      //creatorSlug: "guilhermewatanabe"
    });
  
    response.json({
      dados: 'Qualquer coisa',
      record: record
    });
  }
}