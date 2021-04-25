export class RemoteConnector {
  _url = 'https://graphqlzero.almansi.me/api';

  _getRandomId = () => {
    return Math.ceil(Math.random() * 10);
  };

  getUser = async () => {
    const result = await fetch(this._url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        query: `{
          user(id: ${this._getRandomId()}) {
            id
            name
            email
            address {
              geo {
                lat
                lng
              }
            }
          }
        }`
      }),
    });

    if (!result.ok) {
      const error = await result.json();
      throw new Error(error.error.message);
    }

    return await result.json();
  };
}
