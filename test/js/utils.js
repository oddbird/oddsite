import chaiJquery from 'chai-jquery';

chai.use(chaiJquery);

afterEach(function() {
  sinon.restore();
});

chai.use(_chai => {
  const { Assertion } = _chai;

  Assertion.addMethod('containRequest', function(method, url) {
    const obj = this._obj;

    let found = false;
    for (const req of obj) {
      if (req.url === url && req.method === method) {
        found = true;
        break;
      }
    }
    this.assert(
      found,
      `no ${method} to ${url} found`,
      `expected ${method} to ${url} not to exist`,
    );
  });
});
